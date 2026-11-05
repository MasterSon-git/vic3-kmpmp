param(
    [string]$Destination = "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kspmp"
)

$ErrorActionPreference = 'Stop'
$source = Join-Path $PSScriptRoot '..\src'
robocopy $source $Destination /MIR /XF thumbnail* /XD .metadata defines map
if ($LASTEXITCODE -ge 8) { throw "Mod copy failed (robocopy $LASTEXITCODE)." }
robocopy (Join-Path $source 'gfx\map\textures') (Join-Path $Destination 'gfx\map\textures') /MIR
if ($LASTEXITCODE -ge 8) { throw "Map texture copy failed (robocopy $LASTEXITCODE)." }
New-Item (Join-Path $Destination '.metadata') -Type directory -Force | Out-Null
Copy-Item (Join-Path $source '.metadata\metadata_kspmp.json') -Destination (Join-Path $Destination '.metadata\metadata.json') -Force
Copy-Item (Join-Path $source 'thumbnail_kspmp.png') -Destination (Join-Path $Destination 'thumbnail.png') -Force
New-Item (Join-Path $Destination 'common\defines') -Type directory -Force | Out-Null
Copy-Item (Join-Path $source 'common\defines\kmpmp_00_defines.txt') -Destination (Join-Path $Destination 'common\defines\kmpmp_00_defines.txt') -Force
& (Join-Path $PSScriptRoot 'copy-legal-notices.ps1') -Destination $Destination
