robocopy "..\src" "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kspmp" /MIR /XF thumbnail* /XD .metadata defines map
robocopy "..\src\gfx\map\textures" "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kspmp\gfx\map\textures" /MIR 
New-Item "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kspmp\.metadata" -Type directory -Force
Copy-Item "..\src\.metadata\metadata_kspmp.json" -Destination "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kspmp\.metadata\metadata.json" -Force
Copy-Item "..\src\thumbnail_kspmp.png" -Destination "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kspmp\thumbnail.png" -Force
New-Item "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kspmp\common\defines" -Type directory -Force
Copy-Item "..\src\common\defines\kmpmp_00_defines.txt" -Destination "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kspmp\common\defines\kmpmp_00_defines.txt" -Force