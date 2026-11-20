const assert = require('node:assert/strict');

// Tokens retain offsets so quoted strings and comments cannot masquerade as code.
function tokens(source) {
    const pattern = /#[^\r\n]*|"(?:\\.|[^"\\])*"|[{}]|[=<>!?]+|[^\s{}=<>!?#"\uFEFF]+/g;
    return [...source.matchAll(pattern)].filter(match => !match[0].startsWith('#'))
        .map(match => ({ value: match[0], offset: match.index }));
}
function parse(source) {
    const input = tokens(source);
    let position = 0;
    function block(nested = false) {
        const entries = [];
        while (position < input.length) {
            const token = input[position++];
            if (token.value === '}') {
                assert(nested, `Unexpected closing brace at ${token.offset}`);
                return entries;
            }
            if (token.value === '{') {
                entries.push({ key: '', children: block(true) });
                continue;
            }
            const node = { key: token.value };
            if (/^[=<>!?]+$/.test(input[position]?.value || '')) {
                node.operator = input[position++].value;
                const value = input[position++];
                assert(value, `Missing value for ${node.key}`);
                node.value = value.value;
                if (node.value === '{') node.children = block(true);
            }
            entries.push(node);
        }
        assert(!nested, 'Unclosed block');
        return entries;
    }
    return block();
}

module.exports = { tokens, parse };
