# Third-party provenance audit

Audited **2026-11-05**, against `main` commit
[`df1521a6a945f4821758936be7889f41e8d06568`](https://github.com/MasterSon-git/vic3-kmpmp/commit/df1521a6a945f4821758936be7889f41e8d06568).
This is a repository-wide inventory and evidence review, not complete legal
clearance. No third-party/game content was removed, rewritten or relicensed.
The community's agreement covers its own original contributions only.

## Method and limits

Reviewed all 930 tracked baseline paths: 923 under `src/` and `src_test/`, plus
README, historical `features.md`, deployment/cleanup scripts, workspace and ignore
configuration. Searched source text/comments for URLs, credits, permissions,
upstream names and prefixes. Consulted integration commits, available installed
Workshop copies, original Workshop descriptions and linked GitHub repositories.
The local test overlay contains only placeholders. No separate existing license
or third-party notice file was tracked in the baseline.

[provenance-files.csv](provenance-files.csv) records **every one of the 923
payload/overlay files**, its SHA-256, component candidates, evidence basis, exact
matches to locally available upstream files, matching vanilla-relative paths,
and the first addition of each current path in `main` history. That commit
identifies a path's introduction, not original authorship; earlier names/imports
need separate history tracing.
This is a dated snapshot: update it when imports or provenance findings change.
It is not a generated allowlist of freely reusable files.

- `prefix-or-symbol` is an **inference**, not proof of whole-file origin.
  Multiple candidates in a row indicate mixed content or unresolved boundaries.
- `exact-upstream-bytes` verifies byte identity with the installed copy at audit
  time, not the author's identity, an import version or licensing authority.
  Shared copies in KMPMP itself (item 3009203637) and other mod packs are excluded
  as primary-source evidence. Matching files can also contain vanilla material.
- `vanilla-relative-path` flags potential game-derived content. The installed
  game is newer than this baseline: absence of byte identity is expected and
  cannot prove originality. Renamed overrides also need manual inspection.
- `unclassified-review-required` excludes whole-file clearance until attribution
  and ingredients are established. `kmpmp_*` is not an ownership certificate.
- Existing local Workshop files may be newer than the imported versions. Several
  Workshop pages returned errors/rate limits; alternate official page URLs and
  cached page text were used where available. Missing evidence is not permission.
  A linked public duplicate/fork was not accepted as an authoritative license.

## Verified standard licenses

Full notices are preserved under [LICENSES/third-party](../LICENSES/third-party).
All three licenses permit modification and redistribution (including commercial
use) **of rights covered by the upstream grant**, with copyright and permission
notice retention. This does not clear unrelated art, translations or game rights.

| Component / author | Verified sources (pinned license revision) | KMPMP scope / evidence | Conditions and remaining questions |
| --- | --- | --- | --- |
| Forts & Engineers — James "1230james" Hyun | [Workshop 3005432154](https://steamcommunity.com/sharedfiles/filedetails/?id=3005432154); [MIT at 7019a10](https://github.com/1230james/vic3-forts-and-engineers/blob/7019a10ab4834d2757b93450be4fa6cbd2f67690/LICENSE.txt) | `FAE_*` across `common/`, `events/`, `gfx/`, English/German localization; also `kmpmp_FAE_*`, `zz_kmpmp_FAE_*`, fort-buster/GUI adaptations. 29 exact local matches, principally art. | Copyright (c) 2023 James "1230james" Hyun. Preserve full MIT notice. Workshop additionally permits modpacks, derivative mods and translations. Fort icon photograph rights require confirmation below. |
| Gas, Guns, Garb, and Grub — James "1230james" Hyun | [Workshop 2968644620](https://steamcommunity.com/sharedfiles/filedetails/?id=2968644620); [MIT at e04c9a1](https://github.com/1230james/vic3-gas-guns-garb-grub/blob/e04c9a1ac8701a86bdaf8c46cd5294c44f4cb45d/LICENSE.txt) | `GGGG_*`, `kmpmp_GGGG_*`, `zz_kmpmp_GGGG_compat.txt`, military GUI integration, events and English/German localization. Three exact icon matches. Historical import `3511889`; later adaptations. | Copyright (c) 2023 James "1230james" Hyun. Preserve full MIT notice and upstream credits in distribution notices. Workshop also permits modpacks/derivatives/translations. Independently sourced images are not automatically cleared by a software license. |
| Anbeeld's Stockpile Economy — Anbeeld | [Workshop 3249228964](https://steamcommunity.com/sharedfiles/filedetails/?id=3249228964); [MIT at c7a7e0c](https://github.com/Anbeeld/ASE/blob/c7a7e0cd5c1646b9a449854d0cefb27a7ef8ea9b/LICENSE) | `ase_*` in `common/`, `events/`, localization; `src/gui/000_ase_*` and integrated market/budget UI. 24 exact local matches. Import `63addfa` (#469); German localization #481. | Copyright (c) 2024 Anbeeld. Preserve MIT notice. Workshop reuse statement additionally asks that derivative work mention it is based on ASE; the shipped notices do so. No claim that a current license authenticates every separately sourced ingredient. |

The upstream MIT blobs are `1c6fa6c6af26dde694e640c54b281a68ec14b368`
(both James projects) and `eb8f0fb4d8596c652786e5ce4f6fa88985618765` (ASE).
These are license-file blob identifiers, not KMPMP import revisions.

## Explicit nonstandard permissions

**Power Blocs Expanded**, Kate the Sibyl,
[Workshop 3387651487](https://steamcommunity.com/sharedfiles/filedetails/?id=3387651487).
Scope: `kates_power_bloc*`, `00_kates_power_bloc*` GUIs,
`common/power_bloc*/kmpmp_*`, `zz_kmpmp_01_power_bloc_values.txt` and associated
English/German localization; boundaries in merged definitions require review.
Prefix/symbol evidence and one exact concept-file match establish the integration.

**Break Truce**, Kate the Sibyl,
[Workshop 3168188451](https://steamcommunity.com/workshop/filedetails/?id=3168188451).
Scope: `common/diplomatic_actions/break_truce.txt`,
`common/script_values/break_truce.txt`, `common/journal_entries/kmpmp_break_truce_je.txt`,
`gfx/interface/icons/lens_toolbar_icons/break_truce.dds`, associated localization.
One exact icon match; introduced in the diplomacy rework (`baa57bd`, #315).

Both pages' **Development Abandoned** section was checked on 2026-11-05.
The exact permission excerpt is preserved in
[the distributed notices](../THIRD_PARTY_NOTICES.md#published-continuation-permissions).

This supports continuation/adaptation. Credit is requested appreciatively and
is preserved. There is no standard license or explicit wording covering every
redistribution channel, commercial use, sublicensing or third-party asset.
Continuation is not recorded as blanket 0BSD/CC0 clearance. Required follow-up:
retain a stable author-confirmed permission record clarifying distribution of
modified mod-pack copies and independently sourced graphics. No private approval
or correspondence is asserted by this audit.

## Other identified integrations

For **every row below**, no applicable standard license or explicit
modification/redistribution permission was verified in the sources inspected,
unless the row says otherwise. Modification and redistribution are therefore
**unresolved**, not approved or conclusively prohibited. Preserve listed credits;
unknown additional notice requirements must be checked with upstream. No new
copyright year or author identity is invented. Paths are repository-relative;
`*` denotes a filename family, not an exclusive whole-file boundary.

| Component / original author | Verified source | Relevant KMPMP files / evidence | Exact remaining work |
| --- | --- | --- | --- |
| All Quiet On The Western Front / sharpforever | [Workshop 2887104190](https://steamcommunity.com/sharedfiles/filedetails/?id=2887104190) | `common/institutions/qwf_institutions.txt`, `common/laws/qwf_00_army_model.txt`, `common/modifier_type_definitions/qwf_modifier_types.txt`, `localization/*/qwf_misc*`; historical import `5f030b1`, `features.md` | Obtain reuse permission and trace surviving icons/merged military definitions. Upstream describes borrowing from Heavy Crown; determine whether that affects the subset here. |
| Victoria Tweaks Mod / John Doodlez IV.; OPB | [Workshop 2935989855](https://steamcommunity.com/sharedfiles/filedetails/?id=2935989855) | `vtm_*`, `events/00_vtm_german_unification.txt`, `common/defines/vtm_00_ai.txt`, `common/state_traits/vtm_*`, `gfx/interface/icons/state_trait_icons/{very_,}difficult_terrain.dds`; import `69f0773` (#57), two exact icons | Obtain authoritative reuse terms for the imported version and audit merged country/event content. GitHub search found a public duplicate; it is not authority to relicense the original. |
| Better Canals / SkyRipper | [Workshop 2882752079](https://steamcommunity.com/sharedfiles/filedetails/?id=2882752079) | `common/{buildings,production_methods,production_method_groups}/bc_10_canals.txt`, `localization/*/better_canals*`, `gfx/interface/icons/production_method_icons/canals_*.dds`; `5e47494`, three exact icons | Confirm script and icon permissions, including underlying game-derived art. |
| Paper Map all the way! / xor | [Workshop 2951575694](https://steamcommunity.com/sharedfiles/filedetails/?id=2951575694) | `common/defines/xor_*`, `common/defines/jomini/xor_fog_of_war.txt`, much of `gfx/map/`; import `138d8a8`, exact `01_zeppelin.txt` | Obtain reuse terms; distinguish copied vanilla graphics settings/map-object files from author's original changes. Not every file in `gfx/map/` belongs to this component. |
| Lump Sum Transfer / Danarca; kikker; Imperia Development | [Workshop 3245710931](https://steamcommunity.com/sharedfiles/filedetails/?id=3245710931); [upstream organization](https://github.com/Imperia-Development-Victoria-3); [Imperia source](https://github.com/Imperia-Development-Victoria-3/Victoria-3-Dev) | `lump_sum_transfer*` across `common/`, GUI, localization; merged `gui/budget_panel.gui` and `gui/popups.gui`; `35cd2f9` (#292), five exact files | Public organization/source inspected; no root license in Victoria-3-Dev or Separated-Features. Obtain specific permission covering the extracted tool and its UI. Organization credit is not individual authorship proof. |
| Make My Railway Profitable Again! / Starry Inori | [Workshop 3110785319](https://steamcommunity.com/sharedfiles/filedetails/?id=3110785319) | `zzz_mrpa_railway.txt` under buildings/PMs/PMGs; `zzzz_kmpmp_mrpa_railway.txt`, `mrpa_*` localization, gauge/electric-carriage icons; five exact icons, early railway history `12c6053` | Obtain reuse terms for code, translations and art; separate vanilla railway definitions. |
| Controllable Private Construction / zzzwww | [Workshop 3278770055](https://steamcommunity.com/sharedfiles/filedetails/?id=3278770055) | `zw_cpc_*` buildings/decisions/decrees/JE/buttons/triggers/modifiers/GUI/localization; `gfx/decree_zw_no_state_private_investment.dds`; `4ff59ba` (#372), ten exact files | Obtain modification/redistribution permission and asset origins. |
| Controllable Private Construction Addons / zzzwww | [Workshop 3503737491](https://steamcommunity.com/sharedfiles/filedetails/?id=3503737491) | `zzz_zw_cpc_*` JE/buttons/effects/triggers/localization; `809cd8f` (#583), all six imported files match local upstream bytes | Confirm reuse terms despite unchanged import. These files are not original KMPMP work. |
| More Icons For Different Orders / zzzwww | [Workshop 3306581818](https://steamcommunity.com/sharedfiles/filedetails/?id=3306581818) | `common/commander_orders/zw_mifdo_*`; ten `gfx/interface/icons/commander_order_icons/zw_*.dds` exact matches | Confirm icon ingredient ownership and redistribution terms. |
| GDP Plotline Plus / obamnastan | [Workshop 3190466673](https://steamcommunity.com/sharedfiles/filedetails/?id=3190466673) | `gui/kmpmp_politics_panel_types.gui`, `gui/{00_,}kmpmp_graph_tooltips.gui`, graph definitions in merged GUI; import `544f191` (#330) | Local Git remote points to `jb-dro/GDPPlotlinePlus`, which returned 404. Preserve Workshop attribution; recover applicable license/permission and map surviving GUI blocks. |
| GDP Ownership Display / dragon-archer | [Workshop 3290552216](https://steamcommunity.com/sharedfiles/filedetails/?id=3290552216) | Merged GUI, especially politics-panel types; import `565b6f6` (#379) | Workshop says integrated into base game since 1.10.3. That does not independently license the historical mod copy; determine surviving copied blocks and applicable rights. |
| Visible Shortage Fix / Visible Goods Shortage / Craveirusko; upstream credits Apprehensive-Tank213, xDreamZ | [Workshop 3273620528](https://steamcommunity.com/workshop/filedetails/?id=3273620528) | `gui/{00_,}kmpmp_outliner_pinnable_types.gui` comments explicitly name Visible Shortage Fix; `544f191` (#330) | Trace the credited predecessor mods and obtain permissions for the inherited outliner code. Current page title differs from historical integration name. |
| Improved Topbar Info / Tosun Paşa | [Workshop 2965180680](https://steamcommunity.com/sharedfiles/filedetails/?id=2965180680) | `localization/*/sulius_ui_*`, merged topbar GUI; `5e47494`, English file exact match | Recover permission for surviving strings/UI and separate later rewrites from inherited blocks. |
| Palm Oil on Millet Farm / Halcyon | [Workshop 2896406216](https://steamcommunity.com/sharedfiles/filedetails/?id=2896406216) | `common/production_methods/pm_palm_oil.txt`, `production_method_groups/pmg_secondary_building_millet_farm.txt`, localization and `millet_palm_oil.dds`; `5e47494`, two exact files | Verify script/icon redistribution and translation ownership. |
| Useful Malaria Icons / Draagyn | [Workshop 3005297540](https://steamcommunity.com/sharedfiles/filedetails/?id=3005297540) | `common/state_traits/umi_malaria_traits.txt`, `gfx/interface/icons/state_trait_icons/umi_malaria.dds`; `b7854d1`, exact icon | Verify icon ingredient rights and permission for both scripts/art. |
| State Transfer Tool / TrueRoyalist; credited predecessor Anbeeld | [Workshop 2880446671](https://steamcommunity.com/sharedfiles/filedetails/?id=2880446671) | `common/diplomatic_actions/kmpmp_04_trade_states.txt`, decrees and transfer icons/localization; initial `1268a08` included `events/transfer_state_events.txt`, later reworks removed that named file | Trace predecessor tool's license independently of ASE's MIT license; confirm surviving boundaries/permissions. |
| Transfer Cash / TrueRoyalist | [Workshop 2881548032](https://steamcommunity.com/sharedfiles/filedetails/?id=2881548032) | Initial `1268a08` money-transfer definitions; surviving `events/kmpmp_money_transfer_events.txt`, transfer icon and changed diplomatic/treaty tools | Identify remaining protected material after rewrites and obtain reuse terms. Do not conflate this older tool with Lump Sum Transfer. |
| Clean Map / Salo | [Workshop 2880218271](https://steamcommunity.com/sharedfiles/filedetails/?id=2880218271) | `gfx/map/textures/*cleanmap*`; import `795ecc7` (#226), exact overlay | Verify map image ingredients and adaptation/distribution permission. |
| Victoria 2 style map / linwajun | [Workshop 2912060491](https://steamcommunity.com/sharedfiles/filedetails/?id=2912060491) | `gfx/map/textures/*vic2stylemap*`; import #226 plus workspace theme context (inferred mapping) | Verify transformed image origin/permission; title does not prove the image is licensed Victoria 2 content or original artwork. |
| shaded relief map Ver 2 / linwajun | [Workshop 3051232603](https://steamcommunity.com/sharedfiles/filedetails/?id=3051232603) | `gfx/map/textures/*shadedreliefv2*`; #226 explicitly adds shaded relief v2 | Confirm map data/image ingredients and reuse terms. |
| IVW - NAVY Papermap / Immanuel von Waslaw | [Workshop 3082524396](https://steamcommunity.com/sharedfiles/filedetails/?id=3082524396) | `gfx/map/textures/*navy*`, `gfx/models/papermap/*navy*`; #226/workspace (inferred image mapping) | Verify source image relationships and license for map and extensions. |
| Modded Map Themes / SnowBear | [Workshop 3052415455](https://steamcommunity.com/sharedfiles/filedetails/?id=3052415455) | Possible basis for `common/themes/kmpmp_themes.txt` and map settings; workspace only, no exact file match | Integration remains a candidate; compare historical versions before asserting copied code or claiming clearance. |

## Historical and reference-only candidates

| Candidate | Evidence and source | Disposition / follow-up |
| --- | --- | --- |
| More General Orders / crust (author attribution not independently verified from available original page) | `features.md`, `5e47494`; [original item 2888703922](https://steamcommunity.com/workshop/filedetails/?id=2888703922) unavailable; historical files `00_advance2.txt`, `00_defend2.txt`, `00_stand_by.txt` | Original page recovered via catalogue link only. Old named files absent; current commander orders are substantially different. Determine whether any protected blocks survive. Permission unresolved. |
| More Navy Illustrations / 1230james | `features.md`, `5e47494`; [Workshop 2984644281](https://steamcommunity.com/sharedfiles/filedetails/?id=2984644281) | Historical `navyillus_combat_units.txt` and `NI_unit_flotilla_*` images absent. Workshop permits derivative mods/modpacks, but credits art to Oswald Brierly/Thomas Dutton, Hugo Graf, an unknown artist and Roger H. Middlebrook GAvA. Trace reused/renamed art before claiming it is absent or cleared. No such art is certified CC0 here. |
| Extended Building Grid / author unverified | `5e47494`, historical `gui/improved_building_grid.gui`, `gui/states_panel_buildings.gui`; [candidate original item 2984488029](https://steamcommunity.com/sharedfiles/filedetails/?id=2984488029) inaccessible during audit | Historical integration confirmed; current file names absent. Identify original author, rights and any surviving merged GUI. Do not attribute it to a later continuation author without evidence. |
| NO AI Multiculturalism / author and original source unresolved | `features.md`, initial `1268a08` `nam_je.txt`, `nam_laws.txt`, `nam_events.txt` | Named files absent after later changes. Trace remaining citizenship-law/event logic from history; recover original source and permissions if protected material survives. |
| No Second Naval Invasion / author and original source unresolved | `features.md`, `5e47494`, removal `4ec8af6`, re-addition `8e6bd40` | Original named files absent. Determine whether remaining cooldown/invasion logic derives from this mod and recover author/source/permission. |
| Machiavelli (historical label) | `features.md` | Current Workshop name is KMPMP's own Machiavelli MP Mod; this does not establish whether the historical heading denoted an independent upstream. Resolve with integration history/maintainer knowledge, without inventing a distinct author/license. |
| Military Logistics and Stockpiles / Scarlet Foster-Greenbriar | Workspace reference [Workshop 3130090435](https://steamcommunity.com/sharedfiles/filedetails/?id=3130090435); [MIT source](https://github.com/Scarlet-Fox/V3-Mod-Military-Logistics/blob/main/LICENSE.txt) and local license | No exact matching payload or distinct integration established. It is a reference candidate, not ASE. MIT is verified upstream but is not applied to KMPMP's stockpiling in its place. |
| hybrid culture(+performance) / skimh322 | Workspace reference [Workshop 2980633591](https://steamcommunity.com/sharedfiles/filedetails/?id=2980633591) | No exact match. KMPMP culture merge `f95da2c` (#455) is documented in Git, but inspiration/copying boundary is unverified. No upstream reuse license found; compare before whole-file clearance. |
| Yeet Pop Fragments / Caracus; Profiling-based Optimization / Brute | Workspace references [3208290044](https://steamcommunity.com/sharedfiles/filedetails/?id=3208290044), [3213294110](https://steamcommunity.com/sharedfiles/filedetails/?id=3213294110) | No exact match or distinct integration established; do not present workspace references as confirmed imports. Reuse permission not verified. |
| Grey's Soft Econ Adjustments; Liberalized Goods Transfer; Ludi's MP; Essential UI; Timber to Steel | Workspace references/items [3345217364](https://steamcommunity.com/sharedfiles/filedetails/?id=3345217364), [3508819202](https://steamcommunity.com/sharedfiles/filedetails/?id=3508819202), [3289771086](https://steamcommunity.com/sharedfiles/filedetails/?id=3289771086), [3019598652](https://steamcommunity.com/sharedfiles/filedetails/?id=3019598652), [2981452537](https://steamcommunity.com/sharedfiles/filedetails/?id=2981452537) | References alone do not prove import. A GGGG icon also occurs in Ludi's pack; shared bytes do not make that pack its original author. Ingredient review of unclassified economic/UI content remains open. |

## Asset and game-derived material

The FAE fort icon (`src/gfx/interface/icons/building_icons/FAE_building_forts.dds`)
matches the local upstream copy. Upstream names Tom Darden's Fort McHenry
photograph, linking to
[the National Park Service gallery item](https://www.nps.gov/media/photo/gallery-item.htm?pg=912388&id=1C29B72C-155D-451F-679236F35346FD7E&gid=1C27E1E2-155D-451F-6739965D63726B10).
Credit is preserved; NPS hosting alone is not a public-domain determination.
Confirm the exact photograph's rights and conditions separately.

All `src/gfx/` images, `src/thumbnail_*.png`, map textures/extensions, flags,
company illustrations, `V3_*` icons and unclassified GUI/FX files remain excluded
from any **whole-file** CC0/0BSD assumption until ingredients are established.
The CSV identifies known candidates without certifying all remaining art as original.

Vanilla-relative paths (101 baseline payload paths match an installed game path),
renamed `kmpmp_00_*` overrides, state-region files, copied events, GUI definitions
and altered game art can contain Paradox material. No exact byte match to the
newer installed vanilla files was found; that does not remove the underlying
rights. Preserve applicable game/modding terms and avoid distributing proprietary
reference copies as independently free assets. File-by-file derivative boundaries
need further review. This task changes no vanilla files.

## Blockers and follow-up record

Complete clearance cannot be claimed until these are resolved:

1. Obtain and preserve author-published modification/redistribution permissions
   for every unresolved integrated component above, including translations and
   inherited predecessor mods. Record date, exact text, source and affected version.
2. Clarify Kate the Sibyl's continuation wording for distribution/commercial
   reuse and independent ingredients; retain the wording and source in notices.
3. Resolve fort-photo, map, thumbnail, flag/company/icon ingredients, and confirm
   whether historical navy art survives under renamed files. Obtain permissions
   or reliable public-domain/license evidence for each retained ingredient.
4. Trace historical and merged UI/country/economic fragments, including files with
   KMPMP prefixes. Replace inferred CSV associations with verified boundaries.
5. Review game-derived content against applicable Paradox distribution terms.
   Do not interpret the community agreement or an upstream MIT file as a grant
   of Paradox's rights.

The audit records these blockers without requesting that the community repeat
its already agreed original-contribution licensing decision. Preserve content
while investigating; licensing uncertainty is not authorization to delete it.

## Distribution

The three deployment scripts now add `LICENSE.md`, `THIRD_PARTY_NOTICES.md` and
`LICENSES/` **after** mirroring and overlaying game files. This preserves the three
known MIT notices and the explicit ASE based-on credit in every prepared package,
including the test and single-player variants. No game definitions change.
See [DEVELOPMENT.md](DEVELOPMENT.md) for the launcher upload/download checklist
and [validation](MAINTENANCE_VALIDATION.md) for local evidence. No upload was
performed as part of this task; previously published packages are not retroactively
fixed by a repository change.
