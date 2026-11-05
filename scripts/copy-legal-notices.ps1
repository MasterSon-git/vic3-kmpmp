param(
    [Parameter(Mandatory = $true)]
    [string]$Destination
)

$ErrorActionPreference = 'Stop'
$repositoryRoot = Split-Path -Parent $PSScriptRoot
if (-not (Test-Path -LiteralPath $Destination -PathType Container)) {
    throw "The assembled mod directory does not exist: $Destination"
}

$requiredFiles = @(
    'LICENSE.md',
    'THIRD_PARTY_NOTICES.md',
    'LICENSES\0BSD.txt',
    'LICENSES\CC0-1.0.txt',
    'LICENSES\third-party\Forts-and-Engineers-MIT.txt',
    'LICENSES\third-party\Gas-Guns-Garb-and-Grub-MIT.txt',
    'LICENSES\third-party\Anbeeld-Stockpile-Economy-MIT.txt'
)
foreach ($notice in $requiredFiles) {
    $source = Join-Path $repositoryRoot $notice
    if (-not (Test-Path -LiteralPath $source -PathType Leaf)) {
        throw "Required licensing input is missing: $source"
    }
}

Copy-Item -LiteralPath (Join-Path $repositoryRoot 'LICENSE.md') -Destination $Destination -Force
Copy-Item -LiteralPath (Join-Path $repositoryRoot 'THIRD_PARTY_NOTICES.md') -Destination $Destination -Force
Copy-Item -LiteralPath (Join-Path $repositoryRoot 'LICENSES') -Destination $Destination -Recurse -Force
