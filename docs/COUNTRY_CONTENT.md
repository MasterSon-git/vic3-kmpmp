# KMPMP country content reference

## Scope and baseline

This reference lists the changes KMPMP makes to countries in Victoria 3. It compares the supplied mod files with Victoria 3 version 1.15.2; each entry below describes a KMPMP change, not a base-game rule.

The earlier [feature notes](../features.md) remain a broad overview. This page lists country bonuses, journal entries, decisions, events, new countries, starting population and buildings, companies, and regional economic changes. Each section gives the specific effect and links to its source files.

For a country-first view, see the separate [country-by-country changes guide](COUNTRY_CHANGES_BY_COUNTRY.md). It groups the affected starts, national content, and regional changes by country, then links back here for the full values and effects.

The tables show the values that the game actually uses. When comments in the files disagree with the supplied vanilla 1.15.2 files, the game values are used for comparison.

## Country balance

The start script assigns balance modifiers by country. A monthly check maintains the tiers as countries form or meet their progression conditions, so these effects can change during a campaign.

| Tier | Countries assigned at the start | Effect |
| --- | --- | --- |
| Small nation | Sardinia-Piedmont (SAR), Two Sicilies (SIC), Ottomans (TUR), Belgium (BEL), Netherlands (NET), Sweden (SWE), Japan (JAP), Brazil (BRZ), Mexico (MEX), Persia (PER), Egypt (EGY), Portugal (POR), Argentina (ARG), Wallachia (WAL), Hudson Bay Company (HBC), Bolivia (BOL) | +10,000 country minting; +5% education access, state construction, university throughput; +10% government administration throughput, supply-ship construction efficiency, railway throughput, migration attraction; −5% military goods and mobilization costs; +10 barracks maximum level; +20% authority; +4 Power Bloc mandate progress. |
| Medium nation | Austria (AUS), Spain (SPA) | +5,000 country minting; +2.5% education access and university throughput; +5% government administration and railway throughput; +5% supply-ship construction efficiency; −2.5% military goods and mobilization costs; +5 barracks maximum level; +10% authority; +4 Power Bloc mandate progress. |
| Massive empire | France (FRA), Great Britain (GBR), Russia (RUS) | +5% military goods costs and military wages; −5% unit offense and defense; +5% ammunition, artillery, and small-arms input costs; −20% Power Bloc mandate progress. |

The monthly update also assigns the medium tier to Arabia, Italy, Iberia, Scandinavia, Parthia, Latin Empire, and United Netherlands. Brazil and Portugal move from small to medium after forming Reino Unido; Mexico does so after completing “A True Gran Colombia.” North German Federation, Germany, and South German Federation receive the massive-empire penalty when formed. Japan and the Ottomans use separate progress rules: Japan’s tier changes with Meiji completion, while the Ottoman tier changes after its “A Proud Nation” journal entry completes.

Great Britain also receives a separate 50-year decaying “Global Empire” modifier: −10% government administration throughput and construction efficiency; −15% university throughput, migration pull, and qualifications; +1 expected standard of living for each strata; and −10% Power Bloc mandate progress.

Definitions: [initial country tiers](../src/common/history/global/kmpmp_country_buffs_global.txt), [monthly tier updates](../src/common/scripted_effects/kmpmp_nation_buff_effects.txt), [modifier values](../src/common/static_modifiers/kmpmp_nation_buff_modifiers.txt), [monthly action](../src/common/on_actions/kmpmp_on_actions.txt).

## Start setup

| Country | KMPMP start setup |
| --- | --- |
| Prussia (PRU) | Receives the 15-year Rising Great Power modifier: +3% birth rate, +5% construction efficiency, and +5% production and military technology spread. |
| Austria (AUS) | Receives the 15-year Habsburg Legacy modifier: −15% radicals from political movements, +5 base legitimacy, and +10% authority. Starts the Empire of the Three Crowns journal entry. |
| Netherlands (NET) | Starts with Atmospheric Engine, Dialectics, General Staff, and Power of the Purse researched. |
| Two Sicilies (SIC) | Starts with Interventionism, Napoleonic Warfare, and Paddle Steamer. |
| Sardinia-Piedmont (SAR) | A player-only event fires after seven days. Lucca annexes Parma and Modena; Sardinia-Piedmont receives claims on Emilia and Tuscany. |
| Spain (SPA) | Starts with claims on Sardinia and Sicily and the “Regain Influence in America” journal entry. |
| Mexico (MEX) | Starts with Paddle Steamer and Napoleonic Warfare. A hidden event gives a player-controlled Mexico a 15-year decaying Defend the Homeland modifier. |
| Persia (PER) | Starts with Tenant Farmers and Interventionism, Paddle Steamer, Mandatory Service, Cotton Gin, and Academia, plus the Unite the Homelands journal entry. The start script transfers non-Persian state slices in Laristan to Persia and adds claims across unowned parts of Greater Persia. |
| Ottomans (TUR) | Starts with Paddle Steamer and Cotton Gin. The monthly update gives the small-nation modifier until Ottoman progression qualifies it for the medium tier. |
| Egypt (EGY) | The start script adds Ottoman claims to the state regions Egypt owns at game start. |
| Great Britain, France, United States | Start with Mercantilism. |
| Brazil (BRZ), Bolivia (BOL) | A hidden start event resolves Brazil-initiated diplomatic plays for a player-controlled Brazil. Bolivia loses 30 infamy; if both Brazil and Bolivia are player-controlled, North and South Peru’s liberty desire is set to 25. |

The global start script also subsidizes every railway. It marks Gotland unincorporated and removes the Ukrainian homeland from Kuban. These effects are in [KMPMP global start history](../src/common/history/global/kmpmp_global.txt).

Japan has its own player-facing sequence. After seven days, the player may opt into Japan’s buffs; accepting grants a 12-year start modifier, a 50-year decaying modifier, claims on Korea and selected Qing states, and a more aggressive Shogunate leader ideology. Completing Meiji adds military Interest Group traits; if it happens before 1885, Japan also receives a 15-year modifier. For players who opted in, a later event lets Japan choose claims focused on Siam and Java or on Borneo and Dai Nam. See [Japan’s start events](../src/events/kmpmp_japan_buff_events.txt) and [Meiji override](../src/common/journal_entries/kmpmp_00_meiji_restoration.txt).

## Added starting population

The following are KMPMP starting population additions on top of the vanilla 1.15.2 start, not replacement totals. The figures below use the population sizes that the game applies; some file comments retain earlier estimates.

| Country | State | Added populations |
| --- | --- | --- |
| Portugal | Alentejo | 372,508 Portuguese |
| Portugal | Estremadura | 860,796 Portuguese |
| Egypt | Upper Egypt | 349,025 Misri; 37,215 Misri of Oriental Orthodox religion; 1,001 Turkish aristocrats; 402 Turkish bureaucrats; 4,102 Sudanese enslaved people |
| Egypt | Palestine | 248,000 Mashriqi Sunni; 8,000 and 25,600 Mashriqi Shiite; 58,000 Mashriqi Orthodox; 8,000 Bedouin Sunni; 18,000 Sephardic Jewish; 1,400 Armenian; 1,200 Dagestani enslaved people; 2,300 Lacustrine Bantu enslaved people |
| Bolivia | Antofagasta | 395,964 South Andean; 577,800 Aimara; 5,400 Afro-Caribeno; 30,600 Quechua |
| Bolivia | La Paz | 110,396 South Andean; 159,000 Quechua; 134,002 Aimara; 23,500 Amazonian; 1,600 Afro-Caribeno |
| North Peru (NPU) | Lima | 24,800 South Andean; 21,200 Quechua; 2,190 Afro-Caribeno; 620 Afro-Caribeno enslaved people; 1,600 Amazonian |

The active additions total 1,233,304 people for Portugal, 762,245 for Egypt, 1,438,262 for Bolivia, and 50,410 for North Peru: 3,484,221 people overall. Source files: [southern Europe](../src/common/history/pops/kmpmp_01_south_europe.txt), [North Africa](../src/common/history/pops/kmpmp_03_north_africa.txt), [South America](../src/common/history/pops/kmpmp_07_south_america.txt), and [the Middle East](../src/common/history/pops/kmpmp_08_middle_easts.txt).

## Added starting buildings

KMPMP adds the listed buildings in each named country and state. Where a production method is named below, it is the method selected by the source; entries without one use the game’s default for that building.

| Country | Added buildings and selected production methods |
| --- | --- |
| Prussia (PRU) | West Prussia: 3 ports (basic port), 1 shipyard (basic shipbuilding); East Prussia: 1 basic port; Lower Silesia: 2 government administrations (vertical filing cabinets). |
| Austria (AUS) | Bohemia: 15 government administrations (horizontal drawer cabinets); Istria: 2 subsidized basic ports. |
| France (FRA) | Languedoc: 3 government administrations (vertical filing cabinets). |
| Great Britain (GBR) | Midlands: 7 government administrations (vertical filing cabinets). |
| Sardinia-Piedmont (SAR) | Piedmont: 6 government administrations (horizontal drawer cabinets). |
| Two Sicilies (SIC) | Campania: 8 government administrations (horizontal drawer cabinets). |
| Ottomans (TUR) | Ankara: 6 government administrations (horizontal drawer cabinets); Konya: 1 of the same; Aydin: 2 iron-frame construction sectors, 3 iron mines (picks and shovels, no explosives or steam automation, road carts), 1 tooling workshop; Eastern Thrace: 2 iron mines with the same mining methods, 1 logging camp, 2 arms industries (muskets). |
| Mexico (MEX) | Mexico: 1 crude-tools workshop, 3 wooden construction sectors, 3 iron mines (picks and shovels); Bajio: 4 gold mines (picks and shovels); Jalisco: 6 government administrations (simple organization), 1 crude-tools workshop, 1 arms industry (muskets). |
| Bolivia (BOL) | La Paz: 4 government administrations (simple organization). |
| Egypt (EGY) | Lower Egypt: 10 government administrations (horizontal drawer cabinets), 5 paper mills, 4 textile mills, 11 cotton plantations, 2 logging camps; Palestine: 1 tooling workshop. |
| Persia (PER) | Irakajemi: 1 logging camp (simple forestry, no hardwood or equipment, road carts), 1 paper mill (pulp pressing, automation disabled); Tabriz: 6 government administrations (simple organization), 3 logging camps with the Irakajemi methods, 1 tooling workshop (pig iron, automation disabled), 3 iron mines (picks and shovels, no explosives or steam automation, road carts), 2 iron-frame construction sectors, 1 paper mill (pulp pressing, automation disabled). |
| Siam (SIA) | Bangkok: 5 government administrations (simple organization). |
| Japan (JAP) | Hokkaido: 1 port; Tohoku: 1 port, 1 iron mine, 1 cotton plantation, 5 government administrations, 1 paper mill, 1 wooden construction sector; Kanto: 2 shipyards, 1 iron mine, 1 wooden construction sector, 2 logging camps, 2 cotton plantations, 3 subsidized ports, 4 government administrations; Tokai: 1 fishing wharf, 1 port; Kansai: 6 government administrations, 5 universities, 1 paper mill, 2 logging camps, 1 port; Chugoku: 2 cotton plantations, 1 port; Shikoku: 1 port. Japan’s source selects basic ports and shipyards, horizontal drawer cabinets for government administrations, picks-and-shovels mining, road-cart cotton plantations, pulp pressing with automation disabled, scholastic education and religious academia at Kansai’s universities, and simple fishing without refrigeration at Tokai. |
| Spain (SPA) | Valencia: 7 government administrations (horizontal drawer cabinets). |
| Portugal (POR) | Alentejo: 1 government administration (horizontal drawer cabinets). |
| Netherlands (NET) | Holland: 4 government administrations (horizontal drawer cabinets). |
| Carlist Spain (SPC) | Basque Country: 4 arms industries (muskets, automation disabled). |

Full definitions: [KMPMP starting buildings](../src/common/history/buildings/kmpmp_buildings.txt).

## National journal entries, decisions, and events

