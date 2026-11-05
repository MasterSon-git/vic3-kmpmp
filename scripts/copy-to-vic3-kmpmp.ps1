param(
    [string]$Destination = "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kmpmp"
)

$ErrorActionPreference = 'Stop'
$source = Join-Path $PSScriptRoot '..\src'
robocopy $source $Destination /MIR /XF thumbnail* /XD .metadata
if ($LASTEXITCODE -ge 8) { throw "Mod copy failed (robocopy $LASTEXITCODE)." }
New-Item (Join-Path $Destination '.metadata') -Type directory -Force | Out-Null
Copy-Item (Join-Path $source '.metadata\metadata_kmpmp.json') -Destination (Join-Path $Destination '.metadata\metadata.json') -Force
Copy-Item (Join-Path $source 'thumbnail_kmpmp.png') -Destination (Join-Path $Destination 'thumbnail.png') -Force
& (Join-Path $PSScriptRoot 'copy-legal-notices.ps1') -Destination $Destination
