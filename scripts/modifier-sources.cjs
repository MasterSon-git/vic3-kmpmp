// Read game data or Git blobs without checking out or modifying a reference tree.
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const intentFile = 'scripts/modifier-intent.json';
const split = buffer => buffer.toString('utf8').split('\0').filter(Boolean);
const git = (cwd, args, input) => execFileSync('git', ['-C', cwd, ...args], {
    input, maxBuffer: 128 * 1024 * 1024, stdio: ['pipe', 'pipe', 'pipe'],
});

function diskFiles(directory, databases) {
    const files = new Map();
    function visit(relative) {
        for (const entry of fs.readdirSync(path.join(directory, relative), { withFileTypes: true })) {
            const name = relative + '/' + entry.name;
            if (entry.isDirectory()) visit(name);
            else if (entry.name.endsWith('.txt')) files.set(name, fs.readFileSync(path.join(directory, name), 'utf8'));
        }
    }
    for (const db of databases) {
        if (fs.existsSync(path.join(directory, 'common', db))) visit('common/' + db);
    }
    return files;
}

function snapshot(directory, revision, databases, mod = false) {
    const roots = mod ? ['src'] : ['', 'src/game', 'game'];
    if (revision === 'WORKTREE') {
        const root = roots.find(prefix => fs.existsSync(path.join(directory, prefix, 'common')));
        if (root === undefined) throw new Error('Missing common directory under ' + directory);
        const file = path.join(directory, intentFile);
        const intents = mod && fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : {};
        return { files: diskFiles(path.join(directory, root), databases), intents };
    }

    const commit = git(directory, ['rev-parse', '--verify', '--end-of-options', revision + '^{commit}']).toString().trim();
    const prefix = roots.map(root => root ? root + '/' : '').find(root =>
        git(directory, ['ls-tree', commit, root + 'common']).length);
    if (prefix === undefined) throw new Error('Missing common tree in ' + directory + ' at ' + revision);
    const paths = databases.map(db => prefix + 'common/' + db);
    if (mod) paths.push(intentFile);
    const entries = split(git(directory, ['ls-tree', '-rz', commit, '--', ...paths])).map(line => {
        const [header, name] = line.split('\t');
        return { hash: header.split(' ')[2], name };
    }).filter(entry => entry.name.endsWith('.txt') || entry.name === intentFile);
    const files = new Map();
    let intents = {};
    if (entries.length) {
        // Batch reads avoid starting one process per file on Windows. Sizes are bytes.
        const blobs = git(directory, ['cat-file', '--batch'], entries.map(entry => entry.hash).join('\n') + '\n');
        let offset = 0;
        for (const { hash, name } of entries) {
            const end = blobs.indexOf(10, offset);
            const [id, type, size] = blobs.toString('ascii', offset, end).split(' ');
            if (id !== hash || type !== 'blob') throw new Error('Unreadable Git blob for ' + name);
            const next = end + 1 + Number(size);
            const source = blobs.toString('utf8', end + 1, next);
            if (name === intentFile) intents = JSON.parse(source);
            else files.set(name.slice(prefix.length), source);
            offset = next + 1;
        }
    }
    return { files, intents };
}

module.exports = { snapshot };