| Country or group | Country-facing content |
| --- | --- |
| Austria (AUS) | The Empire of the Three Crowns entry requires Pan-Nationalism, full control of Croatia, Slovenia, Bosnia, Wallachia, Moldavia, and Dobrudja, plus at least one state in each Serbian region. Completion adds Serbian, Bosniak, Croat, and Romanian as primary cultures, gives loyalists to each, and grants claims on unowned parts of Serbia, Kosovo, Montenegro, Volhynia, Kiev, and Cherson. From 1845, Austria can take the one-use Austrian-Hungarian Agreement decision after researching Nationalism if it does not already have Hungarian as a primary culture; the decision enacts Racial Segregation if needed and grants a five-year decaying modifier. |
| Prussia / German states | Prussia receives a 15-year Rising Great Power modifier and retains its revised decision to form the North German Federation. The North German Federation’s Emser Depeche and southern-claims decisions, including their full eligibility and effects, are listed under [player-facing country decisions](#player-facing-country-decisions). Germany can use the Fate in the East and Greater Germany chains; their requirements, claims, and rewards are listed in the [complete journal-entry inventory](#complete-national-journal-entry-inventory). |
| Japan (JAP) | KMPMP changes the vanilla Meiji journal entry, adds the player opt-in start event, and adds the post-Meiji claims event described above. The Meiji completion bonus is conditional on completion before 1885. |
| Ottomans (TUR) | See the [complete Ottoman change inventory](#ottoman-empire-complete-change-inventory) for starting content, characters, diplomacy, the Sick Man reward and failure paths, later journal entries, formable-country effects, companies, and affected regions. |
| Persia (PER) | The Unite the Homelands entry completes when Persia or its subjects control all of Herat and Sistan. It annexes Persian-region subjects and then grants claims on unowned Pashtunistan, Tajikistan, Kirghizia, Uzbekia, Turkmenia, Merz, Khiva, Tianshan, Dzungaria, Jetisu, Semireche, and Kashmir. Its completion event adds loyalists among Baluchi, Pashtun, Tajik, and Hazara cultures. |
| Spain, Mexico, Central America | Spain starts “Regain Influence in America”; cordial relations with Central America (UCA) complete it and establish a Spanish protectorate. Spain can then offer Mexico a one-use deal. Mexico may claim Central America while Spain claims Mexico’s starting states and Texas; choose ten years of economic cooperation, which lets Spain invite Mexico into its Power Bloc and make UCA a puppet; or return to the Spanish Empire, annex UCA if present, become Spain’s protectorate, gain a permanent modifier, and add radicals and loyalists. Spain gains 30 infamy for that last option. Spain’s entry can fail if UCA disappears or becomes another country’s subject. |
| Mexico (MEX) | After Nationalism, a one-use decision adds Mayan primary culture, 5% Mayan loyalists, 5% radicals, +3% birth rate for five years, and decaying −10% authority and bureaucracy for 20 years. Bolivia, Federation of the Andes, Peru, and Peru-Bolivia Confederation can use the matching decision to add Amazonian primary culture with Amazonian loyalists and South Andean radicals. Mexico’s territorial chain and all decision effects are detailed in the [journal inventory](#complete-national-journal-entry-inventory) and [decision guide](#player-facing-country-decisions). |
| Brazil (BRZ), Portugal (POR) | Either country can start the Reino Unido chain through a one-use decision while both exist. The normal route requires Nationalism and Egalitarianism and a puppet or dominion relationship between Brazil and Portugal; the Brazil-led route has a fallback if Iberia has formed and Portugal no longer exists. When the other country still exists, completion annexes it, adds Portuguese or Brazilian primary culture plus Afro-Brazilian and Paulista, and grants the Reino Unido modifier. A follow-on entry can make the other country a protectorate. |
| Scandinavia (SCA) | After forming Scandinavia, owning all Scandinavian states grants the Greater Scandinavia modifier. The follow-on Baltic Empire entry requires Ingria, Kola, Pomerania, Lithuania, both Livonian regions, Tallinn, and West Prussia; losing any required region removes the modifier. |
| Other national chains | KMPMP also replaces or adds the Opium Wars (China/Britain), Great Reforms Military (Russia), First Carlist War and Aragon’s Legacy (Spain), Peru-Bolivia and South/Central America migration entries, Algerian Departments (France/Algeria), Seminole Wars (United States), German-French border entries, and the regional German unification entries. Completing the First Carlist War can trigger a Spain-rebuild event with a ten-year modifier; if Portugal is player-controlled, the event also creates a 30-year truce. Their detailed triggers and rewards are in the corresponding files under [journal entries](../src/common/journal_entries) and [events](../src/events). |

### Ottoman Empire: complete change inventory

This is the country-specific checklist for the Ottoman Empire. Its tier bonus and shared technology, law, building, company, and state rules are documented in the linked full tables below, so they are not repeated as if they were Ottoman-only mechanics.

| Area | Every documented Ottoman change and what it does |
| --- | --- |
| Starting technologies | Starts with Paddle Steamer and Cotton Gin researched. These are KMPMP additions to the Ottoman start. |
| Starting tier | Starts as a small nation. The monthly country-tier update keeps the Ottomans small until “A Proud Nation” completes, then switches them to the medium-nation bonus. See [the exact tier values](#country-balance). |
| Starting buildings | Ankara: 6 government administrations using horizontal filing cabinets. Konya: 1 with the same method. Aydin: 2 iron-frame construction sectors, 3 iron mines using picks and shovels, no explosives or steam automation, and road carts, plus 1 tooling workshop. Eastern Thrace: 2 iron mines using the same methods, 1 logging camp, and 2 arms industries making muskets. See [the starting-building register](#added-starting-buildings). |
| Added starting people | KMPMP adds no starting population to Ottoman-owned states. Egypt’s population additions are listed separately in [the starting-population register](#added-starting-population). |
| Egyptian claims | At game start, every state region containing territory owned by Egypt gives Turkey a claim. This includes the Egyptian-owned portions of split regions; see [global start effects](#additional-start-and-diplomacy-changes). |
| Removed treaty | Removes the 15-year Prussian military-assistance mission to Turkey that began in November 1835; Turkey therefore does not receive that historical treaty at the 1836 start. See [historical diplomacy differences](#historical-diplomacy-differences). |
| Ottoman characters | Abdulmecid starts as an Intelligentsia modernizer with the child and imperious traits; KMPMP replaces vanilla’s moderate ideology and aesthete trait. Abdulhamid II is moved from the Landowners to the Intelligentsia, gets imperious instead of persistent, and can lead the Intelligentsia in a monarchy from 1870 through 1900 with a 50% appearance chance. See [the Ottoman character overrides](../src/common/character_templates/kmpmp_country_tur.txt). |
| Sick Man starting event | Initializes the Sick Man progress variables and starts the main journal entry. It also grants +150 Authority and −10% decree cost for 20 years, plus +20% defense for 20 years with decay. Choosing the normal continuation opens the Syria, Economy, Education, Separatism, Army, and Bureaucracy Tanzimat entries. |
| Sick Man main entry | Keeps the vanilla 10,950-day timeout (the KMPMP comment saying 7,300 days is stale). Its progress target is 4. Completion removes the Sick Man penalty, triggers KMPMP’s replacement success event, adds 7% loyalists, and permanently grants Restored Fame: +5% army and navy offense and defense, +5% plantation and mine throughput, +5% technology spread and tax capacity, +5 percentage points education access, +5% training rate, and +1 percentage point conscription rate. |
| Sick Man education entry | Keeps the requirement of a university at least level 5 with above 90% occupancy and a literacy increase of 20 percentage points from the starting value. Completing it advances Sick Man progress by 1. KMPMP multiplies the displayed current literacy and displayed goal by 100 so the progress display is legible; it does not change the underlying literacy goal. |
| Sick Man success choices | Replaces the vanilla conditional rewards with three choices. **Path to Westernization** lasts 20 years, adds Greek, Bulgarian, Serbian, and Albanian as primary cultures, claims unowned Attica, Peloponnese, Crete, Western Serbia, both Transylvanian regions, Crimea, Cherson, Kharkov, Kuban, Greater Caucasus, Rostov, and Taurida, and grants +20% production research speed, +10% Armed Forces and Industrialists political strength, +10% technology spread, +15% capitalist investment-pool contribution efficiency, +15% state construction, and −10% decree cost. **Leader of Islam** lasts 25 years, adds Kurdish, Bedouin, Persian, Misri, Mashriqi, and Maghrebi as primary cultures, claims unowned Urmia, Tabriz, Persian Kurdistan, Luristan, Khuzestan, Fars, Laristan, Kerman, Khorasan, Semnan, Mazandaran, Irakajemi, Armenia, Azerbaijan, Libya, Tripoli, and Tunisia, and grants +4.2% birth rate, −15% decree cost, −20% military-goods cost, +10% training rate, +10% army offense, +50% conversion, +15% military research speed, and +5% technology spread. **The Reform Goes On** lasts 15 years and grants +9% birth rate, +20% state construction, +25% technology spread, +35,000 flat minting, +15% military, production, and society research speed, and +15 percentage points education access. |
| Sick Man timeout | Timeout adds the decaying Dead Man of Europe penalty, marks the Tanzimat as failed for 20 years, removes Rumelian tradition from Albanian, Bosniak, and Sephardic cultures, and can trigger the Great Eastern Crisis content when the relevant DLC is active. It kills the ruler and can free eligible subject hierarchies. If Turkey leads a Power Bloc, the failure tooltip warns it will lose that leadership. KMPMP removes the vanilla effect that made Turkey unrecognized. If progress is above zero but no more than 1, it grants the scaled “A Little Honor” consolation: per progress point, +1.25% army and navy offense and defense, plantation and mine throughput, technology spread, tax capacity, education access, and training rate, plus +0.25 percentage points conscription. |
| Partial-progress failure choices | If Sick Man fails with progress above 1, Turkey receives the same three reward paths as on success. Their claims and culture additions still apply; each modifier’s duration and numeric values scale by progress divided by 4. |
| A Proud Nation | Becomes available after Sick Man is marked complete. The player can press “We are ready” to complete it immediately; otherwise it completes automatically from 1887. Completion removes the small-nation modifier and adds the medium-nation modifier. See [the entry and button definitions](../src/common/journal_entries/kmpmp_ottoman_medium_nation.txt). |
| Arabia formation | If the Ottomans form Arabia while holding the Leader of Islam modifier, the formation event adds Persian, Turkish, Kurdish, and Maghrebi as primary cultures; grants the usual Arabia formation claims plus unclaimed North African regions and the unowned Ottoman core regions Konya, Hudavendigar, Aydin, Kastamonu, and Ankara; and grants Unified Arabia for 5 years at half strength: +5,000 flat minting, +5% construction, +4% birth rate, and −12.5% loan interest. Other Arabia formers get the full 10-year version and the separate Arabia modifier. |
| Adriatic Empire | Turkey, Austria, countries with a North or South Italian primary culture, and countries formed from Turkey can access this journal entry after Pan-Nationalism. Controlling at least 9 of Apulia, Abruzzo, Umbria, Romagna, Venetia, Istria, Croatia, Dalmatia, Montenegro, and Albania grants +25% supply-ship construction efficiency, +5% ship armor and hull damage, +20% state trade quantity, and +10% throughput for trade centers, ports, and sulfur mines. A maintenance entry removes the modifier if control falls below 7 of those regions. |
| Caucasus event | When Circassia asks foreign powers for support against Russia, Turkey receives “The Circassian Call” if it qualifies as a major power with an interest in Russia. If Circassia instead chooses its alliance with the Circassian Imamate, the KMPMP event file also sends Turkey the event. Turkey can improve relations with Circassia by 20 and seek to recognize it through a later decision, or reduce relations by 10 and decline involvement. |
| Restored Algeria event | In the Algerian restoration event, a monarchy can select the Ottoman-backed option if Algeria has reached the restoration conditions and Turkey is also a monarchy. The restored Algerian state makes Turkish a primary culture; Turkey makes it a puppet if recognized or a vassal if unrecognized. Algeria receives 20% Turkish loyalists, claims on East Sahara and Sahara, and the Barbary Pirates modifier if the relevant DLC is active. |
| Companies | The Ottoman market is the fixed or preferred headquarters market for Allatini Mills, Chemins de fer Orientaux, Tersâne-i Âmire, Turkish Petroleum Company, and Zastava oružje. KMPMP renames the Ottoman Tobacco Regie to Ottoman Consumer Company and gives it +15% Society technology spread while prosperous. The [complete company table](#company-building-scopes-and-prosperity-effects) gives every building scope and exact bonus. |
| Changed regions and traits | KMPMP changes resource values in Ottoman-owned parts of Adana and in Ankara, Aydin, Baghdad, Basra, Erzurum, Kastamonu, Konya, Mosul, Northern Thrace, and Trabzon. Basra and Baghdad lose the Euphrates River trait; Diyarbakir loses the Tigris River trait. See [the full state-region changes](#country-facing-state-region-economic-changes). |

This inventory covers Ottoman-specific files and conditional content. Ottoman campaigns also use every shared law, rank, diplomatic, technology, building, production-method, trait, and company change documented elsewhere in this reference.

Sources for this inventory include [Ottoman start history](../src/common/history/global/kmpmp_global.txt), [starting buildings](../src/common/history/buildings/kmpmp_buildings.txt), [Sick Man entries](../src/common/journal_entries/kmpmp_00_sick_man.txt), [Sick Man events](../src/events/00_kmpmp_sick_man_events.txt), [Sick Man claims](../src/common/scripted_effects/kmpmp_sick_man_effects.txt), [Ottoman modifiers](../src/common/static_modifiers/kmpmp_ottoman_buff_modifiers.txt), [Arabia formation](../src/events/00_kmpmp_misc_unifications.txt), [Adriatic Empire](../src/common/journal_entries/kmpmp_adriatic_empire_je.txt), [Ottoman characters](../src/common/character_templates/kmpmp_country_tur.txt), the [Caucasus event changes](../src/events/soi_events/000_kmpmp_merge_cultures_00_ep1_caucasus_events.txt), and the [Algerian event changes](../src/events/agitators_events/00_kmpmp_merge_cultures_algeria_events.txt). The linked tables above cover state resources and company definitions.

Four regional journal entries are explicitly marked “under construction” in English localization: Master of the Mediterranean Sea, Leader of Latin America, Ruler of the East, and The Sugar Monopoly. Their displayed goals include state-count thresholds, but they should be treated as unfinished content. See [regional journal entries](../src/common/journal_entries/kmpmp_regional_je.txt) and [their localization](../src/localization/english/kmpmp_regional_je_l_english.yml).

## Formable and releasable countries

| Country | KMPMP rule |
| --- | --- |
| Germany | The revised rule requires control of 78% of Greater Germany’s state list, raised from 73%. Direct eligibility also requires Pan-Nationalism or the German National Identity idea, no Confederation of the Rhine, no Dual or Triple Monarchy government, and that the country is not Austria-Hungary; a unification candidate must be a Major Power. The journal route additionally requires the selected unifier to be independent and carry the unifier mark. Formation gives the massive-empire penalty and opens the Greater Germany and Fate in the East chains. |
| Iberia | Requires Nationalism and at least 90% control of state regions associated with Spanish and Portuguese cultures. If the country’s capital is in old Iberia and it has subjects there, all those subjects must have liberty desire below 75. Formation is blocked after Reino Unido is completed. It grants unification prestige and unowned homeland claims, plus claims on unowned Sardinia, Sicily, Corsica, Al-Rif, Fez, Marrakech, and Inner Morocco; United Iberia (+5% army offense and defense, +5% technology spread, +5% tax capacity, +3% birth rate, +5% training rate); and the medium-nation bonus. |
| Scandinavia | A country in the Scandinavian region with Swedish, Danish, or Norwegian primary culture must control at least 70% of the 15 state regions: Jutland, Zealand, Schleswig-Holstein, Gotland, Götaland, Scania, Norrland, Svealand, Uusimaa, Åland, Ostrobothnia, Oulu, Eastern Norway, Western Norway, and Northern Norway. It must fully own Zealand, or all four of Åland, Uusimaa, Ostrobothnia, and Oulu, or have Finland as a direct subject. Candidates need Minor Power rank and at least one Scandinavian country must have Nationalism. KMPMP permits at most three candidates and excludes Icelandic primary culture. Formation grants unification prestige and claims on unowned Scandinavian-culture homelands (or 5% loyalists if there are no such claims), adds Estonian, Finnish, Latvian, and Lithuanian primary cultures, claims unowned West Prussia, Pomerania, Ingria, and Mecklenburg, applies Lion of the North (+5% army and navy offense and defense, +5% birth rate, −5% military-goods cost, +10% recovery, +10% minting, +2 percentage points conscription), and assigns the medium-nation bonus. The formation event can annex Finland when Finland is a direct subject. |
| Arabia | Requires Nationalism and control of at least 75% of these 21 regions: Yemen, Oman, Abu Dhabi, Nejd, Hejaz, Hail, Baghdad, Transjordan, Palestine, Lebanon, Syria, Aleppo, Mosul, Deir ez-Zor, Basra, Sinai, Lower Egypt, Middle Egypt, Matruh, Egyptian Desert, and Upper Egypt. Formation grants unification prestige and homeland claims, plus claims on unclaimed North African regions and unowned Ottoman-core regions Konya, Hudavendigar, Aydin, Kastamonu, and Ankara. It assigns the medium-nation bonus. Without the Ottoman Leader of Islam reward it grants Unified Arabia for 10 years (+10,000 minting, +10% construction, +8% birth rate, −25% loan interest) and Arabia (+5% offense and defense, +2% birth rate, +5% technology spread, +10% plantation throughput). With that reward, the event adds Persian, Turkish, Kurdish, and Maghrebi primary cultures and gives Unified Arabia for five years at half strength (+5,000 minting, +5% construction, +4% birth rate, −12.5% loan interest). |
| United Netherlands | Requires Nationalism and full control of Holland, Flanders, Wallonia, Friesland, and Gelre. Formation grants unification prestige and unowned homeland claims, plus claims on the French Low Countries, Cape Colony, Northern Cape, Eastern Cape, Vrystaat, Zululand, and Transvaal. It adds 25% Flemish and 25% Walloon loyalists, the United Netherlands modifier (+3% birth rate, +15% army offense and defense, +10% university and manufacturing throughput, +10% loyalist growth under every cultural-acceptance level), and the medium-nation bonus. |
| Parthia | Requires Nationalism, full control of Irakajemi, Isfahan, Khorasan, Mazandaran, Tabriz, Luristan, Khuzestan, Fars, Laristan, Sistan, Azerbaijan, Baghdad, Kerman, Semnan, Herat, Merz, and Turkmenia, plus ownership and incorporation of at least four of Basra, Armenia, Diyarbakir, Erzurum, Deir ez-Zor, Mosul, and Elizavpol. Parthia has Persian and Azerbaijani primary cultures, Irakajemi as capital, a dedicated flag, and a monarchy-dependent name. Formation grants unification prestige, claims on Punjab and Sindh if not fully owned, United Parthia (+1.2% birth rate, +5% offense and defense, +10% infrastructure, +10% plantation throughput), and the medium-nation bonus. An event option converts 60% of pops in every state to Zoroastrian and changes the state religion to Zoroastrian. |
| Latin Empire | Requires Pan-Nationalism, South Italian or Spanish primary culture, and at least 32 fully owned and incorporated regions from its 53-region list: Eastern Thrace, Attica, Thessalia, Macedonia, Skopia, Western Thrace, Northern Thrace, Hudavendigar, Aydin, West Aegean Islands, East Aegean Islands, Albania; Galicia, Asturias, Basque Country, Aragon, Catalonia, Beira, Old Castile, Estremadura, Extremadura, New Castile, Valencia, Alentejo, Lower Andalusia, Upper Andalusia, Murcia, Leon, Entre Douro e Minho; Azores, Madeira, Canary Islands, Cape Verde, Balearic Islands; Savoy, Piedmont, Lombardy, South Tyrol, Venetia, Istria, Emilia, Romagna, Tuscany, Umbria, Lazio, Abruzzo, Campania, Apulia, Calabria, Sicily, Sardinia; Peloponnese and Crete. Formation grants unification prestige and claims on unowned and unclaimed regions in that list, or 5% loyalists if none remain. It has Eastern Thrace as capital, a dedicated flag, and the listed Italian, Spanish, Galician, Catalan, Basque, Portuguese, Greek, and Bulgarian cultures, plus the medium-nation bonus. There is no separate four-of-seven requirement for this formable; that condition belongs to Parthia. |
| Italy | Base eligibility requires a recognized country in the old Italy region with North or South Italian primary culture, excluding Austria, Austria-Hungary, and the Holy Roman Empire; it must meet the 70% Italian-culture homeland-state threshold, and at least one country in the region must have Nationalism for candidate selection. KMPMP revises the unification plays and formation rewards. Italy receives claims and either the long unifier-prestige reward or ruler-Interest-Group support, plus Francoprovencal, Albanian, and Greek primary cultures; claims on unowned Rhône, Provence, Peloponnese, Attica, Crete, Thessalia, Macedonia, Albania, and Corsica; and Risorgimento (+5% army offense and defense, +5% technology spread, +2% birth rate, +5% construction efficiency, +1 percentage point conscription). It receives the medium-nation bonus. |
| Amazonia | Releasable state list is fixed to Mato Grosso, Amazonas, Guayana, Bolívar, Guaviare, Pastaza, Acre, and La Paz; AI release is disabled. |
| Cherokee | Releasable states are Arkansas and Oklahoma; AI release is disabled. |
| Egypt | Uses Sinai, Egyptian Desert, Matruh, Middle Egypt, Lower Egypt, and Upper Egypt; three states are required; AI release is disabled. |
| Occitania | Uses Provence, Languedoc, Guyenne, Auvergne-Limousin, and Aquitaine, removing Rhône from the release list; AI release is disabled. |

KMPMP uses fixed state lists for releasable countries so they work with its culture changes.

## Country and regional company changes

KMPMP adds companies, expands existing companies, and reworks others. The [complete company table](#company-building-scopes-and-prosperity-effects) lists every affected company by its in-game name, the buildings it can own, and its country bonus while prosperous. KMPMP also revises shared company templates for agriculture, plantations, fishing, forestry, oil, mining, food, household goods, textiles, steel, paper, shipyards, chemicals, motors, electrical goods, art, and furniture.

Company rules are in the [company definitions](../src/common/company_types); in-game names are in the [English company names](../src/localization/english/kmpmp_companies_l_english.yml).
## Complete country-facing change register

The sections below list the country-facing changes found in the supplied KMPMP files, compared with Victoria 3 version 1.15.2. They cover country setup, diplomacy, laws and political groups, national content, country formation, companies, and regional economic values.

### Additional start and diplomacy changes

| Area | Complete change |
| --- | --- |
| All countries | A day-one event applies the selected KMPMP game rules to every country. Railways in every country start subsidized. Central American states receive a one-time −1 radical adjustment. |
| Mexico (MEX) | A lobby against the United States is assigned to the Devout and Landowners when a matching lobby exists. The country also receives its player-only start event and technologies listed above. |
| China (CHI) | Receives a day-one event that checks whether China is player-controlled before applying its China buff. |
| Bolivia and Brazil | Bolivia loses 30 infamy at start and receives the player-dependent Peru liberty-desire adjustment; a player-controlled Brazil receives the event that resolves its initial Brazil wars. |
| Territorial setup | Persia receives non-Persian state slices in Laristan and claims unowned Greater Persian regions. Egypt gives the Ottomans claims on each state region it owns at start. Gotland starts unincorporated, and Kuban loses the Ukrainian homeland. |
| Country balance | Start tiers are in the earlier balance table. Monthly updates reassign tiers to formed Arabia, Italy, Iberia, Scandinavia, Parthia, Latin Empire, United Netherlands, and the listed German tags, and apply Mexico, Brazil/Portugal, Japan, and Ottoman progression rules. |

The [global start script](../src/common/history/global/kmpmp_global.txt), [culture lists](../src/common/history/global/kmpmp_country_lists_global.txt), [central-American radical adjustment](../src/common/history/global/kmpmp_remove_radicals_global.txt), [Mexico lobby setup](../src/common/history/lobbies/kmpmp_lobbies.txt), and [China start event](../src/common/history/global/kmpmp_china_buff_global.txt) contain these changes.

KMPMP adds frigates to the largest existing fleet for each country below; these are ship additions, not the fleet’s final total.

| Country | Frigates added |
| --- | ---: |
| Prussia (PRU) | 9 |
| Austria (AUS) | 5 |
| Sweden (SWE) | 5 |
| Two Sicilies (SIC) | 2 |
| Sardinia-Piedmont (SAR) | 5 |
| Portugal (POR) | 4 |
| Spain (SPA) | 14 |
| United States (USA) | 6 |

#### Historical diplomacy differences

| Vanilla entry or relation | KMPMP 1.15.2 change |
| --- | --- |
| Holy Alliance: Russia–Austria, Prussia–Austria, and Prussia–Russia | Binding period changes from 35 to 28 years for each of the three defensive-pact treaties. |
| Quadruple Alliance: Great Britain–Portugal | Binding period changes from 10 to 1 year. The conditional foreign-investment-rights article remains conditional on the relevant DLC feature. |
| Russian guarantee of Montenegro | Binding period changes from 35 to 18 years. |
| Treaty of Adrianople: Russia–Wallachia and Russia–Moldavia | Each binding period changes from 30 to 17 years. |
| Quadruple Alliance relations involving Spain | Removes the Great Britain–Spain, France–Spain, France–Portugal, and Spain–Portugal treaties. |
| French guarantee of Belgium | Removed. |
| Austrian guarantees | Removes the guarantee articles for Tuscany, Parma, and Modena. The Austrian–Tuscan trade articles remain. |
| Prussian military mission to Turkey | Removed. |
| Hormuz treaty port | Removes the Oman–Persia treaty-port and money-transfer treaty. |

The separate [starting truce script](../src/common/history/diplomacy/kmpmp_truces.txt) adds bilateral truces: Russia–Persia for 12 months, France–Sardinia-Piedmont for 12 months, France–Spain for 24 months, Portugal–Spain for 60 months, and Portugal–Brazil for 84 months. The full treaty rules are in the [historical treaty definitions](../src/common/history/treaties/00_historical_treaties.txt).

#### Country-to-country diplomatic actions

These are shared rules available to countries, rather than bonuses limited to a specific starting country.

| Replaced or added action | KMPMP change |
| --- | --- |
| Increase/damage relations | Both actions cost 50 influence (vanilla comments show 150 for increase and 100 for damage); relations change at 3 points per day to a ±50 cap. Decentralized countries are excluded and AI proposal rules are adjusted. |
| Break truce | Adds a per-target restriction against repeated use, a scaled diplomatic incident, +10% radicals multiplied by the penalty scale, and a five-year penalty modifier. AI will not propose it. |
| Redeem obligation | Adds a six-month bilateral cooldown so the same pair cannot repeatedly convert obligations into relation gain; redeeming gives +30 relations and clears the obligation. |
| Trade states | Adds a game-rule switch for whether poor relations block the action. It prevents isolated state swaps, creates six-month truces with third-party neighboring owners, and gives both participants a three-year influence-cost modifier. |
| Rivalry | Replaces the vanilla action with revised eligibility, diplomatic-catalyst and AI proposal rules. |
| Embargo | Replaces the vanilla action and adds restrictions for countries with trade privilege or foreign-investment-rights treaties. |
| Subject actions | Replaces raise payments, exempt from service, grant own market, support regime, and knowledge sharing with revised pact modifiers, liberty-desire effects, maintenance requirements, AI evaluation, and player-protectorate market rules. |
| Annex any subject | Adds a diplomatic action for eligible direct subjects; separate checks preserve the Doctrine of Lapse, Congress of Poland, Peru–Bolivia, Ryukyu, and Japanese serfdom cases. |
| Diplomatic-play changes | Allows targets to add war goals in revolutions and secessions. Replaces Scandinavian unification and leadership war goals with Nationalism-based requirements and adjusted interest-marker/infamy handling. |

The full changes are in the [diplomatic actions](../src/common/diplomatic_actions), [diplomatic plays](../src/common/diplomatic_plays/kmpmp_00_diplomatic_plays.txt), and [treaty articles](../src/common/treaty_articles). The treaty-article set includes alliance, defensive pact, guarantee independence, support independence, take on debt, transfer money, transfer state, foreign-investment rights, military assistance, goods transfer, prohibit trade with the global market, acquire a company monopoly, law commitment, and occupy state.

### Country ranks, laws, political groups, and identities

| Definition group | All KMPMP changes |
| --- | --- |
| Country ranks | Great Power prestige-relative threshold.75→.65 and +15% Power Bloc mandate progress; Major Power threshold.50→.40 and −15% influence; Minor Power threshold.15→.14 and −25% influence; Insignificant Power −25% influence; Unrecognized Major and Regional Powers +5% technology spread; Unrecognized Power +12.5% technology spread; Decentralized Power +40% building throughput. |
| Law definitions | Adds the law effects listed below. These effects apply only while the corresponding law is enacted; KMPMP does not enact them automatically. Multiculturalism and Militarized Police replace their vanilla definitions. |
| Interest-group definitions | Replaces the Armed Forces and Industrialists definitions, including their country/culture-specific traits, character ideology assignments, pop attraction, and leader weighting. See [Armed Forces](../src/common/interest_groups/kmpmp_00_armed_forces.txt) and [Industrialists](../src/common/interest_groups/kmpmp_00_industrialists.txt). |
| Interest-group traits | KMPMP adds effects to eleven existing traits and defines four KMPMP traits. The table below gives every changed effect and the country or religion rule that assigns the trait. KMPMP also changes the Armed Forces and Industrialists trait assignment rules. |
| Character ideology | Replaces the Fascist ideology definition, including its law stances, appearance trigger, and interest-group/non-interest-group leader weighting. |
| Power Bloc identities | Replaces Trade League, Sovereign Empire, Ideological Union, Military Treaty Organization, Religious, and Cultural identities. |
| Power Bloc principles | Adds Construction levels II and III; Internal Trade I/II/III; Market Unification I/II; Advanced Research III; Defensive Cooperation I/II/III; Aggressive Coordination I/II/III; External Trade I/II/III; Food Standardization I/II/III; Police Coordination I/II/III; Transport I/II/III; Military Industry I/II/III; Colonial Offices I/II/III; Foreign Investment I/II/III; Creative Legislature III; Freedom of Movement I/II/III; Exploit Members III; Sacred Civics II/III; Ideological Truth I/II/III; and Companies I/II/III. It also replaces the level lists for Creative Legislature and Ideological Truth. |
| Country naming and presentation | Mexico gains the Gran Colombia name after completing A True Gran Colombia. Austria can take the Three Crowns name/flag/map color when its primary culture, government, territory, and ruler meet the requirements. Parthia receives a monarchy-dependent country name and dedicated flag; the Latin Empire receives a dedicated flag. |
| Country ranks and formables | Adds Arabia, Parthia, and the Latin Empire as formable countries, changes rank thresholds and bonuses listed above, and requires Germany to control 78% of its listed states to form, versus 73% in vanilla. |

Sources: [country ranks](../src/common/country_ranks/kmpmp_00_country_ranks.txt), [laws](../src/common/laws), [interest-group traits](../src/common/interest_group_traits), [Fascist ideology](../src/common/ideologies/kmpmp_01_character_ideologies.txt), [Power Bloc identities](../src/common/power_bloc_identities/kmpmp_00_power_bloc_identities.txt), [Power Bloc principles](../src/common/power_bloc_principles/kmpmp_00_power_bloc_principles.txt), [country names](../src/common/dynamic_country_names), [flags](../src/common/flag_definitions), and [dynamic map colors](../src/common/dynamic_country_map_colors/000_kmpmp_dynamic_country_map_colors.txt).

#### What each changed law does

The effects below are added by KMPMP. They are not the law's full vanilla effects.

| In-game law | Actual KMPMP effect while enacted |
| --- | --- |
| State Religion | +5 acceptance for pops sharing the state religion. |
| Total Separation | +5 acceptance for pops sharing the state religion, a religious trait, or a religious trait group, and for pops with no shared religious trait. |
| State Atheism | +100 authority; +15 acceptance for pops sharing the state religion; -5 acceptance for pops with no shared religious trait. |
| Ethnostate | +8% birth rate; -10% migration attraction; migration restrictiveness -10 points. |
| National Supremacy | -5% migration attraction. |
| Cultural Exclusion | +5% migration attraction. |
| Multiculturalism | Full replacement: +100 acceptance for primary-culture pops; for other cultures, acceptance is +60 for shared heritage, +50 for a shared heritage group, or +20 without shared heritage; +50 for a shared language, +30 for its language group, or +20 without a shared language; +10 for a shared tradition and 0 otherwise. Also gives +50% separatist resistance but -50% separatist strength, -25% assimilation, and -10 primary-culture fervor from laws. Pops at all five acceptance levels can vote and work in government or the military; assimilation is allowed from Full Acceptance through Cultural Erasure. Wage penalties are -5% under Open Prejudice, -10% under Cultural Erasure, and -20% under Violent Hostility. Human Rights unlocks the law; it unlocks the ban on slavery. The Multiculturalism game option can disable it. |
| Frontier Colonization | In unincorporated states, +5% migration attraction and +10% colony growth generation. |
| Colonial Resettlement | In unincorporated states, +0.04 education access, +2% manufacturing throughput, and +3% infrastructure. |
| Colonial Exploitation | In unincorporated states, +3% throughput for agriculture, plantations, rubber, mines, oil extraction, and logging. |
| Autocracy | -10% migration attraction. |
| Technocracy | -1 maximum company and -1 free company charter; -20% consumption tax cost; +5% education access, +5% migration attraction, and +3% working-adult ratio. |
| Oligarchy | +50 authority; -5% migration attraction. |
| Landed Voting | +15% aristocrat investment-pool efficiency. |
| Wealth Voting | +5% migration attraction. |
| Census Suffrage | +10% migration attraction. |
| Universal Suffrage | +15% migration attraction. |
| Anarchy | +25% authority. |
| Single-Party State | -50 authority; -10% migration attraction. |
| Traditionalism | +5% market access price impact. |
| Interventionism | +5% government-dividend efficiency. |
| Agrarianism | +30% investment-pool efficiency for aristocrats and clergy; +5% for capitalists. |
| Industry Banned | +10% agriculture and plantation throughput; +15% production research speed and technology spread; +20% government-dividend efficiency; +0.1 education access for peasants. |
| Laissez-Faire | +5% loan interest rate; +10% building throughput. |
| Cooperative Ownership | +10% manufacturing and mining throughput; +50 diplomatic hostility impact with countries using a socialist economy. |
| Command Economy | -5% government-dividend efficiency; +25% tax capacity; -25% building throughput; -10% bureaucracy; +50 diplomatic hostility impact with countries using a socialist economy. |
| Private Schools | +0.003 wealth-based education access and +10% assimilation. |
| Monarchy | -10% aristocrat political strength; +10% Armed Forces political strength. |
| Presidential Republic | +5 legitimacy from the head of state; -5% legitimacy penalty from ideological incoherence; +50 authority; +5% migration attraction. |
| Parliamentary Republic | +10% migration attraction. |
| Theocracy | +5 legitimacy from the head of state; -10% legitimacy penalty from ideological incoherence; +50 authority; -10% radicalism under Full Acceptance, -20% under Second-class Citizen, and +10%/+20% loyalism under those same statuses. |
| Council Republic | +100 authority; +5% tax dividends; -5% decree cost; +50 diplomatic hostility impact with countries using a socialist government. |
| Corporate State | +1 maximum company and +1 free company charter. |
| Charity Hospitals | +2% mortality and +1.5% birth rate. |
| Private Health Insurance | -0.001 wealth-based mortality modifier; -7.5% pollution reduction from the health institution; +0.5 standard of living for upper and middle strata. |
| Secret Police | -0.05 suppression-attraction factor and -0.05 political-movement radicalism through the institution. |
| Guaranteed Liberties | -0.005 conscription rate and +8% migration attraction through the institution. |
| No Migration Controls | +25% leverage resistance; migration restrictiveness +20 points. |
| Migration Controls | Migration restrictiveness -10 points. |
| Local Police Force | -15% turmoil effects through the police institution. |
| Dedicated Police Force | -8% turmoil effects through the police institution. |
| Militarized Police Force | Full replacement: +2 maximum police investment; -10% turmoil effects; -5% radicalism from political movements and under Open Prejudice, Cultural Erasure, and Violent Hostility; +10% Armed Forces political strength; and +0.005 mortality during turmoil. Identification Documents unlocks the law; it is set as highly regressive and its enactment/imposition rules are revised. |
| Women in the Workplace | +1% birth rate. |
| Debt Slavery | +10% capitalist investment-pool efficiency. |
| Slave Trade | +1% birth rate; +5% plantation throughput; +25% aristocrat investment-pool efficiency; +10% technology spread. |
| Legacy Slavery | +2% birth rate; +10% plantation throughput; +10% aristocrat investment-pool efficiency; +5% technology spread. |
| Free Trade | +25% trade capacity. |
| Peasant Levies | -1 percentage point conscription rate; -10% military-goods cost. |
| Professional Army | Adds the conscription institution. Its effects include +0.3 percentage points conscription rate, +5% offense and defense, +5% Armed Forces political strength, and +1% military-goods cost. It also gives +5% morale loss, -0.5 percentage points conscription rate, +5 conscription-center levels, -65% experience gain, and +3 maximum conscription-institution investment. |
| National Militia | Adds the conscription institution: +0.5 percentage points conscription rate, +1% offense, +4% defense, and -2% mobilization cost. Also gives +5% morale loss, +30 barracks levels, -10% military-goods cost, +5% experience gain, and +3 maximum conscription-institution investment. |
| Mass Conscription | Adds the conscription institution: +1 percentage point conscription rate, +2% offense and defense, and -1% mobilization cost. Also gives +1 percentage point conscription rate, -15% training rate, +25 barracks levels, -10% experience gain, and +3 maximum conscription-institution investment. |

#### Interest-group trait effects and country assignments

These are the KMPMP changes to trait effects; any vanilla effect named alongside it remains part of the trait unless the row says it is replaced. Trait bonuses follow the approval threshold attached to that Interest Group trait.

| Trait and Interest Group | Countries or conditions that receive it | What KMPMP changes and what the trait does |
| --- | --- | --- |
| **Élan Vital** — Armed Forces | France and any country with French as a primary culture. | Adds +5% army defense to the existing +15% army offense. |
| **El Buen Jefe** — Armed Forces | Countries whose primary culture is Hispanophone, belongs to the European heritage group, and is not Iberian. This includes eligible Spanish-speaking Latin American countries; Spain itself is excluded by the heritage check. | Adds +10% army offense and +10% army defense to the existing +10% authority. |
| **Asceticism** — Devout | Countries with Hindu, Mahayana, Theravada, or Confucian state religion. | Adds +1% birth rate and reduces radical growth from standard-of-living changes by 15% at each of the five culture-acceptance levels. Its existing −15% radicals from political movements remains. |
| **Da’wat** — Devout | Countries with Sunni, Shiite, or Ibadi state religion, including Turkey’s separate Devout assignment. | Adds +5 percentage points to education access. The existing +20% conversion remains. |
| **Secular Shrine Theory** — Devout | Countries with Shinto state religion, including Japan. | Changes the conversion bonus from +15% to +5% and adds +2.5% birth rate. |
| **Work Ethic** — Devout | Countries with Protestant state religion, except the British East India Company. | Adds −2.5% mortality to the existing +5% company throughput. |
| **Zaibatsu Cooperation** — Industrialists | Japan. | Changes manufacturing-building tax from +10% to −10%, and adds +10% tax dividends, +5% state construction, and +5% authority. |
| **Kommerskollegium** — Industrialists | Sweden. | Adds +5% tax dividends to its existing +5% capitalist investment-pool efficiency and +10% mining-building tax. |
| **The Goods Must Flow** — Industrialists | Brazil when the relevant downloadable content is active. | Adds +10% production-technology research speed to the existing +10% infrastructure. |
| **Bacharéis** — Intelligentsia | Brazil when the relevant downloadable content is active. | Adds +10% Society-technology research speed and reduces radical growth from standard-of-living changes by 10% at each culture-acceptance level. Its existing −10% radicals from political movements remains. |
| **Wiener Walzer** — Landowners | Austria and Germany formed from Austria. | Adds +15% aristocrat investment-pool efficiency to the existing +15% prestige. |
| **Battotai** — Armed Forces | Japan after Meiji completion, if Japan opted into the start bonus. | Adds +12.5% army offense and defense and +2.5% morale damage; reduces army recovery by 5%. |
| **Banzai** — Armed Forces | Japan after Meiji completion, if Japan opted into the start bonus. | Adds +10% military-technology research speed and reduces radicals from conquest by 10%. |
| **An Army with a State** — Armed Forces | Prussia, the North German Federation, and Germany. | Adds +10% army offense and defense and reduces military-goods costs by 2.5%. |
| **Made in Germany** — Industrialists | Prussia, the North German Federation, and Germany. | Adds +2.5% manufacturing-building tax, +2.5% tax dividends, and +10% capitalist investment-pool efficiency. |

The Armed Forces and Industrialists definitions are also rewritten: KMPMP changes their culture- and country-specific trait assignments, names, ideologies, pop attraction, and character weighting. The country guide lists those assignments under the affected countries. Sources: [trait effects](../src/common/interest_group_traits), [Armed Forces assignments](../src/common/interest_groups/kmpmp_00_armed_forces.txt), and [Industrialists assignments](../src/common/interest_groups/kmpmp_00_industrialists.txt).

KMPMP adds four country options. **Age of Warfare** is player-only by default; it can be disabled or applied to every country. Each affected country gets a 25-year decaying modifier that raises Arms Industries, Artillery Foundries, and Munitions Plants throughput by 60%, lowers battalion mobilization-goods requirements by 30%, and lowers Small Arms, Ammunition, and Artillery input by 15%. **Trading States relations** ignores relations by default; the vanilla option requires at least neutral relations. **Multiculturalism** is allowed by default; the other option bans the law. **Protectorate markets** follow vanilla rules by default; the player-only option keeps protectorates of a player in their own markets until the Power Bloc adopts Market Unification III. The selected options are applied at game start. Details are in the [game options](../src/common/game_rules/kmpmp_game_rules.txt) and [protectorate market option](../src/common/game_rules/kmpmp_player_protectorate_game_rules.txt).

The culture-list script builds the shared groups used by KMPMP’s integration and formation content: West, Central, East, and South African; Middle Eastern; Persian; Afro-American; Mesoamerican; and North American Native. The American and South American aggregate lists are commented out in the active source, so they are not applied by this script. These lists support scripted culture changes and eligibility; they do not themselves convert pops. See [global culture lists](../src/common/history/global/kmpmp_country_lists_global.txt) and [culture effects](../src/common/scripted_effects/kmpmp_merge_cultures_scripted_effects.txt).

#### Country modifier effects

KMPMP uses temporary bonuses and penalties for game starts, national journal entries, decisions, military shortages, country size, diplomacy, and formation rewards. The tables later in this document translate each listed modifier into its direct gameplay effect. The country sections above explain when the larger rewards and penalties apply.

### Complete national journal-entry inventory

This inventory explains the changed and added entries in terms of who can use them, what completes them, and what the result does. Entries that are continuously checked are described as ongoing effects rather than one-time rewards. Four regional entries are explicitly marked unfinished in their English text; their current scripted effects are still listed here.

#### Replacements and revisions to existing national entries

| Journal entry | Who and when | What changed, what must happen, and what the result does |
| --- | --- | --- |
| Corn Laws | Countries that can activate the vanilla entry while Landowners are not marginal and Protectionism or Mercantilism is in force. | The entry requires grain to be priced more than 20% above base while powerful Landowners are in government. It tracks the Corn Laws campaign and its monthly events. Enacting Free Trade completes it and starts the vanilla follow-up event; completion adds 10% Laborer loyalists. Failure occurs if the Landowners become marginal. If their leader is not a market liberal, the follow-up can penalize the Landowners. |
| The Meiji Restoration | Japan. | The revised entry asks Japan to earn three progress points within 12 years. It requires completion of the Army and Economy objectives and either Diplomacy or the Iwakura Mission objective, depending on installed content. Success starts the Meiji reward event. If the timer expires after any progress, the success event still fires; if Japan made no progress, it fires the failure event. For Japan that opted into KMPMP’s starting bonuses, finishing before 1885 also grants the early-Meiji reward and the Battotai and Banzai Armed Forces traits. |
| The Sick Man of Europe | Ottoman Empire. | The main entry now allows 30 years and needs four progress points. Completion removes the Sick Man modifier, gives 7% loyalists, adds permanent Restored Fame, and starts the Ottoman reward event. Failure applies the decaying Dead Man of Europe penalty, marks Tanzimat failure for 20 years, removes Rumelian tradition from Albanian, Bosniak, and Sephardic cultures, and can start the Great Eastern Crisis if that content is active. KMPMP removes the vanilla result that made Turkey unrecognized. If the Ottomans made partial progress, the failure event can still offer the reward choices at reduced strength. |
| Tanzimat: Education Reform | Ottoman Empire during the Sick Man chain. | The literacy target is a rise of 20 percentage points from the starting value. A university must also be level 5 or higher and more than 90% occupied. Completion adds one point to the main Sick Man entry. The display scales literacy progress for readability; it does not change the actual target. The education entry is removed when the main chain ends. |
| Opium Wars | Great Britain and China through the shared Opium Wars entry. | The successful end condition now recognizes the target opening Free Trade, granting foreign investment rights, or allowing a British treaty port in its territory after the target has the war-loss marker. The successful path fires the follow-up event after five days. Timeout or failure gives every subject of the affected country +60 liberty desire, then cleans up the entry and its variables. |
| Strike! | Appears after Political Agitation and Human Rights, if the country is not a Council Republic, Trade Unions are non-marginal with at least 10% clout, and Industrialists are non-marginal. | It can activate when the Trade Unions are out of government with approval below 0; Workplace Safety or Social Security is below level 3; and an incorporated state has laborers or machinists with at least 20% radicals plus a worker pop employed in manufacturing, mining, or private infrastructure with standard of living below 15 and acceptance level 4 or higher. The strike has a 60-month progress target and event pulses. At the end, the event appeases or crushes the strikers according to whether the government chose a negotiator or breaker. Council Republic invalidates and ends the entry. |
| Great Reforms: Military Reform | Russia while Alexander II remains ruler. | Completion checks Rifling, Mass Conscription, a level-3-or-higher munitions plant, and at least half the army using the most advanced infantry method unlocked by Russia’s technologies: Skirmish Infantry, Trench Infantry, Squad Infantry, Mechanized Infantry, or Interwar Mechanized Infantry. Every barracks must avoid the scripted goods-shortage and no-organization methods. Completion adds one Great Reforms progress point. The entry is cleaned up if Alexander II stops ruling. |
| Populating South America | Eligible country in South America with a European-heritage primary culture. It must have Quinine, at least Minor Power rank, average standard of living 10, peace, independence, an open migration law, and a qualifying cultural law. | The population target is recalculated weekly from incorporated South American states: 1.3 times 1.5 million per state, bounded between the starting incorporated population plus 4 million and plus 10 million. Reaching it starts the migration-completion event and grants the populated South America modifier. The entry also has an in-entry control to manage the migration campaign. |
| Populating Central America | Eligible country in Central America under the same technology, rank, standard-of-living, peace, independence, migration-law, and cultural-law checks as the South American entry. | The weekly target is 1.3 times 1 million per incorporated Central American state, with the same starting-population floor and ceiling of +4 million and +10 million. Meeting it starts the completion event and grants the populated South America modifier. The entry includes the migration control button. |
| Populating the American West | Eligible North or Central American country with a European-heritage primary culture, Quinine, at least three incorporated Pacific Coast or Great Plains states, Minor Power rank or higher, average standard of living 10, peace, independence, and qualifying laws. | The weekly target is 1.3 times 500,000 per incorporated Pacific Coast or Great Plains state, bounded by starting incorporated population plus 4 million to plus 10 million. Meeting it starts the completion event and grants the populated South America modifier. Losing all qualifying states invalidates the entry. |
| The First Carlist War | Spain and Carlist Spain while the war is active. | The revised entry tracks the war’s guerrilla-warfare objectives and decisive end. The winner receives a 20-year decaying reward. If the Carlists win, Carlist Spain becomes Spain, moves its capital to New Castile, incorporates Spanish homeland states, and records the Carlist victory. If the government side wins, KMPMP starts the Spanish rebuild event and the related cleanup. |
| The Seminole Wars | United States while the Seminole conflict is active. | Completion requires the United States to own all Florida and the Seminole country to be gone. A follow-up event moves Cherokee pops from Florida to Oklahoma if the Cherokee Nation is a subject owning Oklahoma; otherwise Florida gets a temporary resettlement modifier. If the Seminoles or Muscogee control Florida, the entry fails and removes the United States’ Florida claim. |
| The Algerian Departments | France during the Algerian-department campaign. | The entry applies resistance modifiers to Algiers, Oran, and Constantine and can trigger monthly events. France completes it when all three regions are fully owned, incorporated, not split, and below 10% turmoil, plus either French culture reaches 20% in a state in each region or France has at least medium Sunni religious acceptance and at least level-3 acceptance of Misri culture. Completion starts the integration event. Losing all three regions starts the failure event. |
| The Peru-Bolivian Confederation | Bolivia and its South American subjects, with other South American countries involved in the situation. | Bolivia gains progress monthly while its legitimacy is at least 50. The 120-month goal can be completed only while Bolivia is at peace, has at least one of South Peru, North Peru, Iquicha, or Peru as a subject, and none of its qualifying South Andean, Amazonian, or Peruvian-culture subjects is in revolution. Victory starts the confederation event and resolves participants’ support or opposition; failure occurs if Bolivia disappears, becomes a subject, or loses all qualifying subject states while at peace. KMPMP’s culture-merge outcome uses Amazonian rather than Quechua as the merged primary culture. |
| The Oregon Border Dispute | United States when Britain or a British subject owns territory in Washington, Oregon, or Idaho. | The United States can settle peacefully by mapping the Oregon Trail, marking interest in the Pacific Coast, owning Montana and Wyoming, and having cordial relations with Britain; by owning Washington, Oregon, and Idaho outright; or by making the Oregon Republic a subject. The peaceful outcome adds Yankee homelands to Washington, Oregon, Idaho, and British Columbia if the United States owns a part of it, then starts the British event. If relations are poor, the entry opens Annex Oregon and gives the United States claims. |
| Annex Oregon | United States after the Oregon dispute requires annexation. | Completes when the United States uncontestedly owns all Washington, Oregon, and Idaho. The outcome adds Yankee homelands to all three regions. |
| The Schleswig-Holstein Question | North or South German countries in the German Confederation, excluding Austria. | Schleswig-Holstein or Holstein can resolve it if independent. Lubeck can resolve it by owning, or having a subject own, the full Schleswig-Holstein region. For other German countries, Denmark must exist and the country must be at peace with Denmark; all state slices in the disputed region must be owned by North or South German primary-culture countries that are not Danish subjects. The resolver gets a long-term modifier and sets the shared solved flag; the other participants’ entries fail. |
| German National Identity | North or South German country in the German Confederation, except Prussia and Austria. | Both culture-fervor conditions must be met: North German fervor at least 40 and South German fervor at least 30. The entry then starts the identity event, which selects an eligible Great or Major Power candidate matching the country’s North or South German primary culture where possible. |
| North German Confederation | North German unification candidate after the Schleswig-Holstein Question is resolved and Nationalism is researched. | Completion starts the North German Confederation event if the country is the sole eligible candidate. A rival contender can make the entry fail. |
| South German Federation | South German unification candidate under the same solved-Schleswig, Nationalism, and sole-candidate checks. | Completion starts the South German Federation formation event. A competing candidate prevents success. |
| German Unification | Selected unifier with Major Power rank, independence, Pan-Nationalism, and the unifier variable. | Meeting the revised conditions starts the German formation event. The separate formation rule requires 78% of the German state list. |
| The Matter of the Reichsland | North German Federation or Germany. | Germany or the North German Federation can complete it by fully owning Alsace-Lorraine before 1871. It then grants 5% loyalists, a five-year Reichsland modifier, and a one-year training bonus. If the state is not fully owned by 1871, the entry fails. |
| The Industrial Heartland | North German Federation or Germany from 1860. | If the country does not own and incorporate both Rhineland and North Rhine, the entry adds 8% radicals among both North and South German cultures and applies the lasting lost-industrial-heartland penalty. |
| The Border with the Germans | France from 1845. | If France owns all Alsace-Lorraine when the entry begins, it receives the historical-border modifier. The entry completes in 1871 and removes that modifier. Losing full control of Alsace-Lorraine causes failure and removes it earlier. |
| Humiliated by the Germans | France after the scripted loss of Alsace-Lorraine. | A seven-year recovery timer starts. If France has not regained all of Alsace-Lorraine when the timer expires, it receives the Humiliated by the Germans penalty. Taking the region back completes the entry without the penalty. |

#### Formation, territorial ambition, and regional standing

| Journal entry | Who and when | What must happen and what the result does |
| --- | --- | --- |
| Adriatic Empire and Maintain Adriatic Empire | Countries with North or South Italian primary culture, Austria, Turkey, or a country formed from Turkey; Pan-Nationalism is required to activate. | Fully owning at least 9 of Apulia, Abruzzo, Umbria, Romagna, Venetia, Istria, Croatia, Dalmatia, Montenegro, and Albania grants the permanent Adriatic modifier and opens the maintenance entry. The modifier gives +25% convoy construction efficiency, +5% ship offense and defense, +20% trade quantity, and +10% trade-center, port, and sulfur-mine throughput. Falling below 7 of the 10 states removes the modifier and reopens the original entry. |
| Reino Unido and Make Them a Protectorate | Brazil and Portugal receive the entry when either starts the one-use Reino Unido decision while both exist. | The decision starts the entry for both countries and gives Brazil claims on Beira, Estremadura, and Alentejo, and Portugal claims on Minas Gerais, Rio de Janeiro, and Bahia. With Nationalism and Egalitarianism, a puppet or dominion relationship lets one partner annex the other, add the partner’s main culture plus Afro-Brazilian and Paulista as primary cultures, and receive the Reino Unido modifier (+4.2% birth rate, +10% army offense and defense, +10% plantation and logging throughput, +15% university throughput, −10% decree cost). If Portugal no longer exists after Iberia forms, the Brazil-led fallback uses the Iberian route and the protectorate follow-up. The follow-up lets Brazil make Portugal a protectorate after taking Portugal’s three listed regions, or lets Portugal do the same after taking Brazil’s Minas Gerais, Rio de Janeiro, and Bahia; the partner must not already be a subject of the other country. |
| United Scandinavia | A country with Swedish, Danish, or Norwegian primary culture, after Scandinavia has formed. | Owning every Scandinavian state completes the entry and grants the permanent Greater Scandinavia modifier: +5% army offense and defense, +1% birth rate, −5% military-goods costs, +15 migration attraction, +1 expected standard of living, and +5% construction efficiency. If another country formed Scandinavia, the entry is invalid. |
| Baltic Empire and Preserving the Baltic Empire | Scandinavia after completing United Scandinavia. | Full ownership of Ingria, Kola, Pomerania, Lithuania, Riga, Tartu, Tallinn, and West Prussia grants the Baltic Empire modifier: +4% birth rate, −5% military-goods costs, +10 migration attraction, +1 expected standard of living, +5% construction efficiency, and −5% radicals from conquest. Losing any required region removes the modifier and reopens the entry. |
| Empire of the Three Crowns | Austria with Pan-Nationalism. | Austria must fully own Croatia, Slovenia, Bosnia, Wallachia, Moldavia, and Dobrudja, plus at least one state in each of Western and Eastern Serbia. Completion adds Serbian, Bosniak, Croat, and Romanian primary cultures and 20% loyalists of each; grants the Three Crowns modifier (+2% birth rate, +5 authority, +5% construction); and claims unowned Western and Eastern Serbia, Kosovo, Montenegro, Volhynia, Kiev, and Cherson. |
| A Step toward Greater Germany | Germany with Pan-Nationalism, after Austria is a rival or cannot rival Germany. Germany must fully own at least one of Austria, Tyrol, South Tyrol, Styria, Bohemia, or Moravia. | Starting the entry records progress and claims every unowned and unclaimed German homeland state. |
| On the Way to Greater Germany | Germany after completing A Step toward Greater Germany. | Fully owning at least four of Austria, Tyrol, South Tyrol, Styria, Bohemia, and Moravia adds Czech, Alemannic, and Sorb primary cultures and 7.5% loyalists among Czech, North German, and South German cultures. |
| Aragon’s Legacy | Spain or Iberia, once globally available and not already completed. | Fully owning and incorporating Sardinia and Sicily completes the entry and adds claims on Campania, Abruzzo, Apulia, and Calabria. It can be completed once across the campaign. |
| Unite the Homelands | Persia or its subject controls all of Herat and Sistan. | Completion annexes Persia’s subjects holding Greater Persian states, starts a results event, and claims unowned Pashtunistan, Tajikistan, Kirghizia, Uzbekia, Turkmenia, Merz, Khiva, Tianshan, Dzungaria, Jetisu, Semireche, and Kashmir. The event adds loyalists among Baluchi, Pashtun, Tajik, and Hazara cultures. |
| Fate in the East | Prussia, the North German Federation, or Germany. | Fully owning Greater Poland and Lesser Poland, plus Minsk or Riga, is required. If both Minsk and Riga are owned, the country must also own 7 of Vilnius, Lithuania, Tallinn, Tartu, Courland, Brest, Pskov, Vitebsk, Mogilev, Volhynia, Mazovia, Ingria, Kiev, and Chernihiv; if it owns exactly one of Minsk or Riga, it must own 8 of those 14 regions. The first completion gives 10% loyalists and the permanent Pax Germanica Ostensis modifier: +25% agriculture and ranch throughput, +15% logging throughput, +10% mine and oil throughput, and +2.5% birth rate. |
| Expand in the East and Securing the East | Germany-chain country after the first Fate in the East reward. | Owning all 18 listed eastern regions doubles the Pax Germanica Ostensis effects. The maintenance entry checks those holdings; losing any required region removes the doubled level and restores the standard reward, while reopening the expansion entry. |
| Successor of Gran Colombia | Mexico after incorporating Guatemala, San Salvador, Honduras, Nicaragua, and Costa Rica. | Completion claims Panama, Cundinamarca, Guaviare, Cauca, Ecuador, and Pastaza, then opens A True Gran Colombia. |
| A True Gran Colombia | Mexico after Successor of Gran Colombia. | Fully owning four of Panama, Cundinamarca, Guaviare, Cauca, Ecuador, and Pastaza completes the entry, gives 5% loyalists, and grants Glory in Latin America for five years (+10% minting, +15% weekly innovation, −15% loan interest, +100% mass-migration attraction, and +20% migration quota). It claims Cajamarca, Arequipa, Lima, Ica, La Paz, Tarapaca, Potosi, Antofagasta, Santa Cruz, and Jujuy, then unlocks United States of Latin America. |
| United States of Latin America | Mexico or the country continuing the Gran Colombia chain. | Fully owning five of Cajamarca, Lima, Ica, La Paz, Tarapaca, Potosi, Antofagasta, Santa Cruz, and Arequipa grants the permanent United States of Latin America modifier: +5% army offense and defense, +10 authority, minting, and influence, +10% mass-migration attraction, and +10% loyalists. |
| Manifest Mexico | Mexico. | The entry grants Manifest Mexico (+10 authority, +15% construction efficiency, +10,000 minting, +10 legitimacy, and +12% birth rate). After 1860, fully owning and incorporating all California while outside a United States subject, customs-union, or Power Bloc relationship completes it, removes the temporary modifier, and opens Consolidate California. Losing California, leaving it unincorporated, or entering one of those United States relationships removes the modifier and opens Restore Manifest Mexico. |
| Restore Manifest Mexico | Mexico after the Manifest Mexico conditions fail. | Fully owning and incorporating California while outside a United States subject, customs-union, or Power Bloc relationship restores Manifest Mexico and repeats the cycle. |
| Consolidate California | Mexico after Manifest Mexico succeeds. | Full ownership of California, Texas, Arizona, and New Mexico activates the claim phase; completion adds claims on those four regions. The final goal is Oregon, Washington, Idaho, Montana, Wyoming, Utah, Colorado, and Oklahoma; completing it adds Mexican homelands to those eight regions. |
| Regain Influence in America | Spain from the start. | Establishing cordial relations with Central America completes the entry, makes Central America a Spanish protectorate, and unlocks Spain’s one-use deal decision. It fails if Central America disappears or becomes another country’s subject. The decision opens a Mexico event with three choices: claims and a Central American puppet, ten years of economic cooperation, or return to the Spanish Empire; the last option costs Spain 30 infamy and changes Mexico into a Spanish protectorate with additional modifiers, radicals, and loyalists. |
| A Proud Nation | Turkey after the Sick Man chain is marked complete. | The player can use the We are ready button to complete immediately; otherwise it completes automatically after 1886. Completion removes the small-nation tier and applies the medium-nation tier. |
| China buff | Countries with Han primary culture, or Yi or Manchu primary culture plus a capital in North China, South China, Northeast Asia, Central Asia, or the Himalayas. | Applies +50% army offense, +50% army defense, and −50% morale loss. It is removed if the campaign’s China-is-player condition becomes true. |
| A Question of Honor | Japan from 1860 while it is a junior member of a customs union. | Japan receives Grow some Balls: +10% tax waste; +10% radical growth and −10% loyalist growth at every discrimination level; −15 base legitimacy; and −2 Interest Group approval. Leaving junior status removes the penalty. |
| Baby Boom | One-time entry for Sweden or Scandinavia, Portugal, Netherlands or United Netherlands, Bolivia, Federation of the Andes, Peru, Peru-Bolivia Confederation, Brazil, or Mexico. | After Pharmaceuticals is researched and average standard of living reaches 10, completion grants +5% birth rate for five years. The scripted reward is five years and +5%, regardless of the inaccurate comment in the source file. |
| Heir Schooling | Available through a character interaction for an heir aged 8 or younger; the ruler must not be a subject or personal-union junior. | Starting schooling gives the heir’s current Interest Group −2 approval for two years, marks the heir as in school for ten years, and adds 2 percentage points tax waste for ten years. A popup offers up to three non-marginal Interest Groups other than the heir’s current group, weighted toward groups with more clout; the chosen group gets +1 approval for two years. When the ten-year schooling period ends, the heir joins the selected group. If the heir dies first, the entry, cost modifier, and saved choice are removed. |
| Truce Broken with Another Country | Country that broke a truce; one entry is tracked for each target. | The target is added to a list of countries whose next truce must be honored. When a new truce is made with that target, the entry waits until it expires, then removes the restriction and allows another truce break against that country. |
| Subject Demobilization | A subject fighting in its overlord’s war. | The war-support meter gains one of ten points for every threshold reached from 45 down to 0. At 10 points, weekly processing blocks new mobilization and sends home mobilized armies that are not in battle. The entry and block are removed if the target war ends or the subject is no longer a participant. Fleets are not demobilized by this script. |
| Military Goods Shortages | Countries committed to a diplomatic play. | The play-start and participant-change actions add this entry to eligible participants. Each week, prices at least 50%, 60%, and 75% above base mark low, medium, and high shortages. Small-arms shortages reduce training by 10/15/30%; ammunition shortages reduce army recovery by 5/15/25%; artillery shortages reduce artillery-unit offense by 5/10/25%. Tank shortages reduce mechanized-infantry and tank offense and defense by flat 5/10/15 points. Radio shortages begin at medium and reduce specified modern infantry, artillery, and tank offense by 10/20%. The airplane shortage modifiers currently have no active stat effects. Leaving the play deactivates the entry and removes shortage effects; a later play can add it again. |
| Private Constructions Management | Player only; the decision adds this journal entry once. | Its controls can restrict domestic private construction to incorporated states; allow only expansion of existing buildings separately for manufacturing, agriculture, resources, or infrastructure; set a maximum number of levels to expand while construction is in progress; and apply profit checks. Individual building controls cover food, textile, furniture, glass, tooling, paper, chemical, explosives, synthetic, steel, motor, shipyard, automotive, and electrical industries; military industries; art academies; plantations; mines and other resource buildings; power plants; railways; ports; and trade centers. Outbound investment can be blocked separately for manufacturing, agriculture, resources, or infrastructure. Inbound investment from abroad can be limited to expanding existing manufacturing/infrastructure or agriculture buildings. For ordinary buildings, the profit filter requires at least 90% occupancy, 100% market access, and weekly profit of at least 200 times the building’s level. For railways, it requires 90% occupancy. When relative infrastructure is 1 or less, the railway must be subsidized or have positive weekly profit; when it exceeds 1, the railway needs 100% market access, no goods shortage, and weekly profit of at least 200 times its level. These controls affect private construction, not privatization, and do not cancel a construction already in progress if eligibility later changes. |
| Master of the Mediterranean Sea | Countries passing the entry’s eligibility script; the entry tracks the listed 13 Mediterranean states. | Owning at least 6 and strictly more listed states than every other eligible country grants Hegemony (+5% ship armor, +5% hull damage, +10% trade-center throughput). Owning all 13 grants Domination (+10% ship armor and hull damage, +20% trade-center throughput); every other eligible country gets −2 Armed Forces approval, −10% trade-center throughput, and −15% prestige. The 13 regions are Cyprus, Crete, East and West Aegean Islands, Malta, Sicily, Sardinia, Corsica, Balearic Islands, Ionian Islands, Tunisia, Al-Rif, and Libya. Island regions must be incorporated. The English entry is marked under construction. |
| Leader of Latin America | Eligible Latin American countries competing over the listed regions. | The active script grants Spearhead of Latin America (+5% birth rate, +25% prestige, +10 legitimacy, and +15% migration pull) to a country that controls at least 10 regions and strictly more than every other eligible country. There is no domination tier in the script. The 29 regions are Yucatan, Chiapas, Guatemala, San Salvador, Honduras, Nicaragua, Costa Rica, Panama, Antioquia, Cauca, Guaviare, Cundinamarca, Zulia, Miranda, Bolivar, Guayana, Santiago, Los Rios, Araucania, Patagonia, South Atlantic Islands, Rio Negro, Tucuman, Chaco, La Pampa, Buenos Aires, Santa Fe, Bajo Paraguay, and Alto Paraguay. The English entry is marked under construction. |
| Ruler of the East | Eligible countries competing over 13 East Asian and Central Asian regions. | Any eligible country controlling at least 7 regions gets Hegemony (+5% army offense and defense, +5% technology spread); once any country has it, every other eligible country gets −5% offense and defense, −5% technology spread, and +3% tax waste. Controlling all 13 gives Domination (+10% army offense and defense, +5% technology spread, +10% lead- and sulfur-mine throughput) and gives every other eligible country −10% army offense and defense, −10% technology spread, and +5% tax waste. The regions are Northern, Outer, and Southern Manchuria; Sariwon, Pyongyang, Seoul, Yangho, Busan; Uliastai, Urga, Alxa, Hinggan, and Shengjing. The English entry is marked under construction. |
| The Sugar Monopoly | Eligible countries competing over 9 Caribbean regions. | Controlling at least 5 regions grants Hegemony (+5% food-industry and port throughput). Controlling all 9 grants Monopoly (+10% food-industry and port throughput) and starts an event for other countries, which receive −5% food-industry and sugar-plantation throughput. The regions are West Indies, Puerto Rico, Haiti, Santo Domingo, Bahamas, West, Central, and East Cuba, and Jamaica. Island regions must be incorporated. The English entry is marked under construction. |

#### Prestige-good journal entries

KMPMP adds Premium Engines, Premium Silk, Premium Oil, and Premium Wine. Their company requirements, 36 qualifying months, +10% prestige effect, and the incorrect English flavor text for three goods are detailed in [KMPMP premium prestige goods](#kmpmp-premium-prestige-goods-exact-additions-and-effects).

Source files: [revised national entries](../src/common/journal_entries), [migration entries](../src/common/journal_entries/kmpmp_02_south_america_migration.txt), [German–French entries](../src/common/journal_entries/kmpmp_german_french_content.txt), [territorial chains](../src/common/journal_entries/kmpmp_manifest_mexico.txt), [regional entries](../src/common/journal_entries/kmpmp_regional_je.txt), [player investment-management entry](../src/common/journal_entries/zzz_zw_cpc_je.txt), and [entry names and descriptions](../src/localization/english).

#### KMPMP premium prestige goods: exact additions and effects

Vanilla Victoria 3 1.15.2 already has the general company prestige-good system and its 36-month journal-entry duration. KMPMP adds four new prestige-good types and four matching journal entries; none of these four names or definitions exists in the vanilla files. Each new good is based on an existing ordinary good and gives a **10% prestige bonus** to the country that produces it. KMPMP also adds the matching prestige-good eligibility and unlock check to the named company below. The journal entries unlock production access; they do not create buildings or switch a building's production automatically.

| Readable name and company | Exact difference from vanilla | When it appears, what must happen, and what it does |
| --- | --- | --- |
| **Premium Engines** — Basileiades, the Greek company | Adds a new prestige good based on **engines** and lets Basileiades qualify to develop it. KMPMP adds the good to that company's possible prestige goods and gates its use on the company's unlock variable. | The inactive entry is shown when Basileiades can produce the good but is not already producing it and has not unlocked it. It can activate once the company is prosperous. Its monthly timer advances only while Basileiades remains prosperous and engines rank in the top three for production; the completed goal is 36 qualifying months. Completion sets the unlock on Basileiades and notifies the country. Buildings owned by the company can then choose Premium Engines; producing it gives the country the good's +10% prestige bonus. |
| **Premium Silk** — Căile Ferate Române (CFR), the Romanian company | Adds a new prestige good based on **silk** and lets CFR qualify to develop it. KMPMP adds silk plantations to CFR's supported building types as well as the possible-good and unlock checks. | The same company, prosperity, top-three production-rank, and 36-month rules apply, checked against silk. Completion unlocks Premium Silk for CFR's buildings and sends the country a notification; producing it gives the country +10% prestige. |
| **Premium Oil** — Steaua Română (Romanian Star) | Adds a new prestige good based on **oil** and lets Steaua Română qualify to develop it. KMPMP adds the possible-good and unlock checks to the company. | The same company, prosperity, top-three production-rank, and 36-month rules apply, checked against oil. Completion unlocks Premium Oil for the company's buildings and sends the country a notification; producing it gives the country +10% prestige. |
| **Premium Wine** — Centro Vitivinícola Nacional, the Argentine wine company | Adds a new prestige good based on **wine** and lets Centro Vitivinícola Nacional qualify to develop it. KMPMP adds the possible-good and unlock checks to the company. | The same company, prosperity, top-three production-rank, and 36-month rules apply, checked against wine. Completion unlocks Premium Wine for the company's buildings and sends the country a notification; producing it gives the country +10% prestige. |

**Campaign timing:** none of the four entries has a fixed start year or a separate technology requirement in its KMPMP definition. It becomes visible when its company can potentially produce the good; it becomes activatable when that company is prosperous. The monthly counter only rises while the company is prosperous and its base good meets the top-three production-rank condition. If the company stops meeting that rank condition, the counter does not rise; completion also checks that the company is still prosperous and the rank condition still holds. If the selected company no longer exists while the entry is active, the vanilla rebind effect can select another qualifying company and resets the counter. The source files do not provide a mod release date for when these definitions were first added.

**Localization issue:** the English flavor text for Premium Silk, Premium Oil, and Premium Wine incorrectly says the company is entering the global **engines** market. Their actual definitions and journal-entry checks use silk, oil, and wine respectively; the table above follows the scripted effects.

Definitions: [KMPMP prestige goods](../src/common/prestige_goods/kmpmp_prestige_goods.txt), [journal entries](../src/common/journal_entries/kmpmp_prestige_goods_je.txt), [European companies](../src/common/company_types/kmpmp_00_companies_europe.txt), the [Argentine wine company](../src/common/company_types/kmpmp_00_companies_cots.txt), and [English names and flavor text](../src/localization/english/kmpmp_prestige_goods_l_english.yml). The comparison uses the vanilla 1.15.2 prestige-good rules, journal-entry rules, and 36-month duration.

### Player-facing country decisions

These are the player-facing decisions added or replaced by KMPMP. The first table gives the country-specific decisions and what taking each one actually changes.

| Decision | Who can take it and requirements | Immediate effect and follow-up |
| --- | --- | --- |
| Emser Depeche | North German Federation only; Nationalism researched; at war with France; year 1871 or earlier; Germany does not exist; the North German Federation is not a German unification candidate. The decision is hidden after it has been used and only appears while Alsace-Lorraine is not fully owned. | Adds 8% North German loyalists and a four-year modifier: −10% military-goods cost, +15% army offense and defense, +10% kill rate and morale damage, and +15% training rate. It can be taken once. |
| Turn Your Eye on the South | North German Federation only; it must own some part of Alsace-Lorraine. Germany must not exist and the North German Federation must not be a German unification candidate. One use. | Adds claims on Franconia, Bavaria, Württemberg, Baden, and Rhineland unless the North German Federation already owns each full region. |
| Austro-Hungarian Agreement | Austria from 1845 onward, after Nationalism, if Hungarian is not already a primary culture. One use. | Enacts Racial Segregation if Austria does not already have it, then applies a five-year decaying reform penalty: −20% authority, −10% bureaucracy, and −10% influence. |
| Integrate the Mesoamericans | Mexico after Nationalism, once. | Adds Mayan as a primary culture, gives 5% Mayan loyalists and 5% countrywide radicals, grants +3% birth rate for five years, and applies decaying −10% authority and −10% bureaucracy for 20 years. |
| Integrate the Mesoamericans | Bolivia, Federation of the Andes, Peru, or Peru-Bolivia Confederation after Nationalism, once. | Adds Amazonian as a primary culture, gives 5% Amazonian loyalists and 5% South Andean radicals, grants +3% birth rate for five years, and applies decaying −10% authority and −10% bureaucracy for 20 years. |
| Start Reino Unido | Brazil or Portugal while both countries exist; the decision is globally one-use. | Adds Reino Unido to both countries’ journals. Brazil claims Beira, Estremadura, and Alentejo; Portugal claims Minas Gerais, Rio de Janeiro, and Bahia. The entry then handles the relationship, annexation, culture, and protectorate requirements described in the journal inventory. The surviving country receives the Reino Unido modifier: +4.2% birth rate, +10% army offense and defense, +10% plantation and logging throughput, +15% university throughput, and −10% decree cost. |
| Please give me the Japan buffs!!! | Japan only, after opting into the Japan starting bonuses; Meiji completion must be recorded, a normal Meiji reward modifier must exist, and the KMPMP Meiji reward must be missing. AI will never take it. | Opens Japan’s Meiji follow-up event to assign the missing Armed Forces traits and reward, then choose the post-Meiji claims. It is a recovery button for a missed event, not a separate additional reward. |
| A Mutually Beneficial Deal | Spain, after completing Regain Influence in America, while Mexico exists. One use; the decision opens a popup for Mexico. | Mexico chooses one of three offers. The first gives Mexico claims on Guatemala, San Salvador, Honduras, Nicaragua, and Costa Rica, lowers its relations with Spain by 50, and gives Spain claims on Texas and all 14 Mexican state regions it owned at the start. The cooperation offer gives Mexico a ten-year modifier; Spain then gets a separate accept-or-decline event. Accepting brings Mexico into Spain’s Power Bloc if needed and makes Central America a puppet if it still exists. The return-to-Spanish-Empire offer makes Mexico a Spanish protectorate, annexes Central America into Mexico if it exists, grants Mexico a permanent modifier, gives 10% of its pops radicals and 10% loyalists, and costs Spain 30 infamy. |
| Remove Everything Related to Stockpiling | Player country. AI will not take it. In multiplayer, the cleanup event only runs when there is no second player country. | Fires the stockpiling cleanup event: removes the stockpiling system’s buildings and stored country and market state. The source localization says to exit and disable the stockpiling mod immediately after using it; this decision is for removing that system from an ongoing save. |
| Private Constructions Management | Player country; one-time decision that adds the journal entry. | Adds the controls described below for domestic private construction, foreign investment in and from the country, building categories, profitability, and eligible states. |

The separate North German Federation formation decision is **modified, not disabled**. Prussia can still form the federation through the revised decision once its conditions are met; the formation and result are described in the [Prussia and German states country profile](COUNTRY_CHANGES_BY_COUNTRY.md#prussia-and-the-german-states).

#### Thirteen selectable player bonuses

The bonus decisions are visible to players, have zero AI chance, and can be taken only when the country is not under the 15-year selection lock. Taking one removes the previously selected bonus and applies the new one. The bonus itself has no fixed end date; it remains until replaced, except Unite the Workers of the World, which is also removed if its maintenance requirements stop being met.

| Bonus decision | Additional requirements | Full effect while active |
| --- | --- | --- |
| The Art of the Deal | No Interest Group requirement. | +20% artillery input cost; −20% ship supply efficiency; +15% authority; +400 influence; +20 diplomatic maneuvers; +7,000 minting; +13 weekly innovation; +15% technology spread. |
| Imperialist Overseas Empire | No Interest Group requirement. | −10% army offense and defense in owned territory; −15% ship supply efficiency; +10% income from subjects; −20% radicals from conquest; +20% trade advantage; +20% colony growth; +10% ship armor and hull damage; −20% unit supply consumption; in unincorporated states, +10% building throughput, +10 percentage points education access, and +5% construction efficiency; −10% port-connection cost. |
| Military-Industrial Complex | Armed Forces and Industrialists must each have at least 10% clout and positive approval. | +15% military wages; −5% military-goods cost; +10% army offense and defense; +10% production and military research speed; −10% Society research speed and spread; 10% less loyalist growth and 10% more radical growth from standard-of-living changes at all five cultural acceptance levels. |
| State Capitalism | No Interest Group requirement. | +150 authority; −25% capitalist investment-pool efficiency; −5% Society research speed and spread; +10% tax on dividends; −15.5% decree cost; +10% construction-sector throughput. |
| Autarky | No Interest Group requirement. | −30% trade advantage; −10% decree cost; +2.5% state construction efficiency; +15% army offense and defense on owned territory; +10% throughput for agriculture, mines, fishing, whaling, oil extraction, rubber, and universities; +150 authority. |
| Social & Welfare State | Intelligentsia must have at least 10% clout and positive approval. | −100 authority; −10% company throughput bonus; −10% production and −5% military research speed; +40% government wages; +10 percentage points education access and +0.5 percentage points per wealth level; +3% birth rate; +15% university throughput; 10% more loyalist growth at all five cultural acceptance levels; +15% Society research speed. |
| Corporative Socialism | Trade Unions must have at least 15% clout and +5 approval. | −5% production and Society research speed and spread; +5% dividend tax, manufacturing tax, and mining tax; −20% mobilization-goods requirements; +150 authority; +2% birth rate; −2% mortality. |
| Military Police State | Armed Forces need at least 25% clout and +10 approval; Petty Bourgeoisie need at least 20% clout and +10 approval. | −10% technology spread; −15% mass-migration attraction; −10% Society research speed; +2% birth rate; −2% mortality; +25% army offense and defense; 10% less radical growth from standard-of-living changes at all five cultural acceptance levels; +150 authority. |
| Tycoon Capitalism | Industrialists need at least 5% clout and +5 approval. | −10% military research speed; +4% mortality; +1 expected minimum standard of living for lower strata; +10% company throughput bonus, dividend tax, manufacturing tax, and state construction efficiency; +20% capitalist investment-pool efficiency. |
| Rhine Capitalism | No Command Economy or Council Republic. Armed Forces, Industrialists, and Trade Unions each need at least 15% clout and +5 approval. | −5% bureaucracy and authority; +10% manufacturing tax and dividend tax; +1 standard of living for all pops; +5 percentage points working-adult ratio; +2% birth rate; +5% army offense and defense; +15% minimum wages. |
| Unite the Workers of the World | Trade Unions need at least 20% clout; country must have Council Republic and Command Economy or Cooperative Ownership; it cannot have Landed, Wealth, Census, or Universal Suffrage or Single-Party State, and it cannot have an alliance. | +100 diplomatic maneuvers; −20% infamy generation; −10% military-goods cost; +10 base legitimacy; −25% radicals from conquest; +10 flat army offense and defense; −30% morale loss; −20% mobilization-goods requirements; +30% training rate. It notifies other player countries when chosen. Monthly checks remove the bonus and selection lock if the eligibility rules cease to hold. |
| Influential State | Year 1870 or later and the country leads a Power Bloc. | +800 influence; −10% infamy decay; +10% state construction efficiency; +50% leverage generation; +5 Power Bloc mandate progress. |
| Arsenal of Democracy | Wealth, Census, or Universal Suffrage; Presidential or Parliamentary Republic; Philosophical Pragmatism researched; Armed Forces at 20% clout and +10 approval; Intelligentsia at 15% clout and +10 approval. | −5% loan interest; +10% Arms Industries, Munitions Plants, and Artillery Foundries throughput; +10% army offense and defense; +2.5% ship armor and hull damage; +50 authority; +2 percentage points conscription rate. |

#### Private construction controls

Private Constructions Management adds a journal entry whose buttons govern private investment:

- **Domestic construction:** choose whether private investors may build only in incorporated states, whether they may expand only existing buildings, and whether to allow manufacturing and urban facilities, agriculture and ranching, resource buildings, or infrastructure and power. Infrastructure includes railways, power plants, trade centers, and ports; resource buildings include mines, logging, rubber, fishing, whaling, and oil.
- **Profitability filters:** when expansion is limited to existing buildings, ordinary buildings need at least 90% occupancy, 100% market access, and a building balance of at least 200 times its level. Railways use occupancy and infrastructure demand or a subsidy/positive-profit check, plus the profit threshold.
- **Outbound investment:** can be allowed or blocked separately for manufacturing, agriculture, resources, and infrastructure.
- **Inbound foreign investment:** can be allowed for expanding existing manufacturing, infrastructure, and agriculture buildings.
- **State-level ban:** the player-only **Ban Private Constructions** decree costs no authority and blocks domestic private construction in the state where it is active. It is checked alongside the journal-entry filters, so it can stop construction in a particular state without changing the country's settings for other states.
- **Scope:** these settings govern private construction. They do not restrict privatization, and construction already underway is not canceled if a building later fails the filter.

Definitions: [country decisions](../src/common/decisions), [player bonus decisions](../src/common/decisions/kmpmp_player_boost_decisions.txt), [bonus effects](../src/common/static_modifiers/kmpmp_player_boost_modifiers.txt), [stockpiling cleanup](../src/common/decisions/ase_decisions.txt), and [private construction entry](../src/common/journal_entries/zzz_zw_cpc_je.txt).

### Player-facing country events

| Event chain | What it covers |
| --- | --- |
| Algeria | The French department and Algerian integration chain. |
| Natural borders | French natural-border decisions and outcomes. |
| Brazil | Brazilian breakaway states and the slavery chain. |
| South America | Migration events and settlement outcomes. |
| Caucasus | The regional war, its resolution, and end-state events. |
| Italy | Italian unification events. |
| Dutch East Indies and Alkmaar | Country-breakup and release events. |
| Indigenous resettlement | North American resettlement events. |
| Country formation | German, Scandinavian, Iberian, and other formation outcomes. |
| Ottoman Empire | Sick Man of Europe rewards, failure, and reform outcomes. |
| Germany | Unification events and their follow-up outcomes. |
| Game start and national choices | Applies game options and opens China, Japan, Mexico, Sardinia, Persia, South American, Spanish, and regional journal-entry events. |
| Diplomacy and characters | Adds subject-annexation, heir education, obligation redemption, money-transfer, and law-enactment events. |
| Shared war and investment systems | Adds the Great War event chain and autonomous-investment stockpiling events. |

Country event files are in the [country events](../src/events) folder. Monthly and shared updates are listed under [game updates](../src/common/on_actions).

### Country systems that update during play

- **Country-size balance:** monthly checks apply small- and medium-country bonuses or large-empire penalties as a country rank changes; forming a new country updates the relevant bonus.
- **Formation and claims:** scripted checks support Arabia, Iberia, Italy, the Netherlands, Scandinavia, Parthia, and the Latin Empire. The earlier formable section lists their state and technology requirements.
- **Culture integration:** KMPMP groups cultures for its formation and integration rules. Separate effects can change a country primary culture, state homelands, or pop cultures; the shared lists alone do not convert anyone.
- **Military shortages:** small-arms, ammunition, artillery, radio, tank, and airplane shortages apply tiered penalties to training, recovery, offense, or defense where defined.
- **Territory checks:** national content can check whether a country or its subject controls a whole state region and whether it is incorporated. Island status and wartime support are also checked by related decisions and journal entries.
- **Monthly and war-end updates:** recurring checks refresh country-size and formation bonuses, regional journal-entry progress, German–French border status, player boosts, and protectorate-market handling. War-end checks remove temporary war effects.
- **Vanilla rule changes:** KMPMP changes capitulation after revolution, recognition after enforced war goals, strike completion, and several mechanized-unit presentation triggers.

The linked [country effects](../src/common/scripted_effects), [country conditions](../src/common/scripted_triggers), and [monthly game updates](../src/common/on_actions) show the implementation behind these player-facing rules.

### Shared company types and templates

KMPMP adds, revises, or extends shared company templates for agriculture, plantations, silk and dye, fishing, forestry, oil, mining, food, household goods, textiles, steel and metalworking, shipyards, chemicals, motors, electrical goods, paper, construction, art, and furniture. These templates change which buildings a company can own and which country bonus it grants when prosperous. Named regional and national companies are listed in the company table above; their supported buildings and prosperity bonuses are translated in the detailed company table below.

The company definitions are in the [company files](../src/common/company_types).

### Country-facing state-region economic changes

KMPMP changes the following arable-land values, resource caps, arable crop lists, and undiscovered resources against the supplied vanilla 1.15.2 state-region files. Values are vanilla → KMPMP. A dash means the resource cap is newly added or removed. Other state metadata is in the linked full regional definitions.

| Region file | State | All changed values |
| --- | --- | --- |
| Western Europe | Saxony | Arable land 100→140; iron 30→40; logging 6→16. |
| Western Europe | Styria | Sulfur cap —→15. |
| Western Europe | Scania | Arable land 20→30; iron cap —→5. |
| Western Europe | Rhineland | Arable land 55→70; iron cap —→20; logging 11→14. |
| Western Europe | Götaland | Arable land 35→50; iron 15→25. |
| Western Europe | Baden | Arable land 50→70; iron 15→25; logging 11→17. |
| Western Europe | Hannover | Arable land 60→90; fishing 4→10; logging 9→15. |
| Western Europe | Bavaria | Arable land 65→95. |
| Western Europe | Ruhr | Arable land 39→50; iron 10→35; logging 4→15. |
| Western Europe | Pomerania | Arable land 55→75; fishing 10→12. |
| Western Europe | Brunswick | Arable land 30→70. |
| Western Europe | Auvergne-Limousin | Sulfur cap —→25. |
| Western Europe | Eastern Norway | Arable land 20→40; iron 18→30. |
| Western Europe | Elbe | Arable land 30→65; fishing 5→10; logging 9→15. |
| Western Europe | North Rhine | Arable land 77→90; coal 25→35; iron 20→30; logging 7→15. |
| Western Europe | Brandenburg | Arable land 50→85; coal 44→60; logging 6→14. |
| Western Europe | Western Norway | Arable land 20→40; sulfur 20→30; undiscovered oil amount 0→25. |
| Western Europe | Anhalt | Arable land 75→100; coal 44→57. |
| Western Europe | Hesse | Arable land 80→95; iron 30→40; logging 8→13. |
| Western Europe | Normandy | Coal cap —→20. |
| Western Europe | Gelre | Iron cap —→20. |
| Western Europe | Burgundy | Coal cap —→20. |
| Western Europe | Schleswig-Holstein | Arable land 40→55; fishing 6→10; logging 6→10. |
| Western Europe | Northern Norway | Arable land 20→30; iron 18→25; sulfur 20→30; whaling 10→15. |
| Western Europe | Franconia | Arable land 80→110. |
| Western Europe | Lorraine | Coal cap —→20. |
| Western Europe | Svealand | Arable land 30→45; coal cap —→15. |
| Southern Europe | Croatia | Fishing 5→15. |
| Southern Europe | Lombardy | Arable land 110→130; iron 27→40; lead 19→30. |
| Southern Europe | Catalonia | Coal 14→24; iron 5→22; lead 6→37; logging 6→9. |
| Southern Europe | Cape Verde | Arable land 4→6. |
| Southern Europe | Dalmatia | Fishing 13→15. |
| Southern Europe | Northern Thrace | Coal cap —→30; fishing 6→12. |
| Southern Europe | Valencia | Coal 12→22; logging 5→10; sulfur cap —→20. |
| Southern Europe | Lower Andalusia | Arable land 67→95; logging 4→12. |
| Southern Europe | Sicily | Iron cap —→20. |
| Southern Europe | Asturias | Arable land 21→42; iron 5→40. |
| Southern Europe | Alentejo | Arable land unchanged; coal 4→30; fishing 6→4; iron 16→30; logging 2→10. |
| Southern Europe | Basque Country | Coal 4→60. |
| Southern Europe | Aragon | Coal 18→28; iron 5→22. |
| Southern Europe | Galicia | Fishing 8→12; iron 4→36. |
| Southern Europe | Calabria | Coal 16→30; iron 24→30. |
| Eastern Europe | Greater Poland | Logging 9→15. |
| Eastern Europe | East Prussia | Arable land 40→70; fishing 10→15. |
| Eastern Europe | Mazovia | Coal 24→54; iron cap —→30; logging 8→20. |
| Eastern Europe | Central Hungary | Arable land 110→130. |
| Eastern Europe | Northern Transylvania | Arable land 50→80; sulfur cap —→30. |
| Eastern Europe | Posen | Arable land 90→115; iron 24→36; logging 9→15. |
| Eastern Europe | Ruthenia | Iron cap —→30. |
| Eastern Europe | West Prussia | Arable land 40→70; fishing 10→13; logging 8→12. |
| North Africa | Middle Egypt | Arable land 50→60; logging 2→5. |
| North Africa | Upper Egypt | Arable land 40→60; logging 2→5. |
| North Africa | Lower Egypt | Fishing 6→10; logging 2→7; sulfur 20→30. |
| North America | Veracruz | Logging 6→13. |
| North America | Jalisco | Coal cap —→25. |
| North America | Mexico | Coal cap —→30; iron 9→20; lead 12→25; logging 7→15. |
| Central America | Santo Domingo | Arable land 30→40. |
| Central America | Bahamas | Arable land 10→30; tobacco plantation added to arable-resource list. |
| Central America | West Indies | Arable land 30→40. |
| South America | Ceará | Coal cap —→15; iron 18→20. |
| South America | Bahia | Coal cap —→20; iron 15→20. |
| South America | Lima | Arable land 40→77; iron 21→30; logging 11→20; sulfur 28→40. |
| South America | Antofagasta | Arable land 10→60; coal cap —→30; fishing 5→10; logging cap —→9. |
| Middle East | Adana | Arable land 15→30; iron cap —→20. |
| Middle East | Urmia | Arable land 50→70; logging 2→10. |
| Middle East | Kastamonu | Arable land 35→50; iron cap —→30; logging 11→15. |
| Middle East | Luristan | Arable land 40→53; logging 3→8. |
| Middle East | Persian Kurdistan | Logging 4→12. |
| Middle East | Aydin | Arable land 35→47; iron cap —→30; logging 5→10. |
| Middle East | Basra | Arable land 30→55. |
| Middle East | Erzurum | Iron 30→35; lead 36→46; logging 9→14; sulfur cap —→35. |
| Middle East | Lebanon | Iron cap —→20; logging 4→10. |
| Middle East | Tabriz | Coal 20→30; iron 20→35; logging 5→8. |
| Middle East | Mosul | Arable land 30→50; iron cap —→15. |
| Middle East | Mazandaran | Iron 11→31. |
| Middle East | Ankara | Arable land 65→85; opium plantation removed from arable-resource list. |
| Middle East | Palestine | Coal cap —→20; logging 5→10. |
| Middle East | Trabzon | Arable land 40→52. |
| Middle East | Konya | Arable land 40→58; fishing 6→12; logging 4→15. |
| Middle East | Irakajemi | Iron 7→27. |
| Middle East | Sistan | Iron 14→29. |
| Middle East | Baghdad | Arable land 40→55. |
| Central Asia | Azerbaijan | Undiscovered oil 100→150. |
| Central Asia | Kabul | Iron 10→1. |
| Central Asia | Greater Caucasus | Undiscovered oil amount —→60. |
| Central Asia | Baluchistan | Iron 20→10. |
| Central Asia | Herat | Iron 6→41. |
| East Asia | Outer Manchuria | Undiscovered oil 20→25. |
| East Asia | Hokkaido | Coal 59→56; iron 4→43; lead 5→50; logging 9→21; sulfur 22→47. |
| East Asia | Shikoku | Coal cap —→25; iron 4→30. |
| East Asia | Shengjing | Undiscovered oil 20→25. |
| East Asia | Kanto | Iron 3→9; undiscovered oil amount —→15. |
| East Asia | Tohoku | Arable land 80→100; coal 6→30. |
| Indonesia | South Sumatra | Undiscovered oil 20→25. |
| Australasia | North Island | Arable land 30→40. |
| Australasia | Western Australia | Arable land 36→110. |
| Australasia | Tasmania | Arable land 15→25. |
| Australasia | Northern Territory | Arable land 10→30. |
| Australasia | Queensland | Arable land 20→90. |
| Australasia | South Island | Arable land 30→50. |
| Australasia | New South Wales | Arable land 40→70. |
| Russia | Volhynia | Arable land 40→70. |
| Russia | East Karelia | Arable land 10→20. |
| Russia | Courland | Arable land 22→47; fishing 6→8. |
| Russia | West Karelia | Arable land 22→32. |
| Russia | Ostrobothnia | Arable land 15→25. |
| Russia | Kuopio | Arable land 25→35. |
| Russia | Kola | Arable land 2→12. |
| Russia | Oulu | Arable land 8→18. |
| Russia | Brest | Arable land 75→100. |
| Russia | Elizavetpol | Undiscovered oil amount —→30. |
| Russia | Lithuania | Arable land 56→66. |
| Russia | Riga | Arable land 38→63. |
| Russia | Uusimaa | Arable land 32→42. |
| Russia | Merz | Iron 21→6. |
| Russia | Tallinn | Arable land 22→50. |
| Russia | Tartu | Arable land 18→45. |

The complete state definitions are in the 13 [KMPMP state-region files](../src/map_data/state_regions). The table records every detected change to arable land, arable crop eligibility, capped resources, and undiscovered resources; it does not restate unchanged state fields.

The same state files also change state-trait assignment. Croatia, Dalmatia, Montenegro, and Istria gain Natural Harbors. Western Cuba, Bahamas, West Indies, Puerto Rico, Jamaica, and Haiti gain Caribbean Sea. Corrientes loses Paraná River; Basra and Baghdad lose Euphrates River; Diyarbakir loses Tigris River. The change is to the state’s active trait list.

KMPMP also changes the country effects of shared state traits:

| Trait change | Full set of affected traits and values |
| --- | --- |
| Construction throughput from terrain | Adds State Construction Efficiency: Scottish Highlands +10%; Northern Canadian Terrain +20%; Cascades +10%; Northern California Coastal Forests +10%; Great Basin Desert +25%; Floridian Wetlands +15%; Rocky Mountains +20%; Sierra Madre Occidental +10%; Sierra Madre Oriental +10%; Central American Cordilleras +10%; Atacama Desert +10%; Andes +10%; Alps +15%; Caucasus Mountains +20%; Congo Forest +20%; Sahara Desert +25%; Atlas Mountains +15%; Zagros Mountains +10%; Alborz Mountains +10%; Baluchistan Mountains +20%; Arabian Desert +25%; Mount Lebanon +5%; Himalayas +25%; Burmese Teak +10%; Indochinese Forest +10%; Borneo Rainforest +10%; Gobi Desert +25%; Taklamakan Desert +25%; Siberian Terrain +20%; Great Dividing Range +10%; Australian Desert +25%. |
| River and strait market access price impact | Adds Market access price impact +5% to Oresund, St. Lawrence, Ohio, Columbia, Orinoco, Uruguay, Paraná, Paraguay, Amazon, Elbe, Oder, Rhône, Loire, Seine, Po, Guadalquivir, Drava, Congo, Niger, Zambezi, Tigris, Euphrates, Ob, Brahmaputra, Mekong, Kapuas, Sarawak, Pearl, Angara, and Yenisei river/strait traits. Douro River receives +2.5%. |
| New Caribbean trait | Creates Caribbean Sea with +10% sugar-plantation and tobacco-plantation throughput; assigned to the six Caribbean states above. |
| Difficult terrain | Adds Difficult Terrain with a 10% construction penalty and Very Difficult Terrain with a 20% construction penalty; Dynamite disables both penalties. |

Definitions are in [construction state traits](../src/common/state_traits/vtm_construction_traits.txt), [river state traits](../src/common/state_traits/kmpmp_rivers_traits.txt), [KMPMP state traits](../src/common/state_traits/kmpmp_traits.txt), and [terrain state traits](../src/common/state_traits/vtm_generic_traits.txt).

## Shared technology, building, and production-method changes

These shared definitions affect country development even when they are not tied to one starting country. Starting technology and selected production-method choices are listed in the earlier start tables; this index lists the other active country-facing definitions in those source categories.

| Source file | All affected definitions |
| --- | --- |
| Technology additions and changes | KMPMP changes the effects of 33 existing technologies and adds 22 technologies. The effects, unlocks, and technology-tree connections are spelled out below. |
| Added era | Adds a sixth technology era. Each technology in this era costs 20,000 research points and currently uses a placeholder icon. |
| Building definitions | Adds Stockpile and Stockpile; adds KMPMP production-method groups to Suez Canal, Panama Canal, and Kiel Canal; adds Fortifications; replaces Power Plants; replaces Opium Plantations and Trade Center for the autonomous-investment system. |
| Production-method groups | Adds or revises Canal; Government Ownership; Fort Design; Construction Material; Heavy Armament; Light Armament; Operational Status; Tanks; Secondary; Stockpile Saving; Stockpile Saving Input; Stockpile Spending; Stockpile Spending Output; Passenger Trains; Railway System Standard; Facility Automation. |
| Industry production methods | Canned Meat; Electric Sewing Machines; Automatic Power Looms; Assembly Lines; Assembly Lines; Brine Electrolysis; Rayon; Electric Arc Process; Electric Engines; Assembly Lines; Assembly Lines; Arc-Welded Steamships; Radio Production; Bolt Action Rifles; Assembly Lines; Assembly Lines. |
| Agriculture and plantations | Slaughterhouses; Mechanized Slaughterhouses; Electric Fences; Refrigerated Storage; Refrigerated Rail Cars; Electric Rollers; Palm Groves. |
| Urban centers and monuments | Arcades; Electric Streetlights; Film Art; Increased Exchange; Mosque of Djenne; Sovereign Empire; Ideological Union; Military Treaty; Trade League; Religious Convocation. |
| Resource and port production methods | Electric Saw Mills; Refrigerated Storage; Refrigerated Rail Cars; Flash Freezing; Refrigerated Storage; Refrigerated Rail Cars; Flash Freezing; Steam-Powered Derricks; Combustion Engine Derricks; Cargo Port; Industrial Port; Modern Port. |
| Construction and tank production | Arc-Welded Buildings; Extensive Tank Production; Focus Tank Production; Prioritize Tank Production. |
| Railway production methods | Experimental Trains; Steam Trains; Joint Steam Trains; Electric Trains; Joint Electric Trains; Diesel Trains; Joint Diesel Trains; Cargo Prioritization; Wooden Passenger Carriages; Steel Passenger Carriages; Electric Passenger Carriages; Narrow-Gauge Railway; Standard-Gauge Railway; Broad-Gauge Railway; Electrified Railway; Hand Cranked Crane; Water-tube Boiler; Rotary Valve Engine; Steam Donkey. |
| Canal production methods | Canal; Toll Tariffs only; Electric Canal; Petro Canal; Bureaucrats Ownership. |
| Fort production methods | Wooden Palisades; Stone & Iron; Steel & Concrete; Mothballed; Bastion Forts; Polygonal Forts; Bunkers & Pillboxes; Mothballed; Parapet Cannons; Artillery Casemates; Gun Turrets; Mothballed; Normal Operations; Mothballed; Small Arms; Handcranked Machine Gun; Automatic Machine Guns; Mothballed. |
| Stockpiling production methods | Stockpile Saving; Stockpile Saving Input; Stockpile Spending; Stockpile Spending Output. |

The source definitions and exact changed inputs, outputs, modifiers, unlocks, and eligibility are in [technology](../src/common/technology), [buildings](../src/common/buildings), [production-method groups](../src/common/production_method_groups), and [production methods](../src/common/production_methods). These entries are shared country mechanics, not extra starting setup for a specific nation.

### Technology changes, explained

These research effects apply to every country that researches the technology. “Technology-tree links” names the technologies the game tree connects from; it does not claim that every displayed link is a hard research prerequisite.

#### Effects added to or changed on existing technologies

| Technology | Exact KMPMP effect |
| --- | --- |
| Flash Freezing | Adds +5% throughput to fishing wharves and +5% throughput to whaling buildings. |
| Electric Telegraph | Reduces radicals caused by conquest by 5% and reduces war support lost to casualties by 25%. |
| Military Statistics | Adds 1 maximum investment level to the conscription institution and reduces radicals caused by conquest by 5%. |
| War Propaganda | Reduces radicals caused by conquest by 5%; increases war support gained from battles by 25% and reduces war support lost from battles by 20%. |
| Wargaming | Adds 1 maximum investment level to the conscription institution. |
| Organized Sports | Reduces radicals caused by conquest by 5% and increases infamy decay by 10%. |
| Psychiatry | Increases infamy decay by 5% and reduces infamy generated by 5%. |
| Realism | Reduces infamy generated by 5%. |
| Nationalism | Reduces infamy generated by 3% and enables the homeland-based infamy reduction rule. |
| Postal Savings | Changes the cash-reserve bonus for buildings to +10%; the supplied vanilla version gives +30%, so this is a 20-point reduction. |
| Civilizing Mission | Reduces radicals caused by conquest by 5% and infamy generated by 5%. |
| Anarchism | Reduces radicals caused by conquest by 5%. |
| Socialism | Adds 5 percentage points to government-dividend efficiency. |
| Corporatism | Reduces radicalism growth under Full Acceptance by 10% and under Second-class Citizen by 5%; increases the effect of Market Access on state prices by 5%. |
| Pan-Nationalism | Reduces infamy generated by 5% and enables the shared-language infamy reduction rule. |
| Camera | Reduces infamy generated by 5% and reduces resistance to diplomatic leverage by 25%. |
| Philosophical Pragmatism | Increases infamy decay by 5% and reduces infamy generated by 5%. |
| Identification Documents | Increases the effect of Market Access on state prices by 5%. |
| Zeppelins | Reduces the effect of Market Access on state prices by 5%; vanilla sets this effect to zero. |
| Central Planning | Reduces government-dividend efficiency by 5 percentage points from vanilla’s zero and adds 1 maximum company. |
| Psychoanalysis | Increases infamy decay by 5%, and reduces radicals caused by conquest and infamy generated by 5% each. |
| Film | Reduces infamy generated by 5% and resistance to diplomatic leverage by 25%. |
| Multilateral Alliances | Reduces radicals caused by conquest by 5%. |
| Macroeconomics | Reduces the maximum number of companies by 1 from vanilla’s zero, reduces the effect of Market Access on state prices by 5%, and gives buildings +25% cash reserves. |
| Behaviorism | Increases infamy decay by 5% and reduces infamy generated by 5%. |
| Paved Roads | Adds 20 state trade capacity and increases the effect of Market Access on state prices by 5%. |
| Dynamite | Gives Combat Engineers +2 siege ability. |
| Standing Army | Adds 1 to the maximum level of state fortifications. |
| Napoleonic Warfare | Adds 1 to the maximum level of state fortifications. |
| Field Works | Adds 1 to the maximum level of state fortifications. |
| Breech-Loading Artillery | Adds 2 to the maximum level of state fortifications. |
| Defense in Depth | Adds 2 to the maximum level of state fortifications. |
| Concrete Fortifications | Adds 3 to the maximum level of state fortifications. |

#### New KMPMP technologies

| Technology | Effect or unlock | Technology-tree links |
| --- | --- | --- |
| International Tradehubs (era 5) | +10% port throughput. | Concrete Dockyards. |
| Lessons from the Great War (era 6) | +10% unit recovery rate; +5% army and navy offense and defense; +2 character advancement speed; reduces total combat width by 50%. | Mobile Armor; Chemical Warfare. |
| Anti Tank Defences (era 6) | +2 maximum fortification levels and +5% army defense. | Concrete Fortifications; Lessons from the Great War. |
| Combined Arms Strategy (era 6) | Unlocks the Close Air Support, Air Superiority, and Tactical Bombers mobilization options. | Military Aviation; Lessons from the Great War. |
| Interwar Tanks (era 6) | Unlocks Interwar Heavy Tank and Interwar Light Tank combat units. | Mobile Armor; Lessons from the Great War. |
| Rocket Technology (era 6) | Adds +1 siege ability. | Military Aviation; Chemical Warfare. |
| Rocket Artillery (era 6) | Unlocks the Rocket Artillery mobilization option. | Rocket Technology. |
| Interwar Mechanized Infantry (era 6) | Unlocks the Interwar Infantry combat unit. | NCO Training; Lessons from the Great War. |
| Blitzkrieg (era 6) | +30% occupation, +1 general advancement speed, +30% army movement speed, +5% army offense and defense, and +5 offense for Interwar Mechanized Infantry. | Stormtroopers; Lessons from the Great War. |
| Modern Farming (era 5) | +10% plantation throughput and +15% agriculture throughput; reduces harvest losses from floods, wildfires, extreme winds, and drought by 20%. | Nitrogen Fixation; Mechanized Farming. |
| Elastan (era 5) | +10% chemical plant throughput. | Art Silk. |
| Modern Communication (era 6) | +10% railway and electrics industry throughput. | Radio; Electric Railway. |
| Modern Drilling (era 6) | +15% oil-extraction throughput. | Compression Ignition; Electrical Capacitors; Oil Turbine. |
| Modern Foodproduction (era 6) | +20% livestock-ranch throughput and +10% food-industry throughput. | Dough Rollers; Flash Freezing. |
| Modern Infrastructure (era 6) | +15% railway and motor-industry throughput and +10% government-administration throughput. | Electric Railway; Compression Ignition; Arc Welding. |
| Cinema (era 6) | +10% electrics-industry throughput and +0.2 war support from technology. | Radio. |
| Highways (era 6) | −5% military-goods cost; automobile consumption gives +0.5 infrastructure; raises the population-based infrastructure cap by 40 and adds 1 population-based infrastructure; adds 40 state trade capacity. | Paved Roads. |
| Filmworks (era 6) | Reduces radicals caused by conquest by 5%, increases infamy decay by 10%, and increases assimilation and conversion by 50%. | Behaviorism; Mass Propaganda. |
| Vaccination campaigns (era 6) | Reduces health-system institution cost by 10% and mortality by 5%. | Antibiotics; Mass Propaganda. |
| Abolish the gold standard (era 6) | Gives buildings +75% cash reserves. | Macroeconomics; Modern Financial Instruments. |
| Public flights (era 6) | +10% state infrastructure and +10% railway and automotive-industry throughput. | Zeppelins; Paved Roads. |
| Globalism (era 6) | Adds 1 maximum company, +25% state trade capacity, and +10% supply-ship construction efficiency. | Multilateral Alliances; Modern Financial Instruments. |

The new technology definitions are in [the KMPMP production technologies](../src/common/technology/technologies/kmpmp_production.txt), [the KMPMP military technologies](../src/common/technology/technologies/kmpmp_military.txt), [the KMPMP society technologies](../src/common/technology/technologies/kmpmp_society.txt), and the [era definition](../src/common/technology/eras/kmpmp_eras.txt). Effects added to existing technologies are in the KMPMP technology injection files in [the technology folder](../src/common/technology/technologies).

#### Company building scopes and prosperity effects

For each affected company, this table shows the buildings it can own in KMPMP and the bonus it grants when prosperous. Other company rules, including where it can be founded and which prestige goods it can develop, are linked in the source files.

This table gives every affected company by its in-game name. It lists the buildings KMPMP allows it to own and the country bonus it grants when prosperous. For reworked companies, the listed building options and bonus are the resulting KMPMP setup.

| Company | What KMPMP changes | Buildings it can own | Bonus while prosperous |
| --- | --- | --- | --- |
| Misr Spinning and Weaving Company | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Loyalist gain under Full Acceptance: 10%; Loyalist gain under Second-class Citizen: 10%; Loyalist gain under Open Prejudice: 10%; Loyalist gain under Cultural Erasure: 10%; Loyalist gain under Violent Hostility: 10%; Dye Plantations throughput: 10% |
| Egyptian State Railways | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Railway, Opium Plantations, Motor Industries | Infrastructure per population: +20; Trade Capacity: 10%; Plantations throughput: 10% |
| Suez Canal Company | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Trade Center, Port, Shipyards | Trade Advantage: 25%; Tax Income: +50,000; Free Company Charters: +1 |
| Fundidora de Fierro y Acero de Monterrey | Adds the listed building options and prosperous-country bonus. | Railway, Motor Industries | Coal Mines throughput: 5% |
| El Águila | Adds the listed building options and prosperous-country bonus. | Motor Industries | Industrialist political strength: 10%; Mines throughput: 5% |
| Compañía de Salitres y Ferrocarril de Antofagasta | Adds the listed building options and prosperous-country bonus. | Coal Mines, Explosives Factory, Synthetics Plants | Infrastructure: 5% |
| Caribbean Petroleum Company | Adds the listed building options and prosperous-country bonus. | Motor Industries, Railway | Industrialist political strength: 15% |
| Bunge & Born | Adds the listed building options and prosperous-country bonus. | Livestock Ranches | Tooling Workshops throughput: 5%; Livestock Ranches throughput: 10%; Birth Rate: 2% |
| La Rosada | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Steel Mills, Arms Industries, Artillery Foundry, Iron Mines, Lead Mines, Coal Mines, Logging Camps | Defense: 5%; Iron Mines throughput: 15%; Offense: 5% |
| Peruvian Amazon Company | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Rubber Plantations throughput: 10%; Plantations throughput: 10% |
| Klabin Irmãos & Cia. | Adds the listed building options and prosperous-country bonus. | Dye Plantations, Synthetics Plants | Arts Academy throughput: 20% |
| Panama Canal Company | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Trade Center, Port, Shipyards | Trade Advantage: 25%; Tax Income: +50,000; Free Company Charters: +1 |
| Tersâne-i Âmire | Adds the listed building options and prosperous-country bonus. | Iron Mines | Motor Industries throughput: 10%; Ship Armor: -1.25%; Hull Attack Damage: 3.75% |
| Ottoman Consumer Company | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Technology Spread for Society: 15% |
| Allatini Mills | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Wheat Farms, Rye Farms, Tea Plantations, Food Industries, Vineyards | Food Industries throughput: 10%; Radicalism gain under Violent Hostility: -10%; Radicalism gain under Cultural Erasure: -10%; Radicalism gain under Open Prejudice: -10%; Loyalist gain under Full Acceptance: 10%; Loyalist gain under Second-class Citizen: 10%; Loyalist gain under Open Prejudice: 10%; Loyalist gain under Cultural Erasure: 10%; Loyalist gain under Violent Hostility: 10%; Birth Rate: 2% |
| Chemins de fer Orientaux | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Sulfur Mines throughput: 10%; Lead Mines throughput: 10% |
| Sunhwaguk | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Tobacco Plantations, Rice Farms, Food Industries, Fertilizer Plants, Vineyards, Opium Plantations, Coffee Plantations, Tea Plantations, Cotton Plantations | Technology Spread: 20%; Plantations throughput: 10% |
| Nam Định Textile Factory | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Technology Spread: -2.5% |
| Imperial Tobacco Corporation of Persia | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Dye Plantations, Sulfur Mines, Synthetics Plants | Technology Spread: 10%; Infrastructure: 15% |
| San Miguel | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Food Industries, Wheat Farms, Maize Farms, Rye Farms, Millet Farms | Radicals from Political Movements: -10%; Birth Rate: 6%; Mortality: -2% |
| B.Grimm | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Rice Farms, Opium Plantations, Logging Camps, Fertilizer Plants, Wheat Farms, Rye Farms, Millet Farms | Infrastructure per population: 10%; Food Industries throughput: 10%; Livestock Ranches throughput: 10%; Fishing Wharves throughput: 10% |
| Škoda Works | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Sulfur Mines throughput: 10%; Shrapnel Artillery Offense: 5%; Heavy Tanks Offense: 10%; Breakthrough Tank Offense: 10% |
| MÁVAG | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Iron Mines throughput: 10% |
| Manfred Weiss | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Defense: 5%; Coal Mines throughput: 10% |
| Galician Carpathian Oil | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Railway throughput: 5% |
| Österreichische Waffenfabriks-Gesellschaft | Adds the listed building options and prosperous-country bonus. | Explosives Factory | Offense: 5% |
| Estaleiro Mauá | Adds the listed building options and prosperous-country bonus. | Port | Iron Mines throughput: 5%; Infrastructure: 20% |
| Companhia Fiação e Tecidos de Pernambuco | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Cotton Plantations, Sugar Plantations, Textile Mills, Livestock Ranches, Dye Plantations, Rubber Plantations | Cotton Plantations throughput: 10%; Rubber Plantations throughput: 10% |
| Amadeo Rossi & Cia. | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Military goods cost: -5% |
| Compañía Estañífera de Llallagua | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Lead Mines, Iron Mines, Copper Mines, Sulfur Mines, Glassworks, Munition Plants | Lead Mines throughput: 10%; Industrialist political strength: 15% |
| Centro Vitivinícola Nacional | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Vineyards, Livestock Ranches, Coffee Plantations, Tea Plantations, Tobacco Plantations, Motor Industries | Prestige: 20%; Company Construction Bonus: 10% |
| Ferrocarril Central Córdoba | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Livestock Ranches throughput: 5%; Motor Industries throughput: 10% |
| Empresas Eléctricas Asociadas | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Infrastructure per population: 5%; Infrastructure: 5% |
| Compagnie du Congo | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Furniture Manufacturies throughput: -5%; Rubber Industry Employee Mortality: -10%; Textile Mills throughput: 10% |
| Société Franco-Belge | Adds the listed building options and prosperous-country bonus. | Coal Mines | Infrastructure: 5%; Iron Mines throughput: 10% |
| Nederlandse Petroleum Maatschappij | Adds the listed building options and prosperous-country bonus. | Rubber Plantations | Colony Growth Speed: 10%; Oil Rigs throughput: 10%; Railway throughput: 10%; Sulfur Mines throughput: 10% |
| Philips | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Power Plants throughput: 5% |
| Basileiades | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Motor Industries, Shipyards, Tooling Workshops | Supply Ships Construction Efficiency: 20%; Infrastructure: 5% |
| Kouppas | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Steel Mills throughput: 5% |
| Ericsson | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Innovation: 5%; Education access based on wealth: +0.005 |
| LKAB | Adds the listed building options and prosperous-country bonus. | Coal Mines | No prosperity bonus is set; only the company building options change. |
| Agers Mechaniske Værksted | Adds the listed building options and prosperous-country bonus. | Explosives Factory | Fishing Wharves throughput: 10%; Iron Mines throughput: 10% |
| Nokia | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Synthetics Plants throughput: -5%; Furniture Manufacturies throughput: 5%; University throughput: 5% |
| Ursus | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Motor Industries, Automotive Industries, Steel Mills | Wheat Farms throughput: 20%; Rye Farms throughput: 20%; Food Industries throughput: 10% |
| Lilpop, Rau i Loewenstein | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Steel Mills, Iron Mines, Tooling Workshops, Motor Industries | Motor Industries throughput: 10% |
| Companhia de Moçambique | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Cotton Plantations, Tea Plantations, Coffee Plantations, Tobacco Plantations, Logging Camps, Rice Farms | Colony Growth Speed: 10%; Colonial Growth Generation: 10% |
| Altos Hornos de Vizcaya | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Steel Mills, Tooling Workshops, Coal Mines, Iron Mines, Motor Industries, Arms Industries | Infrastructure: 10%; Defense: 10% |
| La España Industrial | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Textile Mills, Cotton Plantations, Silk Plantations | Innovation: 15%; Silk Plantations throughput: 15%; Dye Plantations throughput: 10%; Synthetics Plants throughput: 10% |
| Fábrica de Armas de Trubia | Adds the listed building options and prosperous-country bonus. | Fertilizer Plants | Defense: 5%; Military goods cost: -5% |
| Zastava oružje | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Arms Industries, Munition Plants, Artillery Foundry, Explosives Factory | Defense: 10%; Recovery Rate: 10%; Iron Mines throughput: 10%; Coal Mines throughput: 10%; Military goods cost: -5% |
| Chr. Hansen | Adds the listed building options and prosperous-country bonus. | Sulfur Mines, Iron Mines, Oil Rigs | Agriculture throughput: 15% |
| A.P. Møller | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Hull Attack Damage: 2.5%; Ship Armor: 2.5% |
| Căile Ferate Române | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Railway, Silk Plantations, Motor Industries, Livestock Ranches, Synthetics Plants | Infrastructure: 10%; Trade Capacity: 15% |
| Steaua Română | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Oil Rigs, Power Plants | Oil Extractors throughput: 20% |
| Société Mokta El Hadid | Adds the listed building options and prosperous-country bonus. | Coal Mines | Throughput in Unincorporated States: 10% |
| Dollfus-Mieg et Cie | Adds the listed building options and prosperous-country bonus. | Synthetics Plants | Silk Plantations throughput: 10%; Synthetics Plants throughput: 10% |
| Confédération générale des vignerons | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Vineyards, Food Industries, Motor Industries | Prestige: 15%; Vineyards throughput: 10%; Birth Rate: 2% |
| Forges et Chantiers de la Méditerranée | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Ship Armor: 2.5%; Breakthrough Tank Offense: 10% |
| Compagnie des mines d'Anzin | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Coal Mines, Iron Mines, Lead Mines, Sulfur Mines | Steel Mills throughput: 5%; Railway throughput: 10% |
| Rheinmetall | Adds the listed building options and prosperous-country bonus. | Coal Mines | Heavy Tanks Offense: 5%; Breakthrough Tank Offense: 5% |
| F. Schichau | Adds the listed building options and prosperous-country bonus. | Power Plants | Ship Armor: 2.5% |
| Siemens & Halske | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Motor Industries throughput: 10%; Steel Mills throughput: 5% |
| Preußische Staatseisenbahnen | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Army Speed: 10%; Coal Mines throughput: 10%; Iron Mines throughput: 10%; Sulfur Mines throughput: 5% |
| BASF | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Oil Extractors throughput: 5%; Sulfur Mines throughput: 5% |
| Sir W. G. Armstrong Whitworth & Co. | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Hull Attack Damage: 5% |
| John Brown & Company | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Supply Ships Construction Efficiency: 5%; Port throughput: 10% |
| Great Western Railway | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Radicals from Political Movements: 5%; Iron Mines throughput: 10%; Lead Mines throughput: 10%; Motor Industries throughput: 5%; Steel Mills throughput: 5% |
| Ilva | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Steel Mills, Iron Mines, Railway, Coal Mines | Railway throughput: 10%; Artillery Foundry throughput: 5%; Shipyards throughput: 5% |
| Gio. Ansaldo & C. | Adds the listed building options and prosperous-country bonus. | Munition Plants, Iron Mines | Hull Attack Damage: -2.5%; Army Offense: -5%; Defense: 10%; Offense: 10% |
| G. Ricordi & C. | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Loyalists from Political Movements: 10%; Loyalist gain under Full Acceptance: 15%; Loyalist gain under Second-class Citizen: 15%; Loyalist gain under Open Prejudice: 15%; Loyalist gain under Cultural Erasure: 15%; Loyalist gain under Violent Hostility: 15%; Paper Mills throughput: 10%; Sulfur Mines throughput: 10% |
| FIAT | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Army Defense: 5%; Light Tanks Offense: 10%; Recon Tank Offense: 10% |
| Stabilimento Tecnico Triestino | Adds the listed building options and prosperous-country bonus. | Port | Hull Attack Damage: 2.5% |
| Mitsubishi | Adds the listed building options and prosperous-country bonus. | Logging Camps, Synthetics Plants | Hull Attack Damage: 5%; Ship Armor: 5%; Aircraft Carrier Hull Attack Damage: 5% |
| Mantetsu | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Loyalist gain under Full Acceptance: 15%; Loyalist gain under Second-class Citizen: 15%; Loyalist gain under Open Prejudice: 15%; Loyalist gain under Cultural Erasure: 15%; Loyalist gain under Violent Hostility: 15% |
| Glasfabrik Ludwig Moser & Söhne | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Influence: 5%; Steel Mills throughput: 10% |
| Compañía Sansinena de Carnes Congeladas | Adds the listed building options and prosperous-country bonus. | Wheat Farms, Maize Farms, Rye Farms | No prosperity bonus is set; only the company building options change. |
| Königliche Porzellan-Manufaktur Meissen | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Arts Academy throughput: -5%; Synthetics Plants throughput: 5%; State Construction Efficiency: 5% |
| Russian American Company | Adds the listed building options and prosperous-country bonus. | Iron Mines | Colony Growth Speed: 10%; Conversion: 20%; Textile Mills throughput: 5% |
| Gebrüder Thonet | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Tooling Workshops throughput: 10% |
| Kinkozan Sobei | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Leverage Generation: 5% |
| Maple & Co. | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Furniture Manufacturies throughput: 10%; Rubber Plantations throughput: 10% |
| Anglo-Sicilian Sulphur Company | Adds the listed building options and prosperous-country bonus. | Iron Mines, Lead Mines | Explosives Factory throughput: 5% |
| Norsk Hydroelektrisk Kvælstofaktieselskap | Adds the listed building options and prosperous-country bonus. | Coal Mines | Food Industries throughput: 10% |
| John Holt and Company | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Plantations throughput: 5%; Bureaucracy Institution Cost Multiplier: -5% |
| Imperial Ethiopian Railway Company | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Livestock Ranches throughput: 5%; Tobacco Plantations throughput: 10% |
| Lanfang Kongsi | Adds the listed building options and prosperous-country bonus. | Port | Agriculture throughput: 5%; Home Offense: 10% |
| Abrau-Dyurso | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Radicalism gain under Full Acceptance: -20%; Radicalism gain under Second-class Citizen: -20%; Radicalism gain under Open Prejudice: -20%; Radicalism gain under Cultural Erasure: -20%; Radicalism gain under Violent Hostility: -20%; Morale Loss: -20%; Birth Rate: 2% |
| Society of Putilov Factories | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Hull Attack Damage: 2.5%; Ship Armor: 2.5% |
| Branobel | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Migration Attraction: -10%; Lead Mines throughput: 5%; Sulfur Mines throughput: 5% |
| Izhevsk Arms Plant | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Automotive Industries throughput: 10%; Army Defense: 5% |
| Savva Morozov & Sons | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Prestige: -10%; Livestock Ranches throughput: 10%; Logging Camps throughput: 10%; Tooling Workshops throughput: 10%; Furniture Manufacturies throughput: 10% |
| Da Afghan Nassaji Sherkat | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Textile Mills throughput: 10% |
| MM. Nicolas Portalis et Cie. | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Oil Rigs throughput: 10%; Legitimacy: +10 |
| Hanseong Jeongi Hoesa | Adds the listed building options and prosperous-country bonus. | Oil Rigs, Coal Mines, Motor Industries | Arts Academy throughput: 5%; Railway throughput: 10% |
| Kirgizian Mining Joint Stock Company | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Steel Mills throughput: 10%; Tooling Workshops throughput: 10% |
| Arthur Guinness Son & Co. Ltd | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Birth Rate: 6% |
| Oriental Development Company | Adds the listed building options and prosperous-country bonus. | Rye Farms, Coffee Plantations, Tea Plantations, Livestock Ranches, Tobacco Plantations, Opium Plantations, Cotton Plantations | Migration Attraction: 15%; Mortality: -1% |
| Turkish Petroleum Company | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Trade Capacity: 20%; Railway throughput: 10% |
| Standard Oil | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Railway throughput: -10% |
| United Fruit Company | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Infamy Decay: 25%; Cotton Plantations throughput: 10% |
| Ford Motor Company | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Automotive Industries throughput: 5% |
| Quality Grains Inc. | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Livestock Ranches throughput: 10% |
| Agricultural Development Society | Adds the listed building options and prosperous-country bonus. | Livestock Ranches | Livestock Ranches throughput: -10%; Food Industries throughput: -10%; Millet Farms throughput: 15% |
| Grand East Plantations Ltd. | Adds the listed building options and prosperous-country bonus. | Coffee Plantations, Cotton Plantations, Sugar Plantations, Vineyards | Radicalism gain under Full Acceptance: -5%; Radicalism gain under Second-class Citizen: -5%; Radicalism gain under Open Prejudice: -5%; Radicalism gain under Cultural Erasure: -5%; Radicalism gain under Violent Hostility: -5%; Motor Industries throughput: 10% |
| Standard Colonial Products | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Coffee Plantations, Tea Plantations, Tobacco Plantations, Vineyards, Cotton Plantations, Opium Plantations, Sugar Plantations | Colony Growth Speed: 10%; Railway throughput: 10% |
| Silk & Dye Inc. | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Influence: 5%; Textile Mills throughput: -10%; Infamy Decay: 10% |
| Combine of Fisheries | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Shipyards throughput: 10% |
| Fish and Meat Company | Adds or updates this company definition. | Fishing Wharves, Livestock Ranches, Food Industries, Cotton Plantations, Wheat Farms, Rye Farms, Rice Farms, Logging Camps | Food Industries throughput: 10%; Capitalists Investment Pool contribution efficiency: 5% |
| United Forestry Conglomerate | Adds the listed building options and prosperous-country bonus. | Textile Mills, Electrics Industries, Paper Mills, Furniture Manufacturies | No prosperity bonus is set; only the company building options change. |
| Consolidated Petroleum | Adds the listed building options and prosperous-country bonus. | Motor Industries, Iron Mines, Opium Plantations, Sulfur Mines, Lead Mines | Migration Attraction: -10%; Mines throughput: 10%; Oil Extractors throughput: 10% |
| Precious Metals Syndicate | Adds the listed building options and prosperous-country bonus. | Coal Mines, Sulfur Mines, Iron Mines | Minting: 5%; Loyalist gain under Full Acceptance: 5%; Loyalist gain under Second-class Citizen: 5%; Loyalist gain under Open Prejudice: 5%; Loyalist gain under Cultural Erasure: 5%; Loyalist gain under Violent Hostility: 5% |
| Metal Mining Consortium | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Steel Mills throughput: 5% |
| Standard Minerals | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Fertilizer Plants throughput: 5%; Synthetics Plants throughput: 15% |
| Premium Foods | Adds the listed building options and prosperous-country bonus. | Rice Farms, Rye Farms, Millet Farms | Rye Farms throughput: 10%; Wheat Farms throughput: 10% |
| Paper & Pulp Inc. | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Paper Mills, Logging Camps, Dye Plantations, Synthetics Plants, Sulfur Mines, Coal Mines | Bureaucracy: 10% |
| Premium Home Goods | Adds the listed building options and prosperous-country bonus. | Oil Rigs, Arms Industries, Artillery Foundry | Loyalist gain under Full Acceptance: 10%; Loyalist gain under Second-class Citizen: 10%; Loyalist gain under Open Prejudice: 10%; Loyalist gain under Cultural Erasure: 10%; Loyalist gain under Violent Hostility: 10% |
| Fine Attire Inc. | Adds the listed building options and prosperous-country bonus. | Dye Plantations, Synthetics Plants | Radicalism gain under Full Acceptance: -10%; Radicalism gain under Second-class Citizen: -10%; Radicalism gain under Open Prejudice: -10%; Radicalism gain under Cultural Erasure: -10%; Radicalism gain under Violent Hostility: -10%; Cotton Plantations throughput: 10%; Tooling Workshops throughput: 5% |
| Consolidated Steelworks | Adds the listed building options and prosperous-country bonus. | Motor Industries, Artillery Foundry, Arms Industries | State Construction Efficiency: 5%; Steel Mills throughput: 5% |
| Combine of Metalworks | Adds the listed building options and prosperous-country bonus. | Iron Mines, Arms Industries, Artillery Foundry | Manufacturing Industries throughput: 5% |
| Combined Shipbuilding Syndicate | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Hull Attack Damage: -2.5%; Ship Armor: 2.5% |
| Chemical Industries Group | Adds the listed building options and prosperous-country bonus. | Iron Mines, Oil Rigs, Paper Mills | Supply Consumption: -5% |
| Standard Motors | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Army Speed: 10%; Rubber Plantations throughput: 10% |
| Home Electrics Inc. | Adds the listed prosperity bonus; no additional building options are specified. | No additional building options are specified. | Power Plants throughput: 5% |
| United Construction Conglomerate | Replaces the vanilla building options and prosperous-country bonus with the entries shown. | Steel Mills, Tooling Workshops, Glassworks, Explosives Factory | Construction Sector throughput: 20%; State Construction Efficiency: 5% |
| Standard Art Academy | Adds or updates this company definition. | Arts Academy, Paper Mills | Power Plants throughput: 15%; Tooling Workshops throughput: 15%; Prestige: 15% |
| Furniture Facilities | Adds or updates this company definition. | Furniture Manufacturies, Logging Camps | Paper Mills throughput: 10%; Tooling Workshops throughput: 10% |
| Great Rubber Corporation of Indochina | Adds or updates this company definition. | Rubber Plantations | Electrics Industries throughput: 5%; Trade Center throughput: 5% |
| Taiwanese Tea Company | Adds or updates this company definition. | Tea Plantations | Motor Industries throughput: 10%; Consumption Tax Cost: -20% |
| Imperial Porcelan Factory | Adds or updates this company definition. | Glassworks, Lead Mines, Dye Plantations, Oil Rigs, Logging Camps | Logging Camps throughput: 10%; Sulfur Mines throughput: 10% |
| Heineken International | Adds or updates this company definition. | Textile Mills, Glassworks, Cotton Plantations, Lead Mines, Silk Plantations | Paper Mills throughput: 10%; Sulfur Mines throughput: 10%; Technology Spread: 5% |
| Shell | Adds or updates this company definition. | Synthetics Plants, Sulfur Mines, Oil Rigs, Coal Mines | Supply Ships Construction Efficiency: 15%; Power Plants throughput: 10%; Textile Mills throughput: 10% |
| Persian Luxery Consumer Goods Company | Adds or updates this company definition. | Textile Mills, Furniture Manufacturies, Electrics Industries | Silk Plantations throughput: 10%; Synthetics Plants throughput: 20% |
| Korean Tungsten Company | Adds or updates this company definition. | Iron Mines, Lead Mines, Tooling Workshops | Steel Mills throughput: 10%; Shipyards throughput: 10% |
| Imperial Arsenal Factory | Adds or updates this company definition. | Arms Industries, Automotive Industries, Steel Mills, Tooling Workshops, Iron Mines, Coal Mines | Shrapnel Artillery Offense: 10%; Siege Artillery Offense: 15%; Light Tanks Offense: 20%; Recon Tank Offense: 20% |
| Genda Shigyo | Adds or updates this company definition. | Paper Mills, Logging Camps, Sulfur Mines, Explosives Factory, Fertilizer Plants | Cotton Plantations throughput: 10%; Synthetics Plants throughput: 15% |
| La Plata Mining | Adds or updates this company definition. | Sulfur Mines, Fertilizer Plants, Munition Plants, Lead Mines, Iron Mines | Agriculture throughput: 10%; Synthetics Plants throughput: 10% |

#### Country bonuses and penalties

The following table gives the direct effects of KMPMP country bonuses in player-facing terms. Percentages are shown as percentages; flat amounts and points remain flat values. A modifier only applies when its related start option, decision, event, or journal entry activates it.

| Bonus or penalty | Direct gameplay effects |
| --- | --- |
| Base Value | Market access price impact: -10% |
| Defaulting on Loans | Throughput: 10%; Training Rate: -200% |
| Declared Bankruptcy | Prestige: 25% |
| Unincorporated State | Market access price impact: 5% |
| Legislative Efficiency | Training Rate: 35%; Military goods cost: -10% |
| Political Dysfunction | Opposition Interest Group approval: +10; Radicals from Political Movements: -20%; Training Rate: -40%; Military goods cost: 20%; Tax Waste: 10% |
| Diplomatic Overreach | Infamy Decay: -50%; Innovation: -30%; Mandate Progress: -30% |
| Reputable | Authority: 10%; Influence: +100; Radicals from Conquest: -15% |
| Notorious | Authority: -10%; Influence: -100; Trade Advantage: -15%; Innovation: -5%; Government Dividends Efficiency: -5%; Military goods cost: 5%; Technology Spread: -10% |
| Pariah | Trade Advantage: -50%; Technology Spread: -25%; Influence: -100; Authority: -20%; Innovation: -15%; Government Dividends Efficiency: -10%; Military goods cost: 10% |
| Government Owned Debt | Government Dividends Waste: -0.5 |
| Army Power Projection | Prestige from Army Power Projection: -0.02% |
| Humiliated by Rival | Influence: -25% |
| Weak Power Bloc | Power Bloc Cohesion: 25% |
| Capital Not in Washington D.C. | Legitimacy: +10; Incorporation Speed: 15% |
| Adriatic Empire | Supply Ships Construction Efficiency: 25%; Ship Armor: 5%; Hull Attack Damage: 5%; Trade volume: 20%; Trade Center throughput: 10%; Port throughput: 10%; Sulfur Mines throughput: 10% |
| Unified Arabia | Minting: +10,000; State Construction Efficiency: 10%; Birth Rate: 8%; Loan interest rate: -25% |
| Arabia | Offense: 5%; Defense: 5%; Birth Rate: 2%; Technology Spread: 5%; Plantations throughput: 10% |
| Habsburg Legacy | Radicals from Political Movements: -15%; Legitimacy: +5; Authority: 10% |
| Baby Boom | Birth Rate: 5% |
| Broken truce | Authority: -15%; Influence: -15%; Infamy Decay: -25%; Opposition Interest Group approval: -8 |
| Broken truce | This modifier sets no direct numeric effect. |
| Changing the Heir Interest Group | Interest Group approval: -2 |
| Changing the Heir Interest Group | Interest Group approval: +1 |
| Schooling in progress | This modifier sets no direct numeric effect. |
| Schooling expenses | Tax Waste: 2% |
| Abdication | Legitimacy: -10 |
| Resign from office | Legitimacy: -15 |
| China buff | Offense: 50%; Defense: 50%; Morale Loss: -50% |
| Resolved the Schleswig-Holstein Question | Prestige: -10%; Offense: 5%; Defense: 5% |
| Age of Warfare | Arms Industries throughput: 60%; Artillery Foundry throughput: 60%; Munition Plants throughput: 60%; Mobilize Battalion Mobilization Goods Requirements: -30%; Small Arms input: -15%; Ammunition input: -15%; Artillery input: -15% |
| Rising Great Power | Birth Rate: 3%; State Construction Efficiency: 5%; Technology Spread for Production: 5%; Technology Spread for Military: 5% |
| North German Federation | Birth Rate: 7%; State Construction Efficiency: 5%; Loan interest rate: -15%; Army Offense: 5%; Army Defense: 5% |
| Pax Germanica Ostensis | Agriculture throughput: 25%; Ranches throughput: 25%; Logging Industry throughput: 15%; Mines throughput: 10%; Oil Extractors throughput: 10%; Birth Rate: 2.5% |
| The Reichsland | Loan interest rate: -15% |
| The Reichsland Training | Training Rate: 20% |
| The Industrial Heartland is Lost | Company Construction Bonus: -10%; Company Throughput Bonus: -5% |
| Historical Border | Legitimacy: +5; Minting: 5%; Birth Rate: 0.6% |
| Humiliated by the Germans | Tax Waste: 3%; Legitimacy: -3; Armed Forces Approval: -1 |
| The Natural Borders | Army Defense: 10%; Birth Rate: 1.8%; Legitimacy: +5 |
| A Victory for the Masses | Influence: 25%; Loan interest rate: -20%; Weekly Mandate Progress: 20%; Loyalist gain under Full Acceptance: 20%; Loyalist gain under Second-class Citizen: 20%; Loyalist gain under Open Prejudice: 20%; Loyalist gain under Cultural Erasure: 20%; Loyalist gain under Violent Hostility: 20% |
| Italy Risorgimento Buff | Army Defense: 10% |
| The path of Westernization | Enactment Success Chance: 15%; Enactment Speed: 15%; University throughput: 30%; Minting: +30,000; Mandate Progress: +2 |
| Spirit of Shiroyama | Prestige: 50% |
| Empire of the rising Sun | Technology Spread: 15%; Infamy Generation: -10%; Infamy Decay: 15%; Offense: 20%; Defense: 20%; Battle Occupation: 30% |
| Grow some Balls | Tax Waste: 10%; Radicalism gain under Full Acceptance: 10%; Radicalism gain under Second-class Citizen: 10%; Radicalism gain under Open Prejudice: 10%; Radicalism gain under Cultural Erasure: 10%; Radicalism gain under Violent Hostility: 10%; Loyalist gain under Full Acceptance: -10%; Loyalist gain under Second-class Citizen: -10%; Loyalist gain under Open Prejudice: -10%; Loyalist gain under Cultural Erasure: -10%; Loyalist gain under Violent Hostility: -10%; Legitimacy: -15; Interest Group approval: -2 |
| Defend the homeland | Army Defense: 15% |
| Integrate the Mesoamericans | Birth Rate: 3% |
| Manifest Mexico | Authority: 10%; State Construction Efficiency: 15%; Minting: +10,000; Legitimacy: +10; Birth Rate: 12% |
| Integrate the Mesoamericans | Authority: -10%; Bureaucracy: -10% |
| Victory in Latin America | Loan interest rate: -15%; Minting: 10%; Innovation: 15%; Mass Migration Attraction: 100%; Migration Quota: 20% |
| Unite the state of Latin America! | Offense: 5%; Defense: 5%; Authority: 10%; Minting: 10%; Influence: 10%; Mass Migration Attraction: 10% |
| Low Small Arms Input Goods Shortage | Training Rate: -10% |
| Medium Small Arms Input Goods Shortage | Training Rate: -15% |
| High Small Arms Input Goods Shortage | Training Rate: -30% |
| Low Ammunition Input Goods Shortage | Recovery Rate: -5% |
| Medium Ammunition Input Goods Shortage | Recovery Rate: -15% |
| High Ammunition Input Goods Shortage | Recovery Rate: -25% |
| Low Artillery Input Goods Shortage | Cannon Artillery Offense: -5%; Mobile Artillery Offense: -5%; Shrapnel Artillery Offense: -5%; Siege Artillery Offense: -5%; Fort Buster Artillery Offense: -5% |
| Medium Artillery Input Goods Shortage | Cannon Artillery Offense: -10%; Mobile Artillery Offense: -10%; Shrapnel Artillery Offense: -10%; Siege Artillery Offense: -10%; Fort Buster Artillery Offense: -10% |
| High Artillery Input Goods Shortage | Cannon Artillery Offense: -25%; Mobile Artillery Offense: -25%; Shrapnel Artillery Offense: -25%; Siege Artillery Offense: -25%; Fort Buster Artillery Offense: -25% |
| Medium Radios Input Goods Shortage | Squad Infantry Offense: -10%; Mechanized Infantry Offense: -10%; Panzergrenadiers Offense: -10%; Siege Artillery Offense: -10%; Fort Buster Artillery Offense: -10%; Heavy Tanks Offense: -10%; Breakthrough Tank Offense: -10%; Light Tanks Offense: -10%; Recon Tank Offense: -10% |
| High Radios Input Goods Shortage | Squad Infantry Offense: -20%; Mechanized Infantry Offense: -20%; Panzergrenadiers Offense: -20%; Siege Artillery Offense: -20%; Fort Buster Artillery Offense: -20%; Heavy Tanks Offense: -20%; Breakthrough Tank Offense: -20%; Light Tanks Offense: -20%; Recon Tank Offense: -20% |
| Stop cheesing Radios u nerd | Squad Infantry Offense: -50; Squad Infantry Defense Add: -50; Mechanized Infantry Offense: -50; Mechanized Infantry Defense: -50; Panzergrenadiers Offense: -50; Panzergrenadiers Defense: -50; Siege Artillery Offense Add: -50; Siege Artillery Defense Add: -50; Fort Buster Artillery Offense: -50; Fort Buster Artillery Defense: -50; Heavy Tanks Offense: -50; Heavy Tanks Defense: -50; Breakthrough Tank Offense: -50; Breakthrough Tank Defense: -50; Light Tanks Offense: -50; Light Tanks Defense: -50; Recon Tank Offense: -50; Recon Tank Defense: -50 |
| Low Tanks Input Goods Shortage | Mechanized Infantry Offense: -5; Mechanized Infantry Defense: -5; Panzergrenadiers Offense: -5; Panzergrenadiers Defense: -5; Heavy Tanks Offense: -5; Heavy Tanks Defense: -5; Breakthrough Tank Offense: -5; Breakthrough Tank Defense: -5; Light Tanks Offense: -5; Light Tanks Defense: -5; Recon Tank Offense: -5; Recon Tank Defense: -5 |
| Medium Tanks Input Goods Shortage | Mechanized Infantry Offense: -10; Mechanized Infantry Defense: -10; Panzergrenadiers Offense: -10; Panzergrenadiers Defense: -10; Heavy Tanks Offense: -10; Heavy Tanks Defense: -10; Breakthrough Tank Offense: -10; Breakthrough Tank Defense: -10; Light Tanks Offense: -10; Light Tanks Defense: -10; Recon Tank Offense: -10; Recon Tank Defense: -10 |
| High Tanks Input Goods Shortage | Mechanized Infantry Offense: -15; Mechanized Infantry Defense: -15; Panzergrenadiers Offense: -15; Panzergrenadiers Defense: -15; Heavy Tanks Offense: -15; Heavy Tanks Defense: -15; Breakthrough Tank Offense: -15; Breakthrough Tank Defense: -15; Light Tanks Offense: -15; Light Tanks Defense: -15; Recon Tank Offense: -15; Recon Tank Defense: -15 |
| Medium Aeroplanes Input Goods Shortage | No direct stat penalty is defined for this shortage tier. |
| High Aeroplanes Input Goods Shortage | No direct stat penalty is defined for this shortage tier. |
| Small Nation buff | Minting: +10,000; Education Access: 5%; State Construction Efficiency: 5%; University throughput: 5%; Government Administration throughput: 10%; Supply Ships Construction Efficiency: 10%; Military goods cost: -5%; Mobilize Battalion Mobilization Goods Requirements: -5%; Barracks Max Level: +10; Authority: 20%; Railway throughput: 10%; Migration Attraction: 10%; Mandate Progress: +4 |
| Medium Nation buff | Authority: 10%; Supply Ships Construction Efficiency: 5%; Military goods cost: -2.5%; Minting: +5,000; Education Access: 2.5%; Government Administration throughput: 5%; Railway throughput: 5%; University throughput: 2.5%; Mobilize Battalion Mobilization Goods Requirements: -2.5%; Barracks Max Level: +5; Mandate Progress: +4 |
| Massive Empire | Military goods cost: 5%; Military Wages: 5%; Offense: -5%; Defense: -5%; Ammunition input: 5%; Artillery input: 5%; Small Arms input: 5%; Mandate Progress: -20% |
| Global Empire | Military goods cost: 5%; Offense: -5%; Defense: -5%; Artillery input: 5%; Small Arms input: 5%; Military Wages: 5%; Government Administration throughput: -10%; University throughput: -15%; Migration Attraction: -15%; Qualifications: -15%; State Construction Efficiency: -10%; Minimum Expected Standard of Living for the Lower Strata: +1; Minimum Expected Standard of Living for the Middle Strata: +1; Minimum Expected Standard of Living for the Upper Strata: +1 |
| Global Empire | Government Administration throughput: -10%; University throughput: -15%; Migration Attraction: -15%; Qualifications: -15%; State Construction Efficiency: -10%; Minimum Expected Standard of Living for the Lower Strata: +1; Minimum Expected Standard of Living for the Middle Strata: +1; Minimum Expected Standard of Living for the Upper Strata: +1; Mandate Progress: -10% |
| Retake whats rightfully german | Military goods cost: -10%; Offense: 15%; Defense: 15%; Kill Rate: 10%; Morale Damage: 10%; Training Rate: 15% |
| The great reform | Authority: -20%; Bureaucracy: -10%; Influence: -10% |
| Sick Man of Europe Buff | Authority: +150; Decree Cost: -10% |
| Sick Man of Europe Buff | Defense: 20% |
| Restored Fame | Defense: 5%; Offense: 5%; Plantations throughput: 5%; Mines throughput: 5%; Technology Spread: 5%; Taxation Capacity: 5%; Education Access: 5%; Training Rate: 5%; Conscriptable Battalions: 1% |
| A little honor | Defense: 1.25%; Offense: 1.25%; Plantations throughput: 1.25%; Mines throughput: 1.25%; Technology Spread: 1.25%; Taxation Capacity: 1.25%; Education Access: 1.25%; Training Rate: 1.25%; Conscriptable Battalions: 0.25% |
| Path to Westernization | Production Research Speed: 20%; Armed Forces Political Strength: 10%; Industrialist political strength: 10%; Technology Spread: 10%; Capitalists Investment Pool contribution efficiency: 15%; State Construction Efficiency: 15%; Decree Cost: -10% |
| Leader of Islam | Birth Rate: 4.2%; Decree Cost: -15%; Military goods cost: -20%; Training Rate: 10%; Army Offense: 10%; Conversion: 50%; Military Research Speed: 15%; Technology Spread: 5% |
| The reform goes on | Birth Rate: 9%; State Construction Efficiency: 20%; Technology Spread: 25%; Minting: +35,000; Military Research Speed: 15%; Production Research Speed: 15%; Society Research Speed: 15%; Education Access: 15% |
| State alignment adjustment | This modifier sets no direct numeric effect. |
| The Art of the Deal | Artillery input: 20%; Supply Efficiency: -20%; Authority: 15%; Influence: +400; Maneuvers per Diplomatic Play: +20; Minting: +7,000; Innovation: +13; Technology Spread: 15% |
| Imperialist overseas empire | Home Defense: -10%; Home Offense: -10%; Supply Efficiency: -15%; Income transfer from Subjects: 10%; Radicals from Conquest: -20%; Trade Advantage: 20%; Colony Growth Speed: 20%; Ship Armor: 10%; Hull Attack Damage: 10%; Supply Consumption: -20%; Throughput in Unincorporated States: 10%; Education Access in Unincorporated States: 10%; State Construction Efficiency in Unincorporated States: 5%; Merchant Marine Cost of Port Connections: -10% |
| Imperialist overseas empire | Education Access: 100% |
| Imperialism Oversea Empire State Unincorporated Construction Mult | State Construction Efficiency: 100% |
| Military-Industrial Complex | Military Wages: 15%; Military goods cost: -5%; Offense: 10%; Defense: 10%; Production Research Speed: 10%; Military Research Speed: 10%; Society Research Speed: -10%; Technology Spread for Society: -10%; Loyalist gain under Full Acceptance: -10%; Loyalist gain under Second-class Citizen: -10%; Loyalist gain under Open Prejudice: -10%; Loyalist gain under Cultural Erasure: -10%; Loyalist gain under Violent Hostility: -10%; Radicalism gain under Full Acceptance: 10%; Radicalism gain under Second-class Citizen: 10%; Radicalism gain under Open Prejudice: 10%; Radicalism gain under Cultural Erasure: 10%; Radicalism gain under Violent Hostility: 10% |
| State Capitalism | Capitalists Investment Pool contribution efficiency: -25%; Technology Spread for Society: -5%; Society Research Speed: -5%; Dividends Tax Rate: +0.1; Government Dividends Efficiency: 0%; Decree Cost: -15.5%; Construction Sector throughput: 10%; Authority: +150 |
| Autarky | Trade Advantage: -30%; Decree Cost: -10%; State Construction Efficiency: 2.5%; Home Defense: 15%; Home Offense: 15%; Agriculture throughput: 10%; Mines throughput: 10%; Fishing Industry throughput: 10%; Whaling Industry throughput: 10%; Oil Extractors throughput: 10%; Rubber Plantations throughput: 10%; University throughput: 10%; Authority: +150 |
| Social & Welfare State | Authority: -100; Company Throughput Bonus: -10%; Production Research Speed: -10%; Military Research Speed: -5%; Government Wages: 40%; Education Access: 10%; Education access based on wealth: +0.005; Birth Rate: 3%; University throughput: 15%; Loyalist gain under Full Acceptance: 10%; Loyalist gain under Second-class Citizen: 10%; Loyalist gain under Open Prejudice: 10%; Loyalist gain under Cultural Erasure: 10%; Loyalist gain under Violent Hostility: 10%; Society Research Speed: 15% |
| Corporative Socialism | Production Research Speed: -5%; Technology Spread for Production: -5%; Society Research Speed: -5%; Technology Spread for Society: -5%; Dividends Tax Rate: +0.05; Manufacturing Tax Income: 5%; Mining Tax Income: 5%; Mobilize Battalion Mobilization Goods Requirements: -20%; Authority: +150; Birth Rate: 2%; Mortality: -2% |
| Military Police State | Technology Spread: -10%; Mass Migration Attraction: -15%; Society Research Speed: -10%; Birth Rate: 2%; Mortality: -2%; Army Offense: 25%; Army Defense: 25%; Radicalism gain under Full Acceptance: -10%; Radicalism gain under Second-class Citizen: -10%; Radicalism gain under Open Prejudice: -10%; Radicalism gain under Cultural Erasure: -10%; Radicalism gain under Violent Hostility: -10%; Authority: +150 |
| Tycoon Capitalism | Military Research Speed: -10%; Mortality: 4%; Minimum Expected Standard of Living for the Lower Strata: +1; Company Throughput Bonus: 10%; Dividends Tax Rate: +0.1; Manufacturing Tax Income: 10%; State Construction Efficiency: 10%; Capitalists Investment Pool contribution efficiency: 20% |
| Rhine Capitalism | Bureaucracy: -5%; Authority: -5%; Manufacturing Tax Income: 10%; Dividends Tax Rate: +0.1; Standard of Living: +1; Workforce Ratio: 5%; Birth Rate: 2%; Army Offense: 5%; Army Defense: 5%; Building Wage Target: 15% |
| Unite the workers of the World | Maneuvers per Diplomatic Play: +100; Infamy Generation: -20%; Military goods cost: -10%; Legitimacy: +10; Radicals from Conquest: -25%; Army Offense: +10; Army Defense: +10; Morale Loss: -30%; Mobilize Battalion Mobilization Goods Requirements: -20%; Training Rate: 30% |
| Influential State | Influence: +800; Infamy Decay: -10%; State Construction Efficiency: 10%; Leverage Generation: 50%; Mandate Progress: +5 |
| Arsenal of Democracy | Loan interest rate: -5%; Arms Industries throughput: 10%; Munition Plants throughput: 10%; Artillery Foundry throughput: 10%; Army Defense: 10%; Army Offense: 10%; Ship Armor: 2.5%; Hull Attack Damage: 2.5%; Authority: +50; Conscription Rate: 2% |
| Hegemony in the Mediterranean Sea | Ship Armor: 5%; Hull Attack Damage: 5%; Trade Center throughput: 10% |
| Domination in the Mediterranean Sea | Ship Armor: 10%; Hull Attack Damage: 10%; Trade Center throughput: 20% |
| Lost control in the Mediterranean Sea | Armed Forces Approval: -2; Trade Center throughput: -10%; Prestige: -15% |
| Spearhead of Latin America | Birth Rate: 5%; Prestige: 25%; Legitimacy: +10; Migration Attraction: 15% |
| Hegemony in East Asia | Army Defense: 5%; Army Offense: 5%; Technology Spread: 5% |
| Humiliated in East Asia | Army Defense: -5%; Army Offense: -5%; Technology Spread: -5%; Tax Waste: 3% |
| Ruler of East Asia | Army Defense: 10%; Army Offense: 10%; Technology Spread: 5%; Lead Mines throughput: 10%; Sulfur Mines throughput: 10% |
| Loser of East Asia | Army Defense: -10%; Army Offense: -10%; Technology Spread: -10%; Tax Waste: 5% |
| Hegemony in the Caribbean Sea | Food Industries throughput: 5%; Port throughput: 5% |
| Monopoly in the Caribbean Sea | Food Industries throughput: 10%; Port throughput: 10% |
| Suppressed in the Caribbean Sea | Food Industries throughput: -5%; Sugar Plantations throughput: -5% |
| Zoroastrian Standard Of Living Modifier Negative | Zoroastrian Standard Of Living Add: +1 |
| Zoroastrian Standard Of Living Modifier Positive | Zoroastrian Standard Of Living Add: +1 |
| Spanish cooperation | State Construction Efficiency: 5%; Technology Spread: 10%; Military goods cost: -10% |
| Part of the Spanish Empire | Minting: 10%; Gold Mines throughput: 10%; Infrastructure: 10%; Education Access: 5%; Technology Spread: 5% |
| Rebuild Spain | State Construction Efficiency: 50%; Minting: +5,000; Army Defense: 10%; Authority Cost: +400; Bureaucracy: -10%; Influence: -25% |
| Trade States | Influence: -150 |
| Lion of the North | Offense: 5%; Defense: 5%; Birth Rate: 5%; Military goods cost: -5%; Recovery Rate: 10%; Minting: 10%; Conscriptable Battalions: 2% |
| Greater Scandinavia | Offense: 5%; Defense: 5%; Birth Rate: 1%; Military goods cost: -5%; Migration Attraction: 15%; Standard of Living: +1; State Construction Efficiency: 5%; Radicals from Conquest: -10% |
| Baltic Empire | Birth Rate: 4%; Military goods cost: -5%; Migration Attraction: 10%; Standard of Living: +1; State Construction Efficiency: 5%; Radicals from Conquest: -5% |
| Risorgimento buff | Offense: 5%; Defense: 5%; Technology Spread: 5%; Birth Rate: 2%; State Construction Efficiency: 5%; Conscriptable Battalions: 1% |
| Kingdom of the Three Crowns | Birth Rate: 2%; Authority: 5%; State Construction Efficiency: 5% |
| Reino Unido | Birth Rate: 4.2%; Offense: 10%; Defense: 10%; Plantations throughput: 10%; Logging Industry throughput: 10%; University throughput: 15%; Decree Cost: -10% |
| United Iberia | Offense: 5%; Defense: 5%; Technology Spread: 5%; Taxation Capacity: 5%; Birth Rate: 3%; Training Rate: 5% |
| United Netherlands | Birth Rate: 3%; Offense: 15%; Defense: 15%; University throughput: 10%; Manufacturing Industries throughput: 10%; Loyalist gain under Full Acceptance: 10%; Loyalist gain under Second-class Citizen: 10%; Loyalist gain under Open Prejudice: 10%; Loyalist gain under Cultural Erasure: 10%; Loyalist gain under Violent Hostility: 10% |
| United Parthia | Birth Rate: 1.2%; Offense: 5%; Defense: 5%; Infrastructure: 10%; Plantations throughput: 10% |
