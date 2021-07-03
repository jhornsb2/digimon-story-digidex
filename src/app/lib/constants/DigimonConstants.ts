import { Digimon, Attribute, Stage, DigimonType } from "..";
import * as supportSkills from './SupportSkillConstants';

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

export const MON: Digimon = {
	fieldGuideNumber: 10,
	name: 'mon',
	description: '',
	attribute: Attribute.Neutral,
	stage: Stage.Training2,
	type: DigimonType.Free,
	memoryUsage: 3,
	equipmentSlots: 0,
	supportSkill: supportSkills.innocentEyes,
	digivolvesFrom: [],
	digivolvesTo: []
};

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
//TODO: digivolvesTo(KOROMON, SHOUTMON);

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
//TODO: digivolvesTo(TOKOMON, SISTERMON_BLANC);

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
//TODO: digivolvesTo(WANYAMON, RYUDAMON);
//#endregion
//#endregion
