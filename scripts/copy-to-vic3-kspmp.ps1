robocopy "..\src" "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kspmp" /MIR /XF thumbnail* /XD .metadata defines map
copy "..\src\.metadata\metadata_kspmp.json" "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kspmp\.metadata\metadata.json"
copy "..\src\thumbnail_kspmp.png" "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kspmp\thumbnail.png"
copy "..\src\common\defines\00_defines.txt" "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kspmp\common\defines\00_defines.txt"