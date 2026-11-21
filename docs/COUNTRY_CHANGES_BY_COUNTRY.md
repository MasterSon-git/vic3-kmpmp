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
- **Three Crowns presentation:** When Austria meets the primary-culture, government, territory, and ruler conditions, KMPMP changes its country name, flag, and map color to the Three Crowns presentation. The separate Kingdom of the Three Crowns modifier gives +2% birth rate, +5 authority, and +5% state construction efficiency.
- **Interest Group trait:** Austrian Landowners receive Wiener Walzer: +15% prestige and +15% aristocrat investment-pool efficiency. Germany formed from Austria keeps this Landowner trait.
- **Austro-Hungarian Agreement:** From 1845, Austria can use the one-time decision after Nationalism if Hungarian is not already a primary culture. It enacts Racial Segregation if necessary and grants a five-year decaying modifier.
- **Diplomacy and regions:** Holy Alliance defensive pacts with Prussia and Russia change from 35 to 28 years. Guarantees of Tuscany, Parma, and Modena are removed; Austrian-Tuscan trade articles remain. Dalmatia, Lombardy, and Styria receive resource or arable-land changes, and Istria gains Natural Harbors. The owner-index and state tables give the exact region values.
- **Companies:** Changed firms headquartered in Austria and its crown lands are listed in [the headquarters index](#named-companies-by-1836-headquarters); prosperity effects are in the [complete company table](COUNTRY_CONTENT.md#company-building-scopes-and-prosperity-effects).

### Belgium

- **Start and balance:** Receives the small-nation modifier. France’s starting guarantee of Belgium is removed.
- **United Netherlands formation:** After researching Nationalism, Belgium can form United Netherlands by fully controlling all five required regions: Holland, Flanders, Wallonia, Friesland, and Gelre. Formation gives the standard unification prestige and claims on unowned homelands of its cultures, plus claims on the French Low Countries and the Cape Colony, Northern Cape, Eastern Cape, Vrystaat, Zululand, and Transvaal. KMPMP adds 25% Flemish and 25% Walloon loyalists and the United Netherlands modifier: +3% birth rate, +15% army offense and defense, +10% university and manufacturing throughput, and +10% loyalist growth under every cultural-acceptance level. The monthly rank update gives the formed country the medium-nation bonus. Belgium owns part of Gelre at the 1836 start; KMPMP changes Gelre’s iron resource cap.
- **Regions and companies:** Belgium and the Netherlands share starting ownership in Gelre and parts of the West Indies. The company index lists Société Franco-Belge and Philips under their headquarters markets, and the full company table gives each bonus.

### Brazil

- **Start and balance:** Receives the small-nation modifier. A player-controlled Brazil gets a hidden start event that resolves its initial Brazil-initiated diplomatic plays. Bolivia loses 30 infamy at game start; if Brazil and Bolivia are both player-controlled, North and South Peru are set to 25 liberty desire.
- **Reino Unido union:** Brazil or Portugal can start the globally one-use decision while both exist. It opens the same journal entry for both and gives Brazil claims on Beira, Estremadura, and Alentejo, and Portugal claims on Minas Gerais, Rio de Janeiro, and Bahia. The normal completion requires Nationalism and Egalitarianism, with one partner a direct puppet or dominion of the other. If Brazil leads, it annexes Portugal and adds Portuguese, Afro-Brazilian, and Paulista as primary cultures; if Portugal leads, it annexes Brazil and adds Brazilian, Afro-Brazilian, and Paulista. The surviving country receives the permanent Reino Unido modifier: +4.2% birth rate, +10% army offense and defense, +10% plantation and logging throughput, +15% university throughput, and −10% decree cost. If Iberia has formed and Portugal no longer exists, Brazil can use the fallback after the protectorate follow-up is complete and Brazil is not itself an Iberian subject; that route does not annex Portugal or add Portuguese culture. The follow-up can make Portugal Brazil’s protectorate after Brazil fully owns Beira, Estremadura, and Alentejo, or make Brazil Portugal’s protectorate after Portugal fully owns Minas Gerais, Rio de Janeiro, and Bahia; the target must not already be the other country’s subject. Brazil and Portugal then receive the medium-nation bonus.
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

- **Start and balance:** A day-one event gives player-controlled China +50% army offense, +50% army defense, and −50% morale loss. AI-controlled China does not receive this event bonus.
- **Interest Group trait:** With Confucian state religion, the Devout receive Asceticism: +1% birth rate, 15% less radical growth from standard-of-living changes at every acceptance level, and the existing 15% reduction in political-movement radicals.
- **Opium Wars:** KMPMP replaces the Opium Wars journal content shared with Great Britain, changing the conflict’s progress and outcomes. See the national journal and event inventories for the full chain.
- **Regions and companies:** Shengjing and Outer Manchuria receive changed resource values. Mantetsu is listed under the China headquarters market; its prosperous bonus is in the complete company table.

### Egypt

- **Start and balance:** Receives the small-nation modifier. Adds 762,245 people to Upper Egypt and Palestine, including Misri, Mashriqi, Bedouin, Sephardic, Armenian, Turkish, Sudanese, Dagestani, and Lacustrine Bantu populations. The exact counts and religions are in the [starting-population table](COUNTRY_CONTENT.md#added-starting-population).
- **Buildings:** Lower Egypt receives 10 government administrations with horizontal drawer cabinets, 5 paper mills, 4 textile mills, 11 cotton plantations, and 2 logging camps; Palestine gets a tooling workshop.
- **Interest Group trait:** With Sunni state religion, the Devout receive Da’wat: +20% conversion and +5 percentage points education access.
- **Ottoman claims:** At the start, Egypt gives Turkey a claim on every state region containing territory Egypt owns, including its pieces of split regions.
- **Regions and companies:** Lower, Middle, and Upper Egypt have changed resource values; Egypt also owns starting slices in Adana and Lebanon whose regions change. Egyptian companies and their prosperity effects are in the company index and full table.

### France

- **Start and balance:** Starts with Mercantilism and receives the massive-empire penalty: +5% military-goods costs and military wages, −5% unit offense and defense, +5% ammunition, artillery, and small-arms input costs, and −20% Power Bloc mandate progress.
- **Buildings:** Adds 3 government administrations in Languedoc using vertical filing cabinets.
- **Diplomacy:** Removes the France–Spain and France–Portugal Quadruple Alliance treaties and France’s guarantee of Belgium. Adds a 12-month truce with Sardinia-Piedmont and a 24-month truce with Spain.
- **Algeria and natural borders:** Changes the Algerian Departments journal chain and the French natural-border events and decisions. The Algeria chain covers the French departments, Algerian integration, and possible restoration outcomes; see the [journal and event inventories](COUNTRY_CONTENT.md#complete-national-journal-entry-inventory).
- **Interest Group trait:** French Armed Forces receive Élan Vital: the existing +15% army offense now also gives +5% army defense. The same assignment follows any country with French as a primary culture.
- **Regions and companies:** Changes resources in Auvergne-Limousin, Burgundy, Lorraine, and Normandy, plus French-held slices of the West Indies; its Caribbean states gain the Caribbean Sea trait. French and Algerian-headquartered firms are in the [company index](#named-companies-by-1836-headquarters) and full table.

### Great Britain

- **Start and balance:** Starts with Mercantilism and receives the massive-empire penalty. A separate 50-year decaying Global Empire modifier reduces government-administration throughput and construction efficiency by 10%, university throughput, migration pull, and qualifications by 15%, raises expected standard of living by 1 for each strata, and reduces Power Bloc mandate progress by 10%.
- **Buildings:** Midlands receives 7 government administrations using vertical filing cabinets.
- **Diplomacy and events:** The binding period of the Great Britain–Portugal Quadruple Alliance changes from 10 years to 1 year. Great Britain shares the changed Opium Wars chain with China and receives the Seminole Wars content involving the United States.
- **Interest Group trait:** With Protestant state religion, the Devout receive Work Ethic: +5% company throughput and −2.5% mortality.
- **Regions and companies:** Resource values change in the Bahamas and British-owned West Indies states; those Caribbean states gain the Caribbean Sea trait. British companies, including eligible Great Western Railway, are listed by headquarters and in the full prosperity table.

### Japan

- **Start and balance:** Receives the small-nation modifier. Seven days after the start, a player can opt into Japan’s bonuses. Accepting grants a 12-year modifier with +15 percentage points to law-enactment success, +15% law-enactment speed, +30% university throughput, +30,000 minting, and +2 Power Bloc mandate progress, plus a 50-year decaying modifier that gives +50% prestige. Japan moves from small-nation to medium-nation balance when its Meiji completion variable is set locally; if Meiji is completed through the global route, KMPMP removes both rank modifiers.
- **Claims and later choice:** The opt-in adds claims on Korea and Shengjing and Formosa, and changes the Shogunate leader to the Jingoist ideology. After Meiji, Japan chooses between claims on Siam and Java or on Borneo and Dai Nam. If the normal Meiji bonus event fails to fire for an opted-in player, a player-only decision triggers it.
- **Meiji:** KMPMP changes the Meiji Restoration entry. Completion adds Battotai and Banzai traits to the Armed Forces and, if completed before 1885, grants a 15-year modifier with +15% technology spread, −10% infamy generation, +15% infamy decay, +20% offense and defense, and +30% battle occupation.
- **Other Interest Group traits:** Japan’s Shinto Devout receive Secular Shrine Theory, whose conversion bonus is reduced from +15% to +5% and which gains +2.5% birth rate. Industrialists receive Zaibatsu Cooperation: manufacturing-building tax changes from +10% to −10%, with +10% tax dividends, +5% construction, and +5% authority. The Japan-only Meiji traits are described above.
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
- **United Netherlands formation:** After researching Nationalism, the Netherlands can form United Netherlands by fully controlling Holland, Flanders, Wallonia, Friesland, and Gelre. Formation gives the standard unification prestige and claims on unowned homelands of its cultures, plus claims on the French Low Countries and the Cape Colony, Northern Cape, Eastern Cape, Vrystaat, Zululand, and Transvaal. KMPMP adds 25% Flemish and 25% Walloon loyalists and the United Netherlands modifier: +3% birth rate, +15% army offense and defense, +10% university and manufacturing throughput, and +10% loyalist growth under every cultural-acceptance level. The monthly rank update gives it the medium-nation bonus. Gelre is split between Belgium and the Netherlands at the start and has a new iron resource cap.
- **Interest Group trait:** With Protestant state religion, the Devout receive Work Ethic: +5% company throughput and −2.5% mortality.
- **Regions and companies:** The Netherlands and Belgium share starting ownership in parts of the West Indies, which receive the listed Caribbean state changes. Philips and other eligible Netherlands-market companies are in the company index; full bonuses are in the prosperity table.

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
- **Characters:** Abdulmecid is an Intelligentsia modernizer with child and imperious traits; KMPMP changes his vanilla moderate ideology and aesthete trait. Abdulhamid II is moved from the Landowners to the Intelligentsia, gets imperious instead of persistent, and can appear as Intelligentsia leader in a monarchy from 1870 to 1900 with a 50% chance.
- **Interest Group trait:** The Devout’s Da’wat trait keeps +20% conversion and adds +5 percentage points to education access.
- **Sick Man of Europe:** The start event gives +150 Authority and −10% decree cost for 20 years, plus +20% defense for 20 years with decay. Continuing adds the Syria, Economy, Education, Separatism, Army, and Bureaucracy entries. The main entry has a 10,950-day timer and a 4-point progress target. Education completion requires at least one university at level 5 or more with over 90% occupancy, and literacy 20 percentage points above its starting value; completion advances the main entry by 1. KMPMP scales the displayed literacy progress by 100 for readability without changing the literacy goal.
- **Sick Man rewards:** Completion grants 7% loyalists and permanent Restored Fame: +5% army and navy offense and defense, +5% plantation and mine throughput, +5% technology spread and tax capacity, +5 percentage points education access, +5% training rate, and +1 percentage point conscription. The success event offers three choices: **Path to Westernization** adds Greek, Bulgarian, Serbian, and Albanian as primary cultures, claims unowned Balkan, Transylvanian, Crimean, and southern Russian states, and boosts production research, political strength of the Armed Forces and Industrialists, technology spread, capitalist investment, construction, and decree cost for 20 years; **Leader of Islam** adds Kurdish, Bedouin, Persian, Misri, Mashriqi, and Maghrebi as primary cultures, claims unowned Persian, Iranian, Arab, and North African states, and boosts birth rate, military costs, training, army offense, conversion, military research, and technology spread for 25 years; **The Reform Goes On** boosts birth rate, construction, technology spread, minting, all three research categories, and education access for 15 years. Exact state lists and modifier values are in the [Ottoman change inventory](COUNTRY_CONTENT.md#ottoman-empire-complete-change-inventory).
- **Failure and partial progress:** Timeout applies the decaying Dead Man of Europe penalty, marks Tanzimat failure for 20 years, removes Rumelian tradition from Albanian, Bosniak, and Sephardic cultures, and can start the Great Eastern Crisis when its DLC is active. KMPMP prevents the vanilla outcome that made Turkey unrecognized. Failure with progress above zero can grant “A Little Honor”; failure above 1 progress offers the same three reward paths scaled by progress.
- **A Proud Nation:** Appears after the Sick Man chain is marked complete. The player can press “We are ready” to complete it at once; otherwise it completes automatically from 1887 and changes the Ottoman tier from small to medium.
- **Arabia and Adriatic Empire:** Arabia requires Nationalism and control of at least 75% of its 21 listed regions: Yemen, Oman, Abu Dhabi, Nejd, Hejaz, Hail, Baghdad, Transjordan, Palestine, Lebanon, Syria, Aleppo, Mosul, Deir ez-Zor, Basra, Sinai, Lower Egypt, Middle Egypt, Matruh, Egyptian Desert, and Upper Egypt. Arabia’s formation event grants unification prestige and standard homeland claims, then claims unclaimed regions across North Africa and any unowned Ottoman-core regions among Konya, Hudavendigar, Aydin, Kastamonu, and Ankara. If Turkey forms Arabia while carrying the Leader of Islam reward, it also adds Persian, Turkish, Kurdish, and Maghrebi primary cultures and receives Unified Arabia for five years at half strength: +5,000 minting, +5% construction, +4% birth rate, and −12.5% loan interest. Other Arabia formers receive the full ten-year modifier (+10,000 minting, +10% construction, +8% birth rate, and −25% loan interest) and the Arabia modifier (+5% offense and defense, +2% birth rate, +5% technology spread, and +10% plantation throughput). After Pan-Nationalism, eligible countries can also complete Adriatic Empire by fully owning at least 9 of Apulia, Abruzzo, Umbria, Romagna, Venetia, Istria, Croatia, Dalmatia, Montenegro, and Albania. It grants +25% convoy construction efficiency, +5% ship offense and defense, +20% state trade quantity, and +10% trade-center, port, and sulfur-mine throughput. Falling below 7 owned regions removes the bonus.
- **Conditional events:** In Circassia’s Caucasus sequence, Turkey receives “The Circassian Call,” where it can seek recognition and improve relations by 20 or refuse and lose 10 relations. In the Algerian restoration event, a monarchy can back restored Algeria if Turkey is also a monarchy; Algeria then adds Turkish as a primary culture, becomes Turkey’s puppet if Turkey is recognized or its vassal if not, and receives Turkish loyalists.
- **Companies:** The Turkey market is the fixed or preferred headquarters for Allatini Mills, Chemins de fer Orientaux, Tersâne-i Âmire, Turkish Petroleum Company, and Zastava oružje. KMPMP displays the Ottoman Tobacco Regie as Ottoman Consumer Company and gives it +15% Society technology spread while prosperous. The exact bonuses, along with the other Turkish-market companies, are in the [complete company table](COUNTRY_CONTENT.md#company-building-scopes-and-prosperity-effects).
- **Changed regions:** Resource changes affect Ottoman-owned parts of Adana and Ankara, Aydin, Baghdad, Basra, Erzurum, Kastamonu, Konya, Mosul, Northern Thrace, and Trabzon. Basra and Baghdad lose the Euphrates River trait; Diyarbakir loses the Tigris River trait. The [state-region table](COUNTRY_CONTENT.md#country-facing-state-region-economic-changes) gives every changed resource value.
- **Shared changes:** Ottoman campaigns also use the changed laws, country ranks, diplomatic rules, and all 33 revised and 22 new technologies. The complete reference explains the [law effects](COUNTRY_CONTENT.md#what-each-changed-law-does), [diplomatic changes](COUNTRY_CONTENT.md#country-to-country-diplomatic-actions), and [every technology effect and unlock](COUNTRY_CONTENT.md#technology-changes-explained).

### Persia

- **Start and balance:** Receives the small-nation modifier. Starts with Tenant Farmers and Interventionism enacted, Paddle Steamer, Mandatory Service, Cotton Gin, and Academia researched, and the Unite the Homelands journal entry.
- **Parthia formation:** Requires Nationalism, full control of Irakajemi, Isfahan, Khorasan, Mazandaran, Tabriz, Luristan, Khuzestan, Fars, Laristan, Sistan, Azerbaijan, Baghdad, Kerman, Semnan, Herat, Merz, and Turkmenia, plus ownership and incorporation of at least four of Basra, Armenia, Diyarbakir, Erzurum, Deir ez-Zor, Mosul, and Elizavpol. Parthia has Persian and Azerbaijani primary cultures, Irakajemi as capital, a dedicated flag, and a monarchy-dependent name. Formation grants prestige, claims on Punjab and Sindh if they are not fully owned, and United Parthia (+1.2% birth rate, +5% offense and defense, +10% infrastructure, +10% plantation throughput). Its event offers a Zoroastrian route that converts 60% of pops in each state to Zoroastrian and changes the state religion. Parthia receives the medium-nation bonus; all details are in the [formation guide](COUNTRY_CONTENT.md#formable-and-releasable-countries).
- **Starting territory and claims:** Persia receives the non-Persian slices of Laristan at game start and claims unowned state regions across Greater Persia.
- **Interest Group trait:** Persia’s Muslim Devout receive Da’wat: +20% conversion plus 5 percentage points to education access.
- **Unite the Homelands:** Persia or its subjects must control all of Herat and Sistan. Completion annexes subjects in Persian regions, then gives claims on unowned Pashtunistan, Tajikistan, Kirghizia, Uzbekia, Turkmenia, Merz, Khiva, Tianshan, Dzungaria, Jetisu, Semireche, and Kashmir. The completion event adds loyalists among Baluchi, Pashtun, Tajik, and Hazara cultures.
- **Buildings:** Irakajemi gets a logging camp with simple forestry and road carts, plus a paper mill using pulp pressing with automation disabled. Tabriz gets 6 government administrations, 3 logging camps, a tooling workshop, 3 iron mines, 2 iron-frame construction sectors, and a paper mill; the exact production methods are in the [starting-building table](COUNTRY_CONTENT.md#added-starting-buildings).
- **Regions and companies:** Resource values change in Irakajemi, Luristan, Mazandaran, Persian Kurdistan, Tabriz, and Urmia. The Imperial Tobacco Corporation of Persia and eligible companies headquartered in Afghanistan and nearby states are listed in the company index and full table.

### Portugal

- **Start and balance:** Receives the small-nation modifier. Adds 1 government administration in Alentejo using horizontal drawer cabinets and 4 frigates to its largest fleet.
- **Starting population:** Adds 1,233,304 Portuguese people: 372,508 in Alentejo and 860,796 in Estremadura.
- **Diplomacy:** The Great Britain–Portugal Quadruple Alliance changes from 10 years to 1 year. Portugal–Spain and Portugal–Brazil starting treaties are removed; KMPMP instead adds five-year truces with Spain and seven-year truces with Brazil.
- **National content:** Portugal receives Regain Influence in America through Spain’s journal chain and can take part in Reino Unido. If Portugal is player-controlled, the Carlist Spain rebuild event can also add a 30-year truce.
- **Iberia formation:** Portugal can form Iberia with Nationalism after controlling at least 90% of the regions in the Spanish and Portuguese culture-state list. When the capital is in old Iberia and Portugal has subjects there, each subject must have liberty desire below 75. The formation is unavailable after Reino Unido is completed. It grants unification prestige and unowned homeland claims, claims on Sardinia, Sicily, Corsica, Al-Rif, Fez, Marrakech, and Inner Morocco, the permanent United Iberia modifier (+5% offense and defense, +5% technology spread and tax capacity, +3% birth rate, +5% training rate), and the medium-nation bonus. The complete requirement and effect list is in the [formation guide](COUNTRY_CONTENT.md#formable-and-releasable-countries).
- **Regions and companies:** Cape Verde and Alentejo have changed resource values. Portuguese and Mozambique-headquartered companies are listed in the company index and full prosperity table.

### Prussia and the German states

- **Prussia’s start:** Receives the 15-year Rising Great Power modifier (+3% birth rate, +5% construction efficiency, and +5% production and military technology spread), adds 9 frigates, and starts with 3 basic ports and a basic shipyard in West Prussia, a basic port in East Prussia, and 2 government administrations in Lower Silesia.
- **Prussian and North German decisions:** Prussia’s North German Federation formation decision is modified and remains usable when its conditions are met. The North German Federation can use Turn Your Eye on the South to claim Franconia, Bavaria, Württemberg, Baden, and Rhineland. Its one-use Emser Depeche decision requires Nationalism, a war with France, the year 1871 or earlier, no Germany, no German unification candidacy, and some control of Alsace-Lorraine; it gives 8% North German loyalists and a four-year military modifier.
- **North German Federation formation:** The revised Prussian decision requires Prussia to have North German primary culture and Great Power rank, be at peace, and have at least 90% of North German-primary countries as its subjects or Customs Union members. It is shown when the South German Federation exists and neither North German Federation nor Germany exists, or when the aggressive-Austria flag is active. On taking it, Prussia annexes eligible AI North German minors that are in its Customs Union, are its subjects, or are independent and have relations above neutral; it changes tag to North German Federation, gains ten years of +7% birth rate, +5% construction, −15% loan interest and +5% army offense and defense, and clears the aggressive-Austria flag. The separate journal route requires the Schleswig-Holstein question resolved, Nationalism and a sole eligible North German candidate.
- **South German Federation and Germany:** The South German Federation entry uses the same Schleswig-Holstein and Nationalism requirements with a sole South German candidate. German unification requires an independent selected unifier with Major Power rank, Pan-Nationalism, and the unifier mark from the identity event; formation then requires 78% of the Greater Germany state list, raised from 73%. The direct rule also requires either Pan-Nationalism or completion of the German National Identity idea, no Confederation of the Rhine, no Dual or Triple Monarchy government, and a country other than Austria-Hungary. North German Federation, South German Federation, and Germany receive the massive-empire penalty when formed. KMPMP changes the German unification and Greater Germany journal entries, adds Fate in the East, and revises the German–French border chains.
- **Interest Group traits:** Prussia, the North German Federation, and Germany receive An Army with a State in the Armed Forces (+10% army offense and defense; −2.5% military-goods cost) and Made in Germany in the Industrialists (+2.5% manufacturing-building tax, +2.5% tax dividends, +10% capitalist investment-pool efficiency). Their Protestant Devout also receive Work Ethic (+5% company throughput and −2.5% mortality). The Landowners’ Wiener Walzer trait applies when Germany forms from Austria.
- **Regions and companies:** Resource values change in Anhalt, Brandenburg, East Prussia, North Rhine, Pomerania, Posen, Rhineland, Ruhr, West Prussia, Elbe, Saxony, Brunswick, Hannover, Baden, Bavaria, Franconia, Hesse, Schleswig-Holstein, Greater Poland, and Mazovia, plus other German-held slices of shared states. The [owner index](#state-region-changes-by-1836-owner) identifies each minor state’s starting owner; Prussian firms and the full company effects are in the company tables.

### Sardinia-Piedmont

- **Start and balance:** Receives the small-nation modifier and adds 5 frigates to its largest existing fleet.
- **Buildings:** Piedmont receives 6 government administrations using horizontal drawer cabinets.
- **Seven-day start event:** For a player-controlled Sardinia-Piedmont, Lucca annexes Parma and Modena and Sardinia-Piedmont receives claims on Emilia and Tuscany.
- **Italy formation:** Sardinia-Piedmont can qualify with North Italian primary culture, recognized status, its capital in the old Italy region, and at least 70% of Italian-culture homeland states; it also needs Minor Power rank or higher to be a candidate and Nationalism researched by a country in the region. KMPMP changes the unification plays and formation event. Italy receives unification claims and a choice between unifier prestige or ruler-Interest-Group support, plus Francoprovencal, Albanian, and Greek primary cultures; claims on unowned Rhône, Provence, Peloponnese, Attica, Crete, Thessalia, Macedonia, Albania, and Corsica; and permanent Risorgimento (+5% offense and defense, +5% technology spread, +2% birth rate, +5% construction efficiency, +1 percentage point conscription). Formed Italy receives the medium-nation bonus. Sardinia-Piedmont also has a 12-month truce with France.
- **Regions and companies:** Italian resource changes include Lombardy while Austria owns it and the other state regions listed in the owner index. Sardinia-Piedmont and French-headquartered Italian companies are in the company index and full table.

### Siam

- **Starting buildings:** Bangkok receives 5 government administrations using simple organization.
- **Interest Group trait:** If Siam has Theravada state religion, the Devout receive Asceticism: +1% birth rate, 15% less radical growth from standard-of-living changes at every cultural acceptance level, and 15% fewer radicals from political movements.
- **Events and companies:** Japan’s later claims event can target Siam and Java. B.Grimm is headquartered in Siam; the company table lists its eligible buildings and prosperity bonuses.

### Spain and Carlist Spain

- **Spain’s start and balance:** Receives the medium-nation modifier, starts with claims on Sardinia and Sicily, and begins Regain Influence in America. Valencia receives 7 government administrations with horizontal drawer cabinets; 14 frigates are added to Spain’s largest existing fleet.
- **Spain’s diplomacy:** Adds a 24-month truce with France and a five-year truce with Portugal. The France–Spain Quadruple Alliance is removed.
- **Iberia formation:** Spain can form Iberia after researching Nationalism and controlling at least 90% of the Spanish and Portuguese culture-state list. If its capital is in old Iberia and it has subjects there, every such subject must have liberty desire below 75. Reino Unido completion blocks Iberia formation. The event grants unification prestige and unowned homeland claims, plus claims on Sardinia, Sicily, Corsica, Al-Rif, Fez, Marrakech, and Inner Morocco; United Iberia (+5% offense and defense, +5% technology spread and tax capacity, +3% birth rate, +5% training rate); and medium-nation balance. The full formation rules are in the [formation guide](COUNTRY_CONTENT.md#formable-and-releasable-countries).
- **Regain Influence in America and Mexico deal:** Cordial relations with Central America complete the entry and establish a Spanish protectorate. Spain can then offer Mexico a one-time deal. Mexico may claim Central America while Spain claims Mexico’s starting states and Texas; take ten years of economic cooperation, allowing Spain to invite Mexico into its Power Bloc and make Central America a puppet; or return to the Spanish Empire, annex Central America if present, become Spain’s protectorate, gain a permanent modifier, and add radicals and loyalists. Spain receives 30 infamy for the last choice. The entry can fail if Central America disappears or becomes another country’s subject.
- **Carlist content:** KMPMP changes the First Carlist War and Aragon’s Legacy. The Carlist Spain rebuild event grants a ten-year modifier; if Portugal is player-controlled, it also creates a 30-year truce.
- **Starting Carlist buildings:** Basque Country receives 4 arms industries making muskets, with automation disabled.
- **Regions and companies:** Resource values change in Asturias, Aragon, Catalonia, Galicia, Lower Andalusia, and Valencia. Aragon and Catalonia are split with Carlist Spain at the start. Spain and Carlist Spain company effects are listed in the company table.

### Sweden

- **Start and balance:** Receives the small-nation modifier and adds 5 frigates to its largest existing fleet.
- **Scandinavia formation:** Sweden qualifies when it is in the Scandinavian region, has Swedish primary culture, controls at least 70% of the 15 Scandinavian state regions—Jutland, Zealand, Schleswig-Holstein, Gotland, Götaland, Scania, Norrland, Svealand, Uusimaa, Åland, Ostrobothnia, Oulu, Eastern Norway, Western Norway, and Northern Norway—and meets one regional gate: fully own Zealand; fully own Åland, Uusimaa, Ostrobothnia, and Oulu; or have Finland as a direct subject. It must be at least a Minor Power to become a unification candidate, and at least one country in Scandinavia must have Nationalism; KMPMP allows up to three candidates and excludes Icelandic-primary countries. Formation grants the usual unification prestige and claims on unowned Scandinavian-culture homelands (or 5% loyalists if there are no such claims), adds Estonian, Finnish, Latvian, and Lithuanian as primary cultures, grants claims on unowned West Prussia, Pomerania, Ingria, and Mecklenburg, and applies Lion of the North (+5% army and navy offense and defense, +5% birth rate, −5% military-goods cost, +10% recovery, +10% minting, and +2 percentage points conscription). If Finland is a direct subject, the formation event offers an option that annexes it. Scandinavia receives the medium-nation bonus. Afterward it can complete United Scandinavia by owning all 15 Scandinavian regions, then the Baltic Empire by fully owning Ingria, Kola, Pomerania, Lithuania, Riga, Tartu, Tallinn, and West Prussia; the exact modifiers and loss conditions are in the [Scandinavia formation and journal-entry guide](COUNTRY_CONTENT.md#formable-and-releasable-countries).
- **Regions and companies:** Resource values change in Götaland, Scania, and Svealand. Ericsson and LKAB are Swedish-headquartered companies; their bonuses appear in the company table.
- **Interest Group traits:** Protestant Devout receive Work Ethic: +5% company throughput and −2.5% mortality. Swedish Industrialists receive Kommerskollegium: +5% capitalist investment-pool efficiency, +10% mining-building tax, and +5% tax dividends.

### Norway

- **Scandinavia formation:** Norway follows the same full requirements: Norwegian primary culture, location in the Scandinavian region, at least 70% control of its 15 listed regions, and one of three gates—fully owning Zealand; fully owning Åland, Uusimaa, Ostrobothnia, and Oulu; or having Finland as a direct subject. It needs Minor Power rank to be a candidate, while any one Scandinavian country can supply the Nationalism requirement. KMPMP limits the candidate list to three and excludes Icelandic-primary countries. Formation grants unification prestige and claims on unowned Scandinavian-culture homelands, plus claims on unowned West Prussia, Pomerania, Ingria, and Mecklenburg; it adds Estonian, Finnish, Latvian, and Lithuanian primary cultures and Lion of the North (+5% army and navy offense and defense, +5% birth rate, −5% military-goods cost, +10% recovery, +10% minting, and +2 percentage points conscription). A direct-subject Finland can be annexed through the formation event. Scandinavia receives the medium-nation bonus, can complete United Scandinavia by owning every Scandinavian region, and can then pursue the eight-region Baltic Empire entry; details are in the [formation and journal-entry guide](COUNTRY_CONTENT.md#formable-and-releasable-countries).
- **Regions and companies:** Resource values change in Eastern, Western, and Northern Norway. Norwegian companies including Agers Mechaniske Værksted and Norsk Hydroelektrisk Kvælstofaktieselskap are listed in the company index and full table.
- **Interest Group trait:** With Protestant state religion, Norway’s Devout receive Work Ethic: +5% company throughput and −2.5% mortality.

### Denmark

- **Scandinavia formation:** Denmark follows the same full requirements: Danish primary culture, location in the Scandinavian region, at least 70% control of its 15 listed regions, and one of three gates—fully owning Zealand; fully owning Åland, Uusimaa, Ostrobothnia, and Oulu; or having Finland as a direct subject. It needs Minor Power rank to be a candidate, while any one Scandinavian country can supply the Nationalism requirement. KMPMP limits the candidate list to three and excludes Icelandic-primary countries. Formation grants unification prestige and claims on unowned Scandinavian-culture homelands, plus claims on unowned West Prussia, Pomerania, Ingria, and Mecklenburg; it adds Estonian, Finnish, Latvian, and Lithuanian primary cultures and Lion of the North (+5% army and navy offense and defense, +5% birth rate, −5% military-goods cost, +10% recovery, +10% minting, and +2 percentage points conscription). A direct-subject Finland can be annexed through the formation event. Scandinavia receives the medium-nation bonus, can complete United Scandinavia by owning every Scandinavian region, and can then pursue the eight-region Baltic Empire entry; details are in the [formation and journal-entry guide](COUNTRY_CONTENT.md#formable-and-releasable-countries).
- **Interest Group trait:** With Protestant state religion, the Devout receive Work Ethic: +5% company throughput and −2.5% mortality.
- **Regions and companies:** Danish-owned parts of the West Indies receive the Caribbean Sea state trait. A.P. Møller and Chr. Hansen are Denmark-headquartered companies; the full table gives their prosperity bonuses.

### Scandinavia

- **Formation and balance:** A candidate must be in the Scandinavian region, have Swedish, Danish, or Norwegian primary culture, control at least 70% of Jutland, Zealand, Schleswig-Holstein, Gotland, Götaland, Scania, Norrland, Svealand, Uusimaa, Åland, Ostrobothnia, Oulu, Eastern Norway, Western Norway, and Northern Norway, and meet one gate: fully own Zealand; fully own Åland, Uusimaa, Ostrobothnia, and Oulu; or have Finland as a direct subject. It must be a Minor Power or higher; at least one Scandinavian country must have Nationalism. KMPMP allows up to three candidates and removes Icelandic-primary countries from eligibility. Formation grants unification prestige and claims on unowned Scandinavian-culture homelands, or 5% loyalists if no such claims are available; adds Estonian, Finnish, Latvian, and Lithuanian primary cultures; claims unowned West Prussia, Pomerania, Ingria, and Mecklenburg; and applies Lion of the North (+5% army and navy offense and defense, +5% birth rate, −5% military-goods cost, +10% recovery, +10% minting, and +2 percentage points conscription). The formation event can annex Finland if it is the direct subject. Scandinavia receives the medium-nation bonus.
- **Interest Group trait:** If Scandinavia has Protestant state religion, the Devout receive Work Ethic: +5% company throughput and −2.5% mortality.
- **United Scandinavia:** KMPMP changes the formation and leadership war goals. Once Scandinavia has formed, fully owning all 15 Scandinavian regions completes this entry and grants Greater Scandinavia: +5% army offense and defense, +1% birth rate, −5% military-goods cost, +15% migration attraction, +1 standard of living, +5% state construction efficiency, and −10% radicals from conquest. The entry is invalid if another country formed Scandinavia.
- **Baltic Empire:** After United Scandinavia is complete, fully owning Ingria, Kola, Pomerania, Lithuania, Riga, Tartu, Tallinn, and West Prussia grants the Baltic Empire modifier: +4% birth rate, −5% military-goods cost, +10% migration attraction, +1 standard of living, +5% state construction efficiency, and −5% radicals from conquest. Losing any one region removes the modifier and reopens the entry.
- **Shared regional changes:** The state owner index identifies changes in the Scandinavian regions and the affected Danish West Indies states.

### Two Sicilies

- **Start and balance:** Receives the small-nation modifier. Starts with Interventionism enacted and Napoleonic Warfare and Paddle Steamer researched. Adds 2 frigates to its largest fleet.
- **Buildings:** Campania receives 8 government administrations with horizontal drawer cabinets.
- **Italy formation:** Two Sicilies can qualify for the Italian unification process with South Italian primary culture, recognized status, its capital in the old Italy region, and at least 70% of Italian-culture homeland states; it must also meet the unification-candidate rank and Nationalism checks. The formation event gives Italy standard unification claims and prestige or ruler-Interest-Group support, plus KMPMP’s permanent additions: Francoprovencal, Albanian, and Greek primary cultures; claims on unowned Rhône, Provence, Peloponnese, Attica, Crete, Thessalia, Macedonia, Albania, and Corsica; and Risorgimento (+5% offense and defense, +5% technology spread, +2% birth rate, +5% construction efficiency, +1 percentage point conscription). Formed Italy receives the medium-nation bonus. KMPMP changes the Italian unification plays. Calabria and Sicily receive changed resource values. Anglo-Sicilian Sulphur Company is listed in the company index and full table.

### Wallachia

- **Start and balance:** Receives the small-nation modifier.
- **Diplomacy:** The Russia–Wallachia Treaty of Adrianople defensive pact changes from a 30-year to a 17-year binding period.
- **Company and regions:** Steaua Română is headquartered in Wallachia; its buildings and oil-extraction bonus are in the company table. The state owner index identifies any affected Wallachian state regions.

### Russia

- **Start and balance:** Receives the massive-empire penalty: +5% military-goods costs and military wages, −5% unit offense and defense, +5% ammunition, artillery, and small-arms input costs, and −20% Power Bloc mandate progress.
- **Great Reforms: Military Reform:** The replaced entry advances when Russia has researched Rifling, enacted Mass Conscription, uses qualifying modern infantry for at least half its army (depending on researched technologies), has no barracks with a goods shortage or no-organization method, and has a munition plant at level 3 or higher. Completion advances reform progress by 1. The entry is cleaned up if Alexander II is no longer ruler.
- **Diplomacy:** Holy Alliance pacts with Austria and Prussia change from 35 to 28 years. Russia’s guarantee of Montenegro changes from 35 to 18 years; its Treaty of Adrianople pacts with Wallachia and Moldavia change from 30 to 17 years. Adds a 12-month truce with Persia.
- **Regions and companies:** Russian-owned parts of Volhynia, Karelia, the Baltic states, Brest, Greater Caucasus, Mazovia, and other listed regions have changed arable land or resources; Elizavetpol gains undiscovered oil. The state table lists each value. Russian companies and the Russian-American Company appear in the company index and full prosperity table.

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
| Japan | Devout get Secular Shrine Theory (+5% conversion instead of +15%, plus +2.5% birth rate); Industrialists get Zaibatsu Cooperation (−10% manufacturing-building tax, +10% dividends, +5% construction, +5% authority); opted-in Meiji Japan gives the Armed Forces Battotai and Banzai. |
| Prussia, North German Federation, and Germany | Armed Forces get An Army with a State (+10% offense and defense, −2.5% military-goods cost); Industrialists get Made in Germany (+2.5% manufacturing-building tax and dividends, +10% capitalist investment efficiency). |
| Great Britain, Hudson Bay Company, Netherlands, Prussia and the German successor states, Sweden, Norway, Denmark, United States, and any other country with Protestant state religion except the British East India Company | Devout get Work Ethic: +5% company throughput and −2.5% mortality. Sweden’s Industrialists additionally get Kommerskollegium: +5% capitalist investment efficiency, +10% mining-building tax, and +5% tax dividends. |

## Countries created or changed through formation

| Country | What KMPMP changes when it forms or qualifies |
| --- | --- |
| Arabia | New hegemony-tier formable; requires Nationalism and 75% of the listed 21 states. Formation adds claims across unclaimed North Africa and Ottoman core states and grants medium-nation balance. The normal route grants Unified Arabia for 10 years (+10,000 flat minting, +10% construction, +8% birth rate, −25% loan interest) plus the Arabia modifier (+5% offense and defense, +2% birth rate, +5% technology spread, +10% plantation throughput). The Leader of Islam route instead makes Unified Arabia half-strength for 5 years; see the [Ottoman inventory](COUNTRY_CONTENT.md#ottoman-empire-complete-change-inventory) for its added cultures and claims. |
| Germany | Requires 78% of the listed states to form, raised from 73% in vanilla. The formed country receives the massive-empire penalty and can enter the Greater Germany and Fate in the East chains. |
| Iberia | Requires Nationalism, 90% of its state list, and the subject liberty-desire condition; it cannot form after Reino Unido. It receives medium-nation balance, the United Iberia modifier, and claims on unowned Sardinia, Sicily, Corsica, Al-Rif, Fez, Marrakech, and Inner Morocco. |
| Italy | Receives medium-nation balance and the Risorgimento modifier. KMPMP adds Francoprovencal, Albanian, and Greek primary cultures and claims on unowned Rhône, Provence, Peloponnese, Attica, Crete, Thessalia, Macedonia, Albania, and Corsica; its formation events and war goals are revised. |
| Latin Empire | New hegemony-tier formable with Eastern Thrace as capital, a dedicated flag, and North and South Italian, Spanish, Galician, Catalan, Basque, Portuguese, Greek, Bulgarian, and Albanian cultures. It requires Pan-Nationalism, a South Italian or Spanish primary culture, 32 incorporated states, and at least 4 of 7 additional eastern regions from its 53-state list. It receives medium-nation balance. |
| North German Federation and South German Federation | Both receive the massive-empire penalty when formed. Prussia’s North German Federation formation decision is modified but remains usable. The North German Federation also gets the southern-claims and Emser Depeche decisions. |
| Parthia | New Persian and Azerbaijani country with Irakajemi as capital, a monarchy-dependent name, and a dedicated flag. It requires all 17 Persian core states, Nationalism, and at least 4 of 7 additional regions around Mesopotamia, Armenia, and the Caspian. It receives medium-nation balance. |
| Scandinavia | Limited to Swedish, Danish, or Norwegian primary cultures and the 70% state threshold, with extra conditions involving Zealand, all four Finnish regions, or Finland as a direct subject. It receives medium-nation balance and can take the Greater Scandinavia and Baltic Empire entries. |
| United Netherlands | Requires Nationalism and all of Holland, Flanders, Wallonia, Friesland, and Gelre. Formation gives medium-nation balance and the United Netherlands modifier. |
| Reino Unido | Brazil and Portugal can form it through a one-time union chain. The surviving partner is annexed, Brazilian or Portuguese primary culture plus Afro-Brazilian and Paulista are added, and the Reino Unido modifier is granted. A later entry can make the partner a protectorate; Brazil and Portugal move to medium-nation balance after formation. |

KMPMP also changes release eligibility. **Amazonia** uses Mato Grosso, Amazonas, Guayana, Bolívar, Guaviare, Pastaza, Acre, and La Paz; **Cherokee** uses Arkansas and Oklahoma; **Egypt** uses Sinai, Egyptian Desert, Matruh, Middle Egypt, Lower Egypt, and Upper Egypt, with three states required; **Occitania** uses Provence, Languedoc, Guyenne, Auvergne-Limousin, and Aquitaine, removing Rhône from vanilla’s list. AI release is disabled for all four. The same lists are in the [formable and releasable country table](COUNTRY_CONTENT.md#formable-and-releasable-countries).

## Other countries reached by national content or diplomacy

| Country or group | KMPMP content that can affect it |
| --- | --- |
| Algeria | KMPMP changes the French Departments and Algerian integration journal entries, events, and decisions. Restoration choices can create the Algerian Deylik, set Algiers as its capital, add Turkish as a primary culture and Turkish loyalists, and give the restored country claims on East Sahara and Sahara; the Ottoman-backed choice makes it Turkey’s puppet or vassal depending on Turkey’s recognition. The Barbary Pirates modifier depends on DLC. |
| Belgium | France’s guarantee is removed. Belgium owns part of Gelre and shares parts of the West Indies at the start; it can form United Netherlands with the Netherlands after meeting the state and Nationalism requirements. Gelre and Caribbean state changes are in the owner index. |
| Central America | Spain’s Regain Influence in America entry can establish a Spanish protectorate. Spain’s deal with Mexico can give Mexico claims, make Central America a puppet, or annex it if the Spanish Empire option is chosen and Central America still exists. |
| Korea | Japan’s opt-in start event can give Japan claims on Korea. Korean companies, including Hanseong Jeongi Hoesa, Oriental Development Company, and Sunhwaguk, have changed scopes or prosperity bonuses in the company index and table. |
| Montenegro and Moldavia | Russia’s guarantee of Montenegro changes from 35 to 18 years. Russia’s Treaty of Adrianople pacts with Moldavia and Wallachia change from 30 to 17 years. The state owner index lists affected Balkan and Carpathian regions. |
| Oman | Removes the Oman–Persia treaty-port and money-transfer treaty. Oman-owned portions of Baluchistan and Sistan are affected by the regional resource definitions; exact values are in the state table. |
| Andean countries | Bolivia and North Peru receive the start, population, migration, Peru-Bolivia, and culture-integration changes listed in their profiles. Eligible Peru, Federation of the Andes, and Peru-Bolivia Confederation countries can also use the Amazonian integration decision. |
| Dutch East Indies and Alkmaar | KMPMP changes country-breakup and release events. The complete country-event inventory links the underlying event files and outcomes. |
| Indigenous North American countries | KMPMP changes resettlement events involving eligible Indigenous countries and neighboring states; full event triggers and outcomes are in the [country-event table](COUNTRY_CONTENT.md#player-facing-country-events). |
| Circassia, the Circassian Imamate, Russia, Turkey, and interested powers | KMPMP changes the Caucasus war, appeals for foreign backing, and end-state events. Circassia’s choice can send “The Circassian Call” to qualifying major powers and, through its Imamate alliance choice, to Turkey. The event lets recipients improve relations and pursue recognition or decline involvement. |

## State-region changes by 1836 owner

The state changes listed here are the same changes detailed in the [state-region table](COUNTRY_CONTENT.md#country-facing-state-region-economic-changes). They raise or lower arable land, add or remove resource caps, or change undiscovered resources and arable crop eligibility. If a state is split between countries in 1836, every owner of a starting slice is listed.

| Country at start | State regions with changed resources or arable values |
| --- | --- |
| Abkhazia; Mingrelia; Svaneti | Greater Caucasus; Elizavetpol and Azerbaijan are held by Russia. |
| Anhalt | Anhalt. |
| Arnhem; Arrernte; Garawa; Karna; Kartu; Kulin; Larrakia; Mara; Mirning; Ngumpin-Yapa; Noongar; Paakintyi; Pama; Wiradjuri; Worrorra; Anangu; Yolngu; Yura; Waka-Gabi | Northern Territory, Queensland, New South Wales, and Western Australia, according to each country’s starting state slices. |
| Austria | Dalmatia, Lombardy, and Styria. |
| Baden | Baden. |
| Bavaria | Bavaria, Franconia, and part of Rhineland. |
| Belgium | Gelre. |
| Bolivia | Antofagasta. |
| Brunswick | Brunswick. |
| Bremen; Hamburg; Hanover | Elbe. Hanover also owns part of Brunswick and Hannover. |
| Brazil | Bahia and Ceará. |
| Bukhara; Khiva; Turkmenia | Merz. |
| China | Outer Manchuria and Shengjing. |
| Croatia | Croatia. |
| Denmark; France; Great Britain; Netherlands; Venezuela | Their starting West Indies state slices. |
| East Indies | South Sumatra. |
| Egypt | Parts of Adana, plus Lebanon, Lower Egypt, Middle Egypt, Palestine, and Upper Egypt. Turkey owns the other starting part of Adana. |
| Ezochi; Japan | Hokkaido. Japan also owns Kanto, Shikoku, and Tohoku; Kanto is split with Micronesia. |
| Finland | Kuopio, Ostrobothnia, Oulu, Uusimaa, and West Karelia. |
| France | Auvergne-Limousin, Burgundy, Lorraine, and Normandy. |
| Frankfurt; Hesse; Hesse-Kassel; Nassau; Waldeck | Hesse, which is split among these countries. |
| Great Britain | Bahamas. |
| Haiti | Santo Domingo. |
| Herat | Herat. |
| Holstein; Lübeck; Schleswig | Schleswig-Holstein. |
| Hungary | Central Hungary and Ruthenia. |
| Kabul; Kafiristan | Kabul. |
| Kalat; Kandahar; Makran; Oman | Parts of Baluchistan. Kandahar, Makran, and Oman also own parts of Sistan. |
| Mexico | Jalisco, Mexico, and Veracruz. |
| Netherlands; Belgium | Gelre. |
| Norway | Eastern Norway, Northern Norway, and Western Norway. |
| North Peru | Lima. |
| New South Wales; Ngāti Toa; Ngāi Tahu; United Tribes | North Island and South Island, split among starting owners. |
| Oldenburg; Hanover | Hannover. |
| Persia | Irakajemi, Luristan, Mazandaran, Persian Kurdistan, Tabriz, and Urmia. |
| Poland | Greater Poland, parts of Lithuania, and parts of Mazovia. Russia also owns starting slices of Lithuania and Mazovia. |
| Portugal | Alentejo and Cape Verde. |
| Prussia | Anhalt, Brandenburg, Brunswick, East Prussia, North Rhine, Pomerania, Posen, Ruhr, West Prussia, and part of Rhineland. |
| Russia | Azerbaijan, Brest, East Karelia, Elizavetpol, Greater Caucasus, Kola, parts of Lithuania and Mazovia, Riga, and Volhynia. Riga is split with the United Baltic Provinces. |
| Saxony; Saxe-Coburg-Gotha; Saxe-Meiningen; Saxe-Weimar; Schwarzburg | Saxony. |
| Spain; Carlist Spain | Aragon and Catalonia are split between them. Spain also owns Asturias, Galicia, Lower Andalusia, and Valencia; Carlist Spain owns the Basque Country. |
| Sweden | Götaland, Scania, and Svealand. |
| Tasmania | Tasmania. |
| Transylvania | Northern Transylvania. |
| Turkey | Ankara, Aydin, Baghdad, Basra, Erzurum, Kastamonu, Konya, Mosul, Northern Thrace, and Trabzon, plus its starting part of Adana. |
| United Baltic Provinces | Courland, Tallinn, and Tartu, plus part of Riga. |
| Western Australia | Western Australia. |

Other state-trait changes are attached to these regions and their starting owners: Croatia (Croatia), Dalmatia and Istria (Austria), and Montenegro gain Natural Harbors; Western Cuba and Puerto Rico (Spain), the Bahamas and Jamaica (Great Britain), the West Indies (shared among several countries), and Haiti gain the Caribbean Sea trait. Corrientes (Argentina) loses Paraná River; Basra and Baghdad (Turkey) lose Euphrates River; Diyarbakir (Turkey) loses Tigris River. The trait bonuses and full affected-state list are in the [state-trait changes](COUNTRY_CONTENT.md#country-facing-state-region-economic-changes).

## Named companies by 1836 headquarters

The companies below have a fixed or preferred headquarters in the listed 1836 country or region. Headquarters ownership identifies the starting market association; it does not prevent a company from changing owner during play. The [complete company table](COUNTRY_CONTENT.md#company-building-scopes-and-prosperity-effects) gives the exact changed buildings and prosperous-country bonus for each.

| 1836 headquarters market | Named KMPMP company definitions |
| --- | --- |
| Argentina and Patagonia | Ferrocarril Central Córdoba; Compañía Sansinena de Carnes Congeladas. |
| Austria and the Austrian crown lands | G. Ricordi & C.; Gebrüder Thonet; Glasfabrik Ludwig Moser & Söhne; Österreichische Waffenfabriks-Gesellschaft; Škoda Works; Stabilimento Tecnico Triestino; Galician Carpathian Petroleum Company. |
| Baden | BASF. |
| Saxony and the Saxon states | Königliche Porzellan-Manufaktur Meissen. |
| Belgium and Luxembourg | Société Franco-Belge. |
| Bolivia | Compañía de Salitres y Ferrocarril de Antofagasta; Compañía Estañífera de Llallagua. |
| Brazil | Companhia Fiação e Tecidos de Pernambuco; Estaleiro Mauá. |
| China | Mantetsu. |
| Colombia | Panama Canal Company. |
| Congo, France, and Algeria | Société Mokta El Hadid. |
| Dai Nam and Scotland | Nam Định Textile Factory. |
| Denmark | A.P. Møller; Chr. Hansen. |
| Egypt | Misr Spinning and Weaving Company; MM. Nicolas Portalis et Cie; Suez Canal Company. |
| Finland | Nokia. |
| France | Compagnie des mines d'Anzin; Confédération générale des vignerons; Dollfus-Mieg et Cie. |
| Great Britain | Arthur Guinness Son & Co. Ltd; John Brown & Company; Maple & Co.; Sir W. G. Armstrong Whitworth & Co. |
| Greece | Basileiades; Kouppas. |
| Hungary | Manfréd Weiss Steel and Metal Works; MÁVAG. |
| Japan and Micronesia | Kinkozan Sobei; Mitsubishi. |
| Korea | Hanseong Jeongi Hoesa; Oriental Development Company. |
| Afghanistan and neighboring Central Asian states | Da Afghan Nassaji Sherkat. |
| Lanfang and nearby Southeast Asian states | Lanfang Kongsi. |
| Mexico | Fundidora de Fierro y Acero de Monterrey. |
| Netherlands and Belgium | Philips. |
| Norway | Agers Mechaniske Værksted; Norsk Hydroelektrisk Kvælstofaktieselskap. |
| North Peru and Ecuador | Empresas Eléctricas Asociadas; Peruvian Amazon Company. |
| Orta Zhuz and Russia | Kirgizian Mining Joint Stock Company. |
| Piratini | Amadeo Rossi & Cia. |
| Poland and Russia | Ursus; Lilpop, Rau i Loewenstein. |
| Portugal and Mozambique | Companhia de Moçambique. |
| Paraguay | La Rosada. |
| Prussia | F. Schichau; Rheinmetall; Siemens & Halske. |
| Russia | Branobel; Izhevsk Arms Plant; Savva Morozov & Sons; Society of Putilov Factories; Vodka Monopoly. |
| Sardinia-Piedmont and France | FIAT; Gio. Ansaldo & C.; Ilva; Forges et Chantiers de la Méditerranée. |
| Serbia and the Ottoman Empire | Zastava oružje. |
| Siam | B.Grimm. |
| Two Sicilies | Anglo-Sicilian Sulphur Company. |
| Spain and Carlist Spain | Fábrica de Armas de Trubia; La España Industrial; Altos Hornos de Vizcaya. |
| Sweden | Ericsson; LKAB. |
| Turkey | Allatini Mills; Chemins de fer Orientaux; Tersâne-i Âmire; Turkish Petroleum Company. |
| United States | Ford Motor Company; United Fruit Company. |
| Venezuela | Caribbean Petroleum Company. |
| Wallachia | Steaua Română. |

Some changed companies have no fixed preferred headquarters; their geographic, cultural, or building conditions determine which country can establish them. Their common home markets are listed here as a guide, and the [complete company table](COUNTRY_CONTENT.md#company-building-scopes-and-prosperity-effects) gives the exact changed buildings and bonuses.

| Usual eligible market or region | Companies without a fixed headquarters |
| --- | --- |
| Egypt and the Nile Basin | Egyptian State Railways. |
| Mexico | El Águila. |
| Argentina and the La Plata region | Bunge & Born; Centro Vitivinícola Nacional. |
| Brazil | Klabin Irmãos & Cia. |
| Ottoman Empire | Ottoman Consumer Company (the Ottoman Tobacco Regie). |
| Korea | Sunhwaguk. |
| Persia | Imperial Tobacco Corporation of Persia. |
| Indonesia and Southeast Asia | San Miguel; Nederlandse Petroleum Maatschappij. |
| Congo Basin | Compagnie du Congo. |
| Romanian homelands | Căile Ferate Române. |
| Prussia | Preußische Staatseisenbahnen. |
| Great Britain | Great Western Railway. |
| Alaska and Russian America | Russian-American Company. |
| West Africa | John Holt and Company. |
| Ethiopia | Imperial Ethiopian Railway Company. |
| United States | Standard Oil. |
| Eligible Power Blocs | United Construction Conglomerate. |

## Shared changes that apply to countries

These systems are described once in the complete reference because they are not exclusive to a single country:

- **Laws:** the detailed [plain-language law table](COUNTRY_CONTENT.md#what-each-changed-law-does) gives KMPMP’s added effects for each law. A law bonus applies only while that law is enacted. KMPMP does not enact every listed law at the start.
- **Country ranks and balance:** the [rank and country-balance tables](COUNTRY_CONTENT.md#country-balance) show the starting tiers, monthly reassignment rules, and effects of Great, Major, Minor, Unrecognized, and Decentralized Power ranks.
- **Shared modifiers and player bonuses:** the [country modifier table](COUNTRY_CONTENT.md#country-bonuses-and-penalties) explains the direct effects, and the [player decisions](COUNTRY_CONTENT.md#player-facing-country-decisions) list explains how the selectable bonuses are activated.
- **Age of Warfare:** By default, each player country receives this 25-year decaying modifier at game start. It can be turned off or applied to every country instead. It gives +60% throughput to Arms Industries, Artillery Foundries, and Munitions Plants; reduces battalion mobilization-goods requirements by 30%; and reduces Small Arms, Ammunition, and Artillery input by 15%. The [option summary](COUNTRY_CONTENT.md#country-ranks-laws-political-groups-and-identities) covers the other start-of-game options.
- **Companies:** the [complete company table](COUNTRY_CONTENT.md#company-building-scopes-and-prosperity-effects) names each affected company, its allowed buildings, and its bonus while prosperous. The bonus belongs to the country that owns the company at that point in the campaign.
- **Diplomacy:** KMPMP revises shared diplomatic actions, subject actions, treaty articles, and diplomatic plays. The exact differences are in the [country-to-country diplomatic action table](COUNTRY_CONTENT.md#country-to-country-diplomatic-actions) and [historical diplomacy table](COUNTRY_CONTENT.md#historical-diplomacy-differences).
- **Technology, buildings, and production:** shared additions and replacements are listed in [shared technology, building, and production-method changes](COUNTRY_CONTENT.md#shared-technology-building-and-production-method-changes).
- **Other dynamic country systems:** culture integration, country formation checks, military shortages, war-end updates, and monthly updates are listed under [country systems that update during play](COUNTRY_CONTENT.md#country-systems-that-update-during-play).
- **Global start effects:** a day-one event applies the selected game options to every country, all railways start subsidized, Central American states receive a one-time reduction of one radical, Gotland starts unincorporated, and Kuban loses the Ukrainian homeland. Brazil’s player-only start event, Bolivia’s start adjustment, Persia’s territorial setup, and Egypt’s Ottoman claims are listed in the [additional start and diplomacy table](COUNTRY_CONTENT.md#additional-start-and-diplomacy-changes).
