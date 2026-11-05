param(
    [string]$Destination = "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kmpmp-test"
)

$ErrorActionPreference = 'Stop'
$source = Join-Path $PSScriptRoot '..\src'
robocopy $source $Destination /MIR /XF thumbnail* /XD .metadata
if ($LASTEXITCODE -ge 8) { throw "Mod copy failed (robocopy $LASTEXITCODE)." }
robocopy (Join-Path $PSScriptRoot '..\src_test') $Destination /E /XF thumbnail* _placeholder.txt _placeholder.gui _placeholder.yml /XD .metadata
if ($LASTEXITCODE -ge 8) { throw "Test overlay copy failed (robocopy $LASTEXITCODE)." }
New-Item (Join-Path $Destination '.metadata') -Type directory -Force | Out-Null
Copy-Item (Join-Path $source '.metadata\metadata_kmpmp_test.json') -Destination (Join-Path $Destination '.metadata\metadata.json') -Force
Copy-Item (Join-Path $source 'thumbnail_kmpmp_test.png') -Destination (Join-Path $Destination 'thumbnail.png') -Force
& (Join-Path $PSScriptRoot 'copy-legal-notices.ps1') -Destination $Destination
