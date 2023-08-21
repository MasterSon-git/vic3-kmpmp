robocopy "..\src" "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kmpmp" /MIR /XF thumbnail* /XD .metadata
copy "..\src\.metadata\metadata_kmpmp.json" "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kmpmp\.metadata\metadata.json"
copy "..\src\thumbnail_kmpmp.png" "$env:UserProfile\Documents\Paradox Interactive\Victoria 3\mod\vic3-kmpmp\thumbnail.png"