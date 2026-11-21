# KMPMP changes by country

This guide groups KMPMP’s country-facing changes by the country they affect. It compares the supplied mod files with Victoria 3 version 1.15.2. The [complete country content reference](COUNTRY_CONTENT.md) contains the full numerical values, every law effect, all company bonuses, and the detailed journal-entry, decision, event, and state tables.

## How to read this guide

- Country starts and national content are listed under the country that receives them. If a journal entry can be started by more than one country, each eligible country is named.
- State-region changes are geographical. The owner index below uses the countries that own territory in each region at the 1836 start; a state change remains with that region if it changes hands.
- Law effects, country-rank rules, diplomatic-action changes, technology and building changes, and shared company rules are campaign-wide systems. They are described once in [shared changes](#shared-changes-that-apply-to-countries) instead of being repeated in every country profile.
- A company bonus belongs to the country that owns the company and applies while the company is prosperous. It can change hands during a campaign. Every changed named company, its supported buildings, and its exact bonus is in the [complete company table](COUNTRY_CONTENT.md#company-building-scopes-and-prosperity-effects).
- Timing means the in-game start date or trigger when the source specifies one. The supplied files do not preserve a release history, so they cannot show the real-world mod version or date when each change was first added.

## Countries with starting or national content

### Austria

- **Start and balance:** Receives the 15-year Habsburg Legacy modifier (−15% radicals from political movements, +5 base legitimacy, +10% authority) and the medium-nation tier. The shared tier’s complete effects are in [country balance](COUNTRY_CONTENT.md#country-balance).
- **Buildings and fleet:** Starts with 15 government administrations in Bohemia using horizontal drawer cabinets, two subsidized basic ports in Istria, and five added frigates.
- **Empire of the Three Crowns:** The entry requires Pan-Nationalism, full control of Croatia, Slovenia, Bosnia, Wallachia, Moldavia, and Dobrudja, plus one state in each Serbian region. Completion adds Serbian, Bosniak, Croat, and Romanian primary cultures, creates loyalists among them, and gives claims on unowned parts of Serbia, Kosovo, Montenegro, Volhynia, Kiev, and Cherson.
- **Three Crowns presentation:** The flag and map color require Hungarian alongside the four cultures awarded by the journal. The name also requires a Habsburg monarchy and the script’s geographic exclusion. [Name, flag and color conditions](COUNTRY_CONTENT.md#country-ranks-laws-political-groups-and-identities) The separate Kingdom of the Three Crowns modifier gives +2% birth rate, +5% authority, and +5% state construction efficiency.
- **Interest Group trait:** Austrian Landowners receive Wiener Walzer: +15% prestige and +15% aristocrat investment-pool efficiency. Germany formed from Austria keeps this Landowner trait.
- **Austro-Hungarian Agreement:** From 1845, Austria can use the one-time decision after Nationalism if Hungarian is not already a primary culture. It enacts Racial Segregation if necessary and grants a five-year decaying modifier.
- **Diplomacy and regions:** Holy Alliance defensive pacts with Prussia and Russia change from 35 to 28 years. Guarantees of Tuscany, Parma, and Modena are removed; Austrian-Tuscan trade articles remain. Dalmatia, Lombardy, and Styria receive resource or arable-land changes, and Istria gains Natural Harbors. The owner-index and state tables give the exact region values.
- **Companies:** Changed firms headquartered in Austria and its crown lands are listed in [the headquarters index](#named-companies-by-1836-headquarters); prosperity effects are in the [complete company table](COUNTRY_CONTENT.md#company-building-scopes-and-prosperity-effects).

### Belgium

- **Start and balance:** Receives the small-nation modifier. France’s starting guarantee of Belgium is removed.
- **United Netherlands formation.** Nationalism and control of Holland, Flanders, Wallonia, Friesland and Gelre unlock the formation. The event grants 25% loyalists each among Flemish and Wallonian pops, prestige and claims in Europe and southern Africa. See the [formation reference](COUNTRY_CONTENT.md#formable-and-releasable-countries).
- **Regions and companies:** Belgium and the Netherlands share Gelre. The Netherlands also owns a slice of the West Indies. The company index lists Société Franco-Belge and Philips under their headquarters markets, and the full company table gives each bonus.

### Brazil

- **Start and balance:** Receives the small-nation modifier. A player-controlled Brazil gets a hidden start event that resolves its initial Brazil-initiated diplomatic plays. Bolivia loses 30 infamy at game start; if Brazil and Bolivia are both player-controlled, North and South Peru are set to 25 liberty desire.
- **Reino Unido union.** Brazil and Portugal can start the union while both exist. The normal route annexes the partner as a direct puppet or dominion after Nationalism and Egalitarianism. Brazil also has a fallback if Portugal became Iberia. [Requirements, claims and cultures](COUNTRY_CONTENT.md#formation-territorial-ambition-and-regional-standing)
- **Interest Group traits:** When the relevant content is active, Brazilian Intelligentsia receive Bacharéis: +10% Society research speed and 10% less radical growth from standard-of-living changes at every acceptance level, alongside the existing reduction in political-movement radicals. Brazilian Industrialists receive The Goods Must Flow: +10% production research speed alongside +10% infrastructure.
- **Brazilian events:** KMPMP also changes the events for Brazilian breakaway states and the slavery chain; the [country-event inventory](COUNTRY_CONTENT.md#player-facing-country-events) identifies their source group.
- **Regions and companies:** Bahia and Ceará have changed resource values. Brazilian-market companies and their exact prosperous effects are listed in the company index and full company table.

### Argentina

- **Start and balance:** Receives the small-nation modifier.
- **State change:** Corrientes loses the Paraná River trait, which removes that trait’s state effect.
- **Companies and prestige goods:** KMPMP changes Argentine and La Plata companies, including the Premium Wine development entry for Centro Vitivinícola Nacional. Premium Wine becomes available after the company meets its prosperity and wine-production conditions for 36 qualifying months; producing it grants +10% prestige. See the [prestige-good rules](COUNTRY_CONTENT.md#kmpmp-premium-prestige-goods-exact-additions-and-effects) and [company table](COUNTRY_CONTENT.md#company-building-scopes-and-prosperity-effects).

### Bolivia

- **Start and balance:** Receives the small-nation modifier and four government administrations in La Paz using simple organization. KMPMP adds 1,438,262 people across Antofagasta and La Paz: South Andean, Aimara, Quechua, Amazonian, and Afro-Caribeno populations, including the exact state-by-state additions in the [starting-population table](COUNTRY_CONTENT.md#added-starting-population).
- **Brazil start event:** Bolivia loses 30 infamy. If both Bolivia and Brazil are player-controlled, North and South Peru are set to 25 liberty desire.
- **Culture integration:** When eligible, Bolivia can take the Amazonian integration decision. It changes primary culture, loyalists, radicals, and country modifiers; the [decision table](COUNTRY_CONTENT.md#player-facing-country-decisions) and modifier table list the exact outcomes.
- **Regions and companies:** Antofagasta’s arable and resource values change. The company index lists the Bolivian mining firms, with their exact prosperity bonuses in the company table.

### China

- **Start and balance.** The day-one event records whether Qing has a player. A separate journal grants +50% unit offense and defense and −50% morale loss. Its invalidation removes the bonus when the China-is-player flag is set. [China journal](COUNTRY_CONTENT.md#formation-territorial-ambition-and-regional-standing)
- **Interest Group trait:** With Confucian state religion, the Devout receive Asceticism: +1% birth rate, 15% less radical growth from standard-of-living changes at every acceptance level, and the existing 15% reduction in political-movement radicals.
- **Opium Wars:** KMPMP replaces the Opium Wars journal content shared with Great Britain, changing the conflict’s progress and outcomes. See the national journal and event inventories for the full chain.
- **Regions and companies:** Shengjing and Northern Jilin (Outer Manchuria) receive changed resource values. Mantetsu is listed under the China headquarters market; its prosperous bonus is in the complete company table.

### Egypt

- **Start and balance:** Receives the small-nation modifier. Adds 762,245 people to Upper Egypt and Palestine, including Misri, Mashriqi, Bedouin, Sephardic, Armenian, Turkish, Sudanese, Dagestani, and Lacustrine Bantu populations. The exact counts and religions are in the [starting-population table](COUNTRY_CONTENT.md#added-starting-population).
- **Buildings:** Lower Egypt receives 10 government administrations with horizontal drawer cabinets, 5 paper mills, 4 textile mills, 11 cotton plantations, and 2 logging camps; Palestine gets a tooling workshop.
- **Interest Group trait:** With Sunni state religion, the Devout receive Da’wat: +20% conversion and +5 percentage points education access.
- **Arabia formation.** Egypt’s Misri primary culture qualifies it to form Arabia with Nationalism and the territorial threshold. [Formation and rewards](COUNTRY_CONTENT.md#formable-and-releasable-countries)
- **Ottoman claims:** At the start, Egypt gives Turkey a claim on every state region containing territory Egypt owns, including its pieces of split regions.
- **Regions and companies:** Lower, Middle, and Upper Egypt have changed resource values; Palestine and Lebanon also change, as does the Adana region shared with Turkey. Egyptian companies and their prosperity effects are in the company index and full table.

### France

- **Historical character.** Ferdinand Philippe starts with the Industrialists and gains Imperious. [Character changes](COUNTRY_CONTENT.md#start-setup)
- **Start and balance:** Starts with Mercantilism and receives the massive-empire penalty: +5% military-goods costs and military wages, −5% unit offense and defense, +5% ammunition, artillery, and small-arms input costs, and −20% Power Bloc mandate progress.
- **Buildings:** Adds 3 government administrations in Languedoc using vertical filing cabinets.
- **Diplomacy:** Removes the France–Spain and France–Portugal Quadruple Alliance treaties and France’s guarantee of Belgium. Adds a 12-month truce with Sardinia-Piedmont and a 24-month truce with Spain.
- **Algeria and natural borders.** French Algerian events use Misri in the merged-culture checks. Completing Natural Borders offers a defense, birth-rate and legitimacy bonus tied to the Rhine, a loyalist and influence reward, or five primary cultures including Alemannic. [Event choices](COUNTRY_CONTENT.md#player-facing-country-events)
- **Interest Group trait:** French Armed Forces receive Élan Vital: the existing +15% army offense now also gives +5% army defense. The same assignment follows any country with French as a primary culture.
- **Regions and companies:** Changes resources in Auvergne-Limousin, Burgundy, Lorraine, and Normandy, plus French-held slices of the West Indies; its Caribbean states gain the Caribbean Sea trait. French and Algerian-headquartered firms are in the [company index](#named-companies-by-1836-headquarters) and full table.

### Great Britain

- **Start and balance:** Starts with Mercantilism and receives the massive-empire penalty. A separate 50-year decaying Global Empire modifier reduces government-administration throughput and construction efficiency by 10%, university throughput, migration pull, and qualifications by 15%, raises expected standard of living by 1 for each strata, and reduces Power Bloc mandate progress by 10%.
- **Buildings:** Midlands receives 7 government administrations using vertical filing cabinets.
- **Diplomacy and events:** The binding period of the Great Britain–Portugal Quadruple Alliance changes from 10 years to 1 year. Great Britain shares the Opium Wars chain with China and can receive the American Oregon settlement event. [National journals](COUNTRY_CONTENT.md#replacements-and-revisions-to-existing-national-entries)
- **Interest Group trait:** With Protestant state religion, the Devout receive Work Ethic: +5% company throughput and −2.5% mortality.
- **Regions and companies:** Resource values change in the Bahamas and British-owned West Indies states; those Caribbean states gain the Caribbean Sea trait. British companies, including eligible Great Western Railway, are listed by headquarters and in the full prosperity table.

### Japan

- **Start and balance:** Receives the small-nation modifier. Seven days after the start, a player can opt into Japan’s bonuses. Accepting grants a 12-year modifier with +15 percentage points to law-enactment success, +15% law-enactment speed, +30% university throughput, +30,000 minting, and +2 Power Bloc mandate progress, plus a 50-year decaying modifier that gives +50% prestige. The Meiji success event sets the global completion flag. The next monthly check removes Japan’s small- and medium-nation modifiers. The medium tier requires a local completion flag with the global flag absent.
- **Claims and later choice:** The opt-in adds claims on Korea and Shengjing and Formosa, and changes the Shogunate leader to the Jingoist ideology. Meiji schedules the opted-in follow-up seven days later. Japan chooses claims on Siam and Java or on Borneo and Dai Nam. A [decision](COUNTRY_CONTENT.md#player-facing-country-decisions) can reopen the choice.
- **Meiji:** KMPMP changes the Meiji Restoration entry. For an opted-in Japan the follow-up adds Battotai and Banzai traits to the Armed Forces and, if completed before 1885, grants a 15-year modifier with +15% technology spread, −10% infamy generation, +15% infamy decay, +20% offense and defense, and +30% battle occupation.
- **Other Interest Group traits:** Japan’s Shinto Devout receive Secular Shrine Theory, whose conversion bonus rises from +15% to +20% and which gains +2.5% birth rate. Industrialists receive Zaibatsu Cooperation: manufacturing-building tax changes from +10% to 0%, with +10% tax dividends, +5% construction, and +5% authority. The Japan-only Meiji traits are described above.
- **Question of Honor:** From 1860, Japan receives “Grow some Balls” while it is a junior in a customs union. While active, it adds 10% tax waste, raises radicalism growth by 10% and lowers loyalist growth by 10% under every discrimination level, lowers legitimacy by 15, and reduces Interest Group approval by 2. The modifier is removed once Japan is no longer a junior.
- **Buildings:** Adds ports, shipyards, mines, plantations, government administrations, paper mills, a construction sector, logging camps, fishing wharves, and universities across Hokkaido, Tohoku, Kanto, Tokai, Kansai, Chugoku, and Shikoku. The [starting-building table](COUNTRY_CONTENT.md#added-starting-buildings) names each building, level, and selected production method.
- **Regions and companies:** Resource values change in Hokkaido, Tohoku, Kanto, and Shikoku, plus the Ezochi-owned part of Hokkaido. Japanese-headquartered companies and their full bonuses are in the company index and table.

### Mexico

- **Start and balance:** Receives the small-nation modifier and starts with Paddle Steamer and Napoleonic Warfare researched. A player-only start event gives Mexico a 15-year decaying Defend the Homeland modifier with +15% army defense. When a matching lobby exists, KMPMP assigns an anti-United-States lobby to the Devout and Landowners.
- **Buildings:** In Mexico, adds a crude-tools workshop, 3 wooden construction sectors, and 3 iron mines using picks and shovels. In Bajio, adds 4 gold mines using picks and shovels. In Jalisco, adds 6 government administrations with simple organization, a crude-tools workshop, and an arms industry making muskets.
- **Culture and national entries:** After Nationalism, a one-time decision can integrate Mayan culture, adding it as primary culture and changing loyalists, radicals, and country modifiers. The journal chain includes Successor of Gran Colombia, A True Gran Colombia, United States of Latin America, Manifest Mexico, and Consolidate California. Successor of Gran Colombia completes after Mexico owns and incorporates Guatemala, San Salvador, Honduras, Nicaragua, and Costa Rica; it claims Panama, Cundinamarca, Guaviare, Cauca, Ecuador, and Pastaza. A True Gran Colombia then completes when Mexico owns and incorporates at least four of those six regions. It adds 5% loyalists, grants the five-year Glory in Latin America modifier (+10% minting, +15% weekly innovation, −15% loan interest, +100% mass-migration attraction, and +20% migration quota), and claims Cajamarca, Arequipa, Lima, Ica, La Paz, Tarapaca, Potosi, Antofagasta, Santa Cruz, and Jujuy. Mexico’s displayed country name changes to Gran Colombia and its monthly rank update switches it from the small-nation to the medium-nation bonus.
- **Interest Group trait:** If its primary-culture condition is met, the Armed Forces receive El Buen Jefe: +10% army offense and defense in addition to +10% authority. This assignment also applies to qualifying Spanish-speaking American countries listed below.
- **Spain deal:** KMPMP changes Regain Influence in America and Spain’s one-time offer to Mexico. Mexico may claim Central America while Spain claims Mexico’s starting states and Texas; accept ten years of economic cooperation; or return to the Spanish Empire, become Spain’s protectorate, gain the permanent modifier, and add radicals and loyalists. The exact choices, conditions, and Spain’s 30-infamy cost are in the national-content table.
- **Regions and companies:** Resource values change in Mexico, Jalisco, and Veracruz. Mexican companies and the El Águila eligibility are listed in the company index and full table.

### Netherlands

- **Start and balance:** Receives the small-nation modifier and starts with Atmospheric Engine, Dialectics, General Staff, and Power of the Purse researched. Holland gets 4 government administrations with horizontal drawer cabinets.
- **United Netherlands formation.** Nationalism and control of Holland, Flanders, Wallonia, Friesland and Gelre unlock the formation. The event grants 25% loyalists each among Flemish and Wallonian pops, prestige and claims in Europe and southern Africa. See the [formation reference](COUNTRY_CONTENT.md#formable-and-releasable-countries).
- **Interest Group trait:** With Protestant state religion, the Devout receive Work Ethic: +5% company throughput and −2.5% mortality.
- **Regions and companies:** The Netherlands and Belgium share Gelre. A separate Dutch slice of the West Indies receives the Caribbean Sea trait. Philips and other eligible Netherlands-market companies are in the company index; full bonuses are in the prosperity table.

### North Peru

- **Starting population:** Adds 50,410 people to Lima: South Andean, Quechua, Afro-Caribeno, and Amazonian populations, including an enslaved Afro-Caribeno group. Exact counts are in the [starting-population table](COUNTRY_CONTENT.md#added-starting-population).
- **National content:** North Peru is included in the Peru-Bolivia confederation and South American migration entries. The Amazonian integration decision can also be taken by eligible Peru, Federation of the Andes, or Peru-Bolivia Confederation countries.
- **Regions and companies:** Lima’s arable and resource values change. Companies headquartered in North Peru and Ecuador are listed in the company index and the full bonus table.

### Hudson Bay Company

- **Start and balance:** Receives the small-nation modifier; its exact shared tier effects are in [country balance](COUNTRY_CONTENT.md#country-balance).
- **Other unique content:** The start, population, and building tables assign it no separate starting technology, added population, starting building, or unique journal chain. Its Protestant Devout receive Work Ethic (+5% company throughput and −2.5% mortality). It remains affected by the shared systems and any regional changes listed under its 1836 state ownership.

### Ottoman Empire

- **Starting country:** Starts with Paddle Steamer and Cotton Gin researched and receives the small-nation modifier. The monthly update keeps this tier until “A Proud Nation” completes, then switches the Ottomans to the medium-nation modifier. The exact shared tier values are in the [country-balance table](COUNTRY_CONTENT.md#country-balance).
- **Starting buildings:** Ankara gets 6 government administrations with horizontal filing cabinets; Konya gets 1 with the same method. Aydin gets 2 iron-frame construction sectors, 3 iron mines using picks and shovels, no explosives or steam automation, and road carts, plus a tooling workshop. Eastern Thrace gets 2 mines with the same methods, a logging camp, and 2 arms industries making muskets. No added starting populations are assigned to Ottoman-owned states.
- **Starting setup and diplomacy:** Egypt gives Turkey claims on every state region containing Egyptian-owned territory, including split states. KMPMP removes the 15-year Prussian military-assistance treaty to Turkey, so it is absent in 1836. See [the complete Ottoman inventory](COUNTRY_CONTENT.md#ottoman-empire-complete-change-inventory).
- **Characters:** Abdulmecid keeps his vanilla Intelligentsia affiliation and modernizer ideology and exchanges Aesthete for Imperious. Abdulhamid II is moved from the Landowners to the Intelligentsia, gets imperious instead of persistent, and can appear as Intelligentsia leader in a monarchy from 1870 until 1 January 1900 if the group is non-marginal (script chance 50).
- **Interest Group trait:** The Devout’s Da’wat trait keeps +20% conversion and adds +5 percentage points to education access.
- **Sick Man of Europe:** The start event gives +150 Authority and −10% decree cost for 20 years, plus +20% defense for 20 years with decay. Continuing adds the Syria, Economy, Education, Separatism, Army, and Bureaucracy entries. The main entry has a 10,950-day timer and a 4-point progress target. Education completion requires at least one university at level 5 or more with over 90% occupancy, and literacy 20 percentage points above its starting value; completion advances the main entry by 1. KMPMP scales the displayed literacy progress by 100 for readability without changing the literacy goal.
- **Sick Man rewards:** Completion grants 7% loyalists and permanent Restored Fame: +5% army and navy offense and defense, +5% plantation and mine throughput, +5% technology spread and tax capacity, +5 percentage points education access, +5% training rate, and +1 percentage point conscription. The success event offers three choices: **Path to Westernization** adds Greek, Bulgarian, Serbian, and Albanian as primary cultures, claims unowned Balkan, Transylvanian, Crimean, and southern Russian states, and boosts production research, political strength of the Armed Forces and Industrialists, technology spread, capitalist investment, construction, and decree cost for 20 years; **Leader of Islam** adds Kurdish, Bedouin, Persian, Misri, Mashriqi, and Maghrebi as primary cultures, claims unowned Persian, Iranian, Arab, and North African states, and boosts birth rate, military costs, training, army offense, conversion, military research, and technology spread for 25 years; **The Reform Goes On** boosts birth rate, construction, technology spread, minting, all three research categories, and education access for 15 years. Exact state lists and modifier values are in the [Ottoman change inventory](COUNTRY_CONTENT.md#ottoman-empire-complete-change-inventory).
- **Failure and partial progress:** Timeout applies the decaying Dead Man of Europe penalty, marks Tanzimat failure for 20 years, removes Rumelian tradition from Albanian, Bosniak, and Sephardic cultures, and can start the Great Eastern Crisis when its DLC is active. KMPMP prevents the vanilla outcome that made Turkey unrecognized. Failure with progress above zero can grant “A Little Honor”; failure above 1 progress offers the same three reward paths. Modifier strength scales with progress divided by four. Claims, cultures and durations follow the success choices.
- **A Proud Nation:** Appears after the Sick Man chain is marked complete. The player can press “We are ready” to complete it at once; otherwise it completes automatically from 1887 and changes the Ottoman tier from small to medium.
- **Arabia and Adriatic Empire.** The Ottoman Leader of Islam reward opens the half-strength, ten-year Unified Arabia path and adds Persian, Turkish, Kurdish and Maghrebi at formation. Adriatic Empire is a separate territorial journal reward. See the [formation reference](COUNTRY_CONTENT.md#formable-and-releasable-countries).
- **Conditional events:** In Circassia’s Caucasus sequence, Turkey receives “The Circassian Call,” where it can seek recognition and improve relations by 20 or refuse and lose 10 relations. In the Algerian restoration event, a monarchy can back restored Algeria if Turkey is also a monarchy; Algeria then adds Turkish as a primary culture, becomes Turkey’s puppet if Turkey is recognized or its vassal if not, and receives Turkish loyalists.
- **Companies:** The Turkey market is the fixed or preferred headquarters for Allatini Mills, Chemins de fer Orientaux, Tersâne-i Âmire, Turkish Petroleum Company, and Zastava oružje. KMPMP displays the Ottoman Tobacco Regie as Ottoman Consumer Company and gives it +15% Society technology spread while prosperous. The exact bonuses, along with the other Turkish-market companies, are in the [complete company table](COUNTRY_CONTENT.md#company-building-scopes-and-prosperity-effects).
- **Changed regions:** Resource changes affect the Ottoman slice of Adana, as well as Ankara, Aydin, Baghdad, Basra, Erzurum, Kastamonu, Konya, Mosul, Northern Thrace, and Trabzon. Basra and Baghdad lose the Euphrates River trait; Diyarbakir loses the Tigris River trait. The [state-region table](COUNTRY_CONTENT.md#country-facing-state-region-economic-changes) gives every changed resource value.
- **Shared changes:** Ottoman campaigns also use the changed laws, country ranks, diplomatic rules, and all 33 revised and 22 new technologies. The complete reference explains the [law effects](COUNTRY_CONTENT.md#what-each-changed-law-does), [diplomatic changes](COUNTRY_CONTENT.md#country-to-country-diplomatic-actions), and [every technology effect and unlock](COUNTRY_CONTENT.md#technology-changes-explained).

### Persia

- **Start and balance:** Receives the small-nation modifier. Starts with Tenant Farmers and Interventionism enacted, Paddle Steamer, Mandatory Service, Cotton Gin, and Academia researched, and the Unite the Homelands journal entry.
- **Parthia formation.** New Persian and Azerbaijani hegemony. Nationalism, all 17 core regions and at least four of seven additional regions fully owned and incorporated. Both event options grant prestige, conditional claims on Punjab and Sindh, and United Parthia. Conversion to Zoroastrianism is optional. Medium balance applies. See the [formation reference](COUNTRY_CONTENT.md#formable-and-releasable-countries).
- **Starting territory and claims:** Persia receives the non-Persian slices of Laristan at game start and claims unowned state regions across Greater Persia.
- **Interest Group trait:** Persia’s Muslim Devout receive Da’wat: +20% conversion plus 5 percentage points to education access.
- **Unite the Homelands:** Persia or its subjects must control all of Herat and Sistan. Completion annexes subjects in Persian regions, then gives claims on unowned Pashtunistan, Tajikistan, Kirghizia, Uzbekia, Turkmenia, Merz, Khiva, Tianshan, Dzungaria, Jetisu, Semireche, and Kashmir. The completion event adds loyalists among Baluchi, Pashtun, Tajik, and Hazara cultures.
- **Buildings:** Irakajemi gets a logging camp with simple forestry and road carts, plus a paper mill using pulp pressing with automation disabled. Tabriz gets 6 government administrations, 3 logging camps, a tooling workshop, 3 iron mines, 2 iron-frame construction sectors, and a paper mill; the exact production methods are in the [starting-building table](COUNTRY_CONTENT.md#added-starting-buildings).
- **Regions and companies:** Resource values change in Fars, Irak-i-Ajami, Luristan, Mazandaran, Persian Kurdistan, Semnan, Tabriz and Urmia. The [company table](COUNTRY_CONTENT.md#company-building-scopes-and-prosperity-effects) includes the Imperial Dye Corporation of Persia.

### Portugal

- **Start and balance:** Receives the small-nation modifier. Adds 1 government administration in Alentejo using horizontal drawer cabinets and 4 frigates to its largest fleet.
- **Starting population:** Adds 1,233,304 Portuguese people: 372,508 in Alentejo and 860,796 in Estremadura.
- **Diplomacy:** The Great Britain–Portugal Quadruple Alliance changes from 10 years to 1 year. The French and Spanish Quadruple Alliance treaties with Portugal are removed. Portugal starts with a five-year truce with Spain and a seven-year truce with Brazil.
- **National content.** Portugal can start Reino Unido and claim Minas Gerais, Rio de Janeiro and Bahia. A player-controlled Portugal can also receive a truce from Spain’s postwar rebuild choice. [Union and Spanish entries](COUNTRY_CONTENT.md#formation-territorial-ambition-and-regional-standing)
- **Iberia formation.** Nationalism and 90% of the culture homelands are required. Iberian subjects may also have to be below 75 liberty desire. Winning Reino Unido blocks that country’s Iberia route. See the [formation reference](COUNTRY_CONTENT.md#formable-and-releasable-countries).
- **Regions and companies:** Cape Verde and Alentejo have changed resource values. Portuguese and Mozambique-headquartered companies are listed in the company index and full prosperity table.

### Prussia and the German states

- **Prussia’s start:** Receives the 15-year Rising Great Power modifier (+3% birth rate, +5% construction efficiency, and +5% production and military technology spread), adds 9 frigates, and starts with 3 basic ports and a basic shipyard in West Prussia, a basic port in East Prussia, and 2 government administrations in Lower Silesia.
- **Prussian and North German decisions:** Prussia’s North German Federation formation decision is modified and remains usable when its conditions are met. The North German Federation can use Turn Your Eye on the South to claim Franconia, Bavaria, Württemberg, Baden, and Rhineland. Its one-use Emser Depeche decision requires Nationalism, a war with France, the year 1871 or earlier, no Germany, no German unification candidacy, and incomplete ownership of Alsace-Lorraine; it gives 8% North German loyalists and a four-year military modifier.
- **North German Federation formation.** Prussia has a peacetime formation decision gated by SGF or the aggressive-Austria flag. It can annex eligible AI minors and earn a ten-year bonus. See the [formation reference](COUNTRY_CONTENT.md#formable-and-releasable-countries).
- **South German Federation and Germany.** The regional journals require a sole German candidate in the Confederation. An empire-tier southern unifier can sponsor SGF. Germany itself requires 78% of Greater Germany. See the [formation reference](COUNTRY_CONTENT.md#formable-and-releasable-countries).
- **Interest Group traits:** Prussia, the North German Federation, and Germany receive An Army with a State in the Armed Forces (+10% army offense and defense; −2.5% military-goods cost) and Made in Germany in the Industrialists (+2.5% manufacturing-building tax, +2.5% tax dividends, +10% capitalist investment-pool efficiency). Their Protestant Devout also receive Work Ethic (+5% company throughput and −2.5% mortality). The Landowners’ Wiener Walzer trait applies when Germany forms from Austria.
- **Regions and companies:** Prussia owns affected land in Anhalt, Brandenburg, Brunswick, East Prussia, North Rhine, Pomerania, Posen, Rhineland, Ruhr and West Prussia. Other German states own affected parts of Elbe, Hanover, Saxony, Hesse, Schleswig-Holstein and southern Germany. The [owner index](#state-region-changes-by-1836-owner) identifies each minor state’s starting owner; Prussian firms and the full company effects are in the company tables.

### Sardinia-Piedmont

- **Historical character.** General Chiodo starts five years younger. [Character changes](COUNTRY_CONTENT.md#start-setup)
- **Start and balance:** Receives the small-nation modifier and adds 5 frigates to its largest existing fleet.
- **Buildings:** Piedmont receives 6 government administrations using horizontal drawer cabinets.
- **Seven-day start event:** For a player-controlled Sardinia-Piedmont, Lucca annexes Parma and Modena and Sardinia-Piedmont receives claims on Emilia and Tuscany.
- **Italy formation.** Eligible for Italian major unification. KMPMP adds a temporary defense bonus during the Risorgimento and grants the formed country three cultures, additional Mediterranean claims, Risorgimento and medium balance. See the [formation reference](COUNTRY_CONTENT.md#formable-and-releasable-countries).
- **Regions and companies:** Lombardy starts in Austrian hands. The [company index](#named-companies-by-1836-headquarters) includes firms with preferred headquarters in Sardinia-Piedmont.

### Siam

- **Starting buildings:** Bangkok receives 5 government administrations using simple organization.
- **Interest Group trait:** If Siam has Theravada state religion, the Devout receive Asceticism: +1% birth rate, 15% less radical growth from standard-of-living changes at every cultural acceptance level, and 15% fewer radicals from political movements.
- **Events and companies:** Japan’s later claims event can target Siam and Java. B.Grimm is headquartered in Siam; the company table lists its eligible buildings and prosperity bonuses.

### Spain and Carlist Spain

- **Spain’s start and balance:** Receives the medium-nation modifier, starts with claims on Sardinia and Sicily, and begins Regain Influence in America. Valencia receives 7 government administrations with horizontal drawer cabinets; 14 frigates are added to Spain’s largest existing fleet.
- **Spain’s diplomacy:** Adds a 24-month truce with France and a five-year truce with Portugal. The France–Spain Quadruple Alliance is removed.
- **Iberia formation.** Nationalism and 90% of the culture homelands are required. Iberian subjects may also have to be below 75 liberty desire. Winning Reino Unido blocks that country’s Iberia route. See the [formation reference](COUNTRY_CONTENT.md#formable-and-releasable-countries).
- **Latin Empire.** Spanish primary culture qualifies Spain for the Latin Empire. Pan-Nationalism and the separate 32-region ownership and incorporation test apply. [Territory and rewards](COUNTRY_CONTENT.md#formable-and-releasable-countries)
- **Regain Influence in America and Mexico deal:** Cordial relations with Central America complete the entry and establish a Spanish protectorate. Spain can then offer Mexico a one-time deal. Mexico may claim Central America while Spain claims Mexico’s starting states and Texas; take ten years of economic cooperation, allowing Spain to invite Mexico into its Power Bloc and make Central America a puppet; or return to the Spanish Empire, annex Central America if present, become Spain’s protectorate, gain a permanent modifier, and add radicals and loyalists. Spain receives 30 infamy for the last choice. The entry can fail if Central America disappears or becomes another country’s subject.
- **Carlist content:** KMPMP changes the First Carlist War and Aragon’s Legacy. Accepting the government-side Spanish rebuild option grants a ten-year modifier; if Portugal is player-controlled, Spain also creates a 30-year one-way truce toward it.
- **Starting Carlist buildings:** Basque Country receives 4 arms industries making muskets, with automation disabled.
- **Regions and companies:** Resource values change in Asturias, Aragon, Catalonia, Galicia, Lower Andalusia, and Valencia. Aragon and Catalonia are split with Carlist Spain at the start. Spain and Carlist Spain company effects are listed in the company table.

### Sweden

- **Start and balance:** Receives the small-nation modifier and adds 5 frigates to its largest existing fleet.
- **Scandinavia formation.** A qualifying Scandinavian country needs 70% of the region and one additional gate involving Zealand, the four Finnish regions or Finland as a direct subject. Candidates need Minor Power rank and Nationalism throughout the regional iterator. See the [formation reference](COUNTRY_CONTENT.md#formable-and-releasable-countries).
- **Regions and companies:** Resource values change in Götaland, Scania, and Svealand. Ericsson and LKAB are Swedish-headquartered companies; their bonuses appear in the company table.
- **Interest Group traits:** Protestant Devout receive Work Ethic: +5% company throughput and −2.5% mortality. Swedish Industrialists receive Kommerskollegium: +5% capitalist investment-pool efficiency, +10% mining-building tax, and +5% tax dividends.

### Norway

- **Scandinavia formation.** A qualifying Scandinavian country needs 70% of the region and one additional gate involving Zealand, the four Finnish regions or Finland as a direct subject. Candidates need Minor Power rank and Nationalism throughout the regional iterator. See the [formation reference](COUNTRY_CONTENT.md#formable-and-releasable-countries).
- **Regions and companies:** Resource values change in Eastern, Western, and Northern Norway. Norwegian companies including Agers Mechaniske Værksted and Norsk Hydroelektrisk Kvælstofaktieselskap are listed in the company index and full table.
- **Interest Group trait:** With Protestant state religion, Norway’s Devout receive Work Ethic: +5% company throughput and −2.5% mortality.

### Denmark

- **Scandinavia formation.** A qualifying Scandinavian country needs 70% of the region and one additional gate involving Zealand, the four Finnish regions or Finland as a direct subject. Candidates need Minor Power rank and Nationalism throughout the regional iterator. See the [formation reference](COUNTRY_CONTENT.md#formable-and-releasable-countries).
- **Interest Group trait:** With Protestant state religion, the Devout receive Work Ethic: +5% company throughput and −2.5% mortality.
- **Regions and companies:** Danish-owned parts of the West Indies receive the Caribbean Sea state trait. A.P. Møller and Chr. Hansen are Denmark-headquartered companies; the full table gives their prosperity bonuses.

### Scandinavia

- **Formation and balance.** Swedish, Danish or Norwegian primary culture, 70% of the geographic region and full ownership of Zealand or the four named Finnish regions, or direct overlordship of Finland. Formation adds four primary cultures, Baltic claims, Lion of the North and medium balance. A direct-subject Finland can be annexed. See the [formation reference](COUNTRY_CONTENT.md#formable-and-releasable-countries).
- **Interest Group trait:** If Scandinavia has Protestant state religion, the Devout receive Work Ethic: +5% company throughput and −2.5% mortality.
- **United Scandinavia:** Once Scandinavia has formed, fully owning every region on the Swedish, Danish and Norwegian homeland list completes this entry and grants Greater Scandinavia: +5% army offense and defense, +1% birth rate, −5% military-goods cost, +15% migration attraction, +1 standard of living, +5% state construction efficiency, and −10% radicals from conquest. The entry is invalid if another country formed Scandinavia.
- **Baltic Empire:** After United Scandinavia is complete, fully owning Ingria, Kola, Pomerania, Lithuania, Riga, Tartu, Tallinn, and West Prussia grants the Baltic Empire modifier: +4% birth rate, −5% military-goods cost, +10% migration attraction, +1 standard of living, +5% state construction efficiency, and −5% radicals from conquest. Losing any one region removes the modifier and reopens the entry.
- **Shared regional changes:** The state owner index identifies changes in the Scandinavian regions and the affected Danish West Indies states.

### Two Sicilies

- **Start and balance:** Receives the small-nation modifier. Starts with Interventionism enacted and Napoleonic Warfare and Paddle Steamer researched. Adds 2 frigates to its largest fleet.
- **Buildings:** Campania receives 8 government administrations with horizontal drawer cabinets.
- **Italy formation.** Eligible for Italian major unification. KMPMP adds a temporary defense bonus during the Risorgimento and grants the formed country three cultures, additional Mediterranean claims, Risorgimento and medium balance. See the [formation reference](COUNTRY_CONTENT.md#formable-and-releasable-countries).
- **Latin Empire.** Its South Italian primary culture also qualifies Two Sicilies for the Latin Empire. [Requirements and territory](COUNTRY_CONTENT.md#formable-and-releasable-countries)

### Wallachia

- **Start and balance:** Receives the small-nation modifier.
- **Diplomacy:** The Russia–Wallachia Treaty of Adrianople defensive pact changes from a 30-year to a 17-year binding period.
- **Company and regions:** Steaua Română is headquartered in Wallachia; its buildings and oil-extraction bonus are in the company table. The state owner index identifies any affected Wallachian state regions.

### Russia

- **Start and balance:** Receives the massive-empire penalty: +5% military-goods costs and military wages, −5% unit offense and defense, +5% ammunition, artillery, and small-arms input costs, and −20% Power Bloc mandate progress.
- **Great Reforms: Military Reform:** The replaced entry advances when Russia has researched Rifling, enacted Mass Conscription, uses qualifying modern infantry for at least half its army (depending on researched technologies), has no barracks with a goods shortage or no-organization method, and has a munition plant at level 3 or higher. Completion advances reform progress by 1. The entry is cleaned up if Alexander II is no longer ruler.
- **Diplomacy:** Holy Alliance pacts with Austria and Prussia change from 35 to 28 years. Russia’s guarantee of Montenegro changes from 35 to 18 years; its Treaty of Adrianople pacts with Wallachia and Moldavia change from 30 to 17 years. Adds a 12-month truce with Persia.
- **Regions and companies:** Affected holdings include Volhynia, East Karelia, parts of Lithuania and South Livonia, Hrodna (Brest), Tiflis (Greater Caucasus) and Płock (Mazovia). Elizavetpol also gains undiscovered oil. The state table lists each value. Russian companies and the Russian-American Company appear in the company index and full prosperity table.

### United States

- **Start and fleet:** Starts with Mercantilism and adds 6 frigates to its largest existing fleet.
- **Interest Group trait:** With Protestant state religion, the Devout receive Work Ethic: +5% company throughput and −2.5% mortality.
- **National content:** KMPMP changes the Seminole Wars and the Oregon Border Dispute/Annex Oregon entries, and includes the United States in migration and Indigenous resettlement events. The journal and event inventories link the full conditions and outcomes.
- **Companies and regions:** Ford Motor Company and United Fruit Company are headquartered in the United States; Standard Oil is conditionally eligible. The company table gives their effects. The owner index lists any changed regions held by the United States at the start.

## Interest Group traits by affected country and condition

These entries describe the other country groups receiving the trait changes. The full effects are also listed in the [trait table](COUNTRY_CONTENT.md#interest-group-trait-effects-and-country-assignments).

| Country or group | Changed Interest Group trait and effect |
| --- | --- |
| Austria and Germany formed from Austria | Landowners get Wiener Walzer: +15% prestige and +15% aristocrat investment-pool efficiency. |
| Brazil | With the relevant content active, Intelligentsia get Bacharéis (+10% Society research; 10% less radical growth from standard-of-living changes at all acceptance levels) and Industrialists get The Goods Must Flow (+10% production research, in addition to +10% infrastructure). |
| China, Korea, Siam, and other Confucian, Hindu, Mahayana, or Theravada countries | Devout get Asceticism: +1% birth rate, 15% less standard-of-living radical growth at every acceptance level, and −15% political-movement radicals. |
| France and countries with French primary culture | Armed Forces get Élan Vital: +15% offense and an added +5% defense. |
| Mexico and Spanish-American countries using qualifying primary cultures | Armed Forces get El Buen Jefe: +10% army offense and defense, alongside +10% authority. The script requires a Hispanophone primary culture in the European heritage group and excludes Iberian heritage; this covers the Spanish-speaking American cultures, but not Spain. |
| Egypt, Ottoman Empire, Persia, and countries with Sunni, Shiite, or Ibadi state religion | Devout get Da’wat: +20% conversion and an added +5 percentage points to education access. |
| Japan | Devout get Secular Shrine Theory (+20% conversion, up from +15%, plus +2.5% birth rate); Industrialists get Zaibatsu Cooperation (0% manufacturing-building tax, +10% dividends, +5% construction, +5% authority); opted-in Meiji Japan gives the Armed Forces Battotai and Banzai. |
| Prussia, North German Federation, and Germany | Armed Forces get An Army with a State (+10% offense and defense, −2.5% military-goods cost); Industrialists get Made in Germany (+2.5% manufacturing-building tax and dividends, +10% capitalist investment efficiency). |
| Great Britain, Hudson Bay Company, Netherlands, Prussia and the German successor states, Sweden, Norway, Denmark, United States, and any other country with Protestant state religion except the British East India Company | Devout get Work Ethic: +5% company throughput and −2.5% mortality. Sweden’s Industrialists additionally get Kommerskollegium: +5% capitalist investment efficiency, +10% mining-building tax, and +5% tax dividends. |

## Countries created or changed through formation

See the [formation reference](COUNTRY_CONTENT.md#formable-and-releasable-countries) for territory lists, candidate rules, event choices and monthly checks.

| Country | What changes |
| --- | --- |
| Arabia | Existing formable raised to hegemony. Nationalism and 75% of 21 regions. Medium balance, extra claims and ten years of Unified Arabia. Leader of Islam halves its strength and adds four cultures. Other formers also receive the lasting Arabia modifier. |
| Germany | The Greater Germany threshold rises from 73% to 78%. The leadership and unification plays retain their vanilla requirements. GER receives massive-empire balance. |
| Iberia | Nationalism, 90% of culture homelands and the conditional subject liberty-desire test. A country that won Reino Unido is ineligible. The ordinary event adds Mediterranean and Moroccan claims. United Iberia depends on holding the mainland. |
| Italy | The vanilla 70% major formation gains three primary cultures, extra claims, Risorgimento and medium balance. The earlier stance event gives a separate decaying army-defense bonus. |
| Latin Empire | New hegemony. A South Italian- or Spanish-primary country needs Pan-Nationalism, the 60.4% formation threshold and at least 32 of the same 53 regions fully owned and incorporated. The first event gives prestige and remaining claims, or 5% loyalists if none qualify. Medium balance applies. |
| North German Federation and South German Federation | Both receive massive-empire balance. Prussia has a separate decision. An empire-tier southern unifier can sponsor a puppet SGF. Forming NGF through the regional event or the Prussian decision grants a ten-year national bonus. |
| Parthia | New Persian and Azerbaijani hegemony. Nationalism, all 17 core regions and at least four of seven additional regions fully owned and incorporated. Both event options grant prestige, conditional claims on Punjab and Sindh, and United Parthia. Conversion to Zoroastrianism is optional. Medium balance applies. |
| Scandinavia | Swedish, Danish or Norwegian primary culture, 70% of the geographic region and full ownership of Zealand or the four named Finnish regions, or direct overlordship of Finland. Formation adds four primary cultures, Baltic claims, Lion of the North and medium balance. A direct-subject Finland can be annexed. |
| United Netherlands | Nationalism and all five Low Countries regions. Gains prestige, Flemish and Wallonian loyalists, claims in the French Low Countries and southern Africa, medium balance and a national bonus maintained by holding the five regions. |
| Reino Unido | A Brazil–Portugal journal union. The winner normally annexes the other partner, gains primary cultures and moves to medium balance. A Brazil-led fallback gives the union bonus when Portugal has disappeared after Iberia forms. |
| Indonesia and Athabaska | The Dutch East Indies and Russian America have optional independence-event routes to IDN and ATB. The adapted outcomes use Javan and Cherokee respectively. |
| Spain and Peru-Bolivia | Carlist victory changes SPC to SPA. The Peru-Bolivia confederation route uses the merged Amazonian culture in its journal checks. |

Starting culture mergers can also change vanilla formation eligibility. For example, countries gaining Bambara can share Mali’s primary culture, while countries losing Amhara, Oromo or Tigray can lose their match for Ethiopia. The reference lists the [affected culture and homeland checks](COUNTRY_CONTENT.md#indirect-effects-of-the-starting-culture-mergers).

KMPMP also changes release eligibility. **Amazonia** uses Mato Grosso, Amazonas, Guayana, Bolívar, Guaviare, Pastaza, Acre, and La Paz; **Cherokee** uses Arkansas and Oklahoma; **Egypt** uses Sinai, Egyptian Desert, Matruh, Middle Egypt, Lower Egypt, and Upper Egypt, with three states required; **Occitania** uses Provence, Languedoc, Guyenne, Auvergne-Limousin, and Aquitaine, removing Rhône from vanilla’s list. AI release is disabled for all four. The same lists are in the [formable and releasable country table](COUNTRY_CONTENT.md#formable-and-releasable-countries).

## Other countries reached by national content or diplomacy

| Country or group | KMPMP content that can affect it |
| --- | --- |
| Algeria | A monarchical Constantine restoration grants Turkish loyalists and Saharan claims. The Ottoman-backed alternative also adds Turkish as a primary culture and makes Algeria an Ottoman subject. The French department events use the merged Misri culture. [Algerian events and choices](COUNTRY_CONTENT.md#player-facing-country-events) |
| Belgium | France’s guarantee is removed. Belgium owns part of Gelre at the start; it can itself form United Netherlands after meeting the state and Nationalism requirements. Gelre is in the owner index. |
| Central America | Spain’s Regain Influence in America entry can establish a Spanish protectorate. Spain’s deal with Mexico can give Mexico claims, make Central America a puppet, or annex it if the Spanish Empire option is chosen and Central America still exists. |
| Korea | Japan’s opt-in start event can give Japan claims on Korea. Korean companies, including Hanseong Jeongi Hoesa, Oriental Development Company, and Sunhwaguk, have changed scopes or prosperity bonuses in the company index and table. |
| Montenegro and Moldavia | Russia’s guarantee of Montenegro changes from 35 to 18 years. Russia’s Treaty of Adrianople pacts with Moldavia and Wallachia change from 30 to 17 years. The state owner index lists affected Balkan and Carpathian regions. |
| Oman | Removes the Oman–Persia treaty-port and money-transfer treaty. Oman’s starting slices in Baluchistan and Bampur are affected by the regional resource definitions; exact values are in the state table. |
| Andean countries | Bolivia and North Peru receive the start, population, migration, Peru-Bolivia, and culture-integration changes listed in their profiles. Eligible Peru, Federation of the Andes, and Peru-Bolivia Confederation countries can also use the Amazonian integration decision. |
| Dutch East Indies and Russian America | Independent DEI can become Indonesia with Pan-Nationalism. Russian America can choose Athabaska under Nationalism and qualifying laws. [Independence choices](COUNTRY_CONTENT.md#formations-through-decisions-journals-and-events) |
| Indigenous North American countries | KMPMP changes resettlement events involving eligible Indigenous countries and neighboring states; full event triggers and outcomes are in the [country-event table](COUNTRY_CONTENT.md#player-facing-country-events). |
| Circassia, the Circassian Imamate, Russia, Turkey, and interested powers | KMPMP changes the Caucasus war, appeals for foreign backing, and end-state events. Circassia’s choice can send “The Circassian Call” to qualifying major powers and, through its Imamate alliance choice, to Turkey. The event lets recipients improve relations and pursue recognition or decline involvement. |

## State-region changes by 1836 owner

The state changes listed here are the same changes detailed in the [state-region table](COUNTRY_CONTENT.md#country-facing-state-region-economic-changes). They raise or lower arable land, add or remove resource caps, or change undiscovered resources and arable crop eligibility. If a state is split between countries in 1836, every owner of a starting slice is listed.

| Country at start | State regions with changed resources or arable values |
| --- | --- |
| Abkhazia, Mingrelia, Svaneti | Tiflis (part) |
| Anangu, Ngumpin-Yapa, Worrorra | Northern Territory (part), Western Australia (part) |
| Anhalt | Anhalt (part) |
| Arnhem, Larrakia, Yolngu | Northern Territory (part) |
| Arrernte, Garawa | Northern Territory (part), Queensland (part) |
| Austria | Dalmatia, Lombardy, Styria |
| Baden | Baden |
| Bavaria | Bavaria, Franconia, Rhineland (part) |
| Belgium | Gelre (part) |
| Bolivia | Antofagasta |
| Brazil | Bahia, Ceará |
| Bremen, Hamburg | Elbe (part) |
| Brunswick | Brunswick (part) |
| Bukhara, Khiva, Turkmenia | Merv (part) |
| Carlist Spain | Aragon (part), Basque Country, Catalonia (part) |
| China | Northern Jilin, Shengjing |
| Croatia | Croatia |
| Denmark, Venezuela | West Indies (part) |
| Douriango, Kulin, Yura | New South Wales (part) |
| Dutch East Indies | South Sumatra |
| Egypt | Adana (part), Lebanon, Lower Egypt, Middle Egypt, Palestine, Upper Egypt |
| Ezochi | Yezo (part) |
| Finland | Kuopio, Ostrobothnia, Oulu, Uusimaa, West Karelia |
| France | Auvergne-Limousin, Burgundy, Lorraine, Normandy, West Indies (part) |
| Frankfurt, Hesse, Hesse-Kassel, Nassau, Waldeck | Hesse (part) |
| Great Britain | Bahamas, West Indies (part) |
| Haiti | Santo Domingo |
| Hanover | Brunswick (part), Elbe (part), Hanover (part) |
| Herat | Herat |
| Holstein, Lübeck, Schleswig | Schleswig-Holstein (part) |
| Hungary | Great Hungarian Plain, Ruthenia |
| Japan | Kanto, Shikoku, Tohoku, Yezo (part) |
| Kabul, Kafiristan | Kabulistan (part) |
| Kalat | Baluchistan (part) |
| Kandahar | Baluchistan (part), Bampur (part), Kandahar |
| Karna | New South Wales (part), Northern Territory (part), Queensland (part) |
| Kartu, Mirning, Noongar, Pilbara, Western Australia | Western Australia (part) |
| Makran, Oman | Baluchistan (part), Bampur (part) |
| Mara, Pama, Waka-Gabi | Queensland (part) |
| Mexico | Jalisco, México, Veracruz |
| Netherlands | Gelre (part), West Indies (part) |
| New South Wales | New South Wales (part), North Island (part), Northern Territory (part), Queensland (part) |
| Ngāi Tahu | South Island (part) |
| Ngāti Toa | North Island (part), South Island (part) |
| North Peru | Lima |
| Norway | Eastern Norway, Northern Norway, Western Norway |
| Oldenburg | Hanover (part) |
| Ottoman Empire | Adana (part), Ankara, Aydin, Baghdad, Basra, Erzurum, Kastamonu, Konya, Mosul, Northern Thrace, Trabzon |
| Paakintyi, Wiradjuri | New South Wales (part), Queensland (part) |
| Persia | Fars, Irak-i-Ajami, Luristan, Mazandaran, Persian Kurdistan, Semnan, Tabriz, Urmia |
| Poland | Lithuania (part), Płock (part), Warszawa |
| Portugal | Alentejo, Cape Verde |
| Prussia | Anhalt (part), Brandenburg, Brunswick (part), East Prussia, North Rhine, Pomerania, Posen, Rhineland (part), Ruhr, West Prussia |
| Russia | Baku, East Karelia, Elizavetpol, Hrodna, Kola, Lithuania (part), Płock (part), South Livonia (part), Tiflis (part), Volhynia |
| Saxe-Coburg-Gotha, Saxe-Meiningen, Saxe-Weimar, Saxony, Schwarzburg | Saxony (part) |
| Spain | Aragon (part), Asturias, Catalonia (part), Galicia, Lower Andalusia, Valencia |
| Sweden | Götaland, Scania, Svealand |
| Tasmania | Tasmania |
| Transylvania | Northern Transylvania |
| Two Sicilies | Calabria, Sicily |
| United Baltic Provinces | Courland, North Livonia, South Livonia (part), Talinn |
| United Tribes | North Island (part) |

Other state-trait changes are attached to these regions and their starting owners: Croatia (Croatia), Dalmatia and Istria (Austria), and Montenegro gain Natural Harbors; Western Cuba and Puerto Rico (Spain), the Bahamas and Jamaica (Great Britain), the West Indies (shared among several countries), and Haiti gain the Caribbean Sea trait. Corrientes (Argentina) loses Paraná River; Basra and Baghdad (Turkey) lose Euphrates River; Diyarbakir (Turkey) loses Tigris River. The trait bonuses and full affected-state list are in the [state-trait changes](COUNTRY_CONTENT.md#country-facing-state-region-economic-changes).

## Named companies by 1836 headquarters

Each entry gives the preferred headquarters regions and their 1836 owners. Several countries can own parts of one region. Headquarters preferences do not establish a company or identify its eventual owner. See the [industry charters and prosperity effects](COUNTRY_CONTENT.md#company-building-scopes-and-prosperity-effects).

| Starting owners | Company and preferred regions |
| --- | --- |
| Ait Abbas, Constantine, France | Société Mokta El Hadid (Constantine) |
| Angoche, Gaza, Manica, Maravi, Maseko, Mutapa, Portugal, Tungi | Companhia de Moçambique (Mocambique, Zambezia, Lourenço Marques) |
| Argentina | Ferrocarril Central Córdoba (Córdoba) |
| Argentina, Mapuche | Compañía Sansinena de Carnes Congeladas (Buenos Aires) |
| Austria | G. Ricordi & C. (Lombardy)<br>Gebrüder Thonet (Austria)<br>Glasfabrik Ludwig Moser & Söhne (Bohemia)<br>Stabilimento Tecnico Triestino (Istria)<br>Österreichische Waffenfabriks-Gesellschaft (Austria)<br>Škoda Works (Bohemia) |
| Austria, Krakow | Galician Carpathian Petroleum Company (East Galicia, West Galicia) |
| Baden | BASF (Baden) |
| Banjar, Brunei, Bulungan, Dutch East Indies, Kutai, Lanfang, Pontianak, Sambas, Sintang, Sulu | Lanfang Kongsi (West Borneo, East Borneo, North Borneo) |
| Belgium, Luxembourg | Société Franco-Belge (Flanders, Wallonia) |
| Belgium, Netherlands | Philips (Holland, Gelre) |
| Bolivia | Compañía Estañífera de Llallagua (Potosí)<br>Compañía de Salitres y Ferrocarril de Antofagasta (Antofagasta) |
| Brazil | Companhia Fiação e Tecidos de Pernambuco (Pernambuco)<br>Estaleiro Mauá (Rio de Janeiro) |
| Bukhara, Kunduz, Maimana | Da Afghan Nassaji Sherkat (Southern Turkestan) |
| Carlist Spain | Altos Hornos de Vizcaya (Basque Country) |
| Carlist Spain, Spain | La España Industrial (Catalonia) |
| Chile | La Plata Mining (Los Ríos) |
| China | Mantetsu (Shengjing)<br>Taiwanese Tea Company (Formosa) |
| Colombia | Panama Canal Company (Panama) |
| Dai Nam, Sip Song Chau Tai | Nam Định Textile Factory (Tonkin) |
| Denmark | A.P. Møller (Zealand)<br>Chr. Hansen (Zealand) |
| Ecuador, North Peru | Peruvian Amazon Company (Pastaza) |
| Egypt | MM. Nicolas Portalis et Cie. (Lebanon)<br>Misr Spinning and Weaving Company (Lower Egypt)<br>Suez Canal Company (Sinai) |
| Finland | Nokia (Uusimaa) |
| France | Compagnie des mines d'Anzin (French Low Countries)<br>Confédération générale des vignerons (Champagne)<br>Dollfus-Mieg et Cie (Burgundy) |
| France, Sardinia-Piedmont | Forges et Chantiers de la Méditerranée (Provence) |
| Great Britain | Arthur Guinness Son & Co. Ltd (Leinster)<br>John Brown & Company (Lowlands)<br>Maple & Co. (Home Counties)<br>Sir W. G. Armstrong Whitworth & Co. (Yorkshire) |
| Great Britain, Johore, Perak, Selangor, Siam | Great Rubber Corporation of Indochina (Malaya) |
| Greece | Basileiades (Attica)<br>Kouppas (Attica) |
| Hungary | Manfréd Weiss Steel and Metal Works (Great Hungarian Plain)<br>MÁVAG (Great Hungarian Plain) |
| Japan | Genda Shigyo (Chugoku)<br>Imperial Arsenal Factory (Tohoku)<br>Kinkozan Sobei (Osaka)<br>Mitsubishi (Kanto) |
| Korea | Hanseong Jeongi Hoesa (Gyeonggi)<br>Korean Tungsten Company (Gyeonggi)<br>Oriental Development Company (Gyeonggi) |
| Mexico | Fundidora de Fierro y Acero de Monterrey (Río Grande) |
| Netherlands | Heineken International (Holland)<br>Shell (Holland, Friesland) |
| North Peru | Empresas Eléctricas Asociadas (Lima) |
| Norway | Agers Mechaniske Værksted (Eastern Norway)<br>Norsk Hydroelektrisk Kvælstofaktieselskap (Western Norway) |
| Orta Zhuz, Russia | Kirgizian Mining Joint Stock Company (Semipalatinsk) |
| Ottoman Empire | Allatini Mills (Macedonia)<br>Chemins de fer Orientaux (Eastern Thrace)<br>Tersâne-i Âmire (Eastern Thrace)<br>Turkish Petroleum Company (Baghdad, Basra, Mosul) |
| Ottoman Empire, Serbia | Zastava oružje (Western Serbia) |
| Paraguay | La Rosada (Bajo Paraguay) |
| Persia | Persian Luxery Consumer Goods Company (Irak-i-Ajami) |
| Piratini | Amadeo Rossi & Cia. (Rio Grande do Sul) |
| Poland | Ursus (Warszawa) |
| Poland, Russia | Lilpop, Rau i Loewenstein (Płock, Warszawa) |
| Prussia | F. Schichau (West Prussia)<br>Rheinmetall (Ruhr, North Rhine)<br>Siemens & Halske (Brandenburg) |
| Russia | Abrau-Dyurso (Ingria, Moscow)<br>Branobel (Baku)<br>Imperial Porcelan Factory (Ingria)<br>Izhevsk Arms Plant (Perm)<br>Savva Morozov & Sons (Moscow)<br>Society of Putilov Factories (Ingria) |
| Sardinia-Piedmont | FIAT (Piedmont)<br>Gio. Ansaldo & C. (Piedmont)<br>Ilva (Piedmont) |
| Saxe-Coburg-Gotha, Saxe-Meiningen, Saxe-Weimar, Saxony, Schwarzburg | Königliche Porzellan-Manufaktur Meissen (Saxony) |
| Siam | B.Grimm (Bangkok) |
| Spain | Fábrica de Armas de Trubia (Asturias) |
| Sweden | Ericsson (Svealand)<br>LKAB (Norrland) |
| Two Sicilies | Anglo-Sicilian Sulphur Company (Sicily) |
| United States | Ford Motor Company (Michigan)<br>United Fruit Company (Louisiana) |
| Venezuela | Caribbean Petroleum Company (Zulia, Miranda) |
| Wallachia | Steaua Română (Wallachia) |

The following named companies have no fixed headquarters preference. Their founding conditions are in the linked company definitions.

Bunge & Born, Centro Vitivinícola Nacional, Compagnie du Congo, Căile Ferate Române, Egyptian State Railways, El Águila, Great Western Railway, Imperial Dye Corporation of Persia, Imperial Ethiopian Railway Company, John Holt and Company, Klabin Irmãos & Cia., Nederlandse Petroleum Maatschappij, Ottoman Consumer Company, Preußische Staatseisenbahnen, Russian-American Company, San Miguel, Standard Oil, Sunhwaguk, United Construction Conglomerate.

## Shared changes that apply to countries

These systems are described once in the complete reference because they are not exclusive to a single country:

- **Laws:** the detailed [plain-language law table](COUNTRY_CONTENT.md#what-each-changed-law-does) gives the effective changes for each law. A law bonus applies only while that law is enacted. KMPMP does not enact every listed law at the start.
- **Country ranks and balance:** the [rank and country-balance tables](COUNTRY_CONTENT.md#country-balance) show the starting tiers, monthly reassignment rules, and effects of Great, Major, Minor, Unrecognized, and Decentralized Power ranks.
- **Shared modifiers and player bonuses:** the [country modifier table](COUNTRY_CONTENT.md#country-bonuses-and-penalties) explains the direct effects, and the [player decisions](COUNTRY_CONTENT.md#player-facing-country-decisions) list explains how the selectable bonuses are activated.
- **Age of Warfare:** By default, each player country receives this 25-year decaying modifier at game start. It can be turned off or applied to every country instead. It gives +60% throughput to Arms Industries, Artillery Foundries, and Munitions Plants; reduces battalion mobilization-goods requirements by 30%; and reduces Small Arms, Ammunition, and Artillery input by 15%. The [option summary](COUNTRY_CONTENT.md#country-ranks-laws-political-groups-and-identities) covers the other start-of-game options.
- **Companies:** the [complete company table](COUNTRY_CONTENT.md#company-building-scopes-and-prosperity-effects) names each affected company, its allowed buildings, and its bonus while prosperous. The bonus belongs to the country that owns the company at that point in the campaign.
- **Diplomacy:** KMPMP revises shared diplomatic actions, subject actions, treaty articles, and diplomatic plays. The exact differences are in the [country-to-country diplomatic action table](COUNTRY_CONTENT.md#country-to-country-diplomatic-actions) and [historical diplomacy table](COUNTRY_CONTENT.md#historical-diplomacy-differences).
- **Technology, buildings, and production:** shared additions and replacements are listed in [shared technology, building, and production-method changes](COUNTRY_CONTENT.md#shared-technology-building-and-production-method-changes).
- **Other dynamic country systems:** culture integration, country formation checks, military shortages, war-end updates, and monthly updates are listed under [country systems that update during play](COUNTRY_CONTENT.md#country-systems-that-update-during-play).
- **Global start effects:** a day-one event applies the selected game options to every country, all railways start subsidized, Central American states receive a one-time −100% adjustment to each pop’s radical share, Gotland starts unincorporated, and Kuban loses the Ukrainian homeland. Brazil’s player-only start event, Bolivia’s start adjustment, Persia’s territorial setup, and Egypt’s Ottoman claims are listed in the [additional start and diplomacy table](COUNTRY_CONTENT.md#additional-start-and-diplomacy-changes).
