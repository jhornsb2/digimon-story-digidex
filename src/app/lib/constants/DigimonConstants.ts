import { Digimon, Attribute, Stage, DigimonType } from "..";
import * as supportSkills from './SupportSkillConstants';

//#region Digimon Definitions
//#region Training 1
export const KURAMON: Digimon = {
	fieldGuideNumber: 1,
	name: 'Kuramon',
	description: 'An unidentified Digimon that suddenly appeared on a computer network. A single DigiEgg was born from the malice of humans abusing computer networks and the aggression from conflicts unfolding over networks. The DigiEgg was the amalgamation of humanity\'s destructive instincts, and the mysterious Digimon born from it is incredibly dangerous. It multiplies within a computer network like a virus, causing minor network failures.',
	attribute: Attribute.Neutral,
	stage: Stage.Training1,
	type: DigimonType.Free,
	memoryUsage: 2,
	equipmentSlots: 0,
	supportSkill: supportSkills.innocentEyes,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const PABUMON: Digimon = {
	fieldGuideNumber: 2,
	name: 'Pabumon',
	description: 'At first glance it looks like a sea-green bubble, but it\'s actually a totally autonomous Digimon. Its unstable surface means practically no defense or prowess in combat. It creates infinite tiny foam clones from the pacifier-like object in its mouth. This ability was originally used to develop computer viruses, but its lack of life force made for poor implementation. Life is fleeting for this adorable Digimon baby. The sticky foam it releases binds its enemies, giving it a chance to escape.',
	attribute: Attribute.Neutral,
	stage: Stage.Training1,
	type: DigimonType.Free,
	memoryUsage: 2,
	equipmentSlots: 0,
	supportSkill: supportSkills.innocentEyes,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const PUNIMON: Digimon = {
	fieldGuideNumber: 3,
	name: 'Punimon',
	description: 'A brand new type of Digimon. Three tentacles protrude from the top of its gelatinous, red body. It can\'t fight, but threatens enemies with acidic bubbles.',
	attribute: Attribute.Neutral,
	stage: Stage.Training1,
	type: DigimonType.Free,
	memoryUsage: 2,
	equipmentSlots: 0,
	supportSkill: supportSkills.innocentEyes,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const BOTAMON: Digimon = {
	fieldGuideNumber: 4,
	name: 'Botamon',
	description: 'A newborn digital monster. Dark peach fuzz bristles across the surface of its slimy body. This new addition to the Digital World can\'t fight, but it can shoot bubbles from its mouth to intimidate foes.',
	attribute: Attribute.Neutral,
	stage: Stage.Training1,
	type: DigimonType.Free,
	memoryUsage: 2,
	equipmentSlots: 0,
	supportSkill: supportSkills.innocentEyes,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const POYOMON: Digimon = {
	fieldGuideNumber: 5,
	name: 'Poyomon',
	description: 'This baby Digimon uses its translucent body to float on the digital sea like a jellyfish. Possessing the most primitive makeup of any existing Digimon, it gained attention from Digimon fanatics and anthropologists alike. They hail it as a "missing link," capable of unlocking the mystery behind Digimon. To protect itself it blows extremely sour bubbles from its mouth.',
	attribute: Attribute.Neutral,
	stage: Stage.Training1,
	type: DigimonType.Free,
	memoryUsage: 2,
	equipmentSlots: 0,
	supportSkill: supportSkills.innocentEyes,
	digivolvesFrom: [],
	digivolvesTo: []
};
//#endregion

//#region Training 2
export const ARCADIAMON_IN_TR: Digimon = {
	fieldGuideNumber: 6,
	name: 'Arcadiamon In-Tr.',
	description: 'A Digimon artificially created from the data of various Digimon. One result of an experiment to make the ultimate Digimon, it boasts amazing physical abilities despite being In-Training level. Arcadiamon demonstrates predatory behavior, using special move Data Drain to stab opponents with its sharp feet and absorb their data. By directly absorbing the data of others, Arcadiamon achieves growth at an astounding rate.',
	attribute: Attribute.Dark,
	stage: Stage.Training2,
	type: DigimonType.Free,
	memoryUsage: 3,
	equipmentSlots: 0,
	supportSkill: supportSkills.utopia,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const KOROMON: Digimon = {
	fieldGuideNumber: 7,
	name: 'Koromon',
	description: 'This Digimon has shed its fur and grown one size bigger. It can move a bit faster, but fighting is still too much for it. It threatens enemies with bubbles from its mouth.',
	attribute: Attribute.Fire,
	stage: Stage.Training2,
	type: DigimonType.Free,
	memoryUsage: 3,
	equipmentSlots: 0,
	supportSkill: supportSkills.innocentEyes,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const TANEMON: Digimon = {
	fieldGuideNumber: 8,
	name: 'Tanemon',
	description: 'A bulb Digimon with sprout-like objects budding from its head. Looking for a suitable environment, a floating Yuramon descended to earth and Digivolved. When an enemy draws close, this big old coward digs a hole with its four legs and buries its body in the ground. When it moves underground, the objects on its head mimic vegetation, protecting it from enemies. It doesn\'t work against herbivore Digimon, though.',
	attribute: Attribute.Plant,
	stage: Stage.Training2,
	type: DigimonType.Free,
	memoryUsage: 3,
	equipmentSlots: 0,
	supportSkill: supportSkills.innocentEyes,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const TSUNOMON: Digimon = {
	fieldGuideNumber: 9,
	name: 'Tsunomon',
	description: 'A small Digimon like Punimon, but with one of the tentacles on its head hardened. It exhibits a more feral Digivolution than Punimon, and is covered in tufts of bushy hair. Its playful and mischievous personality remains, but it has yet to awaken to its combat ability.',
	attribute: Attribute.Earth,
	stage: Stage.Training2,
	type: DigimonType.Free,
	memoryUsage: 3,
	equipmentSlots: 0,
	supportSkill: supportSkills.innocentEyes,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const TSUMEMON: Digimon = {
	fieldGuideNumber: 10,
	name: 'Tsumemon',
	description: 'An in-training Digimon Digivolved from Kuramon. Its increased ferocity is met with new talons on the tips of its tentacles. It erodes data with dreadful speed, sending networks into disarray. High movement speed makes it difficult to capture when Digivolved into Tsumemon.',
	attribute: Attribute.Dark,
	stage: Stage.Training2,
	type: DigimonType.Free,
	memoryUsage: 3,
	equipmentSlots: 0,
	supportSkill: supportSkills.innocentEyes,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const TOKOMON: Digimon = {
	fieldGuideNumber: 11,
	name: 'Tokomon',
	description: 'A small Digimon with strange appendages growing under its body. In-training Digimon with legs are quite rare, and this one\'s cute as a button to boot. Don\'t let its looks fool you, though; carelessly reach out to it and expect a big set of chompers to clamp down on your hand. That being said, it doesn\'t have an ounce of ill will in its body.',
	attribute: Attribute.Neutral,
	stage: Stage.Training2,
	type: DigimonType.Free,
	memoryUsage: 3,
	equipmentSlots: 0,
	supportSkill: supportSkills.innocentEyes,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const NYAROMON: Digimon = {
	fieldGuideNumber: 12,
	name: 'Nyaromon',
	description: 'A small Digimon with feline characteristics. Its capricious, cat-like behavior earned it the name Nyaromon. While both curious and fickle, it has a lonely side to it as well.',
	attribute: Attribute.Light,
	stage: Stage.Training2,
	type: DigimonType.Free,
	memoryUsage: 3,
	equipmentSlots: 0,
	supportSkill: supportSkills.innocentEyes,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const PAGUMON: Digimon = {
	fieldGuideNumber: 13,
	name: 'Pagumon',
	description: 'This small Digimon can fly at low altitudes with the ear-like protrusions growing out of its head. It can move these ears like a second pair of hands, using them to mock the enemy with all kinds of gestures. It has a malicious streak, often chasing after Digimon like Koromon or Tsunomon and teasing them. It also utilizes sprays of poison bubbles towards this end.',
	attribute: Attribute.Dark,
	stage: Stage.Training2,
	type: DigimonType.Free,
	memoryUsage: 3,
	equipmentSlots: 0,
	supportSkill: supportSkills.innocentEyes,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const YOKOMON: Digimon = {
	fieldGuideNumber: 13,
	name: 'Yokomon',
	description: 'A lesser bulb Digimon with a huge flower blooming on its head. It can move around by swinging its root-shaped feelers, and can even float through the air for short distances. Its curious nature and upbeat movements make for an adorable figure. They tend to live in packs, numbering somewhere between the dozens and hundreds.',
	attribute: Attribute.Plant,
	stage: Stage.Training2,
	type: DigimonType.Free,
	memoryUsage: 3,
	equipmentSlots: 0,
	supportSkill: supportSkills.innocentEyes,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const BUKAMON: Digimon = {
	fieldGuideNumber: 15,
	name: 'Bukamon',
	description: 'This zany Digimon looks like a baby aquatic dinosaur, and moves like a sprightly seahorse. It tends to run away when others get close. Its exodermis can\'t withstand deep-sea water pressure or low temperatures, so it can\'t dive in the ocean depths for long.',
	attribute: Attribute.Water,
	stage: Stage.Training2,
	type: DigimonType.Free,
	memoryUsage: 3,
	equipmentSlots: 0,
	supportSkill: supportSkills.innocentEyes,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const MOTIMON: Digimon = {
	fieldGuideNumber: 16,
	name: 'Motimon',
	description: 'A soft-bodied Digimon possessing an elastic outer skin, toddling along on the bumps under its torso. When it gets worked up, its body swells up like a mochi rice cake, earning it the name Motimon. Its appearance belies an above-average intelligence, which leads to the assumption that it was born from a computer\'s dictionary function. It understands human speech, and can sometimes be seen transforming its body to communicate.',
	attribute: Attribute.Neutral,
	stage: Stage.Training2,
	type: DigimonType.Free,
	memoryUsage: 3,
	equipmentSlots: 0,
	supportSkill: supportSkills.innocentEyes,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const WANYAMON: Digimon = {
	fieldGuideNumber: 17,
	name: 'Wanyamon',
	description: 'A Digimon combining the data of small pets like dogs and cats. Its exceptional speed means you need to beware of it fleeing, but offering it an owner\'s affection makes it quite attached to you.',
	attribute: Attribute.Wind,
	stage: Stage.Training2,
	type: DigimonType.Free,
	memoryUsage: 3,
	equipmentSlots: 0,
	supportSkill: supportSkills.innocentEyes,
	digivolvesFrom: [],
	digivolvesTo: []
};
//#endregion

//#region Rookie
export const AGUMON: Digimon = {
	fieldGuideNumber: 18,
	name: 'Agumon',
	description: 'This reptile Digimon looks like a small dinosaur, growing to stand on two legs. Despite how weak this fledging creature is, it boasts a ferocious, reckless attitude. Sharp, solid claws grow from each limb, offering some power in a fight. It may one day Digivolve into a Digimon of great strength. Its special move Pepper Breath launches scorching flames from its mouth.',
	attribute: Attribute.Fire,
	stage: Stage.Rookie,
	type: DigimonType.Vaccine,
	memoryUsage: 5,
	equipmentSlots: 1,
	supportSkill: supportSkills.dragonsRoar,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const AGUMON_BLK: Digimon = {
	fieldGuideNumber: 19,
	name: 'Agumon (Blk)',
	description: 'This reptile Digimon looks like a small dinosaur, growing to stand on two legs. Despite how weak this fledging creature is, it boasts a ferocious, reckless attitude. Sharp, solid claws grow from each limb, offering some power in a fight. It may one day Digivolve into a Digimon of great strength. Its special move is called Spitfire Blast.',
	attribute: Attribute.Fire,
	stage: Stage.Rookie,
	type: DigimonType.Virus,
	memoryUsage: 5,
	equipmentSlots: 1,
	supportSkill: supportSkills.dragonsWrath,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const ARCADIAMON_ROOKIE: Digimon = {
	fieldGuideNumber: 20,
	name: 'Arcadiamon Rookie',
	description: 'A cursed Digimon artificially created from the data of various Digimon. It evolves by absorbing its opponents\' data, but it lacks any sense of self. Details about it are unknown, so it is currently under investigation. Its special move Soul Absorption dismantles and absorbs an opponent\'s data, and Erase Sickle destroys an enemy\'s composition data, wiping it out.',
	attribute: Attribute.Dark,
	stage: Stage.Rookie,
	type: DigimonType.Virus,
	memoryUsage: 5,
	equipmentSlots: 1,
	supportSkill: supportSkills.utopia,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const ARMADILLOMON: Digimon = {
	fieldGuideNumber: 21,
	name: 'Armadillomon',
	description: 'A mammal Digimon clad head to toe in a sturdy carapace. Easy-going and courteous, but sometimes pushes its luck. Armadillomon is a descendant of the same ancient species as Veemon, so it can perform a special armor Digivolution. Its special move Diamond Shell launches its curled-up body at the enemy.',
	attribute: Attribute.Earth,
	stage: Stage.Rookie,
	type: DigimonType.Free,
	memoryUsage: 4,
	equipmentSlots: 1,
	supportSkill: supportSkills.ironcladDefense,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const IMPMON: Digimon = {
	fieldGuideNumber: 22,
	name: 'Impmon',
	description: 'A Rookie Digimon that looks like a demon child. This mischievous creature loves seeing the other guy squirm. Electrical appliances are said to go haywire when Impmon appears; so if your screen starts to bug out, it might be an Impmon prank. Despite its love of mischief and malice, this Digimon doesn\'t cow down to stronger creatures, instead facing them with its tough attitude. Even so, it also has a lonely side. Its signature move is Summon, which calls forth ice and flame elementals.',
	attribute: Attribute.Dark,
	stage: Stage.Rookie,
	type: DigimonType.Virus,
	memoryUsage: 5,
	equipmentSlots: 1,
	supportSkill: supportSkills.adroitWisdom,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const ELECMON: Digimon = {
	fieldGuideNumber: 23,
	name: 'Elecmon',
	description: 'A mammal Digimon with an incredibly inquisitive and naughty personality. Elecmon also has nine tails, which it spreads like a peacock in battle and uses to threaten the enemy. Its special move is Thunder Cloud.',
	attribute: Attribute.Electric,
	stage: Stage.Rookie,
	type: DigimonType.Data,
	memoryUsage: 4,
	equipmentSlots: 1,
	supportSkill: supportSkills.metalEmpire,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const OTAMAMON: Digimon = {
	fieldGuideNumber: 24,
	name: 'Otamamon',
	description: 'A Rookie Digimon with soft skin for living underwater. It swims along the currents of digital lakes and rivers, and climbs up rocks with its developed forefeet to do some vocal training. Its undeveloped back legs act as a rudder in place of its tail, which it uses for propulsion. This is a valuable Digimon among the Rookies, with obvious potential for Digivolution. Even so, the risk of mutation is quite high, so care is necessary when raising it. Its special move Lullaby Bubble invites endless sleep upon its foes.',
	attribute: Attribute.Water,
	stage: Stage.Rookie,
	type: DigimonType.Virus,
	memoryUsage: 4,
	equipmentSlots: 1,
	supportSkill: supportSkills.deepSeaSlumber,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const GAOMON: Digimon = {
	fieldGuideNumber: 25,
	name: 'Gaomon',
	description: 'A beast Digimon with sharp claws thought to be a subspecies of Gazimon. Its quick and nimble movements are perfect for hit-and-run tactics, and the gloves on each hand protect its claws until they grow out. It unleashes its special move Double Backhand while using its powerful leg strength to whirl around.',
	attribute: Attribute.Neutral,
	stage: Stage.Rookie,
	type: DigimonType.Data,
	memoryUsage: 5,
	equipmentSlots: 1,
	supportSkill: supportSkills.feint,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const GAZIMON: Digimon = {
	fieldGuideNumber: 26,
	name: 'Gazimon',
	description: 'A rare bipedal mammal Digimon. The massive, sharp claws on its front legs probably evolved during arm-like use, resulting in its bipedal movement. It\'s quite temperamental for a small Digimon, and never gets along with humans. Its claws are great not only for attacking, but excellent for digging holes. It can usually be seen digging pitfalls and laughing as other Digimon fall in. Kind of mean, actually... Its special move Electric Stun Blast shoots poisonous, gaseous breath at the opponent.',
	attribute: Attribute.Dark,
	stage: Stage.Rookie,
	type: DigimonType.Virus,
	memoryUsage: 4,
	equipmentSlots: 1,
	supportSkill: supportSkills.nightmareSoldiers,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const GABUMON: Digimon = {
	fieldGuideNumber: 27,
	name: 'Gabumon',
	description: 'Despite its fur pelt, this is a genuine reptile Digimon. It has a timid and shy personality, and always makes pelts out of Garurumon\'s leftover data to wear. Wearing the fur of a fearsome Digimon like Garurumon serves the purpose of protecting it. Its personality takes a 180 when it dons this fur. Its special move is Blue Blaster.',
	attribute: Attribute.Fire,
	stage: Stage.Rookie,
	type: DigimonType.Data,
	memoryUsage: 5,
	equipmentSlots: 1,
	supportSkill: supportSkills.feralPulse,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const GABUMON_BLK: Digimon = {
	fieldGuideNumber: 28,
	name: 'Gabumon (Blk)',
	description: 'A Gabumon that Digivolved into a virus type. It seems its fur was made from collecting Garurumon virus type data. While a bit of a hooligan, strip it of its pelt and it becomes bashful and cowardly. Its true face is a secret.',
	attribute: Attribute.Fire,
	stage: Stage.Rookie,
	type: DigimonType.Virus,
	memoryUsage: 5,
	equipmentSlots: 1,
	supportSkill: supportSkills.menace,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const GUILMON: Digimon = {
	fieldGuideNumber: 29,
	name: 'Guilmon',
	description: 'This Digimon looks like a young dinosaur. It may still be a Rookie, but it holds both great potential as a fighting type Digimon it originally descended from and a carnivore like brutality. The mark on its abdomen means "Digital Hazard," which is inscribed on anything that can cause great harm to computer data. Even so, it could become a guardian of the Digital World if this ability is used for peace. Its signature move is Rock Breaker, which it uses to destroy rocks with its sturdy claws.',
	attribute: Attribute.Fire,
	stage: Stage.Rookie,
	type: DigimonType.Virus,
	memoryUsage: 5,
	equipmentSlots: 1,
	supportSkill: supportSkills.allRounder,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const KUDAMON: Digimon = {
	fieldGuideNumber: 30,
	name: 'Kudamon',
	description: 'A holy beast Digimon coiled around a sacred ammunition cartridge at all times. The earring on its left ear is said to constantly accumulate holy power, having a greater effect on Digivolution the more power is stored. Its cool and collected personality lets it stay calm in a fight and assess the situation, allowing for superior progress in battle. When at a disadvantage it enters its ammunition cartridge to defend itself. Its special move Blinding Ray blinds enemies with magnificent radiance from its earring.',
	attribute: Attribute.Light,
	stage: Stage.Rookie,
	type: DigimonType.Vaccine,
	memoryUsage: 5,
	equipmentSlots: 1,
	supportSkill: supportSkills.mysticProtection,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const KERAMON: Digimon = {
	fieldGuideNumber: 31,
	name: 'Keramon',
	description: 'A Rookie Digimon Digivolved from Tsumemon. Its body has grown, and its large mouth lets it erode even more data than Tsumemon. It eats 100 MB of data a second, meaning data is destroyed the moment Keramon approaches. It has an extremely playful personality, and considers its destructive behavior another form of play. Its special move Crazy Giggle shoots out an extremely destructive beam of light as it laughs.',
	attribute: Attribute.Dark,
	stage: Stage.Rookie,
	type: DigimonType.Free,
	memoryUsage: 5,
	equipmentSlots: 1,
	supportSkill: supportSkills.destroyer,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const GOTSUMON: Digimon = {
	fieldGuideNumber: 32,
	name: 'Gotsumon',
	description: 'An ore Digimon clad in mineral data from fields, giving it exceptional defense. This playful rascal is like the king of the playground, stringing along less-evolved Digimon and causing a ruckus across all systems. It has a bit of a selfish side, and when angered it blows its top like a volcano and goes on a unstoppable rampage. The look of its ore data changes based on where and how it Digivolves, offering many potential types. Its special move Rock Fist shoots super-hard minerals from the top of its head.',
	attribute: Attribute.Earth,
	stage: Stage.Rookie,
	type: DigimonType.Data,
	memoryUsage: 5,
	equipmentSlots: 1,
	supportSkill: supportSkills.animalColosseum,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const GOBLIMON: Digimon = {
	fieldGuideNumber: 33,
	name: 'Goblimon',
	description: 'An impish Digimon that loves evil. With a cunning and cowardly personality, it prefers to attack in groups from the shade of trees or ambush from inside buildings. The moment things get dicey, however, they\'ll scatter to the winds as fast as their legs can take them. To that extent it has a bit more brains than other Rookie Digimon. Its special move Goblin Strike hurls fireballs at mach speed.',
	attribute: Attribute.Earth,
	stage: Stage.Rookie,
	type: DigimonType.Virus,
	memoryUsage: 4,
	equipmentSlots: 1,
	supportSkill: supportSkills.haymaker,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const GOMAMON: Digimon = {
	fieldGuideNumber: 34,
	name: 'Gomamon',
	description: 'A sea beast Digimon covered with insulating fur and capable of moving on land. Its pelt of short, white hair gets longer as it grows, and turns brown when the creature\'s grown up. It\'s a rascal who loves to meddle with everything it sees. The red hair growing on its head and back reacts to its emotions, standing on end when it\'s angry. Gomamon\'s claws are strong enough to easily cleave thick ice, so you\'ll feel the pain if you take it lightly. Its special move Marching Fishes commands a school of small fish.',
	attribute: Attribute.Water,
	stage: Stage.Rookie,
	type: DigimonType.Vaccine,
	memoryUsage: 5,
	equipmentSlots: 1,
	supportSkill: supportSkills.deepSavers,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const SYAKOMON: Digimon = {
	fieldGuideNumber: 35,
	name: 'Syakomon',
	description: 'A Digimon concealed in a sturdy shell shaped like a clam. Its shell developed rapidly, so its insides look like an in-training slime. This cunning creature entices foes with its cute face and attacks when they get close. When the shell is closed it has enough defensive strength to easily repel light attacks. Its special move Black Pearl Blast shoots jadeite formed inside its body at enemies.',
	attribute: Attribute.Water,
	stage: Stage.Rookie,
	type: DigimonType.Virus,
	memoryUsage: 4,
	equipmentSlots: 1,
	supportSkill: supportSkills.deepSavers,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const ZUBAMON: Digimon = {
	fieldGuideNumber: 36,
	name: 'Zubamon',
	description: 'One of the Legend-Arms that can change itself into a weapon. Legends say that such weapons would "save the world if held by an angel, or destroy it if held by a demon". Zubamon has the "Twentiest" data, and often shouts "I am the Twentiest!" without knowing what it means. It hates anything not fair or above board, and always seeks sharpness. Days of sharp gags and sharp battles make it happy. It charges head-first with its Twenty Dive move, but Zubamon\'s power manifests when it turns into its weapon form.',
	attribute: Attribute.Neutral,
	stage: Stage.Rookie,
	type: DigimonType.Vaccine,
	memoryUsage: 5,
	equipmentSlots: 1,
	supportSkill: supportSkills.legendArms,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const SOLARMON: Digimon = {
	fieldGuideNumber: 37,
	name: 'Solarmon',
	description: 'A supposedly rare type of machine Digimon. Some researchers posit it as a mutation of Hagurumon, but no one knows for sure. The heat generated from its DigiCore makes its body hot enough to burn at the touch. Its special move Solar Flare launches a red-hot gear to scorch the enemy.',
	attribute: Attribute.Light,
	stage: Stage.Rookie,
	type: DigimonType.Vaccine,
	memoryUsage: 4,
	equipmentSlots: 1,
	supportSkill: supportSkills.fullFunctionality,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const CHUUMON: Digimon = {
	fieldGuideNumber: 38,
	name: 'Chuumon',
	description: 'A mouse-like Digimon that is always up to mischief with Sukamon. The two share a firm friendship (at least Chuumon thinks so). Sukamon happened to pass by when it was about to be captured by the network trap Carnivore, saving it by accident. It is fundamentally cowardly, but it doesn\'t lose when it comes to cunning, and runs away when things get dicey. Its special move Cheese Bomb hurls a cheese shaped explosive, sure to cause misfortune to any who mistake it for food.',
	attribute: Attribute.Earth,
	stage: Stage.Rookie,
	type: DigimonType.Virus,
	memoryUsage: 4,
	equipmentSlots: 1,
	supportSkill: supportSkills.toFightAnotherDay,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const TERRIERMON: Digimon = {
	fieldGuideNumber: 39,
	name: 'Terriermon',
	description: 'This Digimon with a single horn on its head is wrapped in mystery. Its body composition can be classified as a beast type Digimon, but its subsequent Digivolution path is still unknown. There\'s also a rumor that it is born as twins on rare occasion. Its calm manner and adorable looks make it hard to imagine this Digimon as a combat species, but in battle it demonstrates a power well beyond its appearance. Its signature move is Terrier Tornado, which spins its ears like a propeller to launch a tiny tornado.',
	attribute: Attribute.Wind,
	stage: Stage.Rookie,
	type: DigimonType.Vaccine,
	memoryUsage: 4,
	equipmentSlots: 1,
	supportSkill: supportSkills.bullsEye,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const TENTOMON: Digimon = {
	fieldGuideNumber: 40,
	name: 'Tentomon',
	description: 'An insectoid Digimon with a hard shell but low aggression. It has one hard claw on each forearm, and four on each middle and hind limb. Its middle limbs in particular can skillfully handle objects, just like human hands. Other more evolved insectoid Digimon care only about fighting, but this one seems to be in touch with nature, and can be seen happily smelling flowers or napping in the shade of a tree. It does have a special move, one that hurls static electricity amplified by its wings called Super Shocker.',
	attribute: Attribute.Plant,
	stage: Stage.Rookie,
	type: DigimonType.Vaccine,
	memoryUsage: 4,
	equipmentSlots: 1,
	supportSkill: supportSkills.numbingWaves,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const TOYAGUMON: Digimon = {
	fieldGuideNumber: 41,
	name: 'ToyAgumon',
	description: 'A unique Digimon composed entirely of plastic blocks. A kid on the Internet is said to have built it to resemble Agumon\'s shape, making it very cute. Unlike the confident Agumon, this Digimon has a nervous streak, falling into blocks when frightened. Even so, it possesses a heart of justice that can\'t turn a blind eye to evil. It also loves kids, and loves communicating with them through the Internet. Its special move Plastic Blaze is quite powerful, firing a toy missile shaped like a flame.',
	attribute: Attribute.Neutral,
	stage: Stage.Rookie,
	type: DigimonType.Vaccine,
	memoryUsage: 4,
	equipmentSlots: 1,
	supportSkill: supportSkills.ironcladDefense,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const DRACMON: Digimon = {
	fieldGuideNumber: 42,
	name: 'Dracmon',
	description: 'The most mischievous Digimon of the Dark Area. It\'ll do anything for a prank, even face a bit of danger. It even risked its life once to draw graffiti on the faces of the 4 Sovereign Digimon (no word on if it succeeded). It is a vampiric Digimon, but lately it\'s forgotten about blood, focusing entirely on pranking the Royal Knights. Those that look at the Eye of Nightmares released from the evil eyes on its palms fall prey to Dracmon\'s control. Its Undead Fang technique better reflects its vampiric nature, biting foes with its fangs.',
	attribute: Attribute.Dark,
	stage: Stage.Rookie,
	type: DigimonType.Virus,
	memoryUsage: 5,
	equipmentSlots: 1,
	supportSkill: supportSkills.vampire,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const DRACOMON: Digimon = {
	fieldGuideNumber: 43,
	name: 'Dracomon',
	description: 'An ancient pure-blooded dragon Digimon said to be the progenitor of all Dramon-type Digimon. Its small build holds unimaginable power and agility, making it top class among Rookies. Dracomon has a savage personality, but can be docile towards opponents it approves of. It has wings, but they are not developed enough for flight. It also loves collecting shiny things, particularly gems and metals, and eats its favorites to absorb them. Its special move Baby Breath blows a high-temperature sigh at the opponent.',
	attribute: Attribute.Fire,
	stage: Stage.Rookie,
	type: DigimonType.Data,
	memoryUsage: 5,
	equipmentSlots: 1,
	supportSkill: supportSkills.gekirin,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const DORUMON: Digimon = {
	fieldGuideNumber: 44,
	name: 'Dorumon',
	description: 'A beast Digimon considered an experimental "Prototype Digimon" from before their discovery, due to the archaic interface on its forehead. The personality of an original combat species Digimon is quite strong, as is its combat instinct. It snaps and snarls at everything, but gets tame once it\'s bitten someone. Data hidden deep within its DigiCore during the experiment contains the potent life force of a Dragon, making it a powerful Digimon. Its special move Metal Cannon launches iron balls from its mouth.',
	attribute: Attribute.Neutral,
	stage: Stage.Rookie,
	type: DigimonType.Data,
	memoryUsage: 5,
	equipmentSlots: 1,
	supportSkill: supportSkills.haymaker,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const HAGURUMON: Digimon = {
	fieldGuideNumber: 45,
	name: 'Hagurumon',
	description: 'A mutated machine Digimon with a body composed of countless turning gears. If even a single gear is removed, all of the other gears will stop turning and it will be unable to maintain its life force. Hagurumon can transmit a computer virus to its opponent and control it, an ability exploited by villainous Digimon. Hagurumon has no sense of self, and doesn\'t understand it\'s being used for evil. Its special move Cog Crusher buries an infected black gear in its opponent, driving them crazy.',
	attribute: Attribute.Electric,
	stage: Stage.Rookie,
	type: DigimonType.Virus,
	memoryUsage: 4,
	equipmentSlots: 1,
	supportSkill: supportSkills.metalEmpire,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const PATAMON: Digimon = {
	fieldGuideNumber: 46,
	name: 'Patamon',
	description: 'A mammal Digimon characterized by its large ears, which it uses as wings to soar through the air, but since it can\'t go faster than 1 km/h it\'s definitely faster to walk. People love how cute it looks when trying so hard to fly (not that it cares). It\'s very obedient and does what it\'s told. Patamon has also inherited the genetics of ancient Digimon capable of unleashing hidden sacred power without wearing a Holy Ring. The special move Boom Bubble makes it suck in air and shoot it out as an air bullet.',
	attribute: Attribute.Wind,
	stage: Stage.Rookie,
	type: DigimonType.Data,
	memoryUsage: 4,
	equipmentSlots: 1,
	supportSkill: supportSkills.justiceGenome,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const HACKMON: Digimon = {
	fieldGuideNumber: 47,
	name: 'Hackmon',
	description: 'A tiny dragon Digimon with a cool white sheen. Unfettered and liking it that way, it lives for adventure, likely due to Gankoomon\'s DNA. It calmly takes on Gankoomon\'s rigorous trials. Its lineage affords it a heightened sense of combat, and its training with the Sistermon sisters puts it on par with Ultimate opponents in a fight. It specializes in quick and agile melee combat and its special move Fifth Rush cuts up its opponent with sturdy claws. Its dream is to become a Royal Knight like Gankoomon.',
	attribute: Attribute.Fire,
	stage: Stage.Rookie,
	type: DigimonType.Data,
	memoryUsage: 5,
	equipmentSlots: 1,
	supportSkill: supportSkills.battleSense,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const PALMON: Digimon = {
	fieldGuideNumber: 48,
	name: 'Palmon',
	description: 'A vegetation Digimon with a tropical flower on its head. It Digivolved like a reptile from Tanemon, but its appearance and traits classify it as a vegetation type. During the day it spreads its flower and leaf-life arms in photosynthesis. It buries its root-like feet in the ground to absorb nutrients but can also walk. Its flower emits a sweet smell when happy, and a stench powerful enough to repel large Digimon when angry or in danger. Its special move Poison Ivy entangles the enemy in poisonous ivy and causes paralysis.',
	attribute: Attribute.Plant,
	stage: Stage.Rookie,
	type: DigimonType.Data,
	memoryUsage: 5,
	equipmentSlots: 1,
	supportSkill: supportSkills.poisonThorns,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const DEMIDEVIMON: Digimon = {
	fieldGuideNumber: 49,
	name: 'DemiDevimon',
	description: 'A small familiar Digimon shaped like a bat used by the likes of Devimon or Myotismon. It tends to rile up the Devimon, who had been an angel type Digimon, and is said to be the one that brought it over to the dark side. It lacks attack power, but its uses its cunning to commit evil deeds here and there. It prefers darkness and is rarely seen alone, often together with high-level Digimon instead. Its special move Demi Darts shoots massive syringes and sucks the enemy\'s blood.',
	attribute: Attribute.Dark,
	stage: Stage.Rookie,
	type: DigimonType.Virus,
	memoryUsage: 4,
	equipmentSlots: 1,
	supportSkill: supportSkills.nightmareSoldiers,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const BIYOMON: Digimon = {
	fieldGuideNumber: 50,
	name: 'Biyomon',
	description: 'A baby bird Digimon whose wings have grown into arms. It can grab objects with its wings, but can\'t fly very well. It lives on the ground, but when danger comes it will fly away to escape. Even so, it can fly just about as well as Patamon, so it sees Patamon as a rival. It dreams of becoming a Birdramon to fly freely in the heavens, and doesn\'t want to become a flightless Kokatorimon. It has a curious personality, and loves to peck at Tanemon\'s head. Its special move Spiral Twister shoots illusory flames.',
	attribute: Attribute.Wind,
	stage: Stage.Rookie,
	type: DigimonType.Vaccine,
	memoryUsage: 4,
	equipmentSlots: 1,
	supportSkill: supportSkills.phoenixFeathers,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const FALCOMON: Digimon = {
	fieldGuideNumber: 51,
	name: 'Falcomon',
	description: 'A bird Digimon with wings to fly freely in the skies. Although it can fly, it specializes in riding massive kites and appearing from the skies like a ninja. Its special move is Ninja Blade, which throws a barrage of shuriken made from its stiff feathers.',
	attribute: Attribute.Wind,
	stage: Stage.Rookie,
	type: DigimonType.Vaccine,
	memoryUsage: 5,
	equipmentSlots: 1,
	supportSkill: supportSkills.windGuardians,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const FANBEEMON: Digimon = {
	fieldGuideNumber: 52,
	name: 'FanBeemon',
	description: 'An insectoid Digimon of the mysterious flying Royal Base. Its daily life differs from other insect types, but it has a cheerful, hard working personality and a strong frame. Gets along well with plant Digimon like Palmon or Lillymon. It is classified as a virus type from its duty gathering field data like plants or flowers for on-base construction. Strong Digimon prevent any outsiders from getting close, so the goal of this construction is a mystery. Its special move Gear Stinger is a rapid-fire spray of serrated needles.',
	attribute: Attribute.Plant,
	stage: Stage.Rookie,
	type: DigimonType.Virus,
	memoryUsage: 4,
	equipmentSlots: 1,
	supportSkill: supportSkills.royalCommando,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const VEEMON: Digimon = {
	fieldGuideNumber: 53,
	name: 'Veemon',
	description: 'A newly discovered species of Digimon. The last of the species that flourished in the genesis of the Digital World, it can use Digi-Eggs to undergo a pseudo-evolution called armor Digivolution. Veemon is a superior member of the combat species, possessing hidden power and tremendous ability when armor Digivolved. It has a naughty and playful side, but also holds a strong sense of justice. Its special move Veemon Headbutt defeats enemies with a powerful headbutt.',
	attribute: Attribute.Neutral,
	stage: Stage.Rookie,
	type: DigimonType.Free,
	memoryUsage: 5,
	equipmentSlots: 1,
	supportSkill: supportSkills.dragonsWrath,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const SALAMON: Digimon = {
	fieldGuideNumber: 54,
	name: 'Salamon',
	description: 'A holy type Digimon child known for its lop eared appearance. Still young, it cannot unleash its sacred power, nor is it aware of its own mission. Thus its nature is unstable, with the potential to become good or evil. Even so, one day it will likely awaken to its mission as a Virus Buster. Salamon is also an experimental Digimon made to imitate domestic pets by Digimon researchers, so it closely resembles a real animal. Its special move Puppy Howling paralyzes the enemy with a super-high pitched bark.',
	attribute: Attribute.Light,
	stage: Stage.Rookie,
	type: DigimonType.Vaccine,
	memoryUsage: 4,
	equipmentSlots: 1,
	supportSkill: supportSkills.holyRing,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const BETAMON: Digimon = {
	fieldGuideNumber: 55,
	name: 'Betamon',
	description: 'An amphibian Digimon that walks on four legs. Betamon is a gentle and docile creature, but sometimes it will get angry and unleash Electric Shock, an attack delivering over 1 million volts of electricity to the enemy.',
	attribute: Attribute.Water,
	stage: Stage.Rookie,
	type: DigimonType.Virus,
	memoryUsage: 4,
	equipmentSlots: 1,
	supportSkill: supportSkills.mysteriousScale,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const HAWKMON: Digimon = {
	fieldGuideNumber: 56,
	name: 'Hawkmon',
	description: 'A calm, collected and extremely courteous bird Digimon. Just like Veemon, it is a descendent of a unique species that prospered in ancient times, and can borrow the power of the Digi-Eggs for armored pseudo-evolution. Its special move Feather Slash uses the feather ornament on its head as a boomerang.',
	attribute: Attribute.Wind,
	stage: Stage.Rookie,
	type: DigimonType.Free,
	memoryUsage: 5,
	equipmentSlots: 1,
	supportSkill: supportSkills.windGuardians,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const MUSHROOMON: Digimon = {
	fieldGuideNumber: 57,
	name: 'Mushroomon',
	description: 'A small plant Digimon shaped like a poisonous mushroom. Small, extremely toxic mushroom bombs grow Mushroomon\'s body, causing all sorts of illnesses. Getting hit by one of those bombs makes the victim laugh incessantly, paralyzes them, causes amnesia, you name it. It\'s very ill-tempered and enjoys teasing the weak, but it also has a shy side, covering half of its face. Its special move Fungus Crusher releases a bunch of small mushroom bombs at once.',
	attribute: Attribute.Plant,
	stage: Stage.Rookie,
	type: DigimonType.Virus,
	memoryUsage: 4,
	equipmentSlots: 1,
	supportSkill: supportSkills.natureSpirits,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const MONODRAMON: Digimon = {
	fieldGuideNumber: 58,
	name: 'Monodramon',
	description: 'A tiny dragon Digimon that cannot fly, despite the bat-like wings on both arms. Its personality is more brutal than rough, and it loves to fight. Even in the Digital World, Monodramon ends up in the middle of so many fights that even Ogremon is fed up with its tenacity. Its special move Knuckle Beater is a simple yet bold move that charges with staggering force before walloping an enemy with its powerful claws.',
	attribute: Attribute.Neutral,
	stage: Stage.Rookie,
	type: DigimonType.Vaccine,
	memoryUsage: 4,
	equipmentSlots: 1,
	supportSkill: supportSkills.innocentEyes,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const LALAMON: Digimon = {
	fieldGuideNumber: 59,
	name: 'Lalamon',
	description: 'A vegetation Digimon in the shape of a flower bud. Spinning the leaf on its head lets it float along. It lacks expression but still maintains its charm. The special move Seed Blast fires hard nuts with surprising accuracy.',
	attribute: Attribute.Plant,
	stage: Stage.Rookie,
	type: DigimonType.Data,
	memoryUsage: 4,
	equipmentSlots: 1,
	supportSkill: supportSkills.flowerGuard,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const LUCEMON: Digimon = {
	fieldGuideNumber: 60,
	name: 'Lucemon',
	description: 'This child-shaped angel Digimon appeared in the Digital World long ago during a time of chaos. Bringing peace and order to the world afterwards, a rebellion against Lucemon first caused a long period of darkness. It looks like a child, but its power and wisdom surpasses Ultimate Digimon. Its abilities are said to have been split among the Celestial Digimon. Its special move Grand Cross fires balls of light in the shape of a cross, and is stronger than Seraphimon\'s Strike of the Seven Stars.',
	attribute: Attribute.Light,
	stage: Stage.Rookie,
	type: DigimonType.Vaccine,
	memoryUsage: 14,
	equipmentSlots: 1,
	supportSkill: supportSkills.justiceGenome,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const LUNAMON: Digimon = {
	fieldGuideNumber: 61,
	name: 'Lunamon',
	description: '',
	attribute: Attribute.Water,
	stage: Stage.Rookie,
	type: DigimonType.Data,
	memoryUsage: 5,
	equipmentSlots: 1,
	supportSkill: supportSkills.moonKissedBlade,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const RENAMON: Digimon = {
	fieldGuideNumber: 62,
	name: 'Renamon',
	description: 'A beast humanoid Digimon shaped like a golden fox. Renamon\'s relationship to humans is clearly shown, and if raised properly, its in-training form can Digivolve into a Renamon of high intelligence. Calm and collected at all times, it trains so as not to lose that cool in any situation. Its tall, slender form stands out among Rookie Digimon, and it prefers the speed of its many techniques over power when it comes to fighting the enemy. Its special move Diamond Storm hurls razor sharp wood chips at the enemy.',
	attribute: Attribute.Plant,
	stage: Stage.Rookie,
	type: DigimonType.Data,
	memoryUsage: 5,
	equipmentSlots: 1,
	supportSkill: supportSkills.adroitWisdom,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const LOPMON: Digimon = {
	fieldGuideNumber: 63,
	name: 'Lopmon',
	description: 'An extremely precious twin Digimon Rookie. Terriermon has one horn on its head, but this Digimon has three. Its ecosystem is wrapped in mystery. Its composition is enough to deem it a beast-type Digimon, but nothing else is known about it. Terriermon may have a calm and chipper personality, but in contrast Lopmon is a crybaby with a lonely streak. Neither can be considered Digimon of the combat species, but they show unexpected power in battle. Special move is Blazing Ice, and shoots cold air bullets.',
	attribute: Attribute.Earth,
	stage: Stage.Rookie,
	type: DigimonType.Data,
	memoryUsage: 4,
	equipmentSlots: 1,
	supportSkill: supportSkills.animalColosseum,
	digivolvesFrom: [],
	digivolvesTo: []
};

export const WORMMON: Digimon = {
	fieldGuideNumber: 64,
	name: 'Wormmon',
	description: 'A timid and cowardly larva Digimon. As a descendent of the same ancient species as Veemon, it can undergo a unique armor Digivolution. Wormmon himself is powerless, though, and can\'t stand up to larger Digimon. But with the power of the Digi-Eggs, it can armor Digivolve and display incredible power. Like a larva maturing into an adult, Wormmon will one day Digivolve into a Champion of great power. This Digimon embodies future potential itself. Its special move Sticky Net shoots viscous webs binding the enemy.',
	attribute: Attribute.Plant,
	stage: Stage.Rookie,
	type: DigimonType.Free,
	memoryUsage: 4,
	equipmentSlots: 1,
	supportSkill: supportSkills.natureSpirits,
	digivolvesFrom: [],
	digivolvesTo: []
};
//#endregion

//#region Champion
export const ICEDEVIMON: Digimon = {
	fieldGuideNumber: 65,
	name: 'IceDevimon',
	stage: Stage.Champion,
	attribute: Attribute.Water,
	type: DigimonType.Virus,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'A dark angel Digimon with a heart as cold as ice. This is the form that Devimon with the cruelest hearts take after Digivolution. It deceives enemies with its silver tongue, and uses wings of ice to freeze them where they stand.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};

export const ICEMON: Digimon =  {
	fieldGuideNumber: 66,
	name: 'Icemon',
	stage: Stage.Champion,
	attribute: Attribute.Water,
	type: DigimonType.Data,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'A Digimon whose body is composed of water. Its origins are currently being researched; perhaps it Digivolved from Gotsumon, or maybe it is some sort of mutation. Its special move Iceball Bomb throws ice-cold frozen bombs.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};

export const AQUILAMON: Digimon = {
	fieldGuideNumber: 67,
	name: 'Aquilamon',
	stage: Stage.Champion,
	attribute: Attribute.Wind,
	type: DigimonType.Free,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'A gigantic bird Digimon with two massive horns growing from its head. Known as the \"Great Eagle of the Desert,\" it flies through the skies at mach speed and can seek out distant enemies with its keen eyesight. The horns on its head are immensely powerful when it glides down and rams into enemies. Many bird type Digimon are brutal, but Aquilamon respects decorum and obeys the orders of the master it pledged allegiance to without fail. Its special move Glide Horn charges enemies from the heavens.',
	supportSkill: {
		name: 'Wind Guardians',
		description: 'Increases damage from Wind skills by 15%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};

export const AGUNIMON: Digimon = {
	fieldGuideNumber: 68,
	name: 'Agunimon',
	stage: Stage.Champion,
	attribute: Attribute.Fire,
	type: DigimonType.Free,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'A Digimon with the power of flame bearing the might of a legendary warrior. Its DigiCore is wrapped in a spiritual fire called a holy blaze, giving it power over flames. This guardian deity is the incarnation of internet firewalls. It has a militaristic side, using yoga breathing to keep its fiery disposition in check, and uses archaic speech. It wields martial arts in battle, focusing its spirit to gather flames in its body to raise its attack power. Its special move Pyro Punch shoots a blazing dragon from a flame-wrapped fist.',
	supportSkill: {
		name: 'Human Spirit',
		description: 'Increases SPD by 20%, but reduces ATK by 10%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};

export const ARCADIAMON_CHAMPION: Digimon = {
	fieldGuideNumber: 69,
	name: 'Arcadiamon Champion',
	stage: Stage.Champion,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'A cursed Digimon artificially created from the data of various Digimon. It evolves by absorbing its opponents\' data, but it lacks any sense of self. Details about it are unknown, so it is currently under investigation. Its special move Prison Fist destroys an opponent\'s data at the program level, and Snatch Whip strips an opponent\'s configuration data, converting it into their own.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const ANKYLOMON: Digimon =  {
	fieldGuideNumber: 70,
	name: 'Ankylomon',
	stage: Stage.Champion,
	attribute: Attribute.Earth,
	type: DigimonType.Free,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'An armored dragon Digimon covered completely in hardened skin. It is both hardened and covered in tough protuberances, giving its charge attack incredible destructive power. As an herbivore it lacks ferocity, but it still has a brave nature. Its special move Tail Hammer knocks the iron ball on the tip of its tail at the enemy. Any Digimon hit by this technique has its entire skeleton (wire frame) utterly obliterated.',
	supportSkill: {
		name: 'Ironclad Defense',
		description: 'Increases DEF by 15%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const IKKAKUMON: Digimon =  {
	fieldGuideNumber: 71,
	name: 'Ikkakumon',
	stage: Stage.Champion,
	attribute: Attribute.Water,
	type: DigimonType.Vaccine,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'A sea beast Digimon discovered on a computer in an Arctic exploration base. Its thick pelt and sturdy body are made to withstand polar temperatures. Its pointy horn is made of the rare metal mithril, and the skin under its fur is just as hard. Its clawed soles are heat tops, capable of emitting high heat at will. This lets it maintain its footing on ice, but it can\'t move very quickly. In battle it threatens enemies with a majestic, almost leonine roar. Its special move Harpoon Torpedo shoots its regrowable horn.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const WIZARDMON: Digimon =  {
	fieldGuideNumber: 72,
	name: 'Wizardmon',
	stage: Stage.Champion,
	attribute: Attribute.Dark,
	type: DigimonType.Data,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'A high-level titan wizard Digimon from other dimensional Digital World. It mastered flame and earth magic (high-level programming languages) in its native Digital World, Witchelny. It aims to be a grand sorcerer, and appeared in the Digital World to train. A bit impish, but its shy side prevents it from showing its face. Its special move Thunder Cloud summons thunderclouds to rain down an intense lightning storm.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const LOBOMON: Digimon =  {
	fieldGuideNumber: 73,
	name: 'Lobomon',
	stage: Stage.Champion,
	attribute: Attribute.Light,
	type: DigimonType.Free,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'A Digimon with the power of light bearing the might of a legendary warrior. The lavender parts of its body are made of Saint Amethyst, crystal filled with holy light that becomes incredibly hard when Lobomon has a righteous heart, and brittle if it becomes negative. This chivalrous warrior hates injustice, risking its life for what it believes in. Its taciturn\', solitary nature makes it seem unfeeling, but in fact it is kind-hearted. Its special move Zwei Sieger links its Licht Schwert swords together to flay its foes.',
	supportSkill: {
		name: 'Human Spirit',
		description: 'Increases SPD by 20%, but reduces ATK by 10%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const WOODMON: Digimon = {
	fieldGuideNumber: 74,
	name: 'Woodmon',
	stage: Stage.Champion,
	attribute: Attribute.Plant,
	type: DigimonType.Virus,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'A vegetation Digimon shaped like a giant, withered tree. It\'s made of normal wood, and lives by grabbing passing Digimon and draining their energy. It can also move around on its root-like feet. Violent by nature, it will attack relentlessly when angered. Its strong tree trunk gives it high defense but weakness against fire. This makes it weak against fire Digimon like Meramon or Birdramon, which it regards as enemies. Its special move Branch Drain stabs foes with its branches and drains their energy.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const AIRDRAMON: Digimon = {
	fieldGuideNumber: 75,
	name: 'Airdramon',
	stage: Stage.Champion,
	attribute: Attribute.Wind,
	type: DigimonType.Vaccine,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'A mythical beast Digimon with gigantic wings. This monster is extremely valuable, and thought to be close to a god. It specializes in mid-air combat, invoking storms with its howls and creating massive tornados with its wings. It has a brutal nature, with high intelligence to match. Still, it is nearly impossible for the average Tamer to control it. Its special move Spinning Needle produces a cutting vacuum from the thrashing of its humongous wings.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const EXVEEMON: Digimon = {
	fieldGuideNumber: 76,
	name: 'ExVeemon',
	stage: Stage.Champion,
	attribute: Attribute.Neutral,
	type: DigimonType.Free,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'A mythical dragon Digimon that gained Veemon\'s original power and Digivolved to Champion. ExVeemon is the pure breed of Veedramon, who is said to be a derivative species. Attacks with its developed arm and leg strength are capable of destroying a mountain of boulders without a trace. It is feared for this destructive power, but in truth it has a strong sense of justice, and does not use its power recklessly. Its special move Vee Laser fires an energy beam from the X-shaped mark on its chest.',
	supportSkill: {
		name: 'Dragon\'s Wrath',
		description: 'Increases ATK by 15%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const ANGEMON: Digimon = {
	fieldGuideNumber: 77,
	name: 'Angemon',
	stage: Stage.Champion,
	attribute: Attribute.Light,
	type: DigimonType.Vaccine,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'An angel Digimon with six glittering wings and pure white cloth covering its body. A being of perfect virtue, known as a Digimon that brings happiness. With regards to evil, however, it is totally merciless, attacking until the enemy is completely annihilated. On the countless occasions when danger descends upon the Digital World, it comes to lead Digimon of the same species. Before going to the dark side, Devimon was one of this species. Its special move Heaven\'s Knuckle attacks foes with a shining golden fist.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const OGREMON: Digimon = {
	fieldGuideNumber: 78,
	name: 'Ogremon',
	stage: Stage.Champion,
	attribute: Attribute.Earth,
	type: DigimonType.Virus,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'A Digimon shaped like an oni, a being from Eastern mythology. Attacks from its dreadful, sinewy muscles carry tremendous destructive force. Smart but ill-tempered, anger is its main driving force and it devotes itself to destruction. It\'s belligerence earned it the name \"Digimon Hunter,\" as it will boldly face down opponents way more powerful than itself. The bone club in its right hand is a spoil from its victory against SkullGreymon. Its special move Pummel Whack unleashes two gigantic fists.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GUARDROMON: Digimon = {
	fieldGuideNumber: 79,
	name: 'Guardromon',
	stage: Stage.Champion,
	attribute: Attribute.Electric,
	type: DigimonType.Virus,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'A machine Digimon that protects computer network firewalls. Originally this Digimon would repel illegal network firewall entry together with \"Net Keeper\" Giromon. But a vicious hacker infected it with a computer virus for that impregnable defensive ability and used it to guard himself against a do gooder vaccine type group. Guardromon only has \"defend\" programmed into it, so it\'ll defend against invaders regardless of who they are. Special move Destruction Grenade pursues intruders to the ends of the earth.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GUARDROMON_GOLD: Digimon = {
	fieldGuideNumber: 80,
	name: 'Guardromon (Gold)',
	stage: Stage.Champion,
	attribute: Attribute.Electric,
	type: DigimonType.Free,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: '\'Guardromon\', guardian of the Chrome Digizoit mine, transformed to withstand the repeated, relentless raids from illegal miners. This is supposedly the result of Guardromon\'s armor taking in the Chrome Digizoit dust data floating in the air, making it more durable than a normal Guardromon\'s armor. It also succeeds in raising the output of its special move, Destruction Grenade. In exchange, however, the armor is heavier and its movements are consequently sluggish.',
	supportSkill: {
		name: 'Ironclad Defense',
		description: 'Increases DEF by 15%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GAOGAMON: Digimon = {
	fieldGuideNumber: 81,
	name: 'GaoGamon',
	stage: Stage.Champion,
	attribute: Attribute.Wind,
	type: DigimonType.Data,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'This beast Digimon has grown bigger than Gaomon in stature, and its glove-protected claws have fully grown. It walks on all fours, but its fearsome leg strength lets it stand and attack like a bear. Its special move Spiral Blow shoots a powerful, spiral shaped gust of air from its mouth.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const KABUTERIMON: Digimon = {
	fieldGuideNumber: 82,
	name: 'Kabuterimon',
	stage: Stage.Champion,
	attribute: Attribute.Plant,
	type: DigimonType.Vaccine,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'An insectoid Digimon that\'s unique among newly-discovered Digimon. The details behind its Digivolution into an insect type are unclear, but it has both ant-like power and a beetle-like perfect defense. Its personality itself is insectile and it possesses no intellect, just an instinct to survive. It will relentlessly attack its antagonists, the virus type Digimon. Its metallic cranium boasts unrivaled defense. Its special move is called Electro Shocker.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SHELLNUMEMON: Digimon = {
	fieldGuideNumber: 83,
	name: 'ShellNumemon',
	stage: Stage.Champion,
	attribute: Attribute.Water,
	type: DigimonType.Virus,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'ShellNumemon used its wisdom to search out a shell to protect itself, becoming this crustacean Digimon. That makes this ShellNumemon a bit more clever than Numemon, but it\'s such a coward that it hides inside its shell at the slightest fright. Its defense is extremely high when shut inside its shell, holding firm no matter how much it\'s kicked or tread upon. Its special move is Mature Poop, in which it tosses all of the poop stored in its shell.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GARGOMON: Digimon = {
	fieldGuideNumber: 84,
	name: 'Gargomon',
	stage: Stage.Champion,
	attribute: Attribute.Electric,
	type: DigimonType.Vaccine,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'A beast humanoid Digimon Digivolved from Terriermon and a special hunter Digimon. It\'s faster than it looks, attacking with pinpoint accuracy to bring down its foes. It can jump high in the air with its powerful legs and spread its ears to fly. Its cheerful personality gives way to an unstoppable fury when angered. It\'s picky about its favorite D-VI\'S 503xx jeans. Its special move Dumdum Uppercut makes it close in on the enemy and hurl its Gatling arm up at it.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GARURUMON: Digimon = {
	fieldGuideNumber: 85,
	name: 'Garurumon',
	stage: Stage.Champion,
	attribute: Attribute.Fire,
	type: DigimonType.Vaccine,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'A lupine beast Digimon covered in blue, white and silver fur. With fur as hard as the rare metal mithril, blades on its shoulders are extremely sharp, dicing anything they touch to pieces. Its battle instinct is fierce like the arctic tundra that forged its muscles. A carnivore\'s agility and the accuracy to take out its target make it feared by other Digimon. Yet it\'s also quite intelligent, and obeys its master or leader without fail. Its special move Fox Fire fires a bright blue flame from its mouth.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GARURUMON_BLK: Digimon = {
	fieldGuideNumber: 86,
	name: 'Garurumon (Blk)',
	stage: Stage.Champion,
	attribute: Attribute.Fire,
	type: DigimonType.Virus,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'A virus type Garurumon. The blades on its shoulders are powerful enough to dice everything they touch to pieces. It loves collecting bones and burying them in the ground, but it seems that the trickster Drimogemon sneaks off with them.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const KYUBIMON: Digimon = {
	fieldGuideNumber: 87,
	name: 'Kyubimon',
	stage: Stage.Champion,
	attribute: Attribute.Fire,
	type: DigimonType.Data,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'A mysterious beast Digimon in the shape of a giant fox with nine tails. It is feared as a harbinger of destruction and decay, but in ancient times it was revered as an emissary of peace. Renamon with particularly high abilities and a lot of experience Digivolve into Kyubimon. It lacks attack power, but it possesses a powerful will force and is proficient in spellcraft. Its said to gallop across the heavens using limbs coated in blue flames. Its signature move Fox Tail Inferno manipulates will-o-wisps at will.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GROWLMON: Digimon = {
	fieldGuideNumber: 88,
	name: 'Growlmon',
	stage: Stage.Champion,
	attribute: Attribute.Fire,
	type: DigimonType.Virus,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'A wizard dragon Digimon known as the \"Crimson wizard dragon.\" The childishness from its time as Guilmon is gone, having Digivolved into a wild, ferocious Digimon. It may be a virus type Digimon, but the rearing of its tamer makes it obedient, and it can fight for justice. Growlmon\'s roar is mighty enough to shake the ground. Before battle it unleashes a fierce roar to intimidate the enemy. Its special move Exhaust Flame emits a roar coupled with a powerful flame.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const KURISARIMON: Digimon = {
	fieldGuideNumber: 89,
	name: 'Kurisarimon',
	stage: Stage.Champion,
	attribute: Attribute.Dark,
	type: DigimonType.Free,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'A chrysalis-like Champion Digimon. The Rookie Keramon becomes a pupa and preserves its energy in order to Digivolve into a stronger form. As a result it can\'t move at all, but is protected by a shell, and attacks enemies with the tentacles sprouting from its back. Rumors say it can skip Champion form and Digivolve to Ultimate if the circumstance allows, but Digivolving to Kurisarimon lets it Digivolve into a strong Ultimate Digimon. Its Special move Data Crusher destroys an opponent\'s composition data with its tentacles.',
	supportSkill: {
		name: 'Destroyer',
		description: '10% chance of instantly killing target when attacking.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GREYMON: Digimon = {
	fieldGuideNumber: 90,
	name: 'Greymon',
	stage: Stage.Champion,
	attribute: Attribute.Fire,
	type: DigimonType.Vaccine,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'This dinosaur Digimon has a beetle-like shell over its head and hardened skin on its body. From its sharp claws to giant horns, its entire body is covered in deadly weapons, making it an extremely aggressive Digimon. Even so, it is quite intelligent, and if you can tame it there might not be another strong monster like it. Its special move Mega Flame shoots high-temperature flames from its mouth to roast everything to a crisp.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GREYMON_BLUE: Digimon = {
	fieldGuideNumber: 91,
	name: 'Greymon (Blue)',
	stage: Stage.Champion,
	attribute: Attribute.Fire,
	type: DigimonType.Virus,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'A virus type Greymon with bluish black body color. Its ferociousness has increased, to the point where it can be called a completely wild Greymon. Even so, it isn\'t a lone wolf, and is clever enough to engage in team tactics with its comrades.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const CLOCKMON: Digimon = {
	fieldGuideNumber: 92,
	name: 'Clockmon',
	stage: Stage.Champion,
	attribute: Attribute.Electric,
	type: DigimonType.Data,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'The guardian of time that governs computer clocks. It manages the \"time\" and \"space\" of all computers and networks. It can travel freely through time between 1900 and 1999. Having this very dangerous and terrifying ability is why it always maintains a neutral stance, never taking part in the battle between vaccine and virus types. If it were ever to take either side, the Digital World would supposedly collapse. Its special move Chrono Breaker destroys the \'time\' flowing through an enemy\'s body.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const KUWAGAMON: Digimon = {
	fieldGuideNumber: 93,
	name: 'Kuwagamon',
	stage: Stage.Champion,
	attribute: Attribute.Plant,
	type: DigimonType.Virus,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'An insectoid Digimon with giant scissors on its head. It has combat ability superior to similar species living on the same File Island as Kabuterimon. Protected by tenacious power and a tough carapace, and its scissors are especially strong. Once it grabs a foe, it keeps squeezing until it draws its last breath. It is the natural antagonist of vaccine attribute Kabuterimon, and nothing but conflict exists between the two. Its special move Scissor Claw can easily cut through any hard substance.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GEKOMON: Digimon = {
	fieldGuideNumber: 94,
	name: 'Gekomon',
	stage: Stage.Champion,
	attribute: Attribute.Water,
	type: DigimonType.Virus,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'This amphibian Digimon can mesmerize through a pleasant cry unthinkable from its strange appearance. It jams chords with the three holes on its tongue and horn wrapped around its neck, and uses this to control the opponent\'s feelings. Rumor has it that it is born when a hit song is created in some composition software, making it a kind of status symbol among global musicians. Its special move Symphony Crusher uses ultra high frequency vibrations to destroy an enemy\'s insides.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GEREMON: Digimon = {
	fieldGuideNumber: 95,
	name: 'Geremon',
	stage: Stage.Champion,
	attribute: Attribute.Electric,
	type: DigimonType.Virus,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'A mollusk Digimon like Numemon. It lacks offensive ability, but on the other hand it\'s quite brutal, and will attack any enemy. Of course this leads to a lot of defeat, but it forgets this quickly and goes on to provoke stronger enemies over and over. Its special move Hyper Smell spreads a horrific stench all over its body.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const COREDRAMON_BLUE: Digimon = {
	fieldGuideNumber: 96,
	name: 'Coredramon (Blue)',
	stage: Stage.Champion,
	attribute: Attribute.Wind,
	type: DigimonType.Vaccine,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'This blue Coredramon Digivolves from a Dracomon that absorbed a lot of a rare jewel called Blue Diamante mined from mountains at high altitudes. It can fly at high speeds using wings developed for survival on craggy mountains. Its special move Blue Flare Breath shoots sparkling blue, white-hot breath. The attack dismantles the texture data covering a Digimon\'s body, letting Coredramon attack their exposed DigiCore directly.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const COREDRAMON_GREEN: Digimon = {
	fieldGuideNumber: 97,
	name: 'Coredramon (Green)',
	stage: Stage.Champion,
	attribute: Attribute.Earth,
	type: DigimonType.Virus,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'This green Coredramon Digivolves from a Dracomon that absorbed a lot of a rare jewel called Green Malachite mined from lush woodlands. This type of Coredramon doesn\'t specialize in flight, instead boasting incredible leg strength that lets it run at unimaginable speeds. Its special move Green Flare Breath shoots sparkling green, white-hot breath. The attack is extremely penetrating, cutting through a body\'s texture data to deal direct damage to a DigiCore.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GOLDNUMEMON: Digimon = {
	fieldGuideNumber: 98,
	name: 'GoldNumemon',
	stage: Stage.Champion,
	attribute: Attribute.Light,
	type: DigimonType.Virus,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'A golden subspecies of Numemon. A Numemon that has taken in data from Goldeen Mine. Its special move Golden Rush throws rapid-fire poop.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GOLEMON: Digimon = {
	fieldGuideNumber: 99,
	name: 'Golemon',
	stage: Stage.Champion,
	attribute: Attribute.Earth,
	type: DigimonType.Virus,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'A rock mineral Digimon discovered when an ancient curse was digitally analyzed. An ancient forbidden spell is carved onto its back, the characters meaning \"epidemic\", \"curse\" and \"evil\". Apparently this is protects it from the gas it emits. About 9% of its body is rock data, with organic limbs attached to its body. An unfeeling Digimon that doesn\'t move unless ordered to.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const CYCLONEMON: Digimon = {
	fieldGuideNumber: 100,
	name: 'Cyclonemon',
	stage: Stage.Champion,
	attribute: Attribute.Earth,
	type: DigimonType.Virus,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'This one-eyed dragon humanoid Digimon has an abnormally developed right arm. Originally a brawny dragon warrior, its right eye was crushed by the warrior Leomon, transforming it into a demon bent on revenge. It strengthens and engorges its right arm in order to defeat Leomon, and looks for an opportunity to do so. It has lost its pride, becoming an insane warrior caring only for slaughter. Its special move Hyper Heat dissolves all substances with intense heat.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SANGLOUPMON: Digimon = {
	fieldGuideNumber: 101,
	name: 'Sangloupmon',
	stage: Stage.Champion,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'A noble, blood-sucking wolf Digimon. It is a rather ancient breed, said to have survived from the creation of the Digital World. Digimon who have their blood sucked by Sangloupmon have all of the information drawn out of their DigiCore, ceasing all biological activity and dying. Sangloupmon can break down its own data into packets of its own free will, sending it across the Net to move instantly. Its special move Sticker Blade hurls thousands of small blades to impale its opponent.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SUNFLOWMON: Digimon = {
	fieldGuideNumber: 102,
	name: 'Sunflowmon',
	stage: Stage.Champion,
	attribute: Attribute.Plant,
	type: DigimonType.Data,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'A sunflower-shaped vegetation Digimon. Basking in sunlight gives it energy and increases its attack power. On sunny days it flaps the leaves on its back and flies around. Its special move Sunshine Beam is a beam of sunlight shot from its petals.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SEADRAMON: Digimon = {
	fieldGuideNumber: 103,
	name: 'Seadramon',
	stage: Stage.Champion,
	attribute: Attribute.Water,
	type: DigimonType.Data,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'This aquatic Digimon has a long, serpentine body. It coils its body around attacking foes and squeezes them until they perish. It has pretty much no intellect, swimming around the net oceans by instinct. Its special move Ice Blast shoots absolute zero breath from its mouth, instantly freezing water and sending it at enemies.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const COELAMON: Digimon = {
	fieldGuideNumber: 104,
	name: 'Coelamon',
	stage: Stage.Champion,
	attribute: Attribute.Water,
	type: DigimonType.Data,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'An ancient fish Digimon with tough skin and enormous claws. This Digimon is discovered in the Net Ocean whenever networks destroyed by evil hackers are repaired. Its body composition is very primitive, with fins developed into limbs. From this, it is thought that primordial Digimon born in the Net Ocean underwent various evolutions to come onto land, increasing in numbers into various types. Its special move Fossil Bite uses its massive talons to attack its enemies.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GEOGREYMON: Digimon = {
	fieldGuideNumber: 105,
	name: 'GeoGreymon',
	stage: Stage.Champion,
	attribute: Attribute.Fire,
	type: DigimonType.Vaccine,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'A special Digimon surmised to be a subspecies of Greymon. The shells on its head and body are completely weaponized, giving it a more aggressive form. Special move Mega Burst charges a Mega Flame to maximum inside its mouth and releases it with tremendous force.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SUKAMON: Digimon = {
	fieldGuideNumber: 106,
	name: 'Sukamon',
	stage: Stage.Champion,
	attribute: Attribute.Earth,
	type: DigimonType.Virus,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'A nasty Digimon that looks like golden poop. Scraps of data thrown in computer recycle bins gathered and mutated to create this creature. It loves dark places, and as a collection of scrap data it is harassed by other Digimon, much like Numemon. Intelligence and attack power are nonexistent. Its partner Chuumon is a small, mouse-like Digimon that cannot fight, but its cunning is second-to-none, and instigates Sukamon to commit crimes.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const STARMON: Digimon = {
	fieldGuideNumber: 107,
	name: 'Starmon',
	stage: Stage.Champion,
	attribute: Attribute.Neutral,
	type: DigimonType.Data,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'A planet-type Digimon discovered in a planet analysis software at a space development center. This space warrior dons a star-shaped armor suit, and star-marked gloves and boots. Its tattered yellow scarf tells of Starmon\'s combat experience. Its eyes burn with fighting spirit and can convey this to opponents without a word. It can even use this ability effect to hypnotize its foes. This hot-blooded Digimon idolizes the brave Leomon. Special move Meteor Shower rains small meteors on the enemy.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const STINGMON: Digimon = {
	fieldGuideNumber: 108,
	name: 'Stingmon',
	stage: Stage.Champion,
	attribute: Attribute.Plant,
	type: DigimonType.Free,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'An extremely rare insectoid Digimon with a human form, possessing the hard exoskeleton and quick movements of its type. It excels in assassination, aiming for vitals with quick movement and precise judgment. It boasts attacks that silence the enemy in a single blow. It is composed and intelligent, possessing a calm personality. The special move Spiking Strike is a dreadful skill that skewers foes with the spikes on both arms.',
	supportSkill: {
		name: 'Nature Spirits',
		description: 'Increases damage from Plant skills by 15%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const STRIKEDRAMON: Digimon = {
	fieldGuideNumber: 109,
	name: 'Strikedramon',
	stage: Stage.Champion,
	attribute: Attribute.Earth,
	type: DigimonType.Vaccine,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'A Commando Dragon aiming to be a Virus Buster. Many vestiges remain from Monodramon, like the horn stretching out behind it, but it looks like a completely different species when it turns into its metal-plated Command Mode. Friendly by nature, it is gripped by an instinct for extermination (or destruction?) when it encounters a virus type, and won\'t stop until its opponent has turned into data trash. Its fearsome special move Fang Strike burns its metal plates white-hot, turning it into a flaming mass before tackling the enemy.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const ZUBAEAGERMON: Digimon = {
	fieldGuideNumber: 110,
	name: 'Zubaeagermon',
	stage: Stage.Champion,
	attribute: Attribute.Neutral,
	type: DigimonType.Vaccine,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: '\"I\'m the Twentiest! I won\'t stop, I\'ll keep on running!\" Zubamon Digivolved into a form embodying these words carved into its heart. ZubaEagermon\'s policy is to push on without stopping, on terrain good and bad, even crawling if it has to. Its special moves are Road T(w)o Decade, which charges straight at a foe\'s chest while shouting \"Twentieeeest!\", and Vantheon, in which it turns its body to cut foes with the blade on its tail. When it changes into the blade it prides itself on, it slices through any enemy at full power.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SOCERIMON: Digimon = {
	fieldGuideNumber: 111,
	name: 'Socerimon',
	stage: Stage.Champion,
	attribute: Attribute.Water,
	type: DigimonType.Vaccine,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'A comrade of Wizardmon that came from the other-dimensional Digital World, Witchelny. It controls light and ice magic (high-level programming languages), and it can heal wounds with holy power through prayer. Its special move Crystal Cloud summons snow clouds from its snow crystal-laden staff to cause incredible snowstorms.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const TANKMON: Digimon = {
	fieldGuideNumber: 112,
	name: 'Tankmon',
	stage: Stage.Champion,
	attribute: Attribute.Electric,
	type: DigimonType.Data,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'An android Digimon shaped like a tank. Tankmon is nicknamed the \"Mercenary Digimon,\" supporting vaccine or virus types alike as long as there\'s profit to be made. It pulverizes foes with its heavyweight power and ordnance all over its body. It absolutely loves conflict, going wherever the battles take it. Conflicts always ceases whenever this loner Digimon goes. Its special move Hyper Cannon fires an ultra-powerful missile from the gun barrel on its head.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const MUDFRIGIMON: Digimon = {
	fieldGuideNumber: 113,
	name: 'MudFrigimon',
	stage: Stage.Champion,
	attribute: Attribute.Earth,
	type: DigimonType.Data,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'A Digimon whose body is composed almost entirely out of earth data. It is thought to be a variant born from a mutation of Frigimon. It is friendly by nature and dislikes fighting, but when the chips are down it demonstrates power it doesn\'t normally show. Its special move Great Weight puts all of its weight behind a haymaker punch.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const TYRANNOMON: Digimon = {
	fieldGuideNumber: 114,
	name: 'Tyrannomon',
	stage: Stage.Champion,
	attribute: Attribute.Fire,
	type: DigimonType.Data,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'A Digimon shaped like an ancient dinosaur from prehistoric times. Its two developed arms and massive tail mow down everything. It has intelligence and a docile personality, so it\'s easy to tame. This makes it handy for fledgling tamers, and many will raise one with care. It can be considered a fundamental Digimon representative. Its special move Fire Breath shoots a flame of the same crimson as its body.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GATOMON: Digimon = {
	fieldGuideNumber: 115,
	name: 'Gatomon',
	stage: Stage.Champion,
	attribute: Attribute.Light,
	type: DigimonType.Vaccine,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'Naughty and brimming with curiosity, its body is small, and it was previously a holy type Digimon. Its true power doesn\'t match up to this appearance. The Holy Ring on its tail is proof of its holy nature, but it loses power and cannot demonstrate its original strength if this is removed. In order to protect itself, it wields long claws copied from SaberLeomon\'s data. Its special move Lightning Paw attacks enemies with long claws.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const DEVIMON: Digimon = {
	fieldGuideNumber: 116,
	name: 'Devimon',
	stage: Stage.Champion,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'This dark angel Digimon is clad in jet black robes. It was originally a glittering, Angemon-type Digimon, but it fell into the Digital World distortion called the Dark Area and became a fallen angel. The proof of this is the large mark of evil on its chest. It has a crafty and fiendish personality, but also possesses outstanding intelligence. Its glowing red eyes are said to brainwash whatever they see into Devimon\'s service. Its special move Death Claw extends its flexible limbs to pierce the enemy.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const TURUIEMON: Digimon = {
	fieldGuideNumber: 117,
	name: 'Turuiemon',
	stage: Stage.Champion,
	attribute: Attribute.Earth,
	type: DigimonType.Data,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'A martial artist Digimon discovered in the back regions of a Chinese mountain province. It wanders the world in pursuit of its arch enemies, viruses that do evil through email. It has the makings of an exceptional kenpo practitioner, but still lacks training. It uses the Togaken style it invented itself, and its finishing move Ninja Fist is a nimble stealth attack making use of its jumping power. Its special move Ninja Claw uses its rabbit-like agility and jumping power to unleash rapid blows with Tokaku Tessou claws.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const TOGEMON: Digimon = {
	fieldGuideNumber: 118,
	name: 'Togemon',
	stage: Stage.Champion,
	attribute: Attribute.Plant,
	type: DigimonType.Data,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'A vegetation Digimon shaped like a massive cactus. Its body stores nutrition data, letting it survive for a while even in stark desert areas. The look on its face makes it impossible to tell what it\'s thinking, and it spends most of the day just zoned out. If Togemon is ever angered its expression changes and it goes on a rampage. Its special move Needle Spray hardens the thorns on its arms and rains down punches.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const DORUGAMON: Digimon = {
	fieldGuideNumber: 119,
	name: 'Dorugamon',
	stage: Stage.Champion,
	attribute: Attribute.Earth,
	type: DigimonType.Data,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'A ferocious beast dragon Digimon with the disposition of both dragon and beast, this heavyweight sends most Digimon packing at the sight of its shadow alone. It exhibits a feral, beastly ferocity in battle, but it also has a dragon\'s wisdom, and is usually quite docile. The archaic interface on its forehead leads others to believe it to be part of the Prototype Digimon evolutionary tree. The special move Power Metal smashes foes with a large iron ball from its mouth.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const NANIMON: Digimon = {
	fieldGuideNumber: 120,
	name: 'Nanimon',
	stage: Stage.Champion,
	attribute: Attribute.Earth,
	type: DigimonType.Virus,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'An unidentified Digimon that invaded from an other-dimensional Digital World. In the other dimension it\'s nicknamed \"Oyaji\" and was kept as a digital pet. It loves alcohol and violence, but once it invaded this Digital World (the details of which are still fuzzy), it Digivolved into the active creature known as Nanimon. Inspired by survival of the fittest, it threw itself into battle, but its actual power is unknown. Still, Nanimon has made it through many battles and evolved into its ultimate form.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const NUMEMON: Digimon = {
	fieldGuideNumber: 121,
	name: 'Numemon',
	stage: Stage.Champion,
	attribute: Attribute.Earth,
	type: DigimonType.Virus,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'A mollusk Digimon with a body like a slug. It loves dark and damp environments, and has neither attack power nor intelligence. If you mess up its rearing it\'ll turn into Numemon, but it seems there\'s a hidden secret... To protect itself from external threats, it throws its poop in the grossest attack possible.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const BIRDRAMON: Digimon = {
	fieldGuideNumber: 122,
	name: 'Birdramon',
	stage: Stage.Champion,
	attribute: Attribute.Fire,
	type: DigimonType.Vaccine,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'A gigantic bird Digimon wreathed in blazing flames. Just like the crimson-flamed Meramon, this Digimon sprung forth from an Internet firewall. It flaps its massive wings to fly through the sky. It lacks warlike qualities, but when an enemy attacks it counterattacks to the point of frenzy. Its special move Meteor Wing flaps its wings and shoots out feathers like falling stars.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const BAOHUCKMON: Digimon = {
	fieldGuideNumber: 123,
	name: 'BaoHuckmon',
	stage: Stage.Champion,
	attribute: Attribute.Fire,
	type: DigimonType.Data,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'The form of Hackmon after heaping on rigorous training, honing its combat sense into something exceptional, with a physique to match. It aims for the top and continues training, accumulating combat experience against powerful foes and becoming a more skillful combatant with every fight. Its aspiration to become a Royal Knight has grown as well; not because it was told by someone that it should, but by its own conviction. Its special move Fif Cross strengthens its whole body and rends with its claws.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const BAKEMON: Digimon = {
	fieldGuideNumber: 124,
	name: 'Bakemon',
	stage: Stage.Champion,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'A ghost Digimon with a cloth over its body. A wicked being born from the darkness, computers possessed by Bakemon are said to have their systems destroyed. The contents of the cloth are wrapped in mystery, and the shadow under its real form supposedly becomes a black hole. It lacks attack power so it doesn\'t like attacking directly. Its special move Death Charm casts a powerful curse. Anyone cursed by this who lacks a strong mind will die in seconds.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const VEEDRAMON: Digimon = {
	fieldGuideNumber: 125,
	name: 'Veedramon',
	stage: Stage.Champion,
	attribute: Attribute.Wind,
	type: DigimonType.Vaccine,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'This phantom ancient Digimon only exists on the Folder Continent. It\'s quite precious, and is rarely even seen on the Folder Continent. It\'s said that only one Digimon tamer has tamed a Veedramon. Aside from being named for the V-mark on its chest, everything about its ecosystem is a mystery. For some reason it can be mistaken for a dog. It\'s attack power is abnormal for a Champion, but in crises it shows power surpassing even an Ultimate. Its special move V-Nova Blast fires an intense heat ray from its mouth.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const HUDIEMON: Digimon = {
	fieldGuideNumber: 126,
	name: 'Hudiemon',
	stage: Stage.Champion,
	attribute: Attribute.Plant,
	type: DigimonType.Free,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'A humanoid insectoid Digimon with butterfly wings. It is cautious at first, but once it gets to know someone it has a cheerful, innocent countenance. It likes to sing while dancing gracefully in well-lit places, and its voice is considered an eternal treasure. Its special move Flying Kick is a high-flying dropkick, and its Infinity Dream move blows scales from its flapping wings. Using Infinity Dream on an enemy can poison or paralyze it, but it is mainly used to ease the pain of injured allies and raise their spirits.',
	supportSkill: {
		name: 'Infinity Dream',
		description: 'Cuts the rate of abnormal statuses received by 10%, and recovers 5% of HP per turn.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const PLATINUMSUKAMON: Digimon = {
	fieldGuideNumber: 127,
	name: 'PlatinumSukamon',
	stage: Stage.Champion,
	attribute: Attribute.Neutral,
	type: DigimonType.Virus,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'A poop-shaped Digimon sparkling like platinum, Sukamon took ore data from rare metals that look gorgeous, but its abilities are the same as Sukamon. It doesn\'t power up at all. Its special move Rare Metal Poop throws glittering metallic poop at the enemy.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const BLACKGATOMON: Digimon = {
	fieldGuideNumber: 128,
	name: 'BlackGatomon',
	stage: Stage.Champion,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'An impressive virus type of Gatomon with a pitch black fur coat, this pure evil child wanders the eerie darkness. The mutation of Gatomon that makes BlackGatomon is quite rare, and its population is pretty low. Both malicious and prideful, this messed-up Digimon loves bullying the weak. It\'s basically a dark type Digimon that Digivolved into a dark angel version of Gatomon. Its special move is Lightning Paw (the same as Gatomon).',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const VEGIEMON: Digimon = {
	fieldGuideNumber: 129,
	name: 'Vegiemon',
	stage: Stage.Champion,
	attribute: Attribute.Plant,
	type: DigimonType.Virus,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'A carnivorous plant Digimon with long ivy and a gaping mouth. The sweet aroma emanating from its mouth draws in small Digimon, who are then dragged in by this atrocious Digimon\'s long ivy. Even so, it lacks real attack power, so it can\'t stand up to large Digimon. If a Vegiemon matures, its flowers bloom and bear fruit.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const PECKMON: Digimon = {
	fieldGuideNumber: 130,
	name: 'Peckmon',
	stage: Stage.Champion,
	attribute: Attribute.Wind,
	type: DigimonType.Vaccine,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'A bird Digimon with powerful legs that run faster than it can fly. Its special move Kunai Wing shoots steel feathers from its wings.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const MERAMON: Digimon = {
	fieldGuideNumber: 131,
	name: 'Meramon',
	stage: Stage.Champion,
	attribute: Attribute.Fire,
	type: DigimonType.Data,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'A fire Digimon completely shrouded in flames. A Digimon born from firewalls made to protect against illegal entry on the Internet. Its disposition is as violent as the flames around its body, scorching everything that it touches. Like other species from File Island its firepower is strong, and this Digimon is quite difficult to tame. Even if you\'ve won it over provisionally, it might still turn on you. Its special move Burning Fist flares up both arms and strikes the opponent.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const MONOCHROMON: Digimon = {
	fieldGuideNumber: 132,
	name: 'Monochromon',
	stage: Stage.Champion,
	attribute: Attribute.Earth,
	type: DigimonType.Data,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'An armored dragon Digimon with a rhinoceros like horn growing from its snout. When that massive horn grows, it stands at half of its body length. The hard substance covers its horn and top half is tough like diamond, and they say there is nothing it cannot pierce. Monochromon is said to excel at both offense and defense. Herbivorous and comparatively docile, once it is angered it will unleash fearsome counterattacks with its tank-like body. Its special move Volcanic Strike is a powerful flame projectile.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const FRIGIMON: Digimon = {
	fieldGuideNumber: 133,
	name: 'Frigimon',
	stage: Stage.Champion,
	attribute: Attribute.Water,
	type: DigimonType.Vaccine,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'An ice Digimon wrapped in snow and ice crystals. Its cold appearance belies a gentle and warm personality. Seeing this Digimon\'s deliberate movements and sweet gestures warm your heart, and Frigimon itself does not enjoy combat. It doesn\'t do well with battle crazy Digimon, especially Meramon. Its special move Sub-zero Ice Punch is launched with its massive body.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const UNIMON: Digimon = {
	fieldGuideNumber: 134,
	name: 'Unimon',
	stage: Stage.Champion,
	attribute: Attribute.Wind,
	type: DigimonType.Vaccine,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'A fusion Digimon with the horn of the legendary holy Unicorn and the wings of a Pegasus. The large wings growing from its back let it run around the world of computer networks instantaneously and stab foes with the sharp horn growing from its brow. The wild(?) Unimon is as restless as a runaway horse, but any who tame it can use it like their own limbs. Its special move Holy Shot spews a ball of spirit-filled air from its big mouth.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const RAPTORDRAMON: Digimon = {
	fieldGuideNumber: 135,
	name: 'Raptordramon',
	stage: Stage.Champion,
	attribute: Attribute.Neutral,
	type: DigimonType.Vaccine,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'An android Digimon modded from a wild predator Digimon to ensure it kills its target. It was modded with pure, heavyweight Chrome Digizoid to restrain its sturdy organic body and uncontrollable ferocity. Its incredible explosive power and flying ability stem from its organic body before its remodeling. Although small, it can gradually release its abilities until it can take down even a super large Digimon in a single blow. Its special move Ambush Crunch springs upon enemies with sharp teeth, instantly chomping their vitals.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const RAREMON: Digimon = {
	fieldGuideNumber: 136,
	name: 'Raremon',
	stage: Stage.Champion,
	attribute: Attribute.Earth,
	type: DigimonType.Virus,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'An undead Digimon with a body of rotting muscle. It mechanized its body to extend its life, but said body became unstable, and the data that configured its body began to decay. Still, the life given to it by its mechanization prevents its demise, allowing it to continue living in an unsightly form. Its crumbling body affords neither attack power nor intelligence, so it moves by instinct alone. A stench bad enough to send In-Training Digimon running emits from its body, but it is no enemy for those Digivolved to Champion.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const LEOMON: Digimon = {
	fieldGuideNumber: 137,
	name: 'Leomon',
	stage: Stage.Champion,
	attribute: Attribute.Earth,
	type: DigimonType.Vaccine,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'This beast humanoid Digimon is the king of beasts and a noble hero. Among many frenzied Digimon, it has a strong will and sense of justice, and defeats many villainous Digimon. It\'s also the rival of the avatar of destruction\', the \"Digimon Hunter\" Ogremon. Its brawny muscles are forged through daily training and can withstand any attack. Its ultimate secret, the special move Fist of the Beast King, chokes life out of its foes. It carries a sentient magical sword on its waist called the \"Beast Sword.\"',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const LEKISMON: Digimon = {
	fieldGuideNumber: 138,
	name: 'Lekismon',
	stage: Stage.Champion,
	attribute: Attribute.Water,
	type: DigimonType.Data,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'A beast humanoid Digimon with astounding jumping power that toys with its foes using nimble movement. Elusive as the waning moon\', its appearance is somewhat mystical. Its special moves are Moon Night Bomb, which puts enemies to sleep with hypnotizing foam released from its Moon Gloves, and Moon Night Kick, sending it high into the sky to swoop down and deliver powerful kicks.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const REPPAMON: Digimon = {
	fieldGuideNumber: 139,
	name: 'Reppamon',
	stage: Stage.Champion,
	attribute: Attribute.Light,
	type: DigimonType.Vaccine,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'A mythological Digimon with a blade on its tail. The blade itself has its own will, letting it make surprise attacks from behind. But that will is not mutual, and it is observed arguing with itself in the middle of combat. It prefers fighting in the woods, using its claws and tail to easily run amongst the trees. One needs to take caution when fighting Reppamon in the woods. Its special move Razor Wind charges in a forward somersault.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const WASPMON: Digimon = {
	fieldGuideNumber: 140,
	name: 'Waspmon',
	stage: Stage.Champion,
	attribute: Attribute.Electric,
	type: DigimonType.Virus,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'An android Digimon protecting the mysterious Royal Base in the air. Normally patrols the area using its sensitive feelers on its head to warn of Digimon approaching its base. It will attack any Digimon who do come close. Can quickly move in all directions using its shoulder propellers and stabilizer on its back. Launches a powerful laser cannon to defend against approaching enemies. Its special move is a Turbo Stinger that unleashes a large-caliber laser.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
//#endregion

//#region Ultimate
export const MEGAKABUTERIMON: Digimon = {
	fieldGuideNumber: 141,
	name: 'MegaKabuterimon',
	stage: Stage.Ultimate,
	attribute: Attribute.Plant,
	type: DigimonType.Vaccine,
	memoryUsage: 12,
	equipmentSlots: 2,
	description: 'An evolved Kabuterimon discovered in the tropical net zone. About 1.5x larger than normal and big even among insectoid Digimon. It is the same type as blue MegaKabuterimon and also has a horn as its main weapon, but its horn is dramatically stronger. It is also a significantly better flyer. Further, its forelimbs are muscular and this has improved its fighting potential. It will protect the weak even when not in its own self-interest. Its special move is Horn Buster, piercing the enemy with its huge horn.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const ARCADIAMON_ULTIMATE: Digimon = {
	fieldGuideNumber: 142,
	name: 'Arcadiamon Ultimate',
	stage: Stage.Ultimate,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 14,
	equipmentSlots: 3,
	description: 'A cursed Digimon artificially created from the data of various Digimon. It evolves by absorbing its opponents\' data, but it lacks any sense of self. Details about it are unknown, so it is currently under investigation. Its special move Dot Matrix disintegrates and absorbs its opponent, and Freeze Tentacle freezes its opponents\' data with its tentacle-shaped appendages, halting any biological activity.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const ANTYLAMON: Digimon = {
	fieldGuideNumber: 143,
	name: 'Antylamon',
	stage: Stage.Ultimate,
	attribute: Attribute.Neutral,
	type: DigimonType.Data,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'An Ultimate Digimon who is one of the twelve Deva Digimon who looks like a rabbit. A minion of Azulongmon and one of the four Sovereign Digimon. He has a gentle heart and likes small things. If it feels people aren\'t sensitive to its feeling, its personality changes and its hands change into giant axes, cutting down enemies in one swipe. Its special move is called Bunny Blades, where it becomes a tornado, cutting down enemies in the way with its ax hands.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const ANDROMON: Digimon = {
	fieldGuideNumber: 144,
	name: 'Andromon',
	stage: Stage.Ultimate,
	attribute: Attribute.Electric,
	type: DigimonType.Vaccine,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A cyborg Digimon in the shape of a person. It has battle strength that can knock down Digimon in one blow. The Andromon has been developed as a prototype cyborg Digimon with a mechanical base, while the Boltmon, which was developed at the same time, has an organic, flesh base. This technology has been used in MetalGreymon and Megadramon. Because it is a prototype it doesn\'t have any emotions or will but is loyal to its program commands. The Spiral Sword special move is an energy blade that emerges from its arm.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const METEORMON: Digimon = {
	fieldGuideNumber: 145,
	name: 'Meteormon',
	stage: Stage.Ultimate,
	attribute: Attribute.Earth,
	type: DigimonType.Data,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'Its appearance is due to the meteorite data inside the mineral data that Gotsumon had. It is made of a hard material only found up in space and therefore has great defensive strength. Its special move is called Galactic Flare, where it creates a mysterious energy wave of the cosmos.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const INFERMON: Digimon = {
	fieldGuideNumber: 146,
	name: 'Infermon',
	stage: Stage.Ultimate,
	attribute: Attribute.Dark,
	type: DigimonType.Free,
	memoryUsage: 14,
	equipmentSlots: 3,
	description: 'An Ultimate Digimon that looks like a spider with very long legs that it can also retract into a cocoon. When it is a cocoon it avoids any attacks, increasing its defense, but in this state it can only move forward without turning. Can infiltrate any network no matter how tough the security. If the Infermon is unleashed, it may end in global chaos. Its special move is a Spider Shooter that emits awesome destructive energy from a gun in its mouth.',
	supportSkill: {
		name: 'Destroyer',
		description: '10% chance of instantly killing target when attacking.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const MYOTISMON: Digimon = {
	fieldGuideNumber: 147,
	name: 'Myotismon',
	stage: Stage.Ultimate,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 14,
	equipmentSlots: 3,
	description: 'An undead Digimon king who was revived by dark arts and has obtained a powerful password. It is essentially a malicious computer virus that absorbs data and corrupts it. It has the ability to revive corrupted data as a vicious virus. This Digimon is very cunning and getting rid of it is very difficult. However, in the daytime the strength of its power is halved. Its special move is Night Raid that assaults the enemy with countless bats.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const WINGDRAMON: Digimon = {
	fieldGuideNumber: 148,
	name: 'Wingdramon',
	stage: Stage.Ultimate,
	attribute: Attribute.Wind,
	type: DigimonType.Vaccine,
	memoryUsage: 14,
	equipmentSlots: 3,
	description: 'A sky dragon Digimon that can fly with incredibly developed wings. Its wings have scales that block gravity, letting it soar without flapping them. It rarely lands on the ground, spending most of its life in the sky. It is said to fly faster than Mach 20, and few Digimon can survive an air battle against Wingdramon. Its special move Blaze Sonic Breath fires scorching breath from its mouth at a velocity exceeding the speed of sound.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const BURNINGGREYMON: Digimon = {
	fieldGuideNumber: 149,
	name: 'BurningGreymon',
	stage: Stage.Ultimate,
	attribute: Attribute.Fire,
	type: DigimonType.Free,
	memoryUsage: 14,
	equipmentSlots: 3,
	description: 'A Digimon with the power of flame bearing the might of a legendary warrior. Its heat resistant skin lets this firefighter walk through lava, and it can snuff out fires with instant, explosive flames. Said to come from data on active volcano research, some say it contains an immeasurable, unknown energy. The name Vritra, nemesis to thunder god Indra of Indian mythology, reflects its ferocious personality. Its special move Corona Blaster shoots lasers comparable to solar rays from the Rudriya Darpana superweapons on its arms.',
	supportSkill: {
		name: 'Beast Spirit',
		description: 'Increases ATK by 20%, but reduces SPD by 10%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const AEROVEEDRAMON: Digimon = {
	fieldGuideNumber: 150,
	name: 'AeroVeedramon',
	stage: Stage.Ultimate,
	attribute: Attribute.Wind,
	type: DigimonType.Vaccine,
	memoryUsage: 14,
	equipmentSlots: 1,
	description: 'A further Digivolved Veedramon called AeroVeedramon because it can fly through the air. Among the rare Veedramon, it is the only one with proven fighting strength and it has even gone down into legend for it. Not only has it gained wings in its Digivolution, it also has characteristics for battle, making it more offensive and defensive. Its special move is a Dragon Impulse which is a wave in the shape of a dragon.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const ETEMON: Digimon = {
	fieldGuideNumber: 151,
	name: 'Etemon',
	stage: Stage.Ultimate,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A mysterious Digimon that suddenly appeared in the Digital World. It is known as the King of the Digital World with an attack strength to match. It is said that this Digimon operates behind Monzaemon. It wears a Muscle Monkey Suit that can withstand any attack and roams the world fighting when it can. Its special move is Love Serenade, which cuts the enemy\'s heart eliminating their will to fight.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const ANGEWOMON: Digimon = {
	fieldGuideNumber: 152,
	name: 'Angewomon',
	stage: Stage.Ultimate,
	attribute: Attribute.Light,
	type: DigimonType.Vaccine,
	memoryUsage: 14,
	equipmentSlots: 3,
	description: 'A high angel Digimon with the appearance of a beautiful woman. It was promoted to an angel due to its considerably higher-level abilities. Angel Ultimate forms have eight wings and Champion forms have six wings. Angewomon is calm, but will not tolerate wickedness and will not hold back on its attacks. It is said that its soul and power is that of a female goddess in the Digital World. Special move is a powerful, lightning-charged Celestial Arrow called \"Heaven\'s Punishment.\"',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const OKUWAMON: Digimon = {
	fieldGuideNumber: 153,
	name: 'Okuwamon',
	stage: Stage.Ultimate,
	attribute: Attribute.Plant,
	type: DigimonType.Virus,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A Digivolved form of Kuwagamon which is a Kabuterimon-type Digimon. It has greatly enhanced defensive capabilities compared with the Kuwagamon. The search sensitivity of its antennae is improved and the accuracy of its pincers is enhanced. It not only has a survival instinct, but also has an impressive urge to destroy. Its special move is an enhanced form of Scissor Claw called Double Scissor Claw that has the hardness of ten diamonds.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GARUDAMON: Digimon = {
	fieldGuideNumber: 154,
	name: 'Garudamon',
	stage: Stage.Ultimate,
	attribute: Attribute.Fire,
	type: DigimonType.Vaccine,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A bird humanoid Digimon that has large talons and wings with which it can circle high up in the sky. The Garudamon prizes justice and order, and acts as a guardian of the air and earth. It has both high intelligence and fighting strength When the order of the Digital World is violated, it appears from nowhere to correct the source. It has found a great friend in Leomon who holds the same beliefs. Its special move is a super-fast vacuum blade that slices enemies to shreds called Shadow Wing.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const KENDOGARURUMON: Digimon = {
	fieldGuideNumber: 155,
	name: 'KendoGarurumon',
	stage: Stage.Ultimate,
	attribute: Attribute.Light,
	type: DigimonType.Free,
	memoryUsage: 14,
	equipmentSlots: 2,
	description: 'A Digimon with the power of light bearing the might of a legendary warrior. Perhaps due to the fiber optic network it was discovered in, it can move at ultrahigh speed and dodge bullets. It will close in and use sharp claws and fangs to tear apart foes it deems evil. It loathes evil, and its righteous heart befits its idol Garm from Norse mythology. It won\'t follow those with any evil in their heart, but never betrays those it pledges loyalty to. Its special move Speed Star use the wing blades on its back to rip up enemies.',
	supportSkill: {
		name: 'Beast Spirit',
		description: 'Increases ATK by 20%, but reduces SPD by 10%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GIGADRAMON: Digimon = {
	fieldGuideNumber: 156,
	name: 'Gigadramon',
	stage: Stage.Ultimate,
	attribute: Attribute.Wind,
	type: DigimonType.Virus,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A dark dragon Digimon developed at the same time as Megadramon. This is a combat dragon fully armored which exists as a brutal computer virus. Its special move is Genocidal Gears which unleashes infinite organic missiles.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const CATCHMAMEMON: Digimon = {
	fieldGuideNumber: 157,
	name: 'CatchMamemon',
	stage: Stage.Ultimate,
	attribute: Attribute.Electric,
	type: DigimonType.Data,
	memoryUsage: 10,
	equipmentSlots: 3,
	description: 'A mutant Digimon Digivolved from Mamemon after it fused with file management software. It is serious and inflexible in nature, and thinks managing DigiEggs is its mission. It doesn\'t float, instead using its arm parts as legs to walk. Its special move Magic Arm catches Digimon that would harm DigiEggs and changes them into stuffed animals with some strange power. Miracle Bomb turns caught Digimon into bombs when its slots show three 7s. It attacks with said bomb, whose power depends on the strength of the captured Digimon.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const CANNONBEEMON: Digimon = {
	fieldGuideNumber: 158,
	name: 'CannonBeemon',
	stage: Stage.Ultimate,
	attribute: Attribute.Electric,
	type: DigimonType.Virus,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A super-large Digimon that protects the mysterious aerial Royal Base. The aerial base faces threats from all sides so it can unleash a huge barrage from its giant weapon container covering a large area. Against armored enemies, it can use its Nitro Stinger special move to destroy foes with a high-caliber laser.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GROUNDRAMON: Digimon = {
	fieldGuideNumber: 159,
	name: 'Groundramon',
	stage: Stage.Ultimate,
	attribute: Attribute.Earth,
	type: DigimonType.Virus,
	memoryUsage: 14,
	equipmentSlots: 3,
	description: 'An earth dragon Digimon with huge arms growing from its back. Thought to be transformed wings, they can dig through the ground with ease. It usually lurks in tunnels it carved deep underground, and doesn\'t surface often. Also, Groundramon likes living in veins of Huanglong Ore, and the scales covering its body are very likely composed of Huanglong Ore as well. Its personality is quite brutal, and most who meet it lose their lives. Its special move Scrapless Claw crushes enemies in its back arms.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GRAPLEOMON: Digimon = {
	fieldGuideNumber: 160,
	name: 'GrapLeomon',
	stage: Stage.Ultimate,
	attribute: Attribute.Electric,
	type: DigimonType.Vaccine,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A hand-to-hand fighting Digimon which takes in the data of various fighting games and uses this know-how to defeat its opponents. It has super-fast turbines for hands and feet, and these are powered by the Digicore and require a lot of mental strength. GrapLeomon inherits the data of the King of Beasts, Leomon, and so has a strong sense of justice which helps power its turbines. For its special move, The King of Fists, it spins its turbines very fast and swings down.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GRADEMON: Digimon = {
	fieldGuideNumber: 161,
	name: 'Grademon',
	stage: Stage.Ultimate,
	attribute: Attribute.Neutral,
	type: DigimonType.Vaccine,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'This twin-bladed warrior Digimon is called the \"Golden Meteor\" because of the courageous way it cuts into the front lines. It exhibits incredible speed when wielding the Souken Gradalpha blades, but the truth is the twin swords are cursed, forcing their user into a berserker frenzy. Its overall power is wanting, but its sword skill surpasses that of the Royal Knight Crusadermon. Its royal blue cape is a badge of honor, proof of its achievements in battle. Its special move Cross Blade is a swift cross-shaped slicing blow.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const CRESCEMON: Digimon = {
	fieldGuideNumber: 162,
	name: 'Crescemon',
	stage: Stage.Ultimate,
	attribute: Attribute.Water,
	type: DigimonType.Data,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A titan wizard Digimon that uses its flexible body to strike down foes with limber movements. Specializing in elegant combat, its power is said to double under the light of the moon. Its special move Lunatic Dance entrances foes with graceful steps, after which it exploits the opening to slash them with the Nova Luna blades in its hands.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const CYBERDRAMON: Digimon = {
	fieldGuideNumber: 163,
	name: 'Cyberdramon',
	stage: Stage.Ultimate,
	attribute: Attribute.Dark,
	type: DigimonType.Vaccine,
	memoryUsage: 14,
	equipmentSlots: 2,
	description: 'A dragon humanoid Digimon protected with special rubber armor that can resist any attack. If a computer network virus Digimon makes an appearance, this Digimon will appear in an instant to eradicate it. However, it does not operate as part of the justice group \"Virus Busters,\" but instead works alone and its identity is murky. It is not only defensive but also has offensive strength. Its special move called Desolation Claw destroys enemy config data with a vibro-wave and removes surrounding space.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SHAKKOUMON: Digimon = {
	fieldGuideNumber: 164,
	name: 'Shakkoumon',
	stage: Stage.Ultimate,
	attribute: Attribute.Light,
	type: DigimonType.Free,
	memoryUsage: 14,
	equipmentSlots: 3,
	description: 'A mutant Digimon DNA Digivolved from an Ankylomon and Angemon. White wings sprout from its sparkling silver body. People say that it is an angel Digimon that descended from the ancient digital world. Its head and torso can turn 360 degrees, allowing it to attack enemies on all sides. It has no real expression so people perceive different emotions when they look at it. Its special move is Disaster Blaster which is a red ray emitted from its eyes, and apparently the heat of this ray can reach 100,000 degrees.',
	supportSkill: {
		name: 'Justice Genome',
		description: 'Increases damage from Light skills by 15%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const CHERRYMON: Digimon = {
	fieldGuideNumber: 165,
	name: 'Cherrymon',
	stage: Stage.Ultimate,
	attribute: Attribute.Plant,
	type: DigimonType.Virus,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'Cherrymon is a Digivolution of Woodmon with much greater power and intelligence. It is a feared Digimon known as the Lord of the Forest and those Digimon who venture into its territory will never emerge again. It generates mist to hide its body and will use its ivy to lure enemies in and consume them. If you spot an older Woodmon, you should defeat it before it Digivolves into a Cherrymon. Its special move is called Cherry Bomb where it uses the forbidden fruit that grows from its head.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SILPHYMON: Digimon = {
	fieldGuideNumber: 166,
	name: 'Silphymon',
	stage: Stage.Ultimate,
	attribute: Attribute.Wind,
	type: DigimonType.Free,
	memoryUsage: 14,
	equipmentSlots: 3,
	description: 'A beast humanoid Digimon DNA Digivolved of an Aquilamon and a Gatomon. It is strong and it is said that it can jump high into the air. Also, after jumping high up, it spreads its arms wide and can glide back down to earth. It image-processes information it collects from the radars in its ears and displays this on its head mounted display, so it can reliably locate enemies regardless of lighting conditions. Special move is called Top Gun where it projects both arms forward, unleashing energy bullets.',
	supportSkill: {
		name: 'Wind Guardians',
		description: 'Increases damage from Wind skills by 15%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SUPERSTARMON: Digimon = {
	fieldGuideNumber: 167,
	name: 'SuperStarmon',
	stage: Stage.Ultimate,
	attribute: Attribute.Light,
	type: DigimonType.Data,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A mutant Digimon that is the ultimate form of the space warrior, Starmon. It has dressed up in flashy clothes of its own choice and made its debut as a true star. Because of its super stardom, it wears sunglasses to hide its identity, but they don\'t really work... Its special move is Haley Storm where numerous meteorites fall onto the heads of its enemies.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SKULLGREYMON: Digimon = {
	fieldGuideNumber: 168,
	name: 'SkullGreymon',
	stage: Stage.Ultimate,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 14,
	equipmentSlots: 3,
	description: 'A skeleton Digimon made entirely of bones. Obsessed with fighting and has survived on its innate ability in battle while lacking flesh and muscle, turning it into a Greymon. SkullGreymon only has fighting instinct, lacks intelligence, and is very menacing. Its special move is a barrage of organic missiles from its spine. Recent research has achieved Digivolution of the Oblivion Bird which is an improvement of these missiles including a tracking system and better power and scope.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SKULLSATAMON: Digimon = {
	fieldGuideNumber: 169,
	name: 'SkullSatamon',
	stage: Stage.Ultimate,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'This dark angel Digimon fell into the Dark Area in the pursuit of strength and destruction, its appearance a shade of what it once was. But its evil was even more refined, and now its dark powers are unfathomable. Its DigiCore condensing such mighty dark power is called a Dark Core, and is unique to demon type Digimon. Its special move Nail Bone is a fearsome technique, emitting powerful light from the jewel on the tip of its staff to cause abnormalities in a Digimon\'s data and destroy it.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const ZUDOMON: Digimon = {
	fieldGuideNumber: 170,
	name: 'Zudomon',
	stage: Stage.Ultimate,
	attribute: Attribute.Water,
	type: DigimonType.Vaccine,
	memoryUsage: 12,
	equipmentSlots: 2,
	description: 'A power Digimon Digivolved from Ikkakumon which can walk on two legs. Its well-trained muscles are further protected by armor made from skin and shells taken from fallen opponents. The horn on its head cannot regenerate so instead it has carved it into a saw shape. However, its real weapon is its Chrome Digizoid Thunder Hammer dug from ancient ice. Its special move is Vulcan\'s Hammer which hits the enemy with a shock wave and sparks created by swinging the Thunder Hammer down.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SAVIORHUCKMON: Digimon = {
	fieldGuideNumber: 171,
	name: 'SaviorHuckmon',
	stage: Stage.Ultimate,
	attribute: Attribute.Fire,
	type: DigimonType.Data,
	memoryUsage: 14,
	equipmentSlots: 3,
	description: 'A form Digivolved from repeated meetings and farewells with Digimon over a long journey through many battlefields. It intervenes in Digital World conflict, wishing for an end to battles and saving Digimon caught in the crossfire. It walks on two legs despite having blades for feet, and boasts an aggressive, full-body bladed style. Its chest crystal is proof of the power it honed with great effort. It uses the three crimson blades on its arms and tail for Trident Saber, cutting down even enemies clad in Chrome Digizoid.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const TAOMON: Digimon = {
	fieldGuideNumber: 172,
	name: 'Taomon',
	stage: Stage.Ultimate,
	attribute: Attribute.Dark,
	type: DigimonType.Data,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A Taoist Digimon that uses all the skills of faith to defeat opponents. It is particularly talented at curses and charms. It also keeps a number of dark implements hidden on its body. This Digimon doesn\'t say much and resides in the dark. It can also change charms into djinnis. Its special move is called Talisman of Light where it throws the enemy up into the air with a huge brush while chanting a curse. Victims of this move will be destroyed in a huge explosion.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const DRAGOMON: Digimon = {
	fieldGuideNumber: 173,
	name: 'Dragomon',
	stage: Stage.Ultimate,
	attribute: Attribute.Water,
	type: DigimonType.Virus,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'An evil god Digimon known as the Depraved Priest of the Deep. They say it evolved from a computer virus that would infect ship computers, sending their bearing and routes off-course. It bundles its countless tentacles into a humanoid shape, but in truth it is a strange evolution of a mollusk Digimon. Its special move Forbidden Trident throws its three-pronged pike with tremendous strength. It puts a rosary around its neck and poses for defeated foes, as if holding a memorial service for them.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const CHIRINMON: Digimon = {
	fieldGuideNumber: 174,
	name: 'Chirinmon',
	stage: Stage.Ultimate,
	attribute: Attribute.Light,
	type: DigimonType.Vaccine,
	memoryUsage: 14,
	equipmentSlots: 3,
	description: 'An ancient Digimon said to have been around since the creation of the Digital World. It is a holy beast Digimon that can boast the strength of an Ultimate while being only a Mega. However, it apparently hates fighting and has never killed. It has sympathy for all things of the Digital World and it doesn\'t look kindly on those who kill without good reason. Its special move is Wind Cutter Sword where it descends from the sky and cuts through its enemy.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const DINOBEEMON: Digimon = {
	fieldGuideNumber: 175,
	name: 'Dinobeemon',
	stage: Stage.Ultimate,
	attribute: Attribute.Plant,
	type: DigimonType.Free,
	memoryUsage: 14,
	equipmentSlots: 3,
	description: 'A mutant Digimon DNA Digivolved from Stingmon and ExVeemon. A chimera of dragon and insect, this Digimon is nicknamed the Dreadful Bee. Its hard to classify as a dragon or insectoid Digimon, but its insect nature is more pronounced. It uses four wings to fly, perceiving the enemy with compound eyes and choking the life out of them with certainty. Dinobeemon also has a pretty brutal personality. Its special move Hell Masquerade chops up enemies at a speed that leaves afterimages.',
	supportSkill: {
		name: 'Backwater Camp',
		description: 'Increases damage given by 20%, but also increases damage received by 20%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const DIGITAMAMON: Digimon = {
	fieldGuideNumber: 176,
	name: 'Digitamamon',
	stage: Stage.Ultimate,
	attribute: Attribute.Neutral,
	type: DigimonType.Data,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A Mega Digimon that has the appearance of a DigiEgg--how all Digimon start and end. Digitamamon has reached the peak of Digivolution but it cannot be Digivolved from other Digimon but is apparently the fusion of data. It is protected by an exoskeleton in shape of an egg that can nullify all attacks. Its special move is Nightmare Syndrome which is a big sphere of darkness.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SKULLMERAMON: Digimon = {
	fieldGuideNumber: 177,
	name: 'SkullMeramon',
	stage: Stage.Ultimate,
	attribute: Attribute.Fire,
	type: DigimonType.Data,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A Digivolution of a Meramon. Its body is surrounded by intensely hot flames. Because the heat of its flames is more intense than Meramon, the licking flames have taken on a blue color. Both its attack and defense strength are improved and with the intense destructive force of its flames it is a tough Digimon. Fire Digimon are weak to water and ice, but in the face of its flames water and ice just evaporate. Its special move is Heavy Metal Fire which hits the enemy with flames from molten metal.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const DURAMON: Digimon = {
	fieldGuideNumber: 178,
	name: 'Duramon',
	stage: Stage.Ultimate,
	attribute: Attribute.Neutral,
	type: DigimonType.Vaccine,
	memoryUsage: 14,
	equipmentSlots: 3,
	description: 'An Ultimate Digimon that advanced bit by bit into another world as it continued to run. It knows not what future awaits it, but no matter what hardships come its way it will cut through it with the sword it strengthened through repeated training. When the greatsword on its back changes into a weapon, it exhibits unequalled offensive power. Its special move Glass Rush cuts enemies with its two blades, and Blinded shoots a beam from its chest that carves a \"20\" into any enemy it hits, causing heavy damage.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SHOGUNGEKOMON: Digimon = {
	fieldGuideNumber: 179,
	name: 'ShogunGekomon',
	stage: Stage.Ultimate,
	attribute: Attribute.Water,
	type: DigimonType.Virus,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'This is the Gekomon upgrade with a horn that looks like a top knot. It is said that it was first created in a karaoke machine\'s scoring system. It has two horns on its shoulders that play a melody, and it can sing several levels lower than Gekomon. It uses its vocal chords and horns to create an ultra-low frequency wave to corrupt the data of the enemy in a special move called Musical Fist. However, it seems that some opponents are resilient to this.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const TRICERAMON: Digimon = {
	fieldGuideNumber: 180,
	name: 'Triceramon',
	stage: Stage.Ultimate,
	attribute: Attribute.Earth,
	type: DigimonType.Data,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A bipedal horned dragon Digimon, with the form of a triceratops and power competing with the strongest of herbivorous dinosaur types. The toughness of its skin is top class among organic type Digimon, and its two ultra-hard horns are more solid than Monochromon. It is gentle by nature, but its charging attack belies its usual sluggish movements, full of power capable of destroying even the sturdy bodies of mineral Digimon. Its special move Tri-Horn Attack charges into enemies with the horns on its forehead and snout.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const DORUGREYMON: Digimon = {
	fieldGuideNumber: 181,
	name: 'DoruGreymon',
	stage: Stage.Ultimate,
	attribute: Attribute.Fire,
	type: DigimonType.Data,
	memoryUsage: 14,
	equipmentSlots: 3,
	description: 'A super-sized beast dragon Digimon known as the ultimate enemy. It has unleashed a powerful life force of the mythical dragon that slumbers deep within the DigiCore. It uses its impressive body to pulverize valiant Digimon. It can even beat off the attacks of Nightmare Soldiers with ease. It is highly intelligent but rarely appears. Special move is called Metal Meteor where it destroys the enemy with an iron ball with a super mass much greater than its size.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const KNIGHTMON: Digimon = {
	fieldGuideNumber: 182,
	name: 'Knightmon',
	stage: Stage.Ultimate,
	attribute: Attribute.Neutral,
	type: DigimonType.Data,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A giant warrior Digimon with body armor made of Chrome Digizoid. Despite the heavy nature of its armor, it can wield its beloved sword with ease. One theory is that it wears such substantial armor to control its awesome power. Knightmon\'s existence is founded on loyal service. It labors for justice or wickedness, adopting the attributes of its master as its own faith. Its special move is called Berserk Sword, where it slices its enemy with a frantic swing of its blade.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const DATAMON: Digimon = {
	fieldGuideNumber: 183,
	name: 'Datamon',
	stage: Stage.Ultimate,
	attribute: Attribute.Electric,
	type: DigimonType.Virus,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A super-mini healing machine Digimon. This Digimon originally was a vaccine-type for repairing crashed computers, but after being attacked by a strong virus-type Digimon, its thought processing circuits have corrupted and it has gone rogue. It will try to rebuild the data of correctly functioning computers (badly). Its forte is destroying all data and no matter how strong the Digimon, Datamon will easily destroy the data which comprises its body. Its special move is a Digital Bomb it shoots from its fingertips.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const PAILDRAMON: Digimon = {
	fieldGuideNumber: 184,
	name: 'Paildramon',
	stage: Stage.Ultimate,
	attribute: Attribute.Neutral,
	type: DigimonType.Free,
	memoryUsage: 14,
	equipmentSlots: 3,
	description: 'A dragon humanoid Digimon DNA Digivolved from an ExVeemon and a Stingmon. It retains many elements of dragon types with the power of a dragon and the iron-wall defense of an insect type. Its real advantages are agility and quick moves against opponents. It is very loyal and will unquestioningly lay down its life. Its special move is an energy wave called Death Parade Blaster fired from two biological cannons on its waist.',
	supportSkill: {
		name: 'Backwater Camp',
		description: 'Increases damage given by 20%, but also increases damage received by 20%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const PANJYAMON: Digimon = {
	fieldGuideNumber: 185,
	name: 'Panjyamon',
	stage: Stage.Ultimate,
	attribute: Attribute.Water,
	type: DigimonType.Vaccine,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A beast humanoid Digimon with a strong sense of justice. They are digivolved from Leomon who have spent days training to uphold what is right and have gained the power of the cold by being in the polar areas of the Digital World. Their will and bodies have been strengthened by the freezing cold and no attack can crush them. Their special move is a freezing punch called Fist of Ice.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const PANDAMON: Digimon = {
	fieldGuideNumber: 186,
	name: 'Pandamon',
	stage: Stage.Ultimate,
	attribute: Attribute.Earth,
	type: DigimonType.Data,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A puppet Digimon shaped like a panda. It is expressionless, apathetic and brusque, displaying absolutely no charm. It considers itself a lone wolf, but is secretly envious of another popular Digimon with a similar look, Monzaemon. Still, it possesses considerable power, smacking down any foe that would take a swing at it. There are very few of these in the world, so they are rarely seen. Its special move Animal Nail attacks with the claws hidden inside its hands.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const PUMPKINMON: Digimon = {
	fieldGuideNumber: 187,
	name: 'Pumpkinmon',
	stage: Stage.Ultimate,
	attribute: Attribute.Earth,
	type: DigimonType.Data,
	memoryUsage: 10,
	equipmentSlots: 3,
	description: 'A stuffed toy Digimon with a pumpkin head. There is an urban legend that says Pumpkinmon is a virus that mutated on Halloween. It is not a malicious virus, so it doesn\'t do harm, but its appearance hides a powerful attack. Its cute face doesn\'t betray emotion--a characteristic of puppet-type Digimon. For its special move it creates a pumpkin from nowhere to crush the enemy. This move is known as Trick or Treat.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const PIXIMON: Digimon = {
	fieldGuideNumber: 188,
	name: 'Piximon',
	stage: Stage.Ultimate,
	attribute: Attribute.Light,
	type: DigimonType.Data,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A fairy Digimon that can use magic. It chants an advanced programming language from another dimension to make miracles happen. This mysterious Digimon can appear at any time and any place from thin air. Its body is small but it has the ability to seal the skills of its opponent and crush them with a powerful blow. It likes playing pranks and using its favorite spear called \"Fairy Tale\" on computers (although it doesn\'t wish harm). Its special move is a condensed computer virus called Pit Bomb.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const HIPPOGRYPHONMON: Digimon = {
	fieldGuideNumber: 189,
	name: 'HippoGryphonmon',
	stage: Stage.Ultimate,
	attribute: Attribute.Wind,
	type: DigimonType.Data,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A mythical beast Digimon with the appearance of a chimera. It is said to Digivolve into Gryphonmon, but the full details of this process is unknown. It is less intelligent than Gryphonmon, with a more feral and ferocious nature. Its special move Heat Wave shoots extremely hot wind from its mouth.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const PHANTOMON: Digimon = {
	fieldGuideNumber: 190,
	name: 'Phantomon',
	stage: Stage.Ultimate,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A reaper-like Digimon with a giant sickle and chain. Unlike Bakemon this is a top-tier ghost Digimon, and those possessed by Phantomon meet a grisly end. Like Mammothmon\'s crest, the eyeball-shaped crystal dangling from its neck sees all through the power of clairvoyance, letting it see those close to death. They say the inner side of the cloth covering its body leads to a Digital World in another dimension. Its special move Soul Chopper cleaves an enemy\'s soul with its giant chain sickle, extinguishing its light.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const BLACKKINGNUMEMON: Digimon = {
	fieldGuideNumber: 191,
	name: 'BlackKingNumemon',
	stage: Stage.Ultimate,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 10,
	equipmentSlots: 3,
	description: 'A mollusk Digimon which has established its position as king of the dark trash data world. Its special move is Dark Pupil.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const BLUEMERAMON: Digimon = {
	fieldGuideNumber: 192,
	name: 'BlueMeramon',
	stage: Stage.Ultimate,
	attribute: Attribute.Fire,
	type: DigimonType.Virus,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A fire Digimon which burns with an even greater intensity than a Champion Meramon. Its special move is Ice Phantom, which burns the enemy with freezing air.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const VADEMON: Digimon = {
	fieldGuideNumber: 193,
	name: 'Vademon',
	stage: Stage.Ultimate,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 10,
	equipmentSlots: 3,
	description: 'An alien Digimon that looks like it came from the furthest reaches of space. However, it is rumored that it was born from the plant of a fruit. Despite its over-sized head and octopus legs, it has terrifying attack. The Abduction Beam it can fire from its laser gun is deterrent enough, but it also has a special move called Unidentified Flying Kiss that makes a total fool out of its enemy.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const WHAMON: Digimon = {
	fieldGuideNumber: 194,
	name: 'Whamon',
	stage: Stage.Ultimate,
	attribute: Attribute.Water,
	type: DigimonType.Vaccine,
	memoryUsage: 12,
	equipmentSlots: 2,
	description: 'A huge Digimon that lurks in the deep sea of the net, representing the greatest class of giant Digimon in the Digital World. Its sheer size means it cannot be processed by ordinary computers because of all its data. It is possible to confirm similar species in the area of File Island, but Whamon, which inhabits the coast of the Folder Continent, has exceeded the attack and life force of its kin and digivolved to an Ultimate form. It uses Tidal Wave as its special move, which is a destructive tsunami attack.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const MAGNAANGEMON: Digimon = {
	fieldGuideNumber: 195,
	name: 'MagnaAngemon',
	stage: Stage.Ultimate,
	attribute: Attribute.Light,
	type: DigimonType.Vaccine,
	memoryUsage: 14,
	equipmentSlots: 3,
	description: 'A high angel Digimon with eight sparkling silver wings. MagnaAngemon\'s job in the Digital World is law enforcement, and it supervises most of the other high angel Digimon. It speaks for the light that protects the order of the Digital World, and thus normally takes the appearance of a priest, but when the Digital World is shrouded in dark, it changes into battle mode to fight evil with unique weapons. Its special move is called Heaven\'s Gate. It sends enemies through a door of no return.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const VOLCANOMON: Digimon = {
	fieldGuideNumber: 196,
	name: 'Volcanomon',
	stage: Stage.Ultimate,
	attribute: Attribute.Fire,
	type: DigimonType.Data,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'An android Digimon with a huge, powerful body. The volcano on its back erupts when its anger peaks and its tension voltage exceeds its limits, hence the name Volcanomon. Its booming voice shakes heaven and earth, and it shares a friendly rivalry with Etemon. Its special moves are Big Bang Voice, which dazzles enemies with an ultra deep bass mic performance, and Big Bang Tackle, a fierce blow capable of destroying mountains.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const MATADORMON: Digimon = {
	fieldGuideNumber: 197,
	name: 'Matadormon',
	stage: Stage.Ultimate,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A blood-sucking martial artist Digimon that performs a magnificent dance. Born from a museum\'s folk dance database, it is a master of the unique Bulldog dance. Its fluttering garments trick its enemies, and it attacks those made careless by its gentle folds with the rapiers in both sleeves. It needs to suck Digimon blood to survive, but apparently only drinks from strong Digimon, wandering from land to land towards that end. Its special move Earth-Shattering Stomp is a strong kick technique using its unique fighting style.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const MACHGAOGAMON: Digimon = {
	fieldGuideNumber: 198,
	name: 'MachGaogamon',
	stage: Stage.Ultimate,
	attribute: Attribute.Wind,
	type: DigimonType.Data,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'An android Digimon which has a robot engine with impressive propulsion force. Its flight duration is short, but its specializes in massive hit-and-run instantaneous attacks. Its special move is Winning Knuckle which is a single strike with amazing power.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const MAMEMON: Digimon = {
	fieldGuideNumber: 199,
	name: 'Mamemon',
	stage: Stage.Ultimate,
	attribute: Attribute.Earth,
	type: DigimonType.Data,
	memoryUsage: 10,
	equipmentSlots: 3,
	description: 'A mutant Digimon Digivolved in a cruel environment. It looks cute on the outside but this hides a terrifying destructive power. Apart from one other Digimon, it may be the most powerful species. Its gigantic hands on its small body are detachable and can become powerful bombs. Its nickname is Smile Bomber.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const MEGASEADRAMON: Digimon = {
	fieldGuideNumber: 200,
	name: 'MegaSeadramon',
	stage: Stage.Ultimate,
	attribute: Attribute.Water,
	type: DigimonType.Data,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A Seadramon species that has survived in the harsh climate of the Folder Continent and has Digivolved to survive in the Digital World where it is survival of the fittest. Its body is bigger and the shell covering its head is tougher, and has lightning-shaped blades. It has higher intelligence than Seadramon types, chasing its prey with the persistence of a locked-on torpedo. For its special move it uses Lightning Javelin, which shoots a lightning strike from its head, and it has a generator for this.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const MEGADRAMON: Digimon = {
	fieldGuideNumber: 201,
	name: 'Megadramon',
	stage: Stage.Ultimate,
	attribute: Attribute.Wind,
	type: DigimonType.Virus,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A dark dragon that can boast to be the most powerful and evil among the Ultimate dragon cyborg Digimon. It has been artificially remodeled by someone and programmed to destroy everything. It\'s very existence can be considered a computer virus by the way it easily infiltrates secure computer networks, destroying or rebuilding the host computer with no obstacles. Special move is multiple organic missiles fired from its arms called Genocide Attack.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const WARGROWLMON: Digimon = {
	fieldGuideNumber: 202,
	name: 'WarGrowlmon',
	stage: Stage.Ultimate,
	attribute: Attribute.Fire,
	type: DigimonType.Virus,
	memoryUsage: 14,
	equipmentSlots: 3,
	description: 'An Ultimate android Digimon known as a \"Giant Growlmon.\" As its name suggests, it\'s super large with half of its body made of powerful Chrome Digizoid. The two thrusters on its shoulders allow it to fly and engage in both aerial and ground attacks. Restraints on its jaw control its immense power, and an Assault Balancer extending from its back can stretch and pierce the enemy. Its Atomic Blaster special move is an atomic attack launched from its chest.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const METALGREYMON: Digimon = {
	fieldGuideNumber: 203,
	name: 'MetalGreymon',
	stage: Stage.Ultimate,
	attribute: Attribute.Fire,
	type: DigimonType.Vaccine,
	memoryUsage: 14,
	equipmentSlots: 2,
	description: 'An android Digimon which has over half of its body mechanized. Remodeling has allowed MetalGreymon of File Island to greatly extend its life, but the flesh parts have suffered and turned blue. An Ultimate MetalGreymon is a successful Digivolution from a Greymon and is a very powerful android Digimon. Also, MetalGreymon\'s attack is comparable to a warhead, leaving no trace behind of low level Digimon. Its special move is called Giga Destroyer, which is an organic missile attack that emerges from a chest hatch.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const METALGREYMON_BLUE: Digimon = {
	fieldGuideNumber: 204,
	name: 'MetalGreymon (Blue)',
	stage: Stage.Ultimate,
	attribute: Attribute.Fire,
	type: DigimonType.Virus,
	memoryUsage: 14,
	equipmentSlots: 2,
	description: 'The strongest android Digimon. Over half its body is machine. Through battle after battle, it has survived because of its cyborg body. To even have Digivolved into MetalGreymon, it must have defeated many strong enemies. The attack power of MetalGreymon is said to be comparable to a nuclear warhead. It can launch missiles from a hatch in its chest.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const METALTYRANNOMON: Digimon = {
	fieldGuideNumber: 205,
	name: 'MetalTyrannomon',
	stage: Stage.Ultimate,
	attribute: Attribute.Electric,
	type: DigimonType.Virus,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'An android Digimon that was created to hold great power within its body. MetalTyrannomon is a continuation of the aerial Megadramon, and has been remodeled as a ground interception model. Its enhanced body has impressive attack power, repelling any attack and chewing through the strongest armor with its powerful jaw. Its special move is a Nuclear Laser which it fires from its left arm.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const METALMAMEMON: Digimon = {
	fieldGuideNumber: 206,
	name: 'MetalMamemon',
	stage: Stage.Ultimate,
	attribute: Attribute.Electric,
	type: DigimonType.Data,
	memoryUsage: 10,
	equipmentSlots: 3,
	description: 'An android Digimon which is a Digivolved Mamemon (\"Smile Bomber\") and is even stronger. Just as its previous version, one may be deceived by its cute appearance. 90% of its body is machine, and its special move is called Energy Bomb which it fires from the Psycho Blaster equipped to its left arm. This special move has terrifying destructive power that can reliably kill foes.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const MONZAEMON: Digimon = {
	fieldGuideNumber: 207,
	name: 'Monzaemon',
	stage: Stage.Ultimate,
	attribute: Attribute.Neutral,
	type: DigimonType.Vaccine,
	memoryUsage: 12,
	equipmentSlots: 2,
	description: 'Everything about this Digimon is shrouded in mystery. It looks like a teddy bear, but it\'s rumored that there is actually someone inside it because of the zipper on its back. It surrounds its enemy with love that oozes from its adorable body (although it has scary eyes). Special move is Hearts Attack which is exactly that--flying hearts.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const CROWMON: Digimon = {
	fieldGuideNumber: 208,
	name: 'Crowmon',
	stage: Stage.Ultimate,
	attribute: Attribute.Wind,
	type: DigimonType.Vaccine,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A mutated mysterious bird Digimon with three legs. To look at, its dark body seems evil, but this is the Digimon of legend who will lead the chosen ones to the El Dorado that lies in the East of the Digital World. Its special move is Savage Emperor and shoots energy forward. Digimon who fall victim to this skill will have their digital cells broken down into binary zeros and ones.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const RIZEGREYMON: Digimon = {
	fieldGuideNumber: 209,
	name: 'RizeGreymon',
	stage: Stage.Ultimate,
	attribute: Attribute.Fire,
	type: DigimonType.Vaccine,
	memoryUsage: 14,
	equipmentSlots: 3,
	description: 'An android Digimon which has over half of its body mechanized. Regardless of its huge size, it can soar in order to punish its enemies. The attack power of the giant revolver on its left arm can annihilate the foe in one shot. It\'s not usually possible to fire due to recoil and power. The only thing that can withstand such strength is Chrome Digizoid. Its special move, Trident Revolver, is high velocity shots (three bursts) at the durability limit of Chrome Digizoid.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const LILAMON: Digimon = {
	fieldGuideNumber: 210,
	name: 'Lilamon',
	stage: Stage.Ultimate,
	attribute: Attribute.Plant,
	type: DigimonType.Data,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A pixie Digimon with the appearance of an adorable, lilac flower. It is innocent and naive and despite its beautiful looks, it is said to be responsible for rebirth and death. Its leaves are poisonous, proving fatal to enemies. Its special move is called Lila Shower and unleashes numerous small beams from its leaf-like hands.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const RAPIDMON: Digimon = {
	fieldGuideNumber: 211,
	name: 'Rapidmon',
	stage: Stage.Ultimate,
	attribute: Attribute.Electric,
	type: DigimonType.Vaccine,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'An android Digimon Digivolved from Gargomon. It has the name \"Agile Hound\" as it can kill its foe with lightning quick speed. Also, its giant ear radar can detect movement even in the dark, sensing enemies from a distance. Its profile looks like a pruned poodle and in battle it has a neck protector. Its special move is a Golden Triangle that unleashes a ray which analyzes the data of enemies.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const LILLYMON: Digimon = {
	fieldGuideNumber: 212,
	name: 'Lillymon',
	stage: Stage.Ultimate,
	attribute: Attribute.Plant,
	type: DigimonType.Data,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A pixie Digimon born from a beautiful petal. At first glance it looks like a small child, but it is in fact an Ultimate Digimon with immeasurable power. With its tomboyish nature it is said that girls with a similar attitude empathize with it. It can be a crybaby and good taming is necessary. However, it can show mercy to the weak. It has four leafy wings on its back that allow it to fly, leaving a fresh breeze in its wake. For its special move known as Flower Cannon, its petal hands become guns to shoot energy.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const LUCEMON_FM: Digimon = {
	fieldGuideNumber: 213,
	name: 'Lucemon FM',
	stage: Stage.Ultimate,
	attribute: Attribute.Neutral,
	type: DigimonType.Virus,
	memoryUsage: 22,
	equipmentSlots: 2,
	description: 'An evil king Digimon both holy and evil, and the strongest of the Seven Deadly Digimon. In an ancient rebellion, it was sealed away in a Dark Area with many other evil king Digimon. Its power is greater than that of an Ultimate and is almost godlike. While it cherishes all living things, it also has another side that wants to annihilate this world and build a new one from the rubble. Its special move is sealing enemies away in a bubble of holy darkness called Dead or Alive.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const LADYDEVIMON: Digimon = {
	fieldGuideNumber: 214,
	name: 'LadyDevimon',
	stage: Stage.Ultimate,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 14,
	equipmentSlots: 3,
	description: 'A female fallen angel Digimon with noble dignity. It has unrivaled strength and pure dark-side power, and almost none have grown up on a private server. Its special move called Darkness Wave unleashes a myriad of dark and bat-like creatures that burn its enemies.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const WEREGARURUMON: Digimon = {
	fieldGuideNumber: 215,
	name: 'WereGarurumon',
	stage: Stage.Ultimate,
	attribute: Attribute.Earth,
	type: DigimonType.Vaccine,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A beast humanoid Digimon Digivolution of a Garurumon that can now walk on two legs. By being bipedal, it has lost speed, but it has gained powerful attack and defense capabilities as a command-type Digimon. Inheriting the leg strength of the Garurumon, it has one of the best jumps in the Digimon world. It is also very loyal and will do anything if ordered by its master, making it very reliable. Its special move is Wolf Claw, by which it slices enemies to shreds with its hands.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const WEREGARURUMON_BLK: Digimon = {
	fieldGuideNumber: 216,
	name: 'WereGarurumon (Blk)',
	stage: Stage.Ultimate,
	attribute: Attribute.Earth,
	type: DigimonType.Virus,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'A Digimon evolved from a virus-type Garurumon. Because this Digimon has two feet, it is slower, but it makes up for this by using its arms to deliver powerful attacks.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const WISEMON: Digimon = {
	fieldGuideNumber: 217,
	name: 'Wisemon',
	stage: Stage.Ultimate,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 12,
	equipmentSlots: 3,
	description: 'Everything about this Digimon is shrouded in mystery, and it can appear in any time and any place through its book. Using the book, it can change its appearance in the spacetime to which the book is connected. Some have supposed that its real form exists in another dimension. Researchers wonder if it is related to Piedmon. The temporal stones that it carries in its hands can store any event or image of the Digital World. Its special move is called Pandora Dialogue, where it replays an attack it has recorded.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
//#endregion

//#region Mega
export const ARCADIAMON_MEGA: Digimon = {
	fieldGuideNumber: 218,
	name: 'Arcadiamon Mega',
	stage: Stage.Mega,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'A cursed Digimon artificially created from the data of various Digimon. It evolves by absorbing its opponents\' data, but it lacks any sense of self. Details about it are unknown, so it is currently under investigation, but Arcadiamon\'s existence is the greatest menace to the Digital World, and must not come into being. Its special move Dot Matrix disintegrates and absorbs its opponent, and Exile Spear is a wicked attack that forcefully banishes an opponent\'s data, purging it from the Digital World.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const ALPHAMON: Digimon = {
	fieldGuideNumber: 219,
	name: 'Alphamon',
	stage: Stage.Mega,
	attribute: Attribute.Neutral,
	type: DigimonType.Vaccine,
	memoryUsage: 22,
	equipmentSlots: 1,
	description: 'A member of the Royal Knights. Despite being a knight, this Digimon is a counter to them, and normally it does not show itself. With its blue mantle, it is called the Aloof Hermit and occupies the Empty Seat in the Royal Knights. It possesses the ultimate ability called Alpha inForce which instantly replays what happened in battle. Its special moves are Excalibur Gradalpha that draws light from a magic circle, piercing the enemy and Soul Digitalization where it creates a huge magic circle to summon a mythic monster.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const ULFORCEVEEDRAMON: Digimon = {
	fieldGuideNumber: 220,
	name: 'UlforceVeedramon',
	stage: Stage.Mega,
	attribute: Attribute.Wind,
	type: DigimonType.Vaccine,
	memoryUsage: 22,
	equipmentSlots: 1,
	description: 'A legendary knight Digimon that has been prophesized in ancient legends of the Digital World. In the prophecy, Digimon called the Royal Knights are said to assemble during the Digital World\'s greatest crisis. UlforceVeedramon has the greatest speed of the Royal Knights and is unbeaten. It wears V-Bracelets on its wrists and wears armor made of a rare metal called Blue Digizoid, allowing it to cleave both sky and earth. Its special move is called The Ray of Victory and shoots a beam from the V in its chest.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const EBEMON: Digimon = {
	fieldGuideNumber: 221,
	name: 'Ebemon',
	stage: Stage.Mega,
	attribute: Attribute.Electric,
	type: DigimonType.Virus,
	memoryUsage: 16,
	equipmentSlots: 3,
	description: 'An android Digimon artificially created from analyses and improvements of data obtained and configured from a Vademon. It is said that a country is researching and developing Digimon in secret to gain control of the Digital World, and in their facilities known as Area 51, they apply extraterrestrial technology, but the real truth is shrouded in mystery. Its special move is known as Brain Rupture, where it uses a gun in its left hand to introduce a special program into its enemy\'s brain and absorb the stored data.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const IMPERIALDRAMON_DM: Digimon = {
	fieldGuideNumber: 222,
	name: 'Imperialdramon DM',
	stage: Stage.Mega,
	attribute: Attribute.Fire,
	type: DigimonType.Free,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'A mega-type ancient dragon Digimon, which has existed since ancient times. It is clearly distinguishable from other Digimon. The Imperialdramon is called a dragon while in dragon mode, but it also has a dragon humanoid (fighter) mode that has never actually been seen. Its awesome strength is extremely difficult to control and it has the potential to either save or end the world. Its special move is dark matter that swallows everything called Megadeath, and can completely wipe out anything within range.',
	supportSkill: {
		name: 'Dragon Mode',
		description: 'Increases DEF and INT by 10%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const IMPERIALDRAMON_FM: Digimon = {
	fieldGuideNumber: 223,
	name: 'Imperialdramon FM',
	stage: Stage.Mega,
	attribute: Attribute.Neutral,
	type: DigimonType.Free,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'The transformation of the ancient dragon Digimon Imperialdramon (dragon mode) into a legendary warrior (fighter mode). By becoming humanoid from its unwieldy dragon mode, it has become a powerful demon with high intelligence. Its attack is said to have the power to destroy a planet. Special move Giga Crusher is a Positron Laser in its chest that unleashes a destructive energy wave with all the energy stored in its body in an attack 10x as powerful than Megadeath. A more powerful mode is also rumored.',
	supportSkill: {
		name: 'Fighter Mode',
		description: 'Increases ATK and SPD by 10%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const VIKEMON: Digimon = {
	fieldGuideNumber: 224,
	name: 'Vikemon',
	stage: Stage.Mega,
	attribute: Attribute.Water,
	type: DigimonType.Free,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'A beast humanoid Digimon that governs the never-thawing permafrost. Its fur has become ice crystal and is said to be as hard as Chrome Digizoid. It has a morning star on its back called Mjolnir that level a mountain with a single swing, distorting spacetime itself. It manages the Ikkakumon and Zudomon troops and in a fight it is merciless, but it still shows compassion for its students. Its special move is called Arctic Blizzard and freezes the surrounding area. It then uses Mjolnir to shatter the enemy.',
	supportSkill: {
		name: 'Deep Savers',
		description: 'Increases damage from Water skills by 15%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const VALKYRIMON: Digimon = {
	fieldGuideNumber: 225,
	name: 'Valkyrimon',
	stage: Stage.Mega,
	attribute: Attribute.Wind,
	type: DigimonType.Free,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'A warrior Digimon that appears in Norse mythology. The golden bird Freyr stays with it, and warns of approaching danger. Its shining armor releases an aura that restores data of fallen heroes, regenerating them as new DigiEggs. It appears like a storm, using its impossible speed to cut down its foes. Its special move is Fenrir Sword, a cursed sword that freezes any opponent it cuts to absolute zero, halting any biological activity.',
	supportSkill: {
		name: 'Freyr',
		description: 'Increases damage from Wind and Light skills by 10%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const VARODURUMON: Digimon = {
	fieldGuideNumber: 226,
	name: 'Varodurumon',
	stage: Stage.Mega,
	attribute: Attribute.Light,
	type: DigimonType.Vaccine,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'An elusive holy bird Digimon living 40,000 m up in the stratosphere. It has six massive wings, the largest of which give it a 3 m wingspan. Legends call it the guardian of the skies, and claim it to be an ancient Digimon that has existed since the Digital World began. Varodurumon\'s feathers always emit the holy light of Purge Shine, shrouding it in a barrier that nullifies all attacks composed of ill will. Its special move Aurora Undulation amplifies the purifying light of Purge Shine to its maximum before firing it.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const VENOMMYOTISMON: Digimon = {
	fieldGuideNumber: 227,
	name: 'VenomMyotismon',
	stage: Stage.Mega,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 20,
	equipmentSlots: 3,
	description: 'With a bottom half that is demon and a top half that is beetle, this beast demon is a Digivolution of the dark king Myotismon. As VenomMyotismon, he has unleashed a hidden potential and is now full of the desire for destruction. Myotismon is a gentleman of logic and wisdom, and hates that this ugly side of him has now become apparent. The Venom Infusion special move injects a destructive computer virus into a Digimon, destroying all of its config data and terminating it.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const WARGREYMON: Digimon = {
	fieldGuideNumber: 228,
	name: 'WarGreymon',
	stage: Stage.Mega,
	attribute: Attribute.Fire,
	type: DigimonType.Vaccine,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'The strongest dragon Digimon with a suit of armor constructed of the strongest metal, Chrome Digizoid. It is the ultimate form of the Greymon-type Digimon, with a very changed appearance, looking more humanoid. It also has much improved power and speed. Dramon Killers on both of its arms are effective against Dramons, but these are a double-edged sword that endanger it as well. The shells on its back merge to become the super-strong Brave Shield. Its special move is Terra Force, a dense and hot energy ball.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const OPHANIMON: Digimon = {
	fieldGuideNumber: 229,
	name: 'Ophanimon',
	stage: Stage.Mega,
	attribute: Attribute.Light,
	type: DigimonType.Vaccine,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'A super angel Digimon which is the final form of the female angel Digimon. It is one of the celestial Digimon that protect the Digital World\'s kernel (the domain of God) along with Seraphimon and Kerpymon. It is the mother figure of the Digital World and shows the loving and benevolent side of God, while Seraphimon is the executor of God\'s law, and Kerpymon is the guardian of God and wisdom. Its special move is Eden\'s Javelin.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GAIOMON: Digimon = {
	fieldGuideNumber: 230,
	name: 'Gaiomon',
	stage: Stage.Mega,
	attribute: Attribute.Fire,
	type: DigimonType.Virus,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'A dragon humanoid Digimon that belongs to the Greymon type which is highly capable as a combat species, with its strength increasing with battle victories. It was discovered in a discarded computer. Many aspects of its strength cannot be measured, but it has proven battle experience. Its swords called Kikurin have a unique shape that was formed over the course of its battles, and creates strange tracks of light that slice those who touch them to pieces. Special move Will-o\' Wisp Slash draws these tracks together.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const KAISERGREYMON: Digimon = {
	fieldGuideNumber: 231,
	name: 'KaiserGreymon',
	stage: Stage.Mega,
	attribute: Attribute.Fire,
	type: DigimonType.Free,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'A transcendent Digimon with power over flame, said to even surpass the might of the Ten Warriors. The power of the nine dragon veins flowing through Gaia resides in its body. It has been prophesied that if it can harness that power, it will demonstrate unfathomable ability and rule over Gaia. It wields the Ryuugonken, a sword with the souls of dragons sealed within, in order to control the power. Its special move Firedrake Strike unleashes white-hot, blazing arrows from the Ryuugonken.',
	supportSkill: {
		name: 'Wind-Flame, Ice-Sword',
		description: 'Increases damage dealt by Fire, Wind, Plant, and Earth skills by 8%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const CHAOSGALLANTMON: Digimon = {
	fieldGuideNumber: 232,
	name: 'ChaosGallantmon',
	stage: Stage.Mega,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 22,
	equipmentSlots: 1,
	description: 'A form of Gallantmon that has awakened to its virus instincts. Its mind has entirely shifted to the dark side, and brings disaster to the world using Digital Hazard. Like other Gallantmon, it wears black armor of pure Chrome Digizoid. In its right hand it carries a lance called Balmung, and in its left it carries a shield called Gorgon. Its special moves are a powerful thrust with its lance called Demonic Disaster, and Judecca Prison which is a dark, corrosive energy wave it inflicts from its shield.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const CHAOSDRAMON: Digimon = {
	fieldGuideNumber: 233,
	name: 'Chaosdramon',
	stage: Stage.Mega,
	attribute: Attribute.Electric,
	type: DigimonType.Virus,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'When parts from several android Digimon were combined to build Machinedramon, the experiment was a success, demonstrating abilities surpassing all expectation. Improving Machinedramon with further enhancements created Chaosdramon. Its deep crimson metal body is made of Red Digizoid, created by refining the virtual ultra-metal Chrome Digizoid to be even stronger. This lets it repel all attacks and destroy anything. Its special move Hyper Infinity Cannon fires a superior energy wave from its twin cannons.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GANKOOMON: Digimon = {
	fieldGuideNumber: 234,
	name: 'Gankoomon',
	stage: Stage.Mega,
	attribute: Attribute.Fire,
	type: DigimonType.Data,
	memoryUsage: 22,
	equipmentSlots: 2,
	description: 'A holy knight Digimon who has been promoted to th Royal Knights. It has a next-gen Hackmon as its companion and travels the Digital World to fight chaos. It assigns tough trials for Hackmon to earn the right to inherit its title as Royal Knight. It is stubborn and severe because it wants the best for Hackmon. Hinukamuy, who emerges from its boc does not speak, but it is always there to help. Gankoomon\'s rage call \"Quake! Blast! Fire! Father!\" with Hinukamuy and table-turning Table Flip are its special moves.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const KINGETEMON: Digimon = {
	fieldGuideNumber: 235,
	name: 'KingEtemon',
	stage: Stage.Mega,
	attribute: Attribute.Earth,
	type: DigimonType.Virus,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'The highest form of the self-styled King of Etemon\', an existence standing at even greater heights. It gets even more carried away, calling itself the King of Kings. It dons a dashing monkey suit with with \"king\" written on it, and it walks around like a star; and yet, other Digimon make fun of it. Its special move Monkey Wrench puts on a show to rob an enemy of its will to fight.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const KUZUHAMON: Digimon = {
	fieldGuideNumber: 236,
	name: 'Kuzuhamon',
	stage: Stage.Mega,
	attribute: Attribute.Dark,
	type: DigimonType.Data,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'A deity Digimon that is said to be a fox type that has lived so long that it has changed into a humanoid form. Those that are high enough level can Digivolve into Sakuyamon, but normally they Digivolve into Kuzuhamon. It is proficient in ancient magic and arts. A pipe fox lives in a pipe on its belt, and can be used for attack and information gathering. Its special move is Taizoukai Mandala, in which it purges evil with its staff.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GRANKUWAGAMON: Digimon = {
	fieldGuideNumber: 237,
	name: 'GranKuwagamon',
	stage: Stage.Mega,
	attribute: Attribute.Plant,
	type: DigimonType.Virus,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'Mega form of a Kabuterimon Digimon. Considered terrible even among insectoid Digimon, an encounter with Grankuwagamon in the Digital World spells doom. It normally stays deep within the forest and only comes out at night, earning it the name \"Demon of the Deep Forest.\" It is the greatest rival of HerculesKabuterimon and the two will fight to the bitter end. Special move Dimension Scissor cuts through space itself.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GRANDRACMON: Digimon = {
	fieldGuideNumber: 238,
	name: 'GranDracmon',
	stage: Stage.Mega,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'A devil beast Digimon considered the king of all vampire Digimon. It built a castle in the Dark Area in ancient times, and is said to boast a power even the Seven Deadly Digimon cannot touch. GranDracmon is well-mannered, and its words drip with a charm said to have caused the fall of many an Angel Digimon come to subdue him. Its special move Crystal Revolution instantly changes any enemy to crystal, and Eye of the Gorgon is an evil eye that traps the hearts of those it gazes at in darkness.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GROUNDLOCOMON: Digimon = {
	fieldGuideNumber: 239,
	name: 'GroundLocomon',
	stage: Stage.Mega,
	attribute: Attribute.Electric,
	type: DigimonType.Data,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'A mega-form transport Digimon. It has a very competitive spirit and can be foolhardy. Its power is beyond comparison and anything on the receiving end of a GroundLocomon attack is smashed to pieces. When there are no rails for the GroundLocomon, it can make its own rails to run on. Its special move is Destruction Crush, which is a devastating high-speed spiked wheel attack.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GRYPHONMON: Digimon = {
	fieldGuideNumber: 240,
	name: 'Gryphonmon',
	stage: Stage.Mega,
	attribute: Attribute.Wind,
	type: DigimonType.Data,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'A fused Digimon with the head, wings and forelimbs of a bird Digimon, the body of a beast Digimon, and a serpentine creature on its tail. It can fly with its wings, but usually dwells in deserts or mountain caves. Gryphonmon is a difficult foe to best, using incredible power and agility to toy with opponents. It is employed to prevent illegal access and guard confidential information around the Net. Its special move Supersonic Voice emits super high-frequency sound waves to destroy an enemy\'s data composition.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const CRANIAMON: Digimon = {
	fieldGuideNumber: 241,
	name: 'Craniamon',
	stage: Stage.Mega,
	attribute: Attribute.Earth,
	type: DigimonType.Vaccine,
	memoryUsage: 22,
	equipmentSlots: 1,
	description: 'A Royal Knight Digimon famous for impeccable manners. It is a perfectionist and has one of the top completion rates for King Drasil\'s missions. When fighting, it will normally do so in one-to-one combat, and it takes supreme delight from defeating the strongest. Craniamon\'s armor is King Drasil\'s modified code made into Black Digizoid. Special move is rapid spinning of its spear Claíomh Solais to unleash a sonic wave called Waltz\'s End. It can also use Breath of the Gods to summon a magic shield called Avalon.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const KERPYMON_BLK: Digimon = {
	fieldGuideNumber: 242,
	name: 'Kerpymon (Blk)',
	stage: Stage.Mega,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 20,
	equipmentSlots: 3,
	description: 'A Seraph angel Digimon with the appearance of a beast. It is one of the great angel Digimon and has the highest position, along with angel of valor Seraphimon. It guards the Digital World\'s kernel. Angel Digimon are fanatically good, however, and this can quickly lead them on the path of pure evil. It wields an intense electric staff, and its blow is considered to be divine punishment. Its special move is the Lightning Spear.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const KERPYMON_GOOD: Digimon = {
	fieldGuideNumber: 243,
	name: 'Kerpymon (Good)',
	stage: Stage.Mega,
	attribute: Attribute.Light,
	type: DigimonType.Vaccine,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'A Seraph angel Digimon with the appearance of a beast. It is one of the great angel Digimon and has the highest position, along with angel of valor Seraphimon. It guards the Digital World\'s kernel. Angel Digimon are fanatically good, however, and this can quickly lead them on the path of pure evil. It wields an intense electric staff, and its blow is considered to be divine punishment. Its special move is to summon a giant storm cloud that unleashes lightning bolts on the enemy, and is called Heaven\'s Judgment.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GOLDRAMON: Digimon = {
	fieldGuideNumber: 244,
	name: 'Goldramon',
	stage: Stage.Mega,
	attribute: Attribute.Light,
	type: DigimonType.Vaccine,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'A holy dragon Digimon with six hardened wings and a glittering golden body. The Holy Ring is attached to its arm, proof of a holy Digimon and the reason it is considered a divine Digimon. Goldramon is one of the Four Great Dragons. Tiny dragon Digimon are sealed within its hand protectors: In its right hand, Amon of the Crimson Flame, who governs destruction; in its left, Umon of the Blue Lightning, who governs regeneration. Its special move God Flame detonates its holy spirit, mowing down all enemies in an instant.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SABERLEOMON: Digimon = {
	fieldGuideNumber: 245,
	name: 'SaberLeomon',
	stage: Stage.Mega,
	attribute: Attribute.Wind,
	type: DigimonType.Data,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'This ancient beast Digimon possesses the agility of a mech. However, details of this Digimon are shrouded in secrecy. One theory is that it is the beast form of Leomon. Its inherent speed means that it can avoid even the quickest attack. It has two large fangs and sharp claws, giving it some of the greatest destructive power of all Digimon. Its special move is Howling Crusher which it uses to shred the opponent with its huge claws.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SAKUYAMON: Digimon = {
	fieldGuideNumber: 246,
	name: 'Sakuyamon',
	stage: Stage.Mega,
	attribute: Attribute.Light,
	type: DigimonType.Data,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'A Digimon that acts as a priestess, or agent of God\'s will. Like Taomon, it can use Taoist arts, and it can use beast-type Digimon. Normally it carries four pipes on its belt in which reside four pipe foxes. It uses these pipe foxes for lots of things such as attacks and information gathering. Its special move, Amethyst Mandala where it strikes the ground with its Vajra Staff, creating a field that exorcises evil.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const JESMON: Digimon = {
	fieldGuideNumber: 247,
	name: 'Jesmon',
	stage: Stage.Mega,
	attribute: Attribute.Neutral,
	type: DigimonType.Data,
	memoryUsage: 22,
	equipmentSlots: 2,
	description: 'A holy knight Digimon, which is the ultimate form of Hackmon. This Digimon is a Royal Knight, and has the highest rank in Network Security. It has the ability to sense abnormalities and chaos, and it is always the first of the Royal Knights on the scene to coordinate with nearby Digimon. Jesmon works well with others and learns by observing the Hinukamuy of its master, Gankoomon. Special moves are Judgement of the Blade (carving the enemy up with its arm blades) and Weltgeist (a counterattack).',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SHINEGREYMON: Digimon = {
	fieldGuideNumber: 248,
	name: 'ShineGreymon',
	stage: Stage.Mega,
	attribute: Attribute.Light,
	type: DigimonType.Vaccine,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'A shining dragon Digimon that attacks using the energy of the scorching sun. It has an ability where it can summon a GeoGrey Sword from the ground using the pure, condensed power of Gaia.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SHINEGREYMON_BM: Digimon = {
	fieldGuideNumber: 249,
	name: 'ShineGreymon BM',
	stage: Stage.Mega,
	attribute: Attribute.Fire,
	type: DigimonType.Vaccine,
	memoryUsage: 22,
	equipmentSlots: 2,
	description: 'ShineGreymon undergoes Burst Digivolution, temporarily evoking its full potential and giving it a special form wrapped in solar class high-energy flames. Its special move Final Shining Burst induces a massive explosion infused with its entire being.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const JUSTIMON: Digimon = {
	fieldGuideNumber: 250,
	name: 'Justimon',
	stage: Stage.Mega,
	attribute: Attribute.Light,
	type: DigimonType.Vaccine,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'A hero of justice Digimon who wears a long red scarf, this Digimon has a strong moral code and will not suffer wickedness to stand. Many Digimon in training aspire to be this Digimon, who wields an iron hammer like a hurricane and leaves like one as well. By replacing the three plugs in its right shoulder which are located in the extend transmitter on its back, it can switch between a powerful Big Wave Arm, a electric Thunder Arm, and a cutting Cyclonic Arm. Its Justice Kick delivers 45 tons of force.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const KENTAUROSMON: Digimon = {
	fieldGuideNumber: 251,
	name: 'Kentaurosmon',
	stage: Stage.Mega,
	attribute: Attribute.Light,
	type: DigimonType.Vaccine,
	memoryUsage: 22,
	equipmentSlots: 1,
	description: 'A holy knight Digimon and a member of the Royal Knights. Most of the Royal Knights are humanoid, but this one looks bestial. Its full-body Red Digizoid armor boasts great defensive strength, making it difficult for even Ultimate Digimon to inflict damage on Kentaurosmon. Its six legs gives it fantastic mobility and it is capable of quick movements despite its heavy build. Special moves are Bifrost where it fires arrows of light from Muspelheimr, and Odin\'s Breath which creates a blizzard with its shield Niflheimr.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SLAYERDRAMON: Digimon = {
	fieldGuideNumber: 252,
	name: 'Slayerdramon',
	stage: Stage.Mega,
	attribute: Attribute.Wind,
	type: DigimonType.Vaccine,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'A dragon humanoid Digimon clad in Chrome Digizoid scale armor. Its form is one only dragon humanoid Digimon can achieve after completing the training known as the Trial of the Four Great Dragons. Slayerdramon carries the telescoping long sword Fragarach, and has mastered its ultimate swordsmanship, the Dragon Slashing Sword (Ryuzanken). This sword style has three different forms; the first of which, Divine Dragon Slash, spins its body to accelerate its sword, cleaving an enemy in half from the head down.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SERAPHIMON: Digimon = {
	fieldGuideNumber: 253,
	name: 'Seraphimon',
	stage: Stage.Mega,
	attribute: Attribute.Light,
	type: DigimonType.Vaccine,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'A Seraph angel Digimon that is dressed in holy armor that shines silver and has ten golden wings. It is the highest of all the angel Digimon and rules over them. Its true face and identity are completely hidden behind a mask, and it is the closest thing to the physical existence of God. It is said that it will purify everything when it descends for the final battle with evil. It is also said that evil king Digimon Creepymon is a fallen Seraphimon. Special move Strike of the Seven Stars fires seven light spheres.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const MEGAGARGOMON: Digimon = {
	fieldGuideNumber: 254,
	name: 'MegaGargomon',
	stage: Stage.Mega,
	attribute: Attribute.Electric,
	type: DigimonType.Vaccine,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'A huge machine Digimon with a body made of a mass of weapons. Its high-temperature arsenal rivals that of the low-temperature MetalGarurumon. All of its lasers, missiles, bazookas, Vulcan cannons, and flamethrowers are hidden. It uses all of its energy as power so it is very slow although capable of amazing destruction. It can handle several enemies from any direction without taking a step. Special move Burst Shot fires a volley of firearms.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const DARKDRAMON: Digimon = {
	fieldGuideNumber: 255,
	name: 'Darkdramon',
	stage: Stage.Mega,
	attribute: Attribute.Electric,
	type: DigimonType.Virus,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'An android Digimon guessed to be the trump card of D-Brigade. In a tactic to eliminate a target, codenamed \"BAN-TYO,\" a shot-down Tankdramon was collected and Digivolved into Darkdramon at D-Brigade\'s research facility. This process used large amounts of dark matter, causing it to go berserk and escape after Digivolving. D-Brigade currently has no idea where it could be. Its special move Dark Roar is a forbidden technique that shoots dark matter as an energy ball.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const TIGERVESPAMON: Digimon = {
	fieldGuideNumber: 256,
	name: 'TigerVespamon',
	stage: Stage.Mega,
	attribute: Attribute.Electric,
	type: DigimonType.Virus,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'An android Digimon that protects the mysterious and covert Royal Base. Vespamon looks small and delicate, but it has an amazing stamina and is constantly moving in battle. It is said to be in the top 0.08% of the Honey Corp Royal Commando and has been given a code name \"Tiger\" because of its skill at solo combat. It wields the two Honey Corp Royal Meisters. Special move Mach Stinger V wields the two Royal Meisters to stab the enemy.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const TITAMON: Digimon = {
	fieldGuideNumber: 257,
	name: 'Titamon',
	stage: Stage.Mega,
	attribute: Attribute.Earth,
	type: DigimonType.Virus,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'Titamon was born from the hatred of Digimon defeated by the Olympos XII in a battle for the sovereignty of the Digital World. It is known as a one-man squad and holds an inexhaustible source of energy in its giant body. It scours the battlefield looking for the Olympos XII. Its huge arms are covered in skulls that hold the data of the power it has stolen from its fallen enemies. Its giant sword Zanjinto is carved from SkullGreymon bones and emits a low growl.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const TYRANTKABUTERIMON: Digimon = {
	fieldGuideNumber: 258,
	name: 'TyrantKabuterimon',
	stage: Stage.Mega,
	attribute: Attribute.Plant,
	type: DigimonType.Virus,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'The King of Insects governing all insectoid Digimon. Its stronghold the Under Forest sits deep under a dark forest, and it is only active at night. It can bend all insectoid Digimon to its will, and almost never participates in combat itself. Its carapace is composed of high-density Chrome Digizoid, making it impervious to assault from the average Digimon. Its Shine of Bee attack instantly incinerates all foes to ash with an unstoppable explosion emitted from its entire body.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const DIANAMON: Digimon = {
	fieldGuideNumber: 259,
	name: 'Dianamon',
	stage: Stage.Mega,
	attribute: Attribute.Water,
	type: DigimonType.Data,
	memoryUsage: 20,
	equipmentSlots: 3,
	description: 'A deity Digimon and member of the Olympos XII who presides over water and ice, and can fight in absolute zero temperatures. Just like there are two sides to the moon (light and dark), there are two sides to its personality. Special move Good Night Moon showers the enemy in moonlight from the Good Night Sisters on both of its feet.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const DIABOROMON: Digimon = {
	fieldGuideNumber: 260,
	name: 'Diaboromon',
	stage: Stage.Mega,
	attribute: Attribute.Dark,
	type: DigimonType.Free,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'This Digimon absorbs all data on the network to evolve and by constantly growing larger brings the Digital World to the brink of destruction. Diaboromon has absorbed so much data and wisdom that it has become all knowing and all-powerful, taking pleasure in destruction. However, when many of this Digimon assemble, it has one final goal and that is to hack a military computer and use a nuclear strike to annihilate the Real World. Special move Catastrophe Cannon fires a shot of destructive energy from its chest.',
	supportSkill: {
		name: 'Destroyer',
		description: '10% chance of instantly killing target when attacking.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const CREEPYMON: Digimon = {
	fieldGuideNumber: 261,
	name: 'Creepymon',
	stage: Stage.Mega,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 22,
	equipmentSlots: 2,
	description: 'An evil king Digimon that rules over many of the dark angel and devil Digimon. Creepymon was original a high-ranking angel Digimon, but because it fought against the goodness in the world (perhaps the person who made the Digital World), it was deleted and sent to the Dark Area (the graveyard for deleted data). It has vowed to take revenge and one day conquer the Digital World. Special move Flame Inferno incinerates the enemy in the flames of Hell until there is nothing left.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GALLANTMON: Digimon = {
	fieldGuideNumber: 262,
	name: 'Gallantmon',
	stage: Stage.Mega,
	attribute: Attribute.Light,
	type: DigimonType.Virus,
	memoryUsage: 22,
	equipmentSlots: 1,
	description: 'A holy knight Digimon that is a member of the Royal Knights, who are the highest ranked Digimon in Network Security, making it impossible to break the security rules in their presence. It has virus attributes and is also a guardian of the net. If this balance is broken, it can become very dangerous. It has holy armor made of refined, high-purity Chrome Digizoid. It has Holy Lance - Gram in its right hand, and Holy Shield - Aegis in its left. Special moves are Lightning Joust and Shield of the Just.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const DYNASMON: Digimon = {
	fieldGuideNumber: 263,
	name: 'Dynasmon',
	stage: Stage.Mega,
	attribute: Attribute.Wind,
	type: DigimonType.Data,
	memoryUsage: 22,
	equipmentSlots: 2,
	description: 'A member of the Royal Knights with the abilities of a wyvern. It has a special place in the Royal Knights and it is very loyal to its master no matter what. It will do anything, including evil for the justice it believes in. Embodying chivalry, it is loyal, courteous and just, and takes pride in its draconic powers and unparalleled pure, Chrome Digizoid draconic armor. Special moves are Dragon\'s Roar, which unleashes energy from both claws, and Wyvern\'s Breath, which changes its energy into the aura of a wyvern.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const DURANDAMON: Digimon = {
	fieldGuideNumber: 264,
	name: 'Durandamon',
	stage: Stage.Mega,
	attribute: Attribute.Neutral,
	type: DigimonType.Vaccine,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'A Digimon with the ultimate holy blade that Digivolved by polishing its sword to its limits and gaining \"legendary sword\" data from myths and games. Wielding Durandamon in sword form is said to assure victory, and it boasts the greatest strength of the Legend-Arms. Its tremendous slash can cleave any defense in twain, but records say that only the strongest Legend-Arms that change into shields can withstand it. Its special move Zwei Glänze cuts enemies with twin swords loaded with fighting spirit.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const LEOPARDMON: Digimon = {
	fieldGuideNumber: 265,
	name: 'Leopardmon',
	stage: Stage.Mega,
	attribute: Attribute.Light,
	type: DigimonType.Data,
	memoryUsage: 22,
	equipmentSlots: 3,
	description: 'A holy knight Digimon recognized by the other Royal Knights as their top strategist. It can bring the other Royal Knights with their individual beliefs together to lead them, and goes into leopard mode when in battle alone to race across the battlefield. Special moves are Sword of Annihilation! Extinction Wave! (a downward swing of a beam blade) and Sword of Destruction! Black Aura Blast! (explosive energy).',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const LEOPARDMON_LM: Digimon = {
	fieldGuideNumber: 266,
	name: 'Leopardmon LM',
	stage: Stage.Mega,
	attribute: Attribute.Earth,
	type: DigimonType.Data,
	memoryUsage: 25,
	equipmentSlots: 3,
	description: 'It has a special move in leopard mode called Vulcan Crusher where it summons a tower of rock from the ground to toss enemies into the air. Also, the Leopardmon\'s round tail-tip can generate a ball of energy that becomes a weapon called Eroberung, which tactically surrounds the enemy.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const DORUGORAMON: Digimon = {
	fieldGuideNumber: 267,
	name: 'Dorugoramon',
	stage: Stage.Mega,
	attribute: Attribute.Dark,
	type: DigimonType.Data,
	memoryUsage: 18,
	equipmentSlots: 2,
	description: 'Dorugoramon is an imaginary Digimon born from the daydream of a DigiCore. It is a form Digivolved when the creativity of the DigiCore itself was miraculously released from the interface on its brow. Perhaps because of the powerful life energy data of the legendary \"dragon\" within its DigiCore, this DigiCore created form is the powerful avatar of \"destruction\", and the incarnation of the \"ultimate enemy\". Its special move Brave Metal is a fierce charge containing its body and soul.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const NEPTUNEMON: Digimon = {
	fieldGuideNumber: 268,
	name: 'Neptunemon',
	stage: Stage.Mega,
	attribute: Attribute.Water,
	type: DigimonType.Vaccine,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'One of the Olympos XII, and a sea god Digimon that governs all aquatic Digimon. The scale mail covering Neptunemon\'s body is a transformed Chrome Digizoid called Blue Digizoid that excels in mobility and speed, allowing it to move underwater at formidable speeds. Its castle Abyss Sanctuary was built in a deep underwater trench, allowing only those who can withstand the water pressure to enter. Its special move Vortex Penetration strikes with its sentient spear King\'s Bite.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const HIANDROMON: Digimon = {
	fieldGuideNumber: 269,
	name: 'HiAndromon',
	stage: Stage.Mega,
	attribute: Attribute.Electric,
	type: DigimonType.Vaccine,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'A Mega android Digimon reformed from an incomplete Andromon. It has more Chrome Digizoid parts and is distinguished by its unparalleled attack and defense. Also, by adding Chrome Digizoid parts to its bio synapse routing responsible for its incomplete thinking, it can think for itself. Special move Atomic Ray fuses neutron energy from the blue neutron control turbine on its right shoulder and atomic energy from the red atom control turbine on its left shoulder, thereby producing a ray can destroy enemies.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const PILEVOLCAMON: Digimon = {
	fieldGuideNumber: 270,
	name: 'PileVolcamon',
	stage: Stage.Mega,
	attribute: Attribute.Fire,
	type: DigimonType.Data,
	memoryUsage: 18,
	equipmentSlots: 2,
	description: 'One of the several supposed Digivolutions for Volcanomon. It possesses dreadful power and destructive force, and is an expert in all combat sports, starting with pro wrestling. Its Digivolution has polished its massive body even further into a smart form suitable for melee combat. Its special moves are Volcanic Driver, which uses the volcanic eruption from its shoulders to slam enemies into the ground, and Diamond Fist, the ultimate fist that blows through even Chrome Digizoid.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const BARBAMON: Digimon = {
	fieldGuideNumber: 271,
	name: 'Barbamon',
	stage: Stage.Mega,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 22,
	equipmentSlots: 2,
	description: 'An evil king Digimon with the appearance of an old man with a long beard, and a member of the Seven Deadly Digimon. It resides at the center of the Dark Area which is a den of demons, and uses dark angel Digimon for true evil. It is obsessed with all treasure that exists on the network and will murder any Digimon to get it. This most scheming of the dark angel Digimon can even manipulate the Ultimate Ghoulmon. Special move Pandemonium Lost unleashes a dark angel.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const BANCHOLEOMON: Digimon = {
	fieldGuideNumber: 272,
	name: 'BanchoLeomon',
	stage: Stage.Mega,
	attribute: Attribute.Earth,
	type: DigimonType.Vaccine,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'A beast humanoid Digimon that is loyal to the concept of justice. It is said that only high-spirited Digimon who are victorious in battles with strong opponents are worthy of the title of Bancho. Only five Digimon have acquired it. Those counter to its concept of justice are seen as obstacles, and even the Royal Knights and the high angels are considered to be evil and enemies. The Gaku Ran it wears on its shoulders negates 89.9% of physical strikes. Special move Flashy Boss Punch pushes its spirit to the limit.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const PIEDMON: Digimon = {
	fieldGuideNumber: 273,
	name: 'Piedmon',
	stage: Stage.Mega,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'Strange and mysterious titan wizard Digimon. There are many unknowns about titan wizard Digimon, and as demon and undead types are from another world, their true identities are not understood. Its reason for being here is unclear and there is no way of resolving the problem, but its strength is undisputed, and if you are unlucky to come against Piedmon, your fate is sealed. Inescapable special move Trump Sword teleports the four swords in its magic box to pierce its enemy.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const PUPPETMON: Digimon = {
	fieldGuideNumber: 274,
	name: 'Puppetmon',
	stage: Stage.Mega,
	attribute: Attribute.Plant,
	type: DigimonType.Virus,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'Ultimate puppet Digimon created from the body of a cursed Cherrymon. It is thought to be created from the data of Cherrymon hacked by a malicious hacker. It looks like a puppet, but it has its own will and can move on its own. Very wicked, lies, and spreads false information. Special move Puppet Pummel packs gunpowder into its revolver hammer to strike the enemy, usually destroying the victim without a trace through the dual action of hammer and gunpowder.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const PLATINUMNUMEMON: Digimon = {
	fieldGuideNumber: 275,
	name: 'PlatinumNumemon',
	stage: Stage.Mega,
	attribute: Attribute.Neutral,
	type: DigimonType.Virus,
	memoryUsage: 16,
	equipmentSlots: 3,
	description: 'A very rare Numemon that first discovered Platina Mine in the Digital World and Digivolved after absorbing the metal. Its personality changed and it decorates itself with the treasure data it has collected like a nouveau riche. Now with a very flashy appearance, it has a body and wings of treasure and gold so it is very good at defense. Its attack is lacking. Special move Platinum Junk repeatedly throws poop from the platinum purification.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const BLACKWARGREYMON: Digimon = {
	fieldGuideNumber: 276,
	name: 'BlackWarGreymon',
	stage: Stage.Mega,
	attribute: Attribute.Fire,
	type: DigimonType.Virus,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'This virus-type WarGreymon is feared as a black dragon warrior, and has totally different morals and faith from the WarGreymon of the Virus Busters. It lives for its own justice, hating cowardice and sneaky acts, and doesn\'t even consider itself one of the other vulgar virus Digimon. How it converted to a virus is not known. The Brave Shield on its back is not engraved with a courageous crest. Its special move is similar to WarGreymon\'s Terra Force, but it concentrates negative emotions.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const PRINCEMAMEMON: Digimon = {
	fieldGuideNumber: 277,
	name: 'PrinceMamemon',
	stage: Stage.Mega,
	attribute: Attribute.Neutral,
	type: DigimonType.Data,
	memoryUsage: 16,
	equipmentSlots: 3,
	description: 'This prince of the Mamemon world has incorporated data relating to royals on the Internet and plays at being royalty, teaming up with KingEtemon as the fake royals of the Digital World. It is not essentially bad, but it causes trouble for KingEtemon by believing it is actual royalty and treating the Royal Knights as its own. Special move Smile Warhead deals devastation with a grin. This Digimon has the terrifying destructive powers expected of a Mega type.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const BREAKDRAMON: Digimon = {
	fieldGuideNumber: 278,
	name: 'Breakdramon',
	stage: Stage.Mega,
	attribute: Attribute.Earth,
	type: DigimonType.Virus,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'A huge machine dragon Digimon that exists to destroy everything in the world. It succeeded in hacking design data for various construction equipment when it Digivolved, gaining both power and performance surpassing other machine Digimon. But in exchange, almost no organic parts remain, and it lacks any will or emotion. It doesn\'t fear damage, continuing its onslaught until it falls apart. It is thus feared as the ultimate dragon of destruction. Its Destroyed Rush attack tears the earth with high-speed strikes of its shovel arms.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const PLESIOMON: Digimon = {
	fieldGuideNumber: 279,
	name: 'Plesiomon',
	stage: Stage.Mega,
	attribute: Attribute.Water,
	type: DigimonType.Data,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'A fantastical Digimon discovered on the computer of an unidentified British biological laboratory. Already infamous among researchers, it is rarely seen and it usually appears when there is plenty of mist so it cannot be identified easily. When seen it has a refined, glistening appearance. Special move Sorrow Blue is a shrill, crystal-clear voice that makes the hearer lose the will to fight.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const HERCULESKABUTERIMON: Digimon = {
	fieldGuideNumber: 280,
	name: 'HerculesKabuterimon',
	stage: Stage.Mega,
	attribute: Attribute.Plant,
	type: DigimonType.Vaccine,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'An Ultimate insectoid Digimon that Digivolved by merging the data of Kabuterimon and Kuwagamon. It has a gigantic horn and pincers that perfectly compensate for the weaknesses of both types of Digimon. Its body is gold and it has regained and enhanced the flying ability of MegaKabuterimon, zooming around the Digital World. There are few who can rival HerculesKabuterimon in this Ultimate form. Its special move is an improved version of Giga Blaster with the capacity to annihilate everything.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const BEELZEMON: Digimon = {
	fieldGuideNumber: 281,
	name: 'Beelzemon',
	stage: Stage.Mega,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 22,
	equipmentSlots: 1,
	description: 'While possessing the power to rule over many devil Digimon, this evil king Digimon maintains a solitary existence. As one of the Seven Deadly Digimon, it can stand at the head of an army of Nightmare Soldiers if it wants to. There is also apparently another evil king Digimon that surpasses even Beelzemon, who rides a gigantic motorbike called Behemoth and holds a shotgun called Berejena. Although cruel, merciless, and proud, it does not pick on the weak. Special move Double Impact uses its shotgun.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const BEELZEMON_BM: Digimon = {
	fieldGuideNumber: 282,
	name: 'Beelzemon BM',
	stage: Stage.Mega,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 25,
	equipmentSlots: 2,
	description: 'An evil king Digimon that has pushed its power and spirit to the limits. Unlike those who Digivolve toward evil, its mind has grown more stable, and its three sinister red eyes have turned green. It commands power and speed far above its normal limits and sports four jet-black wings on its back. It is said none can stand against Beelzemon once it has reached this form. Its right arm has fused with its Blaster, allowing it to fire monstrous energy waves that atomize anything they touch. Its special move Corona Destroyer, draws a magic circle and fires beams of destruction through it.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const BELPHEMON_SM: Digimon = {
	fieldGuideNumber: 283,
	name: 'Belphemon SM',
	stage: Stage.Mega,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 22,
	equipmentSlots: 1,
	description: 'A demon lord Digimon that is said to be sealed in the deepest parts of the Dark Area. Because of its immense power, its data has been put into sleep mode by the Digital World\'s system. Because it is in a deep sleep, it cannot attack directly, but it can inflict damage with its snores, which makes it difficult to attack. Special move Eternal Nightmare promises eternal slumber for its victims.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const HOUOUMON: Digimon = {
	fieldGuideNumber: 284,
	name: 'Hououmon',
	stage: Stage.Mega,
	attribute: Attribute.Fire,
	type: DigimonType.Vaccine,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'This holy Digimon with four shining gold wings is the leader of all bird Digimon and it is said to rule over all the divine Digimon as well. Magnadramon is the ultimate form of beast Digimon, and Hououmon is the ultimate form of bird Digimon. Two holy rings are evidence of its divinity and proof that its strength is unfathomable. Special move Star-Light Explosion is a flap of its four golden wings that showers golden grains to purify its victim.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const MAGNADRAMON: Digimon = {
	fieldGuideNumber: 285,
	name: 'Magnadramon',
	stage: Stage.Mega,
	attribute: Attribute.Light,
	type: DigimonType.Vaccine,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'Ultimate form of the beast Digimon, this hero is a king of the sky. There are few who have seen it, and it is not even known where it usually resides. However, its appearance is evident by the large energy that occurs in the Digital World. This great energy nullifies evil. Special move Fire Tornado hits its enemy with the light of justice, completely wiping it out.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const BOLTMON: Digimon = {
	fieldGuideNumber: 286,
	name: 'Boltmon',
	stage: Stage.Mega,
	attribute: Attribute.Electric,
	type: DigimonType.Data,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'A beta-type android Digimon created at the same time as Andromon. Unlike Andromon, which was made of machines, Boltmon was made of flesh and can feel emotion. Although this Digimon has great strength, it can easily lose control and fall into darkness. This tragic Digimon denies its own existence and walks in the dark. It easily wields a large battle ax as part of its special move Tomahawk Stinger.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const MAGNAGARURUMON: Digimon = {
	fieldGuideNumber: 287,
	name: 'MagnaGarurumon',
	stage: Stage.Mega,
	attribute: Attribute.Light,
	type: DigimonType.Free,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'A transcendent Digimon with power over light, said to even surpass the might of the Ten Warriors. Specializes in lightspeed movement, and is able to fly at subluminal speeds with its flight unit equipped. The laser sights on its chest rotate in-flight, locking on to air and ground targets from high in the sky for a general offensive. Escape from MagnaGarurumon is practically impossible. Its special move Machinegun Destroyer unleashes its arsenal onto locked targets, then violently crashes into the main target at high speed.',
	supportSkill: {
		name: 'Dark-Lgt, Thunder-Cannon',
		description: 'Increases damage dealt by Electric, Water, Light, and Dark skills by 8%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const MAGNAGARURUMON_SV: Digimon = {
	fieldGuideNumber: 288,
	name: 'MagnaGarurumon (SV)',
	stage: Stage.Mega,
	attribute: Attribute.Light,
	type: DigimonType.Free,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'A transcendent Digimon with power over light, said to even surpass the might of the Ten Warriors. Its special move Starlight Velocity accelerates it from subluminal to superluminal speeds erasing anything that comes in contact with its light beam.',
	supportSkill: {
		name: 'Dark-Lgt, Thunder-Cannon',
		description: 'Increases damage dealt by Electric, Water, Light, and Dark skills by 8%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const MASTEMON: Digimon = {
	fieldGuideNumber: 289,
	name: 'Mastemon',
	stage: Stage.Mega,
	attribute: Attribute.Neutral,
	type: DigimonType.Vaccine,
	memoryUsage: 22,
	equipmentSlots: 1,
	description: 'This angel Digimon, which resulted from the DNA Digivolution of angel and dark angel Digimon when a great crisis visited the Digital World, controls the forces of the angels and dark angels that are called through the gate from another Digital World. Although it is a DNA Digivolution of two conflicting types and shares qualities of both, it has a one-track mind. Special move Chaos Degradation merges dark and light energies to create a gate through which to send enemies to another dimension.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const MARINEANGEMON: Digimon = {
	fieldGuideNumber: 290,
	name: 'MarineAngemon',
	stage: Stage.Mega,
	attribute: Attribute.Water,
	type: DigimonType.Vaccine,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'This pixie Digimon resides in the Net Ocean and is very rarely seen. Although referred to as Angemon, it is actually a very different type from other Angemon. The ring around its neck is holy and it is thought that there is some connection with holy Digimon such as Gatomon or Angewomon, both of which also wear rings. The writing on the ring is not understood. Although this Digimon generally avoids fighting, it does have a special move called Ocean Love that makes its enemy lose the will to fight, resulting in victory.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const MINERVAMON: Digimon = {
	fieldGuideNumber: 291,
	name: 'Minervamon',
	stage: Stage.Mega,
	attribute: Attribute.Neutral,
	type: DigimonType.Virus,
	memoryUsage: 20,
	equipmentSlots: 3,
	description: 'This deity Digimon with the appearance of a girl belongs to the Olympos XII. Although extremely short, it can wield a sword as large as its body with ease. It has a childlike innocence and can be emotionally unstable, and even throws uncontrollable tantrums. Special move Strike Roll is a forward slash with its great sword Olympia.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const MIRAGEGAOGAMON: Digimon = {
	fieldGuideNumber: 292,
	name: 'MirageGaogamon',
	stage: Stage.Mega,
	attribute: Attribute.Wind,
	type: DigimonType.Data,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'A beast knight Digimon that wears full-body armor of Chrome Digizoid. Because it can move extremely fast, the enemy thinks that its appearance on the battlefield is only an illusion. Its special move is the Full Moon Blaster which is a single blow using the collected energy from its whole body, unleashed from an opening in its chest.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const MIRAGEGAOGAMON_BM: Digimon = {
	fieldGuideNumber: 293,
	name: 'MirageGaogamon BM',
	stage: Stage.Mega,
	attribute: Attribute.Light,
	type: DigimonType.Data,
	memoryUsage: 20,
	equipmentSlots: 3,
	description: 'MirageGaogamon undergoes Burst Digivolution, temporarily evoking its full potential and giving it a special form covered in planet class high-energy weapons and aura. Its special move Full Moon Meteor Impact strikes the enemy with a ball of light containing the energy of a planet.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const MACHINEDRAMON: Digimon = {
	fieldGuideNumber: 294,
	name: 'Machinedramon',
	stage: Stage.Mega,
	attribute: Attribute.Electric,
	type: DigimonType.Virus,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'This strongest Digimon in the Digital World is made fully of metal. It was built by synthesizing cyborg Digimon parts, and some believe that all other cyborgs were just prototypes for Machinedramon. It has enough power to overwhelm other Digimon and it boasts excellent thought processing. It is a purely mechanical Digimon that does not have self-will. Instead, it has a program that harbors ill intent placed in its DigiCore. Special move Infinity Cannon fires energy waves from its cannons.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const MEGIDRAMON: Digimon = {
	fieldGuideNumber: 295,
	name: 'Megidramon',
	stage: Stage.Mega,
	attribute: Attribute.Fire,
	type: DigimonType.Virus,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'The most brutal of dragon Digimon, and the most evil of all Digimon. One of the Four Great Dragons, its fiendish nature trumps even that of its three brethren. It is rare to the point that its existence itself is in question. It is considered a Digital Hazard in itself, but its power is being sealed by some unknown force. Still, it is said that awakening that power will cause the Digital World\'s greatest crisis. Its special move Megiddo Flame turns all things to ash.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const METALETEMON: Digimon = {
	fieldGuideNumber: 296,
	name: 'MetalEtemon',
	stage: Stage.Mega,
	attribute: Attribute.Earth,
	type: DigimonType.Virus,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'This King of Digimon was once seen as the strongest of all Digimon, and would seek out the mightiest opponents to collect precious combat data. The constant battling seriously injured it, however, it then studied its own weaknesses with the data it had collected and has now been entirely reborn as an ultimate fighting machine. Its surface is coated in the Chrome Digizoid used by metal types, and its basic combat ability has reached its maximum. This strong and dirty wrestler\'s Banana Slip trips the enemy.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const METALGARURUMON: Digimon = {
	fieldGuideNumber: 297,
	name: 'MetalGarurumon',
	stage: Stage.Mega,
	attribute: Attribute.Water,
	type: DigimonType.Data,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'This final form of Garurumon is enhanced by making most of its body metallic. Despite this process, it has not lost its agility and it can eliminate its enemies using countless weapons all over its body. Invisible lasers are emitted from the four invisible laser sights on its nose. X-ray and infrared sensors analyze its foe, making it impossible to escape even in darkness. Beam wings on its back allow it to fly quickly through Net Space. Special move Freezing Breath spews cold air to freeze anything.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const METALGARURUMON_BLK: Digimon = {
	fieldGuideNumber: 298,
	name: 'MetalGarurumon (Blk)',
	stage: Stage.Mega,
	attribute: Attribute.Electric,
	type: DigimonType.Virus,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'A virus MetalGarurumon equipped with a cold air system on its body. Once it targets its prey with the laser sight on its nose it will maintain a lock regardless of friend or foe, and will unleash a terrifying missile attack. Special move Metal Wolf Claw freezes the air in an instant.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const METALSEADRAMON: Digimon = {
	fieldGuideNumber: 299,
	name: 'MetalSeadramon',
	stage: Stage.Mega,
	attribute: Attribute.Water,
	type: DigimonType.Data,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'This final form of a Seadramon is entirely covered in Chrome Digizoit, the strongest metal known, which can reflect any attack. It has the fastest speed of any water-based Digimon, and is excellent at underwater interception in addition to land and air interception. Special move River of Power is an energy cannon that it fires from the tip of its nose.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const MERUKIMON: Digimon = {
	fieldGuideNumber: 300,
	name: 'Merukimon',
	stage: Stage.Mega,
	attribute: Attribute.Wind,
	type: DigimonType.Virus,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'One of the Olympos XII, and a genius god boasting the fastest speed in the Digital World. Its outstanding pace cannot be seen by the naked eye, and any videos recorded of Merukimon are said to be of its afterimages. It hates standing still, and is always wandering the Digital World. As a result, Merukimon is a difficult one to encounter. Its special move Thousand Fists approaches the enemy at a speed close to teleportation and pours on a super rapid-fire barrage.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const RUSTTYRANOMON: Digimon = {
	fieldGuideNumber: 301,
	name: 'RustTyranomon',
	stage: Stage.Mega,
	attribute: Attribute.Electric,
	type: DigimonType.Virus,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'This Mega form of Tyrannomon has lived through constant battles since the creation of the Digital World, enduring many harsh climes as MetalTyrannomon that have caused its cyborg body to rust. Its specialized tactics focus on taking out the enemy along with its base. RustTyranomon preys on Digimon consuming them quickly and without waste. Special move Terrors Cluster fires a large electromagnetic gun. In battle it uses its power as a top-class cyborg in close combat with the enemy.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const LEVIAMON: Digimon = {
	fieldGuideNumber: 302,
	name: 'Leviamon',
	stage: Stage.Mega,
	attribute: Attribute.Water,
	type: DigimonType.Virus,
	memoryUsage: 22,
	equipmentSlots: 1,
	description: 'Known as the Devil Beast due to its fear inducing power, this Digimon is one of the Seven Deadly Digimon and the strongest monster in the Digital World. Said to be awesome enough to consume the Digital World itself, this Digimon sleeps at the bottom of the Net Ocean near the Dark Area. When awakened, it looks down upon all others, and even other evil king and angel Digimon flee in fear. Special move Biting Crush destroys everything in its jaws.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const LILITHMON: Digimon = {
	fieldGuideNumber: 303,
	name: 'Lilithmon',
	stage: Stage.Mega,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 22,
	equipmentSlots: 2,
	description: 'One of the Seven Deadly Digimon that takes the appearance of a woman. It is thought that she was originally the same type of Digimon as Ophanimon before she fell from Heaven to become known as the Goddess of Darkness. She confuses its enemy with her beauty, and those who fall to her temptation are rewarded in ruthless fashion. The Mystic Claw of her right hand corrodes anything it touches, while the special move Endless Nightmare rots the enemy\'s body, eventually deleting the victim\'s data.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const RAVEMON: Digimon = {
	fieldGuideNumber: 304,
	name: 'Ravemon',
	stage: Stage.Mega,
	attribute: Attribute.Wind,
	type: DigimonType.Vaccine,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'An android Digimon that possesses wings made of Chrome Digizoid. At the creation of the Digital World, it served deity Digimon as the Silver Crow, but it was struck by God\'s anger and one of its wings was dyed black. It conceals itself with its dark wing and slashes at the enemy with its white wing. Appearing out of nowhere, it takes the enemy out with a single swift attack. Special move Celestial Blade is a blade of dark lightning from the Raven King.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const RAVEMON_BM: Digimon = {
	fieldGuideNumber: 305,
	name: 'Ravemon BM',
	stage: Stage.Mega,
	attribute: Attribute.Wind,
	type: DigimonType.Vaccine,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'Ravemon undergoes Burst Digivolution, temporarily evoking its full potential and giving it a special form wreathed in atmospheric energy in the form of an aura. Its special move Mourning Dance is a dreadful dance brought about by rage.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const CRUSADERMON: Digimon = {
	fieldGuideNumber: 306,
	name: 'Crusadermon',
	stage: Stage.Mega,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 22,
	equipmentSlots: 2,
	description: 'A holy knight Digimon that is a member of the Royal Knights and king that rules over all Knightmon. More than basic morality Crusadermon is loyal to its own concept of justice and it will do anything for it. It believes that ruling through power is the most peaceful way, executing duties with ruthless efficiency while also showing compassion to the weak. Special moves are Spiral Masquerade, which slashes enemies with four blades from its body, and Fist of Athena, which shoots short-range shock waves.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const ROSEMON: Digimon = {
	fieldGuideNumber: 307,
	name: 'Rosemon',
	stage: Stage.Mega,
	attribute: Attribute.Plant,
	type: DigimonType.Data,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'This pixie Digimon looks like a rose, and also takes the form of a beautiful woman, hoping to stay attractive forever. It is very self-conscious, but its power compares well with other Mega types. It wears a Tiferet on its chest, which is engraved with the symbols for love and beauty. It is also said to grant eternal beauty and power to its wearer. Special move Thorn Whip tames even the most frenzied Digimon, and victims of this skill become Rosemon\'s true slaves.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const ROSEMON_BM: Digimon = {
	fieldGuideNumber: 308,
	name: 'Rosemon BM',
	stage: Stage.Mega,
	attribute: Attribute.Plant,
	type: DigimonType.Data,
	memoryUsage: 20,
	equipmentSlots: 3,
	description: 'Rosemon undergoes Burst Digivolution, temporarily evoking its full potential and giving it a special form cloaked in an aura of love and beauty. Its special move Aguichant Lèvres is a laser released as a kiss blown from its lips.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const LOTOSMON: Digimon = {
	fieldGuideNumber: 309,
	name: 'Lotosmon',
	stage: Stage.Mega,
	attribute: Attribute.Plant,
	type: DigimonType.Data,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'A pixie Digimon that looks like a lotus flower. It has a calm, lady-like grace and it can make people forget the suffering of this brief life, giving them happy dreams. However, it will use its hammer on those who refuse its generosity. Special move is a seven-colored aura that it releases from the multi-colored staff in its right-hand. This move is called Seven\'s Fantasia and it renders the enemy unwilling to fight.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
//#endregion

//#region Ultra and Special
export const ARMAGEDDEMON: Digimon = {
	fieldGuideNumber: 310,
	name: 'Armageddemon',
	stage: Stage.Ultra,
	attribute: Attribute.Dark,
	type: DigimonType.Free,
	memoryUsage: 25,
	equipmentSlots: 1,
	description: 'A Super-Mega Digimon born of a mutation that occurred when a large amount of Diaboromon fuse. Diaboromon has the ability to copy itself en masse, but their abilities would be less than those of the original. But by fusing that mass of copies, it was able to obtain more power than the original Diaboromon. Its special move Black Rain shoots energy beam into the air that fall like rain, and Ultimate Flare fires a destructive energy beam from its gaping maw.',
	supportSkill: {
		name: 'Counter-Attack',
		description: 'Increases damage dealt to Royal Knights by 50%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const ARCADIAMON_ULTRA: Digimon = {
	fieldGuideNumber: 311,
	name: 'Arcadiamon Ultra',
	stage: Stage.Ultra,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 25,
	equipmentSlots: 2,
	description: 'The form taken when Arcadiamon Mega evolved even further when it absorbed energy generated from battles. Capable of rocking the ecosystem of the Digital World, its sheer power makes it known as a being exceeding Mega. Its special move Dystopia Lances absorbs data from Digimon and attack energy with just a touch of its countless feelers, and God Matrix is an unblockable attack that instantly dismantles anything and everything into ones and zeroes with invisible waves.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const ALPHAMON_OURYUKEN: Digimon = {
	fieldGuideNumber: 312,
	name: 'Alphamon Ouryuken',
	stage: Stage.Ultra,
	attribute: Attribute.Neutral,
	type: DigimonType.Vaccine,
	memoryUsage: 25,
	equipmentSlots: 1,
	description: 'The form taken when Alphamon releases a magic circle of Digicode that miraculously Digivolves Ouryumon into a sword. Ouryumon is the Mega of an experimental prototype Digimon that pursued greater fighting strength, and in sword form that strength is completely devoted to offense. One swing of the Ouryuken contains all of the power of a Mega Digimon, making it impossible for the average Digimon to wield, much less defend against. Its special move is Ultimate Ouryuken.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const IMPERIALDRAMON_PM: Digimon = {
	fieldGuideNumber: 313,
	name: 'Imperialdramon PM',
	stage: Stage.Ultra,
	attribute: Attribute.Light,
	type: DigimonType.Vaccine,
	memoryUsage: 25,
	equipmentSlots: 2,
	description: 'A mutation of Imperialdramon (paladin mode) that has gained the power of the knight Omnimon. It is the final and strongest form of Imperialdramon that has been spoken of since ancient times. It descended in a time of great chaos in the ancient Digital World, rescuing it from total collapse. There are no real details of what happened, although research may bring answers. Its special move is a stroke of its Omni Sword, cutting the enemy in two and initializing its config data.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const EXAMON: Digimon = {
	fieldGuideNumber: 314,
	name: 'Examon',
	stage: Stage.Ultra,
	attribute: Attribute.Wind,
	type: DigimonType.Data,
	memoryUsage: 25,
	equipmentSlots: 2,
	description: 'A holy knight Digimon and one of the sacred guardian Royal Knights. This Digimon has so much data, traditional digital tools cannot seem to render it. Its existence was only discovered with the use of state-of-the-art digital tools. It has a gigantic lance called Ambrose and giant wings called Caledfwlch, which are sentient. Its special move is high capacity laser shot from Ambrose called Pendragon\'s Glory. It can also use Dragonic Impact which allows it to dive from space, creating a shock wave with friction.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const OMNIMON: Digimon = {
	fieldGuideNumber: 315,
	name: 'Omnimon',
	stage: Stage.Ultra,
	attribute: Attribute.Light,
	type: DigimonType.Vaccine,
	memoryUsage: 25,
	equipmentSlots: 2,
	description: 'A holy knight Digimon and member of the Royal Knights that is fused from WarGreymon and MetalGarurumon with the will of those who wish for good. Combining the qualities of both, this Digimon is a flexible fighter. Its left arm is the shape of WarGreymon\'s with a sword and shield, and its right hand is the shape of MetalGarurumon\'s and is equipped with a cannon and missiles. Its cloak allows it to fly away from attacks. Supreme Cannon fires frigid air, and Transcendent Sword is an invincible blade.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const OMNIMON_ZWART: Digimon = {
	fieldGuideNumber: 316,
	name: 'Omnimon Zwart',
	stage: Stage.Ultra,
	attribute: Attribute.Dark,
	type: DigimonType.Vaccine,
	memoryUsage: 25,
	equipmentSlots: 2,
	description: 'A holy knight Digimon and member of the Royal Knights is fused from WarGreymon and MetalGarurumon with the will of those who wish for good. Combining the qualities of both, this Digimon is a flexible fighter. Recently discovered, Black Digitron has somehow turned itself black and enhanced its power. Supreme Cannon fires frigid air to freeze its enemy, and Transcendent Sword, is an invincible blade it carries in its left hand.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const CHAOSMON: Digimon = {
	fieldGuideNumber: 317,
	name: 'Chaosmon',
	stage: Stage.Ultra,
	attribute: Attribute.Neutral,
	type: DigimonType.Vaccine,
	memoryUsage: 25,
	equipmentSlots: 3,
	description: 'Chaosmon is the DNA Digivolution of BanchoLeomon and Darkdramon, and the faces of each Digimon can be seen on both arms. Its special moves are Bantyo Blade, unleashing invincible strokes of the BAN-TYO Blade equipped on its Bancho Arm, and Dark Prominence, which shoots its own digital cells from the Gigastick Cannon on its Darkdra Arm.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const CHAOSMON_VA: Digimon = {
	fieldGuideNumber: 318,
	name: 'Chaosmon VA',
	stage: Stage.Ultra,
	attribute: Attribute.Light,
	type: DigimonType.Vaccine,
	memoryUsage: 25,
	equipmentSlots: 3,
	description: '\"Chaosmon\" is the codename for a Digimon that should not exist, a bug considered impossible according to the Central Dogma of the Digital World. This Chaosmon appears to have been born of a DNA Digivolution between Bancho Leomon and Varodurumon, whose faces can be seen on its arms. Its special moves are Bantyo Blade, which unleashes a barrage of strikes from the Bantyo Blade on its Bancho Arm, and Aurora Blaster, which shoots purifying light from its Valdur Arm.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SUSANOMON: Digimon = {
	fieldGuideNumber: 319,
	name: 'Susanomon',
	stage: Stage.Ultra,
	attribute: Attribute.Light,
	type: DigimonType.Vaccine,
	memoryUsage: 25,
	equipmentSlots: 1,
	description: 'The strongest god of destruction that governs regeneration in eastern folklore. It is said to appear when network systems experience abnormalities, rendering the existing system unto nothingness and building a new system in its place. Its special moves are Celestial Blade, which cleaves any and everything under the heavens with the blade of light, Orochi, released from its ZERO-ARMS, and Heaven\'s Thunder, the ultimate technique that faces its light blade to the heavens and rains it down on the world as destructive lightning.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GALLANTMON_CM: Digimon = {
	fieldGuideNumber: 320,
	name: 'Gallantmon CM',
	stage: Stage.Ultra,
	attribute: Attribute.Light,
	type: DigimonType.Virus,
	memoryUsage: 25,
	equipmentSlots: 2,
	description: 'A hidden form of Gallantmon clad in shining crimson armor. It is at full power, heating up its armored parts and dying them red. As a result, it cannot stay in this mode for long. Its chest contains a DigiCore with a Digital Hazard sealed within. When it releases the power in its body, wings of energy radiate from its back. It wields formless weapons of divine light: the lance Gungnir and the sword Blutgang. Its special move Quo Vadis tears apart foes on the atomic level with Gungnir and consigns them to another dimension.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const BELPHEMON_RM: Digimon = {
	fieldGuideNumber: 321,
	name: 'Belphemon RM',
	stage: Stage.Ultra,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 25,
	equipmentSlots: 2,
	description: 'Belphemon awakes from its constant slumber once every thousand years and returns to its original form, full of rage. It is said that hearing its Belphemon rage mode roar is instant death even to Ultimate Digimon, and not even Mega Digimon can escape unharmed. Special move Gift of Darkness uses its claws covered in the flames of Hell. Also, the data of Digimon killed by Seven Deadly Digimon is not reincarnated but is sent to the Dark Area to become meat for demon lords.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const LUCEMON_SM: Digimon = {
	fieldGuideNumber: 322,
	name: 'Lucemon SM',
	stage: Stage.Ultra,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 25,
	equipmentSlots: 2,
	description: 'This is Lucemon\'s final form, as a dragon that appears in Revelation. As was foretold, it wears the crown of the seven deadly sins and carries an orb of darkness called Gehenna that nullifies all attacks. It was said that the world would perish when Lucemon took this form. However, Lucemon\'s true form (Lucemon Larva) exists within Gehenna and Satan mode is no more than a shadow of Lucemon. For that reason, no attack will touch its true form. Special move Divine Atonement purifies everything in flames from its crown.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const FLAMEDRAMON: Digimon = {
	fieldGuideNumber: 323,
	name: 'Flamedramon',
	stage: Stage.Armor,
	attribute: Attribute.Fire,
	type: DigimonType.Free,
	memoryUsage: 8,
	equipmentSlots: 3,
	description: 'An armor dragon humanoid Digimon Digivolved with the power of the Digi-Egg of Courage, which carries flame properties and increases combat strength like a raging fire, enabling powerful attacks on enemy Digimon. Its signature move is Flaming Fist, which delivers a fiery punch to the enemy.',
	supportSkill: {
		name: 'Fight or Flight',
		description: 'Increases ATK by 20% when HP drops below 50%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const MAGNAMON: Digimon = {
	fieldGuideNumber: 324,
	name: 'Magnamon',
	stage: Stage.Armor,
	attribute: Attribute.Earth,
	type: DigimonType.Free,
	memoryUsage: 22,
	equipmentSlots: 2,
	description: 'An armor holy knight Digimon that has Digivolved through the Digi-Egg of Miracles, giving it a metal attribute through the super metal Chrome Digizoid. Magnamon, which is a member of the Royal Knights, has immense defense capabilities and also has attack on a level with Ultimate forms. By gaining the power of the Digi-Egg of Miracles, it can overcome anything. Special moves are firing a plasma cannon called Plasma Shot, and Shining Gold Solar Storm that clears the enemy in a golden flash.',
	supportSkill: {
		name: 'Miracle',
		description: 'Has a 10% chance of reducing damage received by 75%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const RAPIDMON_ARMOR: Digimon = {
	fieldGuideNumber: 325,
	name: 'Rapidmon (Armor)',
	stage: Stage.Armor,
	attribute: Attribute.Light,
	type: DigimonType.Vaccine,
	memoryUsage: 18,
	equipmentSlots: 3,
	description: 'A holy knight Digimon of an armor-Digivolved Terriermon with a Digi-Egg of Destiny. In essence, the Rapidmon is an Ultimate Digivolved Gargomon, but because of the Digi Egg of Destiny it shines gold and can reach the power of a Mega Digimon. Its special move is called Golden Triangle and has the same strength as the special move of a Magnamon.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SHOUTMON: Digimon = {
	fieldGuideNumber: 326,
	name: 'Shoutmon',
	stage: Stage.Unknown,
	attribute: Attribute.Fire,
	type: DigimonType.Free,
	memoryUsage: 5,
	equipmentSlots: 1,
	description: 'A ferocious Digimon with amazing vigor and extreme aggression. But it is friendly with allies, and those recognized by Shoutmon can establish a deep bond that transcends species. A special function in Shoutmon\'s throat changes passion into energy, unleashing a Soul Crusher attack that uses a mic to amplify the burning passion in its chest to strike the enemy. Because its passion is the source of its strength, Shoutmon will not abandon a battle even if it hurts itself, contributing to its reputation.',
	supportSkill: {
		name: 'Cross Heart',
		description: 'Increases ATK and probability of combos occurring by 8%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const OMNISHOUTMON: Digimon = {
	fieldGuideNumber: 327,
	name: 'OmniShoutmon',
	stage: Stage.Unknown,
	attribute: Attribute.Fire,
	type: DigimonType.Free,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'OmniShoutmon obtained a legendary Digivolution from Omnimon when it unleashed its soul\'s seething passion. On top of its fervent zeal, its whole body is clad in the sparkling gold Omega inForce, a power endowed by Omnimon, to gain a sharp, edged form. Its Flame Cannon turns overflowing feelings of friendship into bullets that not only attack, but act as an wall of firepower to protect comrades from harm. Its Hard Rock Spirit concentrates courage into flames in its fist, allowing for short-range punches or long-range fireballs.',
	supportSkill: {
		name: 'Cross Heart',
		description: 'Increases ATK and probability of combos occurring by 8%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const RYUDAMON: Digimon = {
	fieldGuideNumber: 328,
	name: 'Ryudamon',
	stage: Stage.Rookie,
	attribute: Attribute.Neutral,
	type: DigimonType.Vaccine,
	memoryUsage: 5,
	equipmentSlots: 1,
	description: 'A Beast Digimon considered an experimental \"Prototype Digimon\" from before its discovery due to the archaic interface on its forehead. Although its body is clad in Japanese armor with high defensive capabilities, it is very nimble and fights by boldly leaping at the opponent\'s chest. It is devoted to the study of combat techniques and endowed with samurai spirit. In the deepest parts of its DigiCore, fearsome combat data of dragons and warlords from Japanese mythology are hidden. It has the potential to grow into a mighty Digimon.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GINRYUMON: Digimon = {
	fieldGuideNumber: 329,
	name: 'Ginryumon',
	stage: Stage.Champion,
	attribute: Attribute.Neutral,
	type: DigimonType.Vaccine,
	memoryUsage: 8,
	equipmentSlots: 1,
	description: 'A Beast Dragon Digimon whose entire body is clad in sturdy Japanese armor. Despite its appearance, it has a light body that allows it to glide gracefully through the air while parrying enemy attacks. It has the courage to parry enemy attacks using its own body, and eyesight to detect enemy attacks right before they hit. It is thought to be a Digivolved \"Prototype Digimon\". Its special move is Metal Armor Blade, by which it impales the enemy with an iron spear. Its signature move is Boujinha, in which it charges the enemy while parrying their attack with its armor.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const HISYARYUMON: Digimon = {
	fieldGuideNumber: 330,
	name: 'Hisyaryumon',
	stage: Stage.Ultimate,
	attribute: Attribute.Neutral,
	type: DigimonType.Vaccine,
	memoryUsage: 14,
	equipmentSlots: 1,
	description: 'A Beast Dragon Digimon clad in thick, shimmering scale mail that soars through the sky. It took this form when the fearsome combat data of dragons and warlords from Japanese mythology in the depths of its DigiCore was released. The orbs in its hands are said to be the souls of its fallen comrades; the orb in its right hand is the soul of Kinryu, while the orb in its left hand is the soul of Kakuryu, and DigiCore information lies hidden within each of them. Its special move is Legendary Dragon Blade, by which it turns into a giant sword and cuts the enemy in two.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const OURYUMON: Digimon = {
	fieldGuideNumber: 331,
	name: 'Ouryumon',
	stage: Stage.Mega,
	attribute: Attribute.Neutral,
	type: DigimonType.Vaccine,
	memoryUsage: 20,
	equipmentSlots: 2,
	description: 'Ouryumon is an imaginary Digimon born from the daydream of a DigiCore. It is a form Digivolved when the creativity of the DigiCore itself was miraculously released from the interface on its brow. Possibly because it originally possessed the fearsome combat data of dragons and warlords from Japanese mythology within its DigiCore, the form created by its DigiCore is a warrior dragon clad in majestic Japanese armor and holding a sword in both hands. Its special move is Eiseiryuoujin, by which it slashes at the target with its two swords.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const APOCALYMON: Digimon = {
	fieldGuideNumber: 332,
	name: 'Apocalymon',
	stage: Stage.Ultra,
	attribute: Attribute.Neutral,
	type: DigimonType.Free,
	memoryUsage: 25,
	equipmentSlots: 1,
	description: 'A Digimon who appeared when negative thoughts were drawn together by darkness. So little is known about Apocalymon that it may not even be a Digimon. Some claim it appeared to purge the chaos of cyberspace, and reduce it back to nothing; others claim its arrival was spoken of in ancient texts. Its special move is Darkness Zone, which calls forth an infinite darkness. Anyone or anything caught in its wake is said to be consumed by the void and eventually reduced to nothing.',
	supportSkill: {
		name: 'Revelation',
		description: 'Increases damage from Neutral skills by 20%, but decreases all other skill damage by 10%.'
	},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SISTERMON_BLANC: Digimon = {
	fieldGuideNumber: 333,
	name: 'Sistermon Blanc',
	stage: Stage.Rookie,
	attribute: Attribute.Light,
	type: DigimonType.Vaccine,
	memoryUsage: 4,
	equipmentSlots: 1,
	description: 'A girl-like Digimon wearing a white rabbit, and sibling to Sistermon Noir. In contrast to its sister it is a bit shy, often hiding behind Noir. At Gankoomon\'s behest it helps with Hackmon\'s training, but it repeatedly has to hold back its sister\'s violence. As thanks to Gankoomon for saving the sisters, it dedicates itself to supervising Hackmon. It has both a Divine Pierce attack, which stabs enemies with its three-pronged Cross Barbée lance, and Protect Wave, a defensive wave made by stabbing the lance tip into the ground.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SISTERMON_B_AWAKE: Digimon = {
	fieldGuideNumber: 334,
	name: 'Sistermon B (Awake.)',
	stage: Stage.Rookie,
	attribute: Attribute.Light,
	type: DigimonType.Vaccine,
	memoryUsage: 18,
	equipmentSlots: 2,
	description: 'Another form of Sistermon Blanc. A Holy Stigma appears in the center of its wimple and it awakens. Its reserved personality changes when it enters this form, dashing around the battlefield with frenzied movements obeying battle instincts laid bare. When it recovers from this state it falls into a gentle sleep, and its previous violence seems like a dream.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SISTERMON_CIEL: Digimon = {
	fieldGuideNumber: 335,
	name: 'Sistermon Ciel',
	stage: Stage.Champion,
	attribute: Attribute.Light,
	type: DigimonType.Virus,
	memoryUsage: 6,
	equipmentSlots: 2,
	description: 'A nun Digimon clad in a klobuk shaped like a black cat\'s head, and sister to Sistermon Blanc. It was tasked by Gankoomon with Hackmon\'s care, accompanying the former on its journey while training the latter. But Sistermon Noir handles this half-seriously, half in fun, laughing and shooting at Hackmon despite its exclamations of woe. It carries guns called Anthony in each hand, unleashing them in the random barrage special move Mickey Bullet, and in the rapid-fire straight line special move Bless Fire.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const SISTERMON_C_AWAKE: Digimon = {
	fieldGuideNumber: 336,
	name: 'Sistermon C (Awake.)',
	stage: Stage.Champion,
	attribute: Attribute.Light,
	type: DigimonType.Virus,
	memoryUsage: 18,
	equipmentSlots: 2,
	description: 'Another form of Sistermon Noir. It wears a wimple on its head and a Holy Stigma appears on its chest, awakening its power. The feral power drawn out with its awakening raises its quick wits and movement, and it kills the enemy with a stooped-over stance.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const ALPHAMON_NX: Digimon = {
	fieldGuideNumber: 337,
	name: 'Alphamon NX',
	stage: Stage.Mega,
	attribute: Attribute.Neutral,
	type: DigimonType.Vaccine,
	memoryUsage: 6,
	equipmentSlots: 1,
	description: 'A member of the Royal Knights. Despite being a knight, this Digimon is a counter to them, and normally it does not show itself. With its blue mantle, it is called the Aloof Hermit and occupies the Empty Seat in the Royal Knights. It possesses the ultimate ability called Alpha inForce which instantly replays what happened in battle. Its special moves are Excalibur Gradalpha that draws light from a magic circle, piercing the enemy and Soul Digitalization where it creates a huge magic circle to summon a mythic monster.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const CRUSADERMON_NX: Digimon = {
	fieldGuideNumber: 338,
	name: 'Crusadermon NX',
	stage: Stage.Mega,
	attribute: Attribute.Dark,
	type: DigimonType.Virus,
	memoryUsage: 6,
	equipmentSlots: 1,
	description: 'A holy knight Digimon that is a member of the Royal Knights and king that rules over all Knightmon. More than basic morality Crusadermon is loyal to its own concept of justice and it will do anything for it. It believes that ruling through power is the most peaceful way, executing duties with ruthless efficiency while also showing compassion to the weak. Special moves are Spiral Masquerade, which slashes enemies with four blades from its body, and Fist of Athena, which shoots short-range shock waves.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const LEOPARDMON_NX: Digimon = {
	fieldGuideNumber: 339,
	name: 'Leopardmon NX',
	stage: Stage.Mega,
	attribute: Attribute.Light,
	type: DigimonType.Data,
	memoryUsage: 6,
	equipmentSlots: 1,
	description: 'A holy knight Digimon recognized by the other Royal Knights as their top strategist. It can bring the other Royal Knights with their individual beliefs together to lead them, and goes into leopard mode when in battle alone to race across the battlefield. Special moves are Sword of Annihilation! Extinction Wave! (a downward swing of a beam blade) and Sword of Destruction! Black Aura Blast! (explosive energy).',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const OMNIMON_NX: Digimon = {
	fieldGuideNumber: 340,
	name: 'Omnimon NX',
	stage: Stage.Mega,
	attribute: Attribute.Light,
	type: DigimonType.Vaccine,
	memoryUsage: 6,
	equipmentSlots: 1,
	description: 'A holy knight Digimon and member of the Royal Knights that is fused from WarGreymon and MetalGarurumon with the will of those who wish for good. Combining the qualities of both, this Digimon is a flexible fighter. Its left arm is the shape of WarGreymon\'s with a sword and shield, and its right hand is the shape of MetalGarurumon\'s and is equipped with a cannon and missiles. Its cloak allows it to fly away from attacks. Supreme Cannon fires frigid air, and Transcendent Sword is an invincible blade.',
	supportSkill: {name:'',description:''},
	digivolvesFrom: [],
	digivolvesTo: []
};
export const GALLANTMON_NX: Digimon = {
	fieldGuideNumber: 341,
	name: 'Gallantmon NX',
	stage: Stage.Mega,
	attribute: Attribute.Light,
	type: DigimonType.Virus,
	memoryUsage: 6,
	equipmentSlots: 1,
	description: 'A holy knight Digimon that is a member of the Royal Knights, who are the highest ranked Digimon in Network Security, making it impossible to break the security rules in their presence. It has virus attributes and is also a guardian of the net. If this balance is broken, it can become very dangerous. It has holy armor made of refined, high-purity Chrome Digizoid. It has Holy Lance - Gram in its right hand, and Holy Shield - Aegis in its left. Special moves are Lightning Joust and Shield of the Just.',
	supportSkill: { name: '', description: '' },
	digivolvesFrom: [],
	digivolvesTo: []
};
//#endregion
//#endregion

export const ALL_DIGIMON: Digimon[] = [
	KURAMON,
	PABUMON,
	PUNIMON,
	BOTAMON,
	POYOMON,

	ARCADIAMON_IN_TR,
	KOROMON,
	TANEMON,
	TSUNOMON,
	TSUMEMON,
	TOKOMON,
	NYAROMON,
	PAGUMON,
	YOKOMON,
	BUKAMON,
	MOTIMON,
	WANYAMON,

	AGUMON,
	AGUMON_BLK,
	ARCADIAMON_ROOKIE,
	ARMADILLOMON,
	IMPMON,
	ELECMON,
	OTAMAMON,
	GAOMON,
	GAZIMON,
	GABUMON,
	GABUMON_BLK,
	GUILMON,
	KUDAMON,
	KERAMON,
	GOTSUMON,
	GOBLIMON,
	GOMAMON,
	SYAKOMON,
	ZUBAMON,
	SOLARMON,
	CHUUMON,
	TERRIERMON,
	TENTOMON,
	TOYAGUMON,
	DRACMON,
	DRACOMON,
	DORUMON,
	HAGURUMON,
	PATAMON,
	HACKMON,
	PALMON,
	DEMIDEVIMON,
	BIYOMON,
	FALCOMON,
	FANBEEMON,
	VEEMON,
	SALAMON,
	BETAMON,
	HAWKMON,
	MUSHROOMON,
	MONODRAMON,
	LALAMON,
	LUCEMON,
	LUNAMON,
	RENAMON,
	LOPMON,
	WORMMON,
];

//#region Digivolutions
function digivolvesTo(start: Digimon, end: Digimon) {
	//update start
	if (!start.digivolvesTo)
		start.digivolvesTo = [];
	start.digivolvesTo.push(end);
	
	//update end
	if (!end.digivolvesFrom)
		end.digivolvesFrom = [];
	end.digivolvesFrom.push(start);
}

//#region Training 1 to Training 2
digivolvesTo(KURAMON, ARCADIAMON_IN_TR);
digivolvesTo(KURAMON, TSUMEMON);
digivolvesTo(KURAMON, PAGUMON);

digivolvesTo(PABUMON, TANEMON);
digivolvesTo(PABUMON, YOKOMON);
digivolvesTo(PABUMON, MOTIMON);

digivolvesTo(PUNIMON, TSUNOMON);
digivolvesTo(PUNIMON, NYAROMON);

digivolvesTo(BOTAMON, KOROMON);
digivolvesTo(BOTAMON, WANYAMON);

digivolvesTo(POYOMON, TOKOMON);
digivolvesTo(POYOMON, BUKAMON);
//#endregion

//#region Training 2 to Rookie
digivolvesTo(ARCADIAMON_IN_TR, ARCADIAMON_ROOKIE);

digivolvesTo(KOROMON, AGUMON);
digivolvesTo(KOROMON, GUILMON);
digivolvesTo(KOROMON, TOYAGUMON);
digivolvesTo(KOROMON, DRACOMON);
digivolvesTo(KOROMON, HACKMON);
digivolvesTo(KOROMON, SHOUTMON);

digivolvesTo(TANEMON, PALMON);
digivolvesTo(TANEMON, FANBEEMON);
digivolvesTo(TANEMON, LALAMON);
digivolvesTo(TANEMON, RENAMON);

digivolvesTo(TSUNOMON, GABUMON);
digivolvesTo(TSUNOMON, GABUMON_BLK);
digivolvesTo(TSUNOMON, GOBLIMON);
digivolvesTo(TSUNOMON, ZUBAMON);
digivolvesTo(TSUNOMON, VEEMON);
digivolvesTo(TSUNOMON, MONODRAMON);

digivolvesTo(TSUMEMON, AGUMON_BLK);
digivolvesTo(TSUMEMON, KERAMON);
digivolvesTo(TSUMEMON, DRACMON);
digivolvesTo(TSUMEMON, DEMIDEVIMON);

digivolvesTo(TOKOMON, PATAMON);
digivolvesTo(TOKOMON, FALCOMON);
digivolvesTo(TOKOMON, HAWKMON);
digivolvesTo(TOKOMON, LUCEMON);
digivolvesTo(TOKOMON, SISTERMON_BLANC);

digivolvesTo(NYAROMON, ARMADILLOMON);
digivolvesTo(NYAROMON, TERRIERMON);
digivolvesTo(NYAROMON, SALAMON);
digivolvesTo(NYAROMON, LUNAMON);

digivolvesTo(PAGUMON, IMPMON);
digivolvesTo(PAGUMON, GAZIMON);
digivolvesTo(PAGUMON, CHUUMON);
digivolvesTo(PAGUMON, LOPMON);

digivolvesTo(YOKOMON, ELECMON);
digivolvesTo(YOKOMON, BIYOMON);
digivolvesTo(YOKOMON, MUSHROOMON);
digivolvesTo(YOKOMON, WORMMON);

digivolvesTo(BUKAMON, OTAMAMON);
digivolvesTo(BUKAMON, GOMAMON);
digivolvesTo(BUKAMON, SYAKOMON);
digivolvesTo(BUKAMON, BETAMON);

digivolvesTo(MOTIMON, GOTSUMON);
digivolvesTo(MOTIMON, SOLARMON);
digivolvesTo(MOTIMON, TENTOMON);
digivolvesTo(MOTIMON, HAGURUMON);

digivolvesTo(WANYAMON, GAOMON);
digivolvesTo(WANYAMON, KUDAMON);
digivolvesTo(WANYAMON, DORUMON);
digivolvesTo(WANYAMON, RYUDAMON);
//#endregion

//#region Rookie to Champion
digivolvesTo(AGUMON, AGUNIMON);
digivolvesTo(AGUMON, GREYMON);
digivolvesTo(AGUMON, GEOGREYMON);
digivolvesTo(AGUMON, SUKAMON);
digivolvesTo(AGUMON, TYRANNOMON);
digivolvesTo(AGUMON, MERAMON);

digivolvesTo(AGUMON_BLK, GROWLMON);
digivolvesTo(AGUMON_BLK, GREYMON_BLUE);
digivolvesTo(AGUMON_BLK, CYCLONEMON);
digivolvesTo(AGUMON_BLK, TANKMON);
digivolvesTo(AGUMON_BLK, TYRANNOMON);
digivolvesTo(AGUMON_BLK, MONOCHROMON);

digivolvesTo(ARCADIAMON_ROOKIE, ARCADIAMON_CHAMPION);
digivolvesTo(ARCADIAMON_ROOKIE, KURISARIMON);
digivolvesTo(ARCADIAMON_ROOKIE, LEOMON);

digivolvesTo(ARMADILLOMON, ANKYLOMON);
digivolvesTo(ARMADILLOMON, GEREMON);
digivolvesTo(ARMADILLOMON, GOLDNUMEMON);
digivolvesTo(ARMADILLOMON, GOLEMON);
digivolvesTo(ARMADILLOMON, CYCLONEMON);
digivolvesTo(ARMADILLOMON, TANKMON);

digivolvesTo(IMPMON, ICEDEVIMON);
digivolvesTo(IMPMON, WIZARDMON);
digivolvesTo(IMPMON, OGREMON);
digivolvesTo(IMPMON, SOCERIMON);
digivolvesTo(IMPMON, BAKEMON);
digivolvesTo(IMPMON, BLACKGATOMON);

digivolvesTo(ELECMON, GARURUMON);
digivolvesTo(ELECMON, GARURUMON_BLK);
digivolvesTo(ELECMON, GEREMON);
digivolvesTo(ELECMON, SUKAMON);
digivolvesTo(ELECMON, NANIMON);
digivolvesTo(ELECMON, LEOMON);

digivolvesTo(OTAMAMON, SHELLNUMEMON);
digivolvesTo(OTAMAMON, GEKOMON);
digivolvesTo(OTAMAMON, SEADRAMON);
digivolvesTo(OTAMAMON, COELAMON);
digivolvesTo(OTAMAMON, NUMEMON);
digivolvesTo(OTAMAMON, RAREMON);

digivolvesTo(GAOMON, OGREMON);
digivolvesTo(GAOMON, GAOGAMON);
digivolvesTo(GAOMON, GARGOMON);
digivolvesTo(GAOMON, SANGLOUPMON);
digivolvesTo(GAOMON, TOGEMON);
digivolvesTo(GAOMON, LEOMON);

digivolvesTo(GAZIMON, GAOGAMON);
digivolvesTo(GAZIMON, GARURUMON_BLK);
digivolvesTo(GAZIMON, KURISARIMON);
digivolvesTo(GAZIMON, DORUGAMON);
digivolvesTo(GAZIMON, NANIMON);
digivolvesTo(GAZIMON, LEOMON);

digivolvesTo(GABUMON, LOBOMON);
digivolvesTo(GABUMON, GARURUMON);
digivolvesTo(GABUMON, DORUGAMON);
digivolvesTo(GABUMON, NUMEMON);
digivolvesTo(GABUMON, VEEDRAMON);
digivolvesTo(GABUMON, FRIGIMON);

digivolvesTo(GABUMON_BLK, GARURUMON_BLK);
digivolvesTo(GABUMON_BLK, VEGIEMON);
digivolvesTo(GABUMON_BLK, FRIGIMON);
digivolvesTo(GABUMON_BLK, RAREMON);
digivolvesTo(GABUMON_BLK, REPPAMON);

digivolvesTo(GUILMON, AGUNIMON);
digivolvesTo(GUILMON, GROWLMON);
digivolvesTo(GUILMON, GREYMON_BLUE);
digivolvesTo(GUILMON, GEOGREYMON);
digivolvesTo(GUILMON, TYRANNOMON);
digivolvesTo(GUILMON, MERAMON);

digivolvesTo(KUDAMON, LOBOMON);
digivolvesTo(KUDAMON, ANGEMON);
digivolvesTo(KUDAMON, GOLDNUMEMON);
digivolvesTo(KUDAMON, PECKMON);
digivolvesTo(KUDAMON, REPPAMON);

digivolvesTo(KERAMON, ARCADIAMON_CHAMPION);
digivolvesTo(KERAMON, WIZARDMON);
digivolvesTo(KERAMON, KURISARIMON);
digivolvesTo(KERAMON, BAKEMON);
digivolvesTo(KERAMON, PLATINUMSUKAMON);

digivolvesTo(GOTSUMON, ICEMON);
digivolvesTo(GOTSUMON, ANKYLOMON);
digivolvesTo(GOTSUMON, CLOCKMON);
digivolvesTo(GOTSUMON, GOLEMON);
digivolvesTo(GOTSUMON, STARMON);
digivolvesTo(GOTSUMON, TANKMON);

digivolvesTo(GOBLIMON, OGREMON);
digivolvesTo(GOBLIMON, GAOGAMON);
digivolvesTo(GOBLIMON, GROWLMON);
digivolvesTo(GOBLIMON, GREYMON_BLUE);
digivolvesTo(GOBLIMON, COREDRAMON_GREEN);
digivolvesTo(GOBLIMON, NANIMON);

digivolvesTo(GOMAMON, ICEMON);
digivolvesTo(GOMAMON, ANKYLOMON);
digivolvesTo(GOMAMON, IKKAKUMON);
digivolvesTo(GOMAMON, STRIKEDRAMON);
digivolvesTo(GOMAMON, SOCERIMON);
digivolvesTo(GOMAMON, FRIGIMON);

digivolvesTo(SYAKOMON, IKKAKUMON);
digivolvesTo(SYAKOMON, SHELLNUMEMON);
digivolvesTo(SYAKOMON, GEKOMON);
digivolvesTo(SYAKOMON, SEADRAMON);
digivolvesTo(SYAKOMON, COELAMON);

digivolvesTo(ZUBAMON, GOLDNUMEMON);
digivolvesTo(ZUBAMON, ZUBAEAGERMON);
digivolvesTo(ZUBAMON, BAOHUCKMON);
digivolvesTo(ZUBAMON, GINRYUMON);

digivolvesTo(SOLARMON, GUARDROMON_GOLD);
digivolvesTo(SOLARMON, CLOCKMON);
digivolvesTo(SOLARMON, GEREMON);
digivolvesTo(SOLARMON, GOLEMON);
digivolvesTo(SOLARMON, STARMON);
digivolvesTo(SOLARMON, MERAMON);

digivolvesTo(CHUUMON, SUKAMON);
digivolvesTo(CHUUMON, NANIMON);
digivolvesTo(CHUUMON, BLACKGATOMON);
digivolvesTo(CHUUMON, RAREMON);

digivolvesTo(TERRIERMON, IKKAKUMON);
digivolvesTo(TERRIERMON, GARGOMON);
digivolvesTo(TERRIERMON, GATOMON);
digivolvesTo(TERRIERMON, UNIMON);
digivolvesTo(TERRIERMON, RAPIDMON_ARMOR);

digivolvesTo(TENTOMON, KABUTERIMON);
digivolvesTo(TENTOMON, KUWAGAMON);
digivolvesTo(TENTOMON, SUNFLOWMON);
digivolvesTo(TENTOMON, STINGMON);
digivolvesTo(TENTOMON, WASPMON);

digivolvesTo(TOYAGUMON, GUARDROMON);
digivolvesTo(TOYAGUMON, GUARDROMON_GOLD);
digivolvesTo(TOYAGUMON, GREYMON);
digivolvesTo(TOYAGUMON, CLOCKMON);
digivolvesTo(TOYAGUMON, SUKAMON);
digivolvesTo(TOYAGUMON, STARMON);

digivolvesTo(DRACMON, ARCADIAMON_CHAMPION);
digivolvesTo(DRACMON, SANGLOUPMON);
digivolvesTo(DRACMON, DEVIMON);
digivolvesTo(DRACMON, RAREMON);
digivolvesTo(DRACMON, SISTERMON_CIEL);

digivolvesTo(DRACOMON, COREDRAMON_BLUE);
digivolvesTo(DRACOMON, COREDRAMON_GREEN);
digivolvesTo(DRACOMON, VEEDRAMON);
digivolvesTo(DRACOMON, GINRYUMON);

digivolvesTo(DORUMON, GUARDROMON);
digivolvesTo(DORUMON, CYCLONEMON);
digivolvesTo(DORUMON, DORUGAMON);
digivolvesTo(DORUMON, RAPTORDRAMON);
digivolvesTo(DORUMON, WASPMON);

digivolvesTo(HAGURUMON, GUARDROMON);
digivolvesTo(HAGURUMON, CLOCKMON);
digivolvesTo(HAGURUMON, GOLDNUMEMON);
digivolvesTo(HAGURUMON, STARMON);
digivolvesTo(HAGURUMON, PLATINUMSUKAMON);

digivolvesTo(PATAMON, EXVEEMON);
digivolvesTo(PATAMON, ANGEMON);
digivolvesTo(PATAMON, GATOMON);
digivolvesTo(PATAMON, BIRDRAMON);
digivolvesTo(PATAMON, UNIMON);
digivolvesTo(PATAMON, REPPAMON);

digivolvesTo(HACKMON, GREYMON);
digivolvesTo(HACKMON, GEOGREYMON);
digivolvesTo(HACKMON, ZUBAEAGERMON);
digivolvesTo(HACKMON, BAOHUCKMON);
digivolvesTo(HACKMON, PLATINUMSUKAMON);
digivolvesTo(HACKMON, MONOCHROMON);

digivolvesTo(PALMON, WOODMON);
digivolvesTo(PALMON, KUWAGAMON);
digivolvesTo(PALMON, SUNFLOWMON);
digivolvesTo(PALMON, MUDFRIGIMON);
digivolvesTo(PALMON, TOGEMON);
digivolvesTo(PALMON, VEGIEMON);

digivolvesTo(DEMIDEVIMON, ICEDEVIMON);
digivolvesTo(DEMIDEVIMON, KYUBIMON);
digivolvesTo(DEMIDEVIMON, KURISARIMON);
digivolvesTo(DEMIDEVIMON, DEVIMON);
digivolvesTo(DEMIDEVIMON, BAKEMON);

digivolvesTo(BIYOMON, AQUILAMON);
digivolvesTo(BIYOMON, AIRDRAMON);
digivolvesTo(BIYOMON, KABUTERIMON);
digivolvesTo(BIYOMON, KYUBIMON);
digivolvesTo(BIYOMON, BIRDRAMON);

digivolvesTo(FALCOMON, AQUILAMON);
digivolvesTo(FALCOMON, EXVEEMON);
digivolvesTo(FALCOMON, STINGMON);
digivolvesTo(FALCOMON, PECKMON);

digivolvesTo(FANBEEMON, GUARDROMON_GOLD);
digivolvesTo(FANBEEMON, STINGMON);
digivolvesTo(FANBEEMON, TOGEMON);
digivolvesTo(FANBEEMON, RAPTORDRAMON);
digivolvesTo(FANBEEMON, WASPMON);

digivolvesTo(VEEMON, LOBOMON);
digivolvesTo(VEEMON, EXVEEMON);
digivolvesTo(VEEMON, STRIKEDRAMON);
digivolvesTo(VEEMON, VEEDRAMON);
digivolvesTo(VEEMON, FLAMEDRAMON);
digivolvesTo(VEEMON, MAGNAMON);

digivolvesTo(SALAMON, SOCERIMON);
digivolvesTo(SALAMON, GATOMON);
digivolvesTo(SALAMON, BAOHUCKMON);
digivolvesTo(SALAMON, VEEDRAMON);
digivolvesTo(SALAMON, FRIGIMON);
digivolvesTo(SALAMON, REPPAMON);

digivolvesTo(BETAMON, AIRDRAMON);
digivolvesTo(BETAMON, SHELLNUMEMON);
digivolvesTo(BETAMON, GEKOMON);
digivolvesTo(BETAMON, SEADRAMON);
digivolvesTo(BETAMON, NUMEMON);
digivolvesTo(BETAMON, VEGIEMON);

digivolvesTo(HAWKMON, AQUILAMON);
digivolvesTo(HAWKMON, AIRDRAMON);
digivolvesTo(HAWKMON, BIRDRAMON);
digivolvesTo(HAWKMON, PECKMON);
digivolvesTo(HAWKMON, MERAMON);

digivolvesTo(MUSHROOMON, WOODMON);
digivolvesTo(MUSHROOMON, SUNFLOWMON);
digivolvesTo(MUSHROOMON, MUDFRIGIMON);
digivolvesTo(MUSHROOMON, VEGIEMON);

digivolvesTo(MONODRAMON, KURISARIMON);
digivolvesTo(MONODRAMON, COREDRAMON_BLUE);
digivolvesTo(MONODRAMON, STRIKEDRAMON);
digivolvesTo(MONODRAMON, DORUGAMON);
digivolvesTo(MONODRAMON, RAPTORDRAMON);

digivolvesTo(LALAMON, WOODMON);
digivolvesTo(LALAMON, SUNFLOWMON);
digivolvesTo(LALAMON, TOGEMON);
digivolvesTo(LALAMON, VEGIEMON);

digivolvesTo(LUCEMON, ANGEMON);
digivolvesTo(LUCEMON, DEVIMON);
digivolvesTo(LUCEMON, LUCEMON_FM);

digivolvesTo(LUNAMON, SANGLOUPMON);
digivolvesTo(LUNAMON, GATOMON);
digivolvesTo(LUNAMON, LEKISMON);
digivolvesTo(LUNAMON, SISTERMON_CIEL);

digivolvesTo(RENAMON, WOODMON);
digivolvesTo(RENAMON, GARURUMON);
digivolvesTo(RENAMON, KYUBIMON);
digivolvesTo(RENAMON, TURUIEMON);
digivolvesTo(RENAMON, BLACKGATOMON);
digivolvesTo(RENAMON, LEKISMON);

digivolvesTo(LOPMON, WIZARDMON);
digivolvesTo(LOPMON, GARGOMON);
digivolvesTo(LOPMON, MUDFRIGIMON);
digivolvesTo(LOPMON, DEVIMON);
digivolvesTo(LOPMON, TURUIEMON);
digivolvesTo(LOPMON, BLACKGATOMON);

digivolvesTo(WORMMON, ICEDEVIMON);
digivolvesTo(WORMMON, KABUTERIMON);
digivolvesTo(WORMMON, KUWAGAMON);
digivolvesTo(WORMMON, STINGMON);
digivolvesTo(WORMMON, HUDIEMON);
digivolvesTo(WORMMON, WASPMON);
//#endregion

//#region Champion to Ultimate
digivolvesTo(ICEDEVIMON, ARCADIAMON_ULTIMATE);
digivolvesTo(ICEDEVIMON, MYOTISMON);
digivolvesTo(ICEDEVIMON, CHERRYMON);
digivolvesTo(ICEDEVIMON, DRAGOMON);
digivolvesTo(ICEDEVIMON, LADYDEVIMON);

digivolvesTo(ICEMON, METEORMON);
digivolvesTo(ICEMON, ZUDOMON);
digivolvesTo(ICEMON, PANJYAMON);

digivolvesTo(AQUILAMON, AEROVEEDRAMON);
digivolvesTo(AQUILAMON, GARUDAMON);
digivolvesTo(AQUILAMON, SILPHYMON);
digivolvesTo(AQUILAMON, HIPPOGRYPHONMON);
digivolvesTo(AQUILAMON, CROWMON);

digivolvesTo(AGUNIMON, BURNINGGREYMON);
digivolvesTo(AGUNIMON, SKULLMERAMON);
digivolvesTo(AGUNIMON, MATADORMON);
digivolvesTo(AGUNIMON, RIZEGREYMON);

digivolvesTo(ARCADIAMON_CHAMPION, ARCADIAMON_ULTIMATE);
digivolvesTo(ARCADIAMON_CHAMPION, INFERMON);
digivolvesTo(ARCADIAMON_CHAMPION, SKULLSATAMON);

digivolvesTo(ANKYLOMON, METEORMON);
digivolvesTo(ANKYLOMON, GROUNDRAMON);
digivolvesTo(ANKYLOMON, SHAKKOUMON);
digivolvesTo(ANKYLOMON, SKULLGREYMON);
digivolvesTo(ANKYLOMON, MAGNAANGEMON);

digivolvesTo(IKKAKUMON, ZUDOMON);
digivolvesTo(IKKAKUMON, TRICERAMON);
digivolvesTo(IKKAKUMON, WHAMON);
digivolvesTo(IKKAKUMON, MACHGAOGAMON);

digivolvesTo(WIZARDMON, MYOTISMON);
digivolvesTo(WIZARDMON, SKULLMERAMON);
digivolvesTo(WIZARDMON, PHANTOMON);
digivolvesTo(WIZARDMON, WISEMON);

digivolvesTo(LOBOMON, KENDOGARURUMON);
digivolvesTo(LOBOMON, KNIGHTMON);
digivolvesTo(LOBOMON, WEREGARURUMON);

digivolvesTo(WOODMON, CHERRYMON);
digivolvesTo(WOODMON, TAOMON);
digivolvesTo(WOODMON, PUMPKINMON);

digivolvesTo(AIRDRAMON, WINGDRAMON);
digivolvesTo(AIRDRAMON, MEGASEADRAMON);
digivolvesTo(AIRDRAMON, MEGADRAMON);
digivolvesTo(AIRDRAMON, METALGREYMON);

digivolvesTo(EXVEEMON, WINGDRAMON);
digivolvesTo(EXVEEMON, DINOBEEMON);
digivolvesTo(EXVEEMON, PAILDRAMON);
digivolvesTo(EXVEEMON, MAGNAANGEMON);
digivolvesTo(EXVEEMON, RIZEGREYMON);

digivolvesTo(ANGEMON, GARUDAMON);
digivolvesTo(ANGEMON, SHAKKOUMON);
digivolvesTo(ANGEMON, SAVIORHUCKMON);
digivolvesTo(ANGEMON, HIPPOGRYPHONMON);
digivolvesTo(ANGEMON, MAGNAANGEMON);

digivolvesTo(OGREMON, SKULLSATAMON);
digivolvesTo(OGREMON, DIGITAMAMON);
digivolvesTo(OGREMON, SKULLMERAMON);
digivolvesTo(OGREMON, WEREGARURUMON);

digivolvesTo(GUARDROMON, ANDROMON);
digivolvesTo(GUARDROMON, CATCHMAMEMON);
digivolvesTo(GUARDROMON, GRAPLEOMON);
digivolvesTo(GUARDROMON, DATAMON);
digivolvesTo(GUARDROMON, METALMAMEMON);

digivolvesTo(GUARDROMON_GOLD, ANDROMON);
digivolvesTo(GUARDROMON_GOLD, GRADEMON);
digivolvesTo(GUARDROMON_GOLD, DURAMON);
digivolvesTo(GUARDROMON_GOLD, MAGNAMON);
digivolvesTo(GUARDROMON_GOLD, RAPIDMON_ARMOR);

digivolvesTo(GAOGAMON, GRAPLEOMON);
digivolvesTo(GAOGAMON, MACHGAOGAMON);
digivolvesTo(GAOGAMON, WEREGARURUMON);

digivolvesTo(KABUTERIMON, MEGAKABUTERIMON);
digivolvesTo(KABUTERIMON, CHERRYMON);
digivolvesTo(KABUTERIMON, LILAMON);

digivolvesTo(SHELLNUMEMON, SHOGUNGEKOMON);
digivolvesTo(SHELLNUMEMON, BLACKKINGNUMEMON);
digivolvesTo(SHELLNUMEMON, MEGASEADRAMON);

digivolvesTo(GARGOMON, ANTYLAMON);
digivolvesTo(GARGOMON, WARGROWLMON);
digivolvesTo(GARGOMON, RAPIDMON);

digivolvesTo(GARURUMON, ZUDOMON);
digivolvesTo(GARURUMON, DORUGREYMON);
digivolvesTo(GARURUMON, PANJYAMON);
digivolvesTo(GARURUMON, WEREGARURUMON);

digivolvesTo(GARURUMON_BLK, PANDAMON);
digivolvesTo(GARURUMON_BLK, BLUEMERAMON);
digivolvesTo(GARURUMON_BLK, MACHGAOGAMON);
digivolvesTo(GARURUMON_BLK, WEREGARURUMON_BLK);

digivolvesTo(KYUBIMON, TAOMON);
digivolvesTo(KYUBIMON, MONZAEMON);
digivolvesTo(KYUBIMON, LADYDEVIMON);

digivolvesTo(GROWLMON, BURNINGGREYMON);
digivolvesTo(GROWLMON, GIGADRAMON);
digivolvesTo(GROWLMON, WARGROWLMON);
digivolvesTo(GROWLMON, METALGREYMON);
digivolvesTo(GROWLMON, METALTYRANNOMON);

digivolvesTo(KURISARIMON, ARCADIAMON_ULTIMATE);
digivolvesTo(KURISARIMON, INFERMON);
digivolvesTo(KURISARIMON, CYBERDRAMON);
digivolvesTo(KURISARIMON, TAOMON);

digivolvesTo(GREYMON, SKULLGREYMON);
digivolvesTo(GREYMON, MEGADRAMON);
digivolvesTo(GREYMON, METALGREYMON);
digivolvesTo(GREYMON, METALGREYMON_BLUE);

digivolvesTo(GREYMON_BLUE, TRICERAMON);
digivolvesTo(GREYMON_BLUE, DORUGREYMON);
digivolvesTo(GREYMON_BLUE, KNIGHTMON);
digivolvesTo(GREYMON_BLUE, METALGREYMON_BLUE);

digivolvesTo(CLOCKMON, ANDROMON);
digivolvesTo(CLOCKMON, KNIGHTMON);
digivolvesTo(CLOCKMON, DATAMON);
digivolvesTo(CLOCKMON, WISEMON);

digivolvesTo(KUWAGAMON, OKUWAMON);
digivolvesTo(KUWAGAMON, CANNONBEEMON);
digivolvesTo(KUWAGAMON, CHERRYMON);

digivolvesTo(GEKOMON, SHOGUNGEKOMON);
digivolvesTo(GEKOMON, WHAMON);
digivolvesTo(GEKOMON, MEGASEADRAMON);

digivolvesTo(GEREMON, ETEMON);
digivolvesTo(GEREMON, SUPERSTARMON);
digivolvesTo(GEREMON, METALMAMEMON);

digivolvesTo(COREDRAMON_BLUE, WINGDRAMON);
digivolvesTo(COREDRAMON_BLUE, AEROVEEDRAMON);
digivolvesTo(COREDRAMON_BLUE, BLUEMERAMON);

digivolvesTo(COREDRAMON_GREEN, GROUNDRAMON);
digivolvesTo(COREDRAMON_GREEN, TRICERAMON);
digivolvesTo(COREDRAMON_GREEN, WARGROWLMON);

digivolvesTo(GOLDNUMEMON, BLACKKINGNUMEMON);
digivolvesTo(GOLDNUMEMON, VADEMON);
digivolvesTo(GOLDNUMEMON, PLATINUMNUMEMON);

digivolvesTo(GOLEMON, METEORMON);
digivolvesTo(GOLEMON, PUMPKINMON);
digivolvesTo(GOLEMON, VOLCANOMON);

digivolvesTo(CYCLONEMON, DORUGREYMON);
digivolvesTo(CYCLONEMON, DATAMON);
digivolvesTo(CYCLONEMON, MEGADRAMON);

digivolvesTo(SANGLOUPMON, MYOTISMON);
digivolvesTo(SANGLOUPMON, KENDOGARURUMON);
digivolvesTo(SANGLOUPMON, MATADORMON);
digivolvesTo(SANGLOUPMON, WEREGARURUMON_BLK);

digivolvesTo(SUNFLOWMON, ANGEWOMON);
digivolvesTo(SUNFLOWMON, LILAMON);
digivolvesTo(SUNFLOWMON, LILLYMON);

digivolvesTo(SEADRAMON, SHOGUNGEKOMON);
digivolvesTo(SEADRAMON, WHAMON);
digivolvesTo(SEADRAMON, MEGASEADRAMON);
digivolvesTo(SEADRAMON, HISYARYUMON);

digivolvesTo(COELAMON, ANGEMON);
digivolvesTo(COELAMON, ANDROMON);
digivolvesTo(COELAMON, MEGASEADRAMON);
digivolvesTo(COELAMON, HISYARYUMON);

digivolvesTo(GEOGREYMON, GIGADRAMON);
digivolvesTo(GEOGREYMON, GROUNDRAMON);
digivolvesTo(GEOGREYMON, SKULLGREYMON);
digivolvesTo(GEOGREYMON, RIZEGREYMON);

digivolvesTo(SUKAMON, ETEMON);
digivolvesTo(SUKAMON, SUPERSTARMON);
digivolvesTo(SUKAMON, VADEMON);

digivolvesTo(STARMON, CATCHMAMEMON);
digivolvesTo(STARMON, CRESCEMON);
digivolvesTo(STARMON, SUPERSTARMON);
digivolvesTo(STARMON, MAMEMON);
digivolvesTo(STARMON, METALMAMEMON);

digivolvesTo(STINGMON, INFERMON);
digivolvesTo(STINGMON, OKUWAMON);
digivolvesTo(STINGMON, DINOBEEMON);
digivolvesTo(STINGMON, PAILDRAMON);

digivolvesTo(STRIKEDRAMON, CYBERDRAMON);
digivolvesTo(STRIKEDRAMON, SAVIORHUCKMON);
digivolvesTo(STRIKEDRAMON, WEREGARURUMON);

digivolvesTo(ZUBAEAGERMON, KENDOGARURUMON);
digivolvesTo(ZUBAEAGERMON, DURAMON);
digivolvesTo(ZUBAEAGERMON, PHANTOMON);

digivolvesTo(SOCERIMON, ANTYLAMON);
digivolvesTo(SOCERIMON, PIXIMON);
digivolvesTo(SOCERIMON, WISEMON);

digivolvesTo(TANKMON, ANDROMON);
digivolvesTo(TANKMON, GIGADRAMON);
digivolvesTo(TANKMON, CANNONBEEMON);
digivolvesTo(TANKMON, KNIGHTMON);
digivolvesTo(TANKMON, VOLCANOMON);

digivolvesTo(MUDFRIGIMON, METEORMON);
digivolvesTo(MUDFRIGIMON, PANDAMON);
digivolvesTo(MUDFRIGIMON, PUMPKINMON);

digivolvesTo(TYRANNOMON, MAMEMON);
digivolvesTo(TYRANNOMON, MEGADRAMON);
digivolvesTo(TYRANNOMON, METALGREYMON_BLUE);
digivolvesTo(TYRANNOMON, METALTYRANNOMON);

digivolvesTo(GATOMON, ANGEWOMON);
digivolvesTo(GATOMON, SILPHYMON);
digivolvesTo(GATOMON, PANDAMON);
digivolvesTo(GATOMON, LILLYMON);

digivolvesTo(DEVIMON, INFERMON);
digivolvesTo(DEVIMON, MYOTISMON);
digivolvesTo(DEVIMON, SKULLSATAMON);
digivolvesTo(DEVIMON, BLUEMERAMON);
digivolvesTo(DEVIMON, METALGREYMON_BLUE);

digivolvesTo(TURUIEMON, ANTYLAMON);
digivolvesTo(TURUIEMON, CYBERDRAMON);
digivolvesTo(TURUIEMON, MONZAEMON);

digivolvesTo(TOGEMON, PUMPKINMON);
digivolvesTo(TOGEMON, MACHGAOGAMON);
digivolvesTo(TOGEMON, LILLYMON);

digivolvesTo(DORUGAMON, GRADEMON);
digivolvesTo(DORUGAMON, CHIRINMON);
digivolvesTo(DORUGAMON, DORUGREYMON);
digivolvesTo(DORUGAMON, RIZEGREYMON);

digivolvesTo(NANIMON, METEORMON);
digivolvesTo(NANIMON, SUPERSTARMON);
digivolvesTo(NANIMON, DIGITAMAMON);

digivolvesTo(NUMEMON, ETEMON);
digivolvesTo(NUMEMON, BLACKKINGNUMEMON);
digivolvesTo(NUMEMON, MONZAEMON);

digivolvesTo(BIRDRAMON, BURNINGGREYMON);
digivolvesTo(BIRDRAMON, AEROVEEDRAMON);
digivolvesTo(BIRDRAMON, GARUDAMON);
digivolvesTo(BIRDRAMON, CHIRINMON);
digivolvesTo(BIRDRAMON, HIPPOGRYPHONMON);
digivolvesTo(BIRDRAMON, CROWMON);

digivolvesTo(BAOHUCKMON, KENDOGARURUMON);
digivolvesTo(BAOHUCKMON, SAVIORHUCKMON);
digivolvesTo(BAOHUCKMON, RIZEGREYMON);

digivolvesTo(BAKEMON, MYOTISMON);
digivolvesTo(BAKEMON, PUMPKINMON);
digivolvesTo(BAKEMON, PHANTOMON);
digivolvesTo(BAKEMON, BLUEMERAMON);
digivolvesTo(BAKEMON, MATADORMON);
digivolvesTo(BAKEMON, LADYDEVIMON);

digivolvesTo(VEEDRAMON, AEROVEEDRAMON);
digivolvesTo(VEEDRAMON, CYBERDRAMON);
digivolvesTo(VEEDRAMON, WARGROWLMON);
digivolvesTo(VEEDRAMON, METALTYRANNOMON);

digivolvesTo(HUDIEMON, CANNONBEEMON);
digivolvesTo(HUDIEMON, LILAMON);
digivolvesTo(HUDIEMON, LILLYMON);

digivolvesTo(PLATINUMSUKAMON, ETEMON);
digivolvesTo(PLATINUMSUKAMON, CATCHMAMEMON);
digivolvesTo(PLATINUMSUKAMON, VADEMON);
digivolvesTo(PLATINUMSUKAMON, METALMAMEMON);

digivolvesTo(BLACKGATOMON, CYBERDRAMON);
digivolvesTo(BLACKGATOMON, KNIGHTMON);
digivolvesTo(BLACKGATOMON, LADYDEVIMON);
digivolvesTo(BLACKGATOMON, WEREGARURUMON_BLK);

digivolvesTo(VEGIEMON, MEGAKABUTERIMON);
digivolvesTo(VEGIEMON, DIGITAMAMON);
digivolvesTo(VEGIEMON, LILAMON);

digivolvesTo(PECKMON, ANTYLAMON);
digivolvesTo(PECKMON, PIXIMON);
digivolvesTo(PECKMON, CROWMON);

digivolvesTo(MERAMON, BURNINGGREYMON);
digivolvesTo(MERAMON, SKULLMERAMON);
digivolvesTo(MERAMON, PANJYAMON);
digivolvesTo(MERAMON, BLUEMERAMON);
digivolvesTo(MERAMON, VOLCANOMON);
digivolvesTo(MERAMON, MAMEMON);

digivolvesTo(MONOCHROMON, SKULLGREYMON);
digivolvesTo(MONOCHROMON, TRICERAMON);
digivolvesTo(MONOCHROMON, METALTYRANNOMON);

digivolvesTo(FRIGIMON, ANGEWOMON);
digivolvesTo(FRIGIMON, CRESCEMON);
digivolvesTo(FRIGIMON, ZUDOMON);
digivolvesTo(FRIGIMON, MONZAEMON);

digivolvesTo(UNIMON, PIXIMON);
digivolvesTo(UNIMON, HIPPOGRYPHONMON);
digivolvesTo(UNIMON, MAGNAANGEMON);

digivolvesTo(RAPTORDRAMON, GIGADRAMON);
digivolvesTo(RAPTORDRAMON, GRADEMON);
digivolvesTo(RAPTORDRAMON, DURAMON);
digivolvesTo(RAPTORDRAMON, DORUGREYMON);

digivolvesTo(RAREMON, SKULLSATAMON);
digivolvesTo(RAREMON, DRAGOMON);
digivolvesTo(RAREMON, PHANTOMON);
digivolvesTo(RAREMON, BLACKKINGNUMEMON);
digivolvesTo(RAREMON, METALGREYMON_BLUE);

digivolvesTo(LEOMON, METEORMON);
digivolvesTo(LEOMON, GRAPLEOMON);
digivolvesTo(LEOMON, GRADEMON);
digivolvesTo(LEOMON, PANJYAMON);
digivolvesTo(LEOMON, METALGREYMON);

digivolvesTo(LEKISMON, ANTYLAMON);
digivolvesTo(LEKISMON, CRESCEMON);
digivolvesTo(LEKISMON, MACHGAOGAMON);

digivolvesTo(REPPAMON, CHIRINMON);
digivolvesTo(REPPAMON, PIXIMON);
digivolvesTo(REPPAMON, RAPIDMON);

digivolvesTo(WASPMON, MEGAKABUTERIMON);
digivolvesTo(WASPMON, OKUWAMON);
digivolvesTo(WASPMON, CANNONBEEMON);
digivolvesTo(WASPMON, RAPIDMON);
//#endregion

//#region Ultimate to Mega
//#endregion

//#region Mega to Ultra
//#endregion

//#region Other
digivolvesTo(SHOUTMON, OMNISHOUTMON);

digivolvesTo(RYUDAMON, RAPTORDRAMON);
digivolvesTo(RYUDAMON, REPPAMON);
digivolvesTo(RYUDAMON, GINRYUMON);

digivolvesTo(GINRYUMON, CANNONBEEMON);
digivolvesTo(GINRYUMON, MEGASEADRAMON);
digivolvesTo(GINRYUMON, HISYARYUMON);

digivolvesTo(HISYARYUMON, GAIOMON);
digivolvesTo(HISYARYUMON, GOLDRAMON);
digivolvesTo(HISYARYUMON, MINERVAMON);
digivolvesTo(HISYARYUMON, OURYUMON);

digivolvesTo(OURYUMON, ALPHAMON_OURYUKEN);

digivolvesTo(SISTERMON_BLANC, GARGOMON);
digivolvesTo(SISTERMON_BLANC, LEKISMON);
digivolvesTo(SISTERMON_BLANC, SISTERMON_B_AWAKE);
digivolvesTo(SISTERMON_BLANC, SISTERMON_CIEL);

digivolvesTo(SISTERMON_CIEL, PANDAMON);
digivolvesTo(SISTERMON_CIEL, LADYDEVIMON);
digivolvesTo(SISTERMON_CIEL, SISTERMON_C_AWAKE);
//#endregion
//#endregion
