import { Skill, Attribute, SkillType } from "..";

export const accelerationBoost: Skill = {
	name: 'Acceleration Boost',
	spCost: 6,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Doubles damage output in the next turn.'
};

export const adhesiveBubbleBlow: Skill = {
	name: 'Adhesive Bubble Blow',
	spCost: 2,
	power: 25,
	attribute: Attribute.Plant,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 25 Plant damage to one foe. 10% chance of reducing target\'s SPD by 10%.'
};

export const agilityCharge: Skill = {
	name: 'Agility Charge',
	spCost: 6,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Increases EVA of one battle member by 10%.'
};

export const aguichantLèvres: Skill = {
	name: 'Aguichant Lèvres',
	spCost: 40,
	power: 0,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'INT-penetrating strong Light attack on one foe. Absorbs 50% of the damage as HP.'
};

export const airBubbles: Skill = {
	name: 'Air Bubbles',
	spCost: 2,
	power: 30,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 30 Water damage to one foe.'
};

export const airShot: Skill = {
	name: 'Air Shot',
	spCost: 5,
	power: 50,
	attribute: Attribute.Wind,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 50 Wind damage to one foe. 10% chance of increasing SPD by 10%.'
};

export const ambushCrunch: Skill = {
	name: 'Ambush Crunch',
	spCost: 10,
	power: 90,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 90 Neutral damage to one foe. Tends to critical more often.'
};

export const amethystMandala: Skill = {
	name: 'Amethyst Mandala',
	spCost: 20,
	power: 70,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 70 Light damage to all foes. Undoes base stat boosts on target.'
};

export const animalNail: Skill = {
	name: 'Animal Nail',
	spCost: 15,
	power: 115,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 115 Earth damage to one foe.'
};

export const antiBug: Skill = {
	name: 'Anti-Bug',
	spCost: 4,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Recover Bug from one party member and restore some HP.'
};

export const antiPanic: Skill = {
	name: 'Anti-Panic',
	spCost: 4,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Recover Panic from one party member and restore some HP.'
};

export const antiParalysis: Skill = {
	name: 'Anti-Paralysis',
	spCost: 4,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Recover Paralyze from one party member and restore some HP.'
};

export const antiPoison: Skill = {
	name: 'Anti-Poison',
	spCost: 4,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Recover Poison from one party member and restore some HP.'
};

export const antiSleep: Skill = {
	name: 'Anti-Sleep',
	spCost: 4,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Recover Sleep from one party member and restore some HP.'
};

export const antiStun: Skill = {
	name: 'Anti-Stun',
	spCost: 4,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Recover Stun from one party member and restore some HP.'
};

export const antidote: Skill = {
	name: 'Antidote',
	spCost: 4,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Recover Dot from one party member and restore some HP.'
};

export const arcticBlizzard: Skill = {
	name: 'Arctic Blizzard',
	spCost: 20,
	power: 125,
	attribute: Attribute.Water,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 125 Water damage to one foe. 40% chance of stunning target.'
};

export const atomicBlaster: Skill = {
	name: 'Atomic Blaster',
	spCost: 15,
	power: 250,
	attribute: Attribute.Electric,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 250 Electric damage to one foe. Cannot move from recoil for one turn.'
};

export const atomicRay: Skill = {
	name: 'Atomic Ray',
	spCost: 20,
	power: 125,
	attribute: Attribute.Electric,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 125 Electric damage to one foe. 40% chance of stunning target.'
};

export const attackBreak: Skill = {
	name: 'Attack Break',
	spCost: 6,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Reduces ATK of one enemy by 10%.'
};

export const attackBreakField: Skill = {
	name: 'Attack Break Field',
	spCost: 20,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Reduces ATK of all enemies by 10%.'
};

export const attackCharge: Skill = {
	name: 'Attack Charge',
	spCost: 6,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Increases ATK of one member by 10%.'
};

export const attackChargeField: Skill = {
	name: 'Attack Charge Field',
	spCost: 20,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Increases ATK of all battle members by 10%.'
};

export const aura: Skill = {
	name: 'Aura',
	spCost: 10,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Restores a little HP for all party members.'
};

export const auroraBlaster: Skill = {
	name: 'Aurora Blaster',
	spCost: 25,
	power: 120,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 120 Light damage to one foe. Undoes stat boosts on target.'
};

export const auroraUndulation: Skill = {
	name: 'Aurora Undulation',
	spCost: 20,
	power: 80,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic Attack, 80 Light damage to all foes. Always hits. Removes all abnormal statuses.'
};

export const awesomeQuake1: Skill = {
	name: 'Awesome Quake I',
	spCost: 4,
	power: 30,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 30 Earth damage to all foes. 95% accuracy.'
};

export const awesomeQuake2: Skill = {
	name: 'Awesome Quake II',
	spCost: 7,
	power: 45,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 45 Earth damage to all foes. 95% accuracy.'
};

export const awesomeQuake3: Skill = {
	name: 'Awesome Quake III',
	spCost: 10,
	power: 75,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 75 Earth damage to all foes. 95% accuracy.'
};

export const babyBreath: Skill = {
	name: 'Baby Breath',
	spCost: 5,
	power: 75,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 75 Fire damage to one foe.'
};

export const bananaSlip: Skill = {
	name: 'Banana Slip',
	spCost: 20,
	power: 115,
	attribute: Attribute.Dark,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 115 Dark damage to one foe. 80% chance of stunning target.'
};

export const bantyoBlade: Skill = {
	name: 'Bantyo Blade',
	spCost: 20,
	power: 150,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 150 Neutral damage to one foe. Damage tends to fluctuate.'
};

export const berserkSword: Skill = {
	name: 'Berserk Sword',
	spCost: 15,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Direct,
	isInheritable: false,
	description: 'Inflict Death on one enemy. 30% accuracy.'
};

export const bifrost: Skill = {
	name: 'Bifrost',
	spCost: 25,
	power: 120,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 120 Light damage to one foe. Increases SPD by 10%.'
};

export const bigBangVoice: Skill = {
	name: 'Big Bang Voice',
	spCost: 30,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating medium Neutral attack on all foes. 20% chance of inflicting Paralysis.'
};

export const bitFire: Skill = {
	name: 'Bit Fire',
	spCost: 10,
	power: 30,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '3 physical attacks, 30 Fire damage to one foe.'
};

export const bite: Skill = {
	name: 'Bite',
	spCost: 2,
	power: 40,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 40 Neutral damage to one foe.'
};

export const bitingCrush: Skill = {
	name: 'Biting Crush',
	spCost: 25,
	power: 145,
	attribute: Attribute.Water,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 145 Water damage to one foe. 15% chance of instantly killing target.'
};

export const blackAuraBlast: Skill = {
	name: 'Black Aura Blast',
	spCost: 25,
	power: 110,
	attribute: Attribute.Dark,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 110 Dark damage to one foe. Reduces target\'s DEF by 20%.'
};

export const blackPearlBlast: Skill = {
	name: 'Black Pearl Blast',
	spCost: 5,
	power: 25,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 25 Water damage to all foes.'
};

export const blackRain: Skill = {
	name: 'Black Rain',
	spCost: 25,
	power: 110,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 110 Dark damage to all foes. 20% chance of confusing target.'
};

export const blackTornado: Skill = {
	name: 'Black Tornado',
	spCost: 35,
	power: 0,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating extra strong Dark attack on one foe.'
};

export const bladeOfTheDragonKing: Skill = {
	name: 'Blade of the Dragon King',
	spCost: 25,
	power: 120,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 120 Light damage to one foe.'
};

export const blazeSonicBreath: Skill = {
	name: 'Blaze Sonic Breath',
	spCost: 15,
	power: 100,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 100 Fire damage to one foe. Increases SPD by 10%.'
};

export const blazingIce: Skill = {
	name: 'Blazing Ice',
	spCost: 5,
	power: 60,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 60 Water damage to one foe.'
};

export const blinded: Skill = {
	name: 'Blinded',
	spCost: 15,
	power: 115,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 115 Neutral damage to one foe. Tends to critical more often.'
};

export const blindingRay: Skill = {
	name: 'Blinding Ray',
	spCost: 5,
	power: 65,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 65 Light damage to one foe.'
};

export const blueBlaster: Skill = {
	name: 'Blue Blaster',
	spCost: 5,
	power: 65,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 65 Fire damage to one foe. 10% chance of reducing target\'s DEF by 10%.'
};

export const blueFlareBreath: Skill = {
	name: 'Blue Flare Breath',
	spCost: 10,
	power: 85,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 85 Fire damage to one foe. Always hits. Reduces target\'s DEF by 10%.'
};

export const brainRupture: Skill = {
	name: 'Brain Rupture',
	spCost: 20,
	power: 115,
	attribute: Attribute.Electric,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 115 Electric damage to one foe. 50% chance of confusing target.'
};

export const branchDrain: Skill = {
	name: 'Branch Drain',
	spCost: 10,
	power: 75,
	attribute: Attribute.Plant,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 75 Plant damage to one foe, absorbs 20% into HP.'
};

export const braveMetal: Skill = {
	name: 'Brave Metal',
	spCost: 20,
	power: 200,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 200 Dark damage to one foe. Cannot move from recoil for one turn.'
};

export const breathOfTheGods: Skill = {
	name: 'Breath of the Gods',
	spCost: 10,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: false,
	description: 'Nullifies any damage received until next turn.'
};

export const bubbleBlow: Skill = {
	name: 'Bubble Blow',
	spCost: 2,
	power: 30,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 30 Water damage to one foe.'
};

export const bubbles: Skill = {
	name: 'Bubbles',
	spCost: 2,
	power: 30,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 30 Water damage to one foe.'
};

export const bunnyBlades: Skill = {
	name: 'Bunny Blades',
	spCost: 15,
	power: 55,
	attribute: Attribute.Wind,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '2 physical attacks, 55 Wind damage to one foe.'
};

export const burningFist: Skill = {
	name: 'Burning Fist',
	spCost: 10,
	power: 80,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 80 Fire damage to one foe. 30% chance of increasing ATK by 10%.'
};

export const burstFlame1: Skill = {
	name: 'Burst Flame I',
	spCost: 3,
	power: 55,
	attribute: Attribute.Fire,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 55 Fire damage to one foe. 95% accuracy.'
};

export const burstFlame2: Skill = {
	name: 'Burst Flame II',
	spCost: 6,
	power: 75,
	attribute: Attribute.Fire,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 75 Fire damage to one foe. 95% accuracy.'
};

export const burstFlame3: Skill = {
	name: 'Burst Flame III',
	spCost: 9,
	power: 95,
	attribute: Attribute.Fire,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 95 Fire damage to one foe. 95% accuracy.'
};

export const burstShot: Skill = {
	name: 'Burst Shot',
	spCost: 20,
	power: 50,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '2 physical attacks, 50 Fire damage to all foes.'
};

export const catastropheCannon: Skill = {
	name: 'Catastrophe Cannon',
	spCost: 20,
	power: 80,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '3 physical attacks, 80 Fire damage to a foe. Cannot move from recoil for one turn.'
};

export const celestialArrow: Skill = {
	name: 'Celestial Arrow',
	spCost: 15,
	power: 100,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 100 Light damage to one foe. Always hits.'
};

export const celestialBlade: Skill = {
	name: 'Celestial Blade',
	spCost: 30,
	power: 110,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 110 Light damage to all foes. Always hits.'
};

export const chainLoss: Skill = {
	name: 'Chain Loss',
	spCost: 8,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Reduce COMBO for one enemy by 100%.'
};

export const chainMax: Skill = {
	name: 'Chain Max',
	spCost: 8,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Increase COMBO for one member by 100%.'
};

export const chainMinus: Skill = {
	name: 'Chain Minus',
	spCost: 4,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Reduce COMBO for one enemy by 50%.'
};

export const chainPlus: Skill = {
	name: 'Chain Plus',
	spCost: 4,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Increase COMBO for one member by 50%.'
};

export const chaosDegradation: Skill = {
	name: 'Chaos Degradation',
	spCost: 25,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Direct,
	isInheritable: false,
	description: 'Reduces HP of all foes by 25%.'
};

export const characterReversal: Skill = {
	name: 'Character Reversal',
	spCost: 10,
	power: 30,
	attribute: Attribute.Neutral,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 30 Neutral damage to one foe. Makes target buggy. 70% accuracy.'
};

export const cheeseBomb: Skill = {
	name: 'Cheese Bomb',
	spCost: 5,
	power: 70,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 70 Fire damage to one foe.'
};

export const cherryBomb: Skill = {
	name: 'Cherry Bomb',
	spCost: 15,
	power: 65,
	attribute: Attribute.Plant,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 65 Plant damage to all foes.'
};

export const chronoBreaker: Skill = {
	name: 'Chrono Breaker',
	spCost: 10,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Fixed,
	isInheritable: false,
	description: 'Fixed damage of 150 to one foe. 30% chance of reducing target\'s SPD by 10%.'
};

export const cogCrusher: Skill = {
	name: 'Cog Crusher',
	spCost: 5,
	power: 70,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 70 Dark damage to one foe. Always hits.'
};

export const coldFlame: Skill = {
	name: 'Cold Flame',
	spCost: 15,
	power: 100,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 100 Fire damage to one foe. Increases INT by 10%.'
};

export const cometHammer1: Skill = {
	name: 'Comet Hammer I',
	spCost: 3,
	power: 65,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 65 Earth damage to one foe. 95% accuracy.'
};

export const cometHammer2: Skill = {
	name: 'Comet Hammer II',
	spCost: 6,
	power: 85,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 85 Earth damage to one foe. 95% accuracy.'
};

export const cometHammer3: Skill = {
	name: 'Comet Hammer III',
	spCost: 9,
	power: 105,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 105 Earth damage to one foe. 95% accuracy.'
};

export const coronaBlaster: Skill = {
	name: 'Corona Blaster',
	spCost: 15,
	power: 30,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '3-6 physical attacks, 30 Fire damage to one foe.'
};

export const coronaDestroyer: Skill = {
	name: 'Corona Destroyer',
	spCost: 40,
	power: 0,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating strong Dark attack on one foe. Absorbs 20% of the damage as HP.'
};

export const crazyGiggle: Skill = {
	name: 'Crazy Giggle',
	spCost: 5,
	power: 75,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 75 Dark damage to one foe.'
};

export const crescentLeaf1: Skill = {
	name: 'Crescent Leaf I',
	spCost: 3,
	power: 65,
	attribute: Attribute.Plant,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 65 Plant damage to one foe. 95% accuracy.'
};

export const crescentLeaf2: Skill = {
	name: 'Crescent Leaf II',
	spCost: 6,
	power: 85,
	attribute: Attribute.Plant,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 85 Plant damage to one foe. 95% accuracy.'
};

export const crescentLeaf3: Skill = {
	name: 'Crescent Leaf III',
	spCost: 9,
	power: 105,
	attribute: Attribute.Plant,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 105 Plant damage to one foe. 95% accuracy.'
};

export const crimsonCurse: Skill = {
	name: 'Crimson Curse',
	spCost: 10,
	power: 45,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 45 Fire damage to all foes.'
};

export const criticalCharge: Skill = {
	name: 'Critical Charge',
	spCost: 6,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Increases CRIT of one battle member by 10%.'
};

export const crossBlade: Skill = {
	name: 'Cross Blade',
	spCost: 15,
	power: 110,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 110 Light damage to one foe. Tends to critical more often.'
};

export const crossCounter: Skill = {
	name: 'Cross-Counter',
	spCost: 6,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Counterattacks the enemy when you receive a physical attack.'
};

export const crystalCloud: Skill = {
	name: 'Crystal Cloud',
	spCost: 10,
	power: 30,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 30 Water damage to all foes.'
};

export const crystalRevolution: Skill = {
	name: 'Crystal Revolution',
	spCost: 25,
	power: 90,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 90 Water damage to all foes. 20% of damage restored as HP.'
};

export const dGrenade: Skill = {
	name: 'D-Grenade',
	spCost: 10,
	power: 40,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 40 Fire damage to all foes. Always hits.'
};

export const darkProminence: Skill = {
	name: 'Dark Prominence',
	spCost: 40,
	power: 0,
	attribute: Attribute.Dark,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'INT-penetrating extra strong Dark attack on one foe. 50% chance of inflicting Crystallization.'
};

export const darkPupil: Skill = {
	name: 'Dark Pupil',
	spCost: 15,
	power: 110,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 110 Dark damage to one foe. 80% chance of poisoning target.'
};

export const darkRoar: Skill = {
	name: 'Dark Roar',
	spCost: 15,
	power: 130,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 130 Dark damage to one foe. 90% accuracy, tends to critical more often.'
};

export const darkTerraForce: Skill = {
	name: 'Dark Terra Force',
	spCost: 20,
	power: 100,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 100 Dark damage to all foes. 30% chance of increasing DEF by 20%.'
};

export const darknessWave: Skill = {
	name: 'Darkness Wave',
	spCost: 15,
	power: 35,
	attribute: Attribute.Dark,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: '2 magic attacks, 35 Dark damage to all foes.'
};

export const darknessZone: Skill = {
	name: 'Darkness Zone',
	spCost: 40,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Fixed,
	isInheritable: false,
	description: 'Fixed damage of 444 to all foes.'
};

export const dataCrusher: Skill = {
	name: 'Data Crusher',
	spCost: 10,
	power: 90,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 90 Dark damage to one foe. 5% chance of instantly killing target.'
};

export const dataDrain: Skill = {
	name: 'Data Drain',
	spCost: 5,
	power: 35,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 35 Dark damage to one foe, with 30% of damage restored as HP.'
};

export const deadOrAlive: Skill = {
	name: 'Dead or Alive',
	spCost: 25,
	power: 130,
	attribute: Attribute.Neutral,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 130 Neutral damage to one foe. 10% to inflict a status effect, 5% chance of instantly killing target.'
};

export const deathCharm: Skill = {
	name: 'Death Charm',
	spCost: 10,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Direct,
	isInheritable: false,
	description: 'Reduce 10% HP from one enemy.'
};

export const deathClaw: Skill = {
	name: 'Death Claw',
	spCost: 10,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Fixed,
	isInheritable: false,
	description: 'Fixed damage of 200 to one foe. Absorbs 20% of the damage as HP.'
};

export const deathParadeBlaster: Skill = {
	name: 'Death Parade Blaster',
	spCost: 15,
	power: 40,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '2 physical attacks, 40 Light damage to all foes.'
};

export const demiDarts: Skill = {
	name: 'Demi Darts',
	spCost: 5,
	power: 20,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 20 Dark damage to all foes, absorbs 5% into HP.'
};

export const demonicDisaster: Skill = {
	name: 'Demonic Disaster',
	spCost: 25,
	power: 140,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 140 Dark damage to one foe.'
};

export const desolationClaw: Skill = {
	name: 'Desolation Claw',
	spCost: 15,
	power: 115,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 115 Neutral damage to one foe. 10% chance of instantly killing target.'
};

export const destroyedHook: Skill = {
	name: 'Destroyed Hook',
	spCost: 35,
	power: 0,
	attribute: Attribute.Electric,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating strong Electric attack on one foe. 80% accuracy. Inflicts poison.'
};

export const destroyedRush: Skill = {
	name: 'Destroyed Rush',
	spCost: 20,
	power: 25,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '5 physical attacks, 25 Earth damage to one foe. Tends to critical more often.'
};

export const destruction: Skill = {
	name: 'Destruction',
	spCost: 10,
	power: 40,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 40 Dark damage to one foe. 10% chance to inflict Death.'
};

export const destructionCannon1: Skill = {
	name: 'Destruction Cannon I',
	spCost: 3,
	power: 65,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 65 Dark damage to one foe. 95% accuracy.'
};

export const destructionCannon2: Skill = {
	name: 'Destruction Cannon II',
	spCost: 6,
	power: 85,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 85 Dark damage to one foe. 95% accuracy.'
};

export const destructionCannon3: Skill = {
	name: 'Destruction Cannon III',
	spCost: 9,
	power: 105,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 105 Dark damage to one foe. 95% accuracy.'
};

export const destructionCrush: Skill = {
	name: 'Destruction Crush',
	spCost: 20,
	power: 80,
	attribute: Attribute.Earth,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 85 Earth damage to all foes.'
};

export const diamondShell: Skill = {
	name: 'Diamond Shell',
	spCost: 5,
	power: 60,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 60 Earth damage to one foe. 10% chance of increasing DEF by 10%.'
};

export const diamondStorm: Skill = {
	name: 'Diamond Storm',
	spCost: 5,
	power: 25,
	attribute: Attribute.Plant,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 25 Plant damage to all foes.'
};

export const digitalBomb: Skill = {
	name: 'Digital Bomb',
	spCost: 15,
	power: 80,
	attribute: Attribute.Fire,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 80 Fire damage to one foe. 5% chance of reducing base stats by 10%.'
};

export const dimensionScissor: Skill = {
	name: 'Dimension Scissor',
	spCost: 35,
	power: 0,
	attribute: Attribute.Plant,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating strong Plant attack on one foe. Tends to critical more often.'
};

export const disasterBlaster: Skill = {
	name: 'Disaster Blaster',
	spCost: 15,
	power: 65,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 65 Light damage to all foes.'
};

export const dispel: Skill = {
	name: 'Dispel',
	spCost: 25,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Remove basic debuffs from one party member and restore some HP.'
};

export const divineAtonement: Skill = {
	name: 'Divine Atonement',
	spCost: 50,
	power: 200,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 200 Light damage to all foes. Decreases INT by 50%. 90% accuracy.'
};

export const divineDragonSlash: Skill = {
	name: 'Divine Dragon Slash',
	spCost: 35,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating strong Neutral attack on one foe. Increases SPD by 10%.'
};

export const divinePierce: Skill = {
	name: 'Divine Pierce',
	spCost: 5,
	power: 65,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 65 Light damage to one foe.'
};

export const divinePierceAwake: Skill = {
	name: 'Divine Pierce (Awake)',
	spCost: 20,
	power: 90,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 90 Light damage to one foe.'
};

export const dotMatrix: Skill = {
	name: 'Dot Matrix',
	spCost: 35,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating strong Neutral attack on one foe. Absorbs 30% of the damage as HP.'
};

export const doubleBackhand: Skill = {
	name: 'Double Backhand',
	spCost: 5,
	power: 20,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '2 physical attacks, 20 Neutral damage to all foes.'
};

export const doubleImpact: Skill = {
	name: 'Double Impact',
	spCost: 25,
	power: 20,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '8 physical attacks, 20 Dark damage to one foe. 90% accuracy.'
};

export const doubleScissorClaw: Skill = {
	name: 'Double Scissor Claw',
	spCost: 30,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating strong Neutral attack on one foe.'
};

export const dragonImpulse: Skill = {
	name: 'Dragon Impulse',
	spCost: 15,
	power: 250,
	attribute: Attribute.Wind,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 250 Wind damage to one foe. Receive damage equal to 50% of HP from recoil.'
};

export const dragonsRoar: Skill = {
	name: 'Dragon\'s Roar',
	spCost: 25,
	power: 60,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '2 physical attacks, 60 Fire damage to a foe and absorbs 50% of the damage as HP.'
};

export const dragonicImpact: Skill = {
	name: 'Dragonic Impact',
	spCost: 50,
	power: 100,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 100 Fire damage to all foes. Also knocks back targets.'
};

export const dumdumUppercut: Skill = {
	name: 'Dumdum Uppercut',
	spCost: 10,
	power: 90,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 90 Neutral damage to one foe. 10% chance of stunning target.'
};

export const earthShatteringStomp: Skill = {
	name: 'Earth-Shattering Stomp',
	spCost: 15,
	power: 30,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '3-5 physical attacks, 30 Dark damage to one foe, with 20% of damage restored as HP.'
};

export const edensJavelin: Skill = {
	name: 'Eden\'s Javelin',
	spCost: 20,
	power: 120,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 120 Light damage to one foe. 30% chance of increasing INT by 20%.'
};

export const eiseiryuoujin: Skill = {
	name: 'Eiseiryuoujin',
	spCost: 35,
	power: 0,
	attribute: Attribute.Electric,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating strong Electric attack on one foe. Tends to critical hit more often.'
};

export const elasticBubbles: Skill = {
	name: 'Elastic Bubbles',
	spCost: 2,
	power: 30,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 30 Water damage to one foe.'
};

export const electricShock: Skill = {
	name: 'Electric Shock',
	spCost: 5,
	power: 55,
	attribute: Attribute.Electric,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 55 Electric damage to one foe. 10% chance of paralyzing target.'
};

export const electricStunBlast: Skill = {
	name: 'Electric Stun Blast',
	spCost: 5,
	power: 65,
	attribute: Attribute.Electric,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 65 Electric damage to one foe. 15% chance of paralyzing target.'
};

export const electroShocker: Skill = {
	name: 'Electro Shocker',
	spCost: 10,
	power: 80,
	attribute: Attribute.Electric,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 80 Electric damage to one foe.'
};

export const energyBomb: Skill = {
	name: 'Energy Bomb',
	spCost: 15,
	power: 100,
	attribute: Attribute.Electric,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 100 Electric damage to one foe. Always hits.'
};

export const escapeDash: Skill = {
	name: 'Escape Dash',
	spCost: 0,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Flee from a battle.'
};

export const eternalNightmare: Skill = {
	name: 'Eternal Nightmare',
	spCost: 50,
	power: 0,
	attribute: Attribute.Dark,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'INT-penetrating medium Dark attack on all foes. 50% chance of putting target to sleep.'
};

export const exhaustFlame: Skill = {
	name: 'Exhaust Flame',
	spCost: 10,
	power: 85,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 85 Fire damage to one foe. 10% chance of increasing ATK by 10%.'
};

export const extinctionWave: Skill = {
	name: 'Extinction Wave',
	spCost: 25,
	power: 80,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 80 Light damage to all foes. Always hits.'
};

export const eyeOfNightmares: Skill = {
	name: 'Eye of Nightmares',
	spCost: 5,
	power: 50,
	attribute: Attribute.Dark,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 50 Dark damage to one foe, 10% of damage restored as HP. Confuses target.'
};

export const eyeOfTheGorgon: Skill = {
	name: 'Eye of the Gorgon',
	spCost: 20,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: false,
	description: 'Decreases one foe\'s DEF by 30% and inflicts Confusion.'
};

export const fangStrike: Skill = {
	name: 'Fang Strike',
	spCost: 10,
	power: 90,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 90 Fire damage to one foe. 10% chance to stun.'
};

export const featherSlash: Skill = {
	name: 'Feather Slash',
	spCost: 10,
	power: 0,
	attribute: Attribute.Wind,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating medium Wind attack on one foe.'
};

export const fenrirSword: Skill = {
	name: 'Fenrir Sword',
	spCost: 15,
	power: 130,
	attribute: Attribute.Water,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 130 Water damage to one foe. 15% chance of instantly killing target.'
};

export const fieryFastball: Skill = {
	name: 'Fiery Fastball',
	spCost: 5,
	power: 70,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 70 Fire damage to one foe.'
};

export const fifCross: Skill = {
	name: 'Fif Cross',
	spCost: 10,
	power: 55,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '2 physical attacks, 55 Earth damage to one foe. 90% accuracy.'
};

export const fifthRush: Skill = {
	name: 'Fifth Rush',
	spCost: 5,
	power: 20,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '5 physical attacks, 20 Earth damage to one foe. 80% accuracy.'
};

export const finalAura: Skill = {
	name: 'Final Aura',
	spCost: 40,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Restores a lot of HP for all party members.'
};

export const finalHeal: Skill = {
	name: 'Final Heal',
	spCost: 16,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Restores a lot of HP for one party member.'
};

export const finalShiningBurst: Skill = {
	name: 'Final Shining Burst',
	spCost: 50,
	power: 200,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 200 Fire damage to all foes. Decreases ATK by 50%. 90% accuracy.'
};

export const fireBreath: Skill = {
	name: 'Fire Breath',
	spCost: 10,
	power: 90,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 90 Fire damage to one foe. Tends to critical more often.'
};

export const fireTornado: Skill = {
	name: 'Fire Tornado',
	spCost: 20,
	power: 95,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 95 Light damage to all foes.'
};

export const firedrakeStrike: Skill = {
	name: 'Firedrake Strike',
	spCost: 25,
	power: 140,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 140 Fire damage to one foe.'
};

export const fistOfAthena: Skill = {
	name: 'Fist of Athena',
	spCost: 40,
	power: 0,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating extra strong Fire attack on one foe.'
};

export const fistOfIce: Skill = {
	name: 'Fist of Ice',
	spCost: 15,
	power: 110,
	attribute: Attribute.Water,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 110 Water damage to one foe. 15% chance of stunning target.'
};

export const fistOfTheBeastKing: Skill = {
	name: 'Fist of the Beast King',
	spCost: 10,
	power: 95,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 95 Earth damage to one foe.'
};

export const flameCannon: Skill = {
	name: 'Flame Cannon',
	spCost: 20,
	power: 100,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 100 Fire damage to all foes.'
};

export const flameInferno: Skill = {
	name: 'Flame Inferno',
	spCost: 25,
	power: 90,
	attribute: Attribute.Fire,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 90 Fire damage to all foes.'
};

export const flamingFist: Skill = {
	name: 'Flaming Fist',
	spCost: 10,
	power: 70,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 70 Fire damage to all foes.'
};

export const flashyBossPunch: Skill = {
	name: 'Flashy Boss Punch',
	spCost: 20,
	power: 130,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 130 Light damage to one foe. 75% chance of stunning target.'
};

export const flowerCannon: Skill = {
	name: 'Flower Cannon',
	spCost: 15,
	power: 105,
	attribute: Attribute.Plant,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 105 Plant damage to one foe. 50% chance of paralyzing target.'
};

export const flyingKick: Skill = {
	name: 'Flying Kick',
	spCost: 10,
	power: 95,
	attribute: Attribute.Plant,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 95 Plant damage to one foe.'
};

export const forbiddenTrident: Skill = {
	name: 'Forbidden Trident',
	spCost: 15,
	power: 115,
	attribute: Attribute.Water,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 115 Water damage to one foe.'
};

export const fossilBite: Skill = {
	name: 'Fossil Bite',
	spCost: 10,
	power: 30,
	attribute: Attribute.Water,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '3 physical attacks, 30 Water damage to one foe.'
};

export const foxFire: Skill = {
	name: 'Fox Fire',
	spCost: 10,
	power: 85,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 85 Fire damage to one foe. 10% chance of increasing SPD by 10%.'
};

export const foxTail: Skill = {
	name: 'Fox Tail',
	spCost: 2,
	power: 35,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 35 Light damage to one foe.'
};

export const freezeFang: Skill = {
	name: 'Freeze Fang',
	spCost: 10,
	power: 85,
	attribute: Attribute.Water,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 85 Water damage to one foe. 10% chance of increasing SPD by 10%.'
};

export const freezingBreath: Skill = {
	name: 'Freezing Breath',
	spCost: 20,
	power: 120,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 120 Water damage to one foe. 25% chance of paralyzing target.'
};

export const frozenClaw: Skill = {
	name: 'Frozen Claw',
	spCost: 20,
	power: 0,
	attribute: Attribute.Water,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating medium Water attack on one foe.'
};

export const fullMoonBlaster: Skill = {
	name: 'Full Moon Blaster',
	spCost: 20,
	power: 135,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 135 Light damage to one foe. Always hits.'
};

export const fullMoonKick: Skill = {
	name: 'Full Moon Kick',
	spCost: 15,
	power: 110,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 110 Earth damage to one foe. Increasing SPD by 10%.'
};

export const fullMoonMeteorImpact: Skill = {
	name: 'Full Moon Meteor Impact',
	spCost: 20,
	power: 120,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 120 Light damage to one foe. 30% chance of stunning and tends to critical.'
};

export const fungusCrusher: Skill = {
	name: 'Fungus Crusher',
	spCost: 10,
	power: 60,
	attribute: Attribute.Plant,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 60 Plant damage to one foe. 10% chance to inflict each abnormal status.'
};

export const furyFire: Skill = {
	name: 'Fury Fire',
	spCost: 10,
	power: 40,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Two physical attacks, 40 Light damage to one foe. Tends to critical hit more often.'
};

export const furyFireAwake: Skill = {
	name: 'Fury Fire (Awake)',
	spCost: 20,
	power: 60,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '2 physical attacks, 60 Light damage to one foe. Tends to critical hit more often.'
};

export const gaiaElement1: Skill = {
	name: 'Gaia Element I',
	spCost: 3,
	power: 55,
	attribute: Attribute.Plant,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 55 Plant damage to one foe. 95% accuracy.'
};

export const gaiaElement2: Skill = {
	name: 'Gaia Element II',
	spCost: 6,
	power: 75,
	attribute: Attribute.Plant,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 75 Plant damage to one foe. 95% accuracy.'
};

export const gaiaElement3: Skill = {
	name: 'Gaia Element III',
	spCost: 9,
	power: 95,
	attribute: Attribute.Plant,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 95 Plant damage to one foe. 95% accuracy.'
};

export const galacticFlare: Skill = {
	name: 'Galactic Flare',
	spCost: 15,
	power: 55,
	attribute: Attribute.Neutral,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 55 Neutral damage to all foes.'
};

export const galeStorm1: Skill = {
	name: 'Gale Storm I',
	spCost: 4,
	power: 30,
	attribute: Attribute.Wind,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 30 Wind damage to all foes. 95% accuracy.'
};

export const galeStorm2: Skill = {
	name: 'Gale Storm II',
	spCost: 7,
	power: 45,
	attribute: Attribute.Wind,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 45 Wind damage to all foes. 95% accuracy.'
};

export const galeStorm3: Skill = {
	name: 'Gale Storm III',
	spCost: 10,
	power: 75,
	attribute: Attribute.Wind,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 75 Wind damage to all foes. 95% accuracy.'
};

export const garuruTomahawk: Skill = {
	name: 'Garuru Tomahawk',
	spCost: 20,
	power: 140,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 140 Neutral damage to one foe. Always hits.'
};

export const gearStringer: Skill = {
	name: 'Gear Stringer',
	spCost: 5,
	power: 25,
	attribute: Attribute.Electric,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '3 physical attacks, 25 Electric damage to one foe.'
};

export const genocidalGears: Skill = {
	name: 'Genocidal Gears',
	spCost: 15,
	power: 60,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 60 Fire damage to all foes.'
};

export const genocideAttack: Skill = {
	name: 'Genocide Attack',
	spCost: 15,
	power: 110,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 110 Fire damage to one foe. Tends to critical more often.'
};

export const geogreySword: Skill = {
	name: 'GeoGrey Sword',
	spCost: 20,
	power: 130,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 130 Fire damage to one foe. Increases ATK by 10%.'
};

export const giftOfDarkness: Skill = {
	name: 'Gift of Darkness',
	spCost: 40,
	power: 0,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating extra strong Dark attack on one foe.'
};

export const gigaBlaster: Skill = {
	name: 'Giga Blaster',
	spCost: 20,
	power: 130,
	attribute: Attribute.Electric,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 130 Electric damage to one foe.'
};

export const gigaDestroyer: Skill = {
	name: 'Giga Destroyer',
	spCost: 15,
	power: 115,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 115 Fire damage to one foe.'
};

export const glareEye: Skill = {
	name: 'Glare Eye',
	spCost: 2,
	power: 30,
	attribute: Attribute.Dark,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 30 Dark damage to one foe.'
};

export const glideHorn: Skill = {
	name: 'Glide Horn',
	spCost: 10,
	power: 85,
	attribute: Attribute.Wind,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 85 Wind damage to one foe. 15% chance of stunning target.'
};

export const goblinStrike: Skill = {
	name: 'Goblin Strike',
	spCost: 5,
	power: 65,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 65 Fire damage to one foe. 10% chance of stunning target.'
};

export const godFlame: Skill = {
	name: 'God Flame',
	spCost: 20,
	power: 100,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 100 Light damage to all foes.'
};

export const godMatrix: Skill = {
	name: 'God Matrix',
	spCost: 50,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating strong Neutral attack on all foes. Absorbs 10% damage as HP.'
};

export const goldenRush: Skill = {
	name: 'Golden Rush',
	spCost: 10,
	power: 10,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '2 physical attacks, 10 Light damage to all foes. 1% chance of instantly killing target.'
};

export const goldenTriangle: Skill = {
	name: 'Golden Triangle',
	spCost: 20,
	power: 110,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 110 Light damage to one foe. 20% chance of increasing base stats by 10%.'
};

export const goodNightMoon: Skill = {
	name: 'Good Night Moon',
	spCost: 20,
	power: 120,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 120 Light damage to one foe. 50% chance of putting target to sleep.'
};

export const grandCross: Skill = {
	name: 'Grand Cross',
	spCost: 30,
	power: 0,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'INT-penetrating medium Light attack on all foes.'
};

export const grandRock1: Skill = {
	name: 'Grand Rock I',
	spCost: 3,
	power: 55,
	attribute: Attribute.Earth,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 55 Earth damage to one foe. 95% accuracy.'
};

export const grandRock2: Skill = {
	name: 'Grand Rock II',
	spCost: 6,
	power: 75,
	attribute: Attribute.Earth,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 75 Earth damage to one foe. 95% accuracy.'
};

export const grandRock3: Skill = {
	name: 'Grand Rock III',
	spCost: 9,
	power: 95,
	attribute: Attribute.Earth,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 95 Earth damage to one foe. 95% accuracy.'
};

export const greatTornado: Skill = {
	name: 'Great Tornado',
	spCost: 35,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating strong Neutral attack on one foe.'
};

export const greatWeight: Skill = {
	name: 'Great Weight',
	spCost: 10,
	power: 85,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 85 Earth damage to one foe. 10% chance of reducing target\'s DEF by 10%.'
};

export const greenFlareBreath: Skill = {
	name: 'Green Flare Breath',
	spCost: 20,
	power: 0,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating medium Fire attack on one foe. Tends to critical more often.'
};

export const guardBreak: Skill = {
	name: 'Guard Break',
	spCost: 6,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Reduces DEF of one enemy by 10%.'
};

export const guardBreakField: Skill = {
	name: 'Guard Break Field',
	spCost: 20,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Reduces DEF of all enemies by 10%.'
};

export const guardCharge: Skill = {
	name: 'Guard Charge',
	spCost: 6,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Increases DEF of one member by 10%.'
};

export const guardChargeField: Skill = {
	name: 'Guard Charge Field',
	spCost: 20,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Increases DEF of all battle members by 10%.'
};

export const hardRockSpirit: Skill = {
	name: 'Hard Rock Spirit',
	spCost: 20,
	power: 65,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '2 physical attacks, 65 Fire damage to one foe.'
};

export const harpoonTorpedo: Skill = {
	name: 'Harpoon Torpedo',
	spCost: 10,
	power: 90,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 90 Fire damage to one foe. Always hits.'
};

export const heal: Skill = {
	name: 'Heal',
	spCost: 4,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Restores a little HP for one party member.'
};

export const heartsAttack: Skill = {
	name: 'Hearts Attack',
	spCost: 20,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: false,
	description: 'Heals one ally\'s HP and increases ATK, DEF and INT by 10%.'
};

export const heatWave: Skill = {
	name: 'Heat Wave',
	spCost: 15,
	power: 75,
	attribute: Attribute.Fire,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 75 Fire damage to all foes.'
};

export const heavensGate: Skill = {
	name: 'Heaven\'s Gate',
	spCost: 15,
	power: 100,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 100 Light damage to one foe. 10% chance of instantly killing target.'
};

export const heavensJudgment: Skill = {
	name: 'Heaven\'s Judgment',
	spCost: 20,
	power: 90,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 90 Light damage to all foes. Tends to critical more often.'
};

export const heavensKnuckle: Skill = {
	name: 'Heaven\'s Knuckle',
	spCost: 10,
	power: 80,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 80 Light damage to one foe. 10% chance of increasing ATK & INT by 10%.'
};

export const heavensThunder: Skill = {
	name: 'Heaven\'s Thunder',
	spCost: 25,
	power: 20,
	attribute: Attribute.Electric,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: '8 magic attacks, 20 Electric damage to one foe. 30% chance of paralyzing target.'
};

export const heavensThunder1: Skill = {
	name: 'Heaven\'s Thunder I',
	spCost: 3,
	power: 55,
	attribute: Attribute.Electric,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 55 Thunder damage to one foe. 95% accuracy.'
};

export const heavensThunder2: Skill = {
	name: 'Heaven\'s Thunder II',
	spCost: 6,
	power: 75,
	attribute: Attribute.Electric,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 75 Thunder damage to one foe. 95% accuracy.'
};

export const heavensThunder3: Skill = {
	name: 'Heaven\'s Thunder III',
	spCost: 9,
	power: 95,
	attribute: Attribute.Electric,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 95 Thunder damage to one foe. 95% accuracy.'
};

export const heavyMetalFire: Skill = {
	name: 'Heavy Metal Fire',
	spCost: 15,
	power: 110,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 110 Fire damage to one foe. 30% chance of increasing DEF by 10%.'
};

export const heavyStrike1: Skill = {
	name: 'Heavy Strike I',
	spCost: 3,
	power: 70,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 70 Neutral damage to one foe. Always Hits.'
};

export const heavyStrike2: Skill = {
	name: 'Heavy Strike II',
	spCost: 6,
	power: 90,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 90 Neutral damage to one foe. Always Hits.'
};

export const heavyStrike3: Skill = {
	name: 'Heavy Strike III',
	spCost: 9,
	power: 110,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 110 Neutral damage to one foe. Always Hits.'
};

export const hellCrusher1: Skill = {
	name: 'Hell Crusher I',
	spCost: 4,
	power: 20,
	attribute: Attribute.Dark,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 20 Dark damage to all foes. 95% accuracy.'
};

export const hellCrusher2: Skill = {
	name: 'Hell Crusher II',
	spCost: 7,
	power: 35,
	attribute: Attribute.Dark,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 35 Dark damage to all foes. 95% accuracy.'
};

export const hellCrusher3: Skill = {
	name: 'Hell Crusher III',
	spCost: 10,
	power: 65,
	attribute: Attribute.Dark,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 65 Dark damage to all foes. 95% accuracy.'
};

export const hellMasquerade: Skill = {
	name: 'Hell Masquerade',
	spCost: 15,
	power: 35,
	attribute: Attribute.Plant,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '3 physical attacks, 35 Plant damage to one foe. Tends to critical often.'
};

export const hitCharge: Skill = {
	name: 'Hit Charge',
	spCost: 6,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Increases ACC of one battle member by 10%.'
};

export const holyLight1: Skill = {
	name: 'Holy Light I',
	spCost: 3,
	power: 55,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 55 Light damage to one foe. 95% accuracy.'
};

export const holyLight2: Skill = {
	name: 'Holy Light II',
	spCost: 6,
	power: 75,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 75 Light damage to one foe. 95% accuracy.'
};

export const holyLight3: Skill = {
	name: 'Holy Light III',
	spCost: 9,
	power: 95,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 95 Light damage to one foe. 95% accuracy.'
};

export const holyShot: Skill = {
	name: 'Holy Shot',
	spCost: 10,
	power: 75,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 75 Light damage to one for. 10% chance of increasing INT by 10%.'
};

export const hornBuster: Skill = {
	name: 'Horn Buster',
	spCost: 30,
	power: 0,
	attribute: Attribute.Electric,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'INT-penetrating strong Electric attack on one foe.'
};

export const howlingCrusher: Skill = {
	name: 'Howling Crusher',
	spCost: 20,
	power: 65,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '2 physical attacks, 65 Earth damage to one foe.'
};

export const hydroWater1: Skill = {
	name: 'Hydro Water I',
	spCost: 3,
	power: 55,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 55 Water damage to one foe. 95% accuracy.'
};

export const hydroWater2: Skill = {
	name: 'Hydro Water II',
	spCost: 6,
	power: 75,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 75 Water damage to one foe. 95% accuracy.'
};

export const hydroWater3: Skill = {
	name: 'Hydro Water III',
	spCost: 9,
	power: 95,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 95 Water damage to one foe. 95% accuracy.'
};

export const hyperCannon: Skill = {
	name: 'Hyper Cannon',
	spCost: 10,
	power: 200,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 200 Fire damage to one foe. Cannot move from recoil for one turn.'
};

export const hyperHeat: Skill = {
	name: 'Hyper Heat',
	spCost: 10,
	power: 85,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 85 Fire damage to one foe. 10% chance of reducing target\'s DEF by 10%.'
};

export const hyperInfinityCannon: Skill = {
	name: 'Hyper Infinity Cannon',
	spCost: 25,
	power: 115,
	attribute: Attribute.Electric,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 115 Electric damage to all foes.'
};

export const hyperSmell: Skill = {
	name: 'Hyper Smell',
	spCost: 10,
	power: 70,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 70 Earth damage to one foe. 15% chance of confusing or paralyzing.'
};

export const iceArchery1: Skill = {
	name: 'Ice Archery I',
	spCost: 3,
	power: 65,
	attribute: Attribute.Water,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 65 Water damage to one foe. 95% accuracy.'
};

export const iceArchery2: Skill = {
	name: 'Ice Archery II',
	spCost: 6,
	power: 85,
	attribute: Attribute.Water,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 85 Water damage to one foe. 95% accuracy.'
};

export const iceArchery3: Skill = {
	name: 'Ice Archery III',
	spCost: 9,
	power: 105,
	attribute: Attribute.Water,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 105 Water damage to one foe. 95% accuracy.'
};

export const iceBlast: Skill = {
	name: 'Ice Blast',
	spCost: 10,
	power: 75,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 75 Water damage to one foe. 10% chance of reducing target\'s SPD by 10%.'
};

export const iceWolfClaw: Skill = {
	name: 'Ice Wolf Claw',
	spCost: 20,
	power: 45,
	attribute: Attribute.Water,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '2 physical attacks, 45 Water damage to all foes.'
};

export const iceballBomb: Skill = {
	name: 'Iceball Bomb',
	spCost: 10,
	power: 80,
	attribute: Attribute.Water,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 80 Water damage to one foe. Tends to critical more often.'
};

export const idleBubble: Skill = {
	name: 'Idle Bubble',
	spCost: 10,
	power: 30,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 30 Water damage to one foe. Puts target to sleep. 70% accuracy.'
};

export const infinityCannon: Skill = {
	name: 'Infinity Cannon',
	spCost: 20,
	power: 115,
	attribute: Attribute.Electric,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 115 Electric damage to all foes. 80% accuracy.'
};

export const infinityDream: Skill = {
	name: 'Infinity Dream',
	spCost: 30,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: false,
	description: 'Has a 50% chance to inflict Poison, Confusion and Paralysis on all foes.'
};

export const judeccaPrison: Skill = {
	name: 'Judecca Prison',
	spCost: 25,
	power: 115,
	attribute: Attribute.Dark,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 115 Dark damage to one foe. Always hits and undoes any stat reductions.'
};

export const judgementOfTheBlade: Skill = {
	name: 'Judgement of the Blade',
	spCost: 25,
	power: 30,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '5 physical attacks, 30 Neutral damage to one foe.'
};

export const justiceKick: Skill = {
	name: 'Justice Kick',
	spCost: 20,
	power: 130,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 130 Neutral damage to one foe. 5% chance of increasing ATK by 50%.'
};

export const katanaAttack: Skill = {
	name: 'Katana Attack',
	spCost: 10,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating medium Neutral attack on one foe.'
};

export const knuckleBeater: Skill = {
	name: 'Knuckle Beater',
	spCost: 5,
	power: 75,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 75 Neutral damage to one foe.'
};

export const kunaiWing: Skill = {
	name: 'Kunai Wing',
	spCost: 10,
	power: 30,
	attribute: Attribute.Wind,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '3 physical attacks, 30 Wind damage to one foe.'
};

export const legendaryDragonBlade: Skill = {
	name: 'Legendary Dragon Blade',
	spCost: 30,
	power: 0,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating strong Earth attack on one foe.'
};

export const lightningJavelin: Skill = {
	name: 'Lightning Javelin',
	spCost: 15,
	power: 105,
	attribute: Attribute.Electric,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 105 Electric damage to one foe. 40% chance of paralyzing target.'
};

export const lightningJoust: Skill = {
	name: 'Lightning Joust',
	spCost: 25,
	power: 135,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 135 Light damage to one foe. 50% chance of increasing DEF by 10%.'
};

export const lightningPaw: Skill = {
	name: 'Lightning Paw',
	spCost: 10,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Fixed,
	isInheritable: false,
	description: 'Fixed damage of 150 to one foe. 60% chance of confusing target.'
};

export const lightningSpear: Skill = {
	name: 'Lightning Spear',
	spCost: 40,
	power: 0,
	attribute: Attribute.Electric,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'INT-penetrating strong Electric attack on one foe. Tends to critical more often.'
};

export const lilaShower: Skill = {
	name: 'Lila Shower',
	spCost: 15,
	power: 60,
	attribute: Attribute.Plant,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 60 Plant damage to all foes. 20% chance of poisoning target.'
};

export const littleHorn: Skill = {
	name: 'Little Horn',
	spCost: 5,
	power: 70,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 70 Neutral damage to one foe. 10% chance of reducing target\'s DEF by 10%.'
};

export const loveSerenade: Skill = {
	name: 'Love Serenade',
	spCost: 30,
	power: 0,
	attribute: Attribute.Dark,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'INT-penetrating medium Dark attack on all foes. 15% chance of paralyzing target.'
};

export const lullabyBubble: Skill = {
	name: 'Lullaby Bubble',
	spCost: 5,
	power: 55,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 55 Water damage to one foe. 10% chance of putting target to sleep.'
};

export const lunaticDance: Skill = {
	name: 'Lunatic Dance',
	spCost: 15,
	power: 100,
	attribute: Attribute.Water,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 100 Water damage to one foe. 50% chance of confusing target.'
};

export const machRush1: Skill = {
	name: 'Mach Rush I',
	spCost: 4,
	power: 35,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 35 Neutral damage to all foes. Always Hits.'
};

export const machRush2: Skill = {
	name: 'Mach Rush II',
	spCost: 7,
	power: 50,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 50 Neutral damage to all foes. Always Hits.'
};

export const machRush3: Skill = {
	name: 'Mach Rush III',
	spCost: 10,
	power: 80,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 80 Neutral damage to all foes. Always Hits.'
};

export const machStingerV: Skill = {
	name: 'Mach Stinger V',
	spCost: 20,
	power: 20,
	attribute: Attribute.Electric,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '6 physical attacks, 20 Electric damage to one foe. Tends to critical more often.'
};

export const machinegunDestroyer: Skill = {
	name: 'Machinegun Destroyer',
	spCost: 20,
	power: 150,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 150 Fire damage to one foe. Decreases DEF by 10%.'
};

export const marchingFishes: Skill = {
	name: 'Marching Fishes',
	spCost: 5,
	power: 15,
	attribute: Attribute.Water,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '1-3 physical attacks, 15 Water damage to all foes.'
};

export const maturePoop: Skill = {
	name: 'Mature Poop',
	spCost: 10,
	power: 75,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 75 Earth damage to one foe. 30% chance of reducing target\'s INT by 10%.'
};

export const megaBurst: Skill = {
	name: 'Mega Burst',
	spCost: 10,
	power: 45,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 45 Fire damage to all foes.'
};

export const megaFlame: Skill = {
	name: 'Mega Flame',
	spCost: 10,
	power: 95,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 95 Fire damage to one foe.'
};

export const megadeath: Skill = {
	name: 'Megadeath',
	spCost: 20,
	power: 95,
	attribute: Attribute.Dark,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 95 Dark damage to all foes.'
};

export const megiddoFlame: Skill = {
	name: 'Megiddo Flame',
	spCost: 20,
	power: 130,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 130 Fire damage to one foe.'
};

export const mentalBreak: Skill = {
	name: 'Mental Break',
	spCost: 6,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Reduces INT of one enemy by 10%.'
};

export const mentalBreakField: Skill = {
	name: 'Mental Break Field',
	spCost: 20,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Reduces INT of all enemies by 10%.'
};

export const mentalCharge: Skill = {
	name: 'Mental Charge',
	spCost: 6,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Increases INT of one member by 10%.'
};

export const mentalChargeField: Skill = {
	name: 'Mental Charge Field',
	spCost: 20,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Increases INT of all battle members by 10%.'
};

export const metalArmorBlade: Skill = {
	name: 'Metal Armor Blade',
	spCost: 20,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating medium Neutral attack on one foe. Tends to critical hit more often.'
};

export const metalCannon: Skill = {
	name: 'Metal Cannon',
	spCost: 5,
	power: 70,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 70 Neutral damage to one foe. 30% chance of increasing DEF by 10%.'
};

export const metalMeteor: Skill = {
	name: 'Metal Meteor',
	spCost: 15,
	power: 115,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 115 Earth damage to one foe.'
};

export const meteorFall1: Skill = {
	name: 'Meteor Fall I',
	spCost: 4,
	power: 30,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 30 Fire damage to all foes. 95% accuracy.'
};

export const meteorFall2: Skill = {
	name: 'Meteor Fall II',
	spCost: 7,
	power: 45,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 45 Fire damage to all foes. 95% accuracy.'
};

export const meteorFall3: Skill = {
	name: 'Meteor Fall III',
	spCost: 10,
	power: 75,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 75 Fire damage to all foes. 95% accuracy.'
};

export const meteorShower: Skill = {
	name: 'Meteor Shower',
	spCost: 10,
	power: 40,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 40 Neutral damage to all foes. 90% accuracy. Tends to critical more often.'
};

export const meteorWing: Skill = {
	name: 'Meteor Wing',
	spCost: 10,
	power: 25,
	attribute: Attribute.Fire,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 25 Fire damage to all foes. 10% chance of increasing SPD by 10%.'
};

export const miracleBomb: Skill = {
	name: 'Miracle Bomb',
	spCost: 15,
	power: 130,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 130 Fire damage to one foe. Crystallizing attack occurs at random.'
};

export const mirrorReflection: Skill = {
	name: 'Mirror Reflection',
	spCost: 6,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Counterattacks the enemy when you receive a magic attack.'
};

export const monkeyWrench: Skill = {
	name: 'Monkey Wrench',
	spCost: 40,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: false,
	description: 'Reduces all stats of one foe by 30% and decreases combo rate.'
};

export const moonNightBomb: Skill = {
	name: 'Moon Night Bomb',
	spCost: 10,
	power: 60,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 60 Water damage to one foe. 50% chance of putting target to sleep.'
};

export const mourningDance: Skill = {
	name: 'Mourning Dance',
	spCost: 20,
	power: 20,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '8 physical attacks, 20 Dark damage to one foe. Damage tends to fluctuate.'
};

export const musicalFist: Skill = {
	name: 'Musical Fist',
	spCost: 30,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'INT-penetrating medium Neutral attack on all foes with 10% chance of reducing ATK/INT by 10%.'
};

export const nailBone: Skill = {
	name: 'Nail Bone',
	spCost: 15,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Direct,
	isInheritable: false,
	description: 'Reduce HP of one foe by 20%. 50% chance of crystallizing target.'
};

export const nailScratch: Skill = {
	name: 'Nail Scratch',
	spCost: 2,
	power: 40,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 40 Dark damage to one foe.'
};

export const nanomachineBreak1: Skill = {
	name: 'Nanomachine Break I',
	spCost: 3,
	power: 65,
	attribute: Attribute.Electric,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 65 Thunder damage to one foe. 95% accuracy.'
};

export const nanomachineBreak2: Skill = {
	name: 'Nanomachine Break II',
	spCost: 6,
	power: 85,
	attribute: Attribute.Electric,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 85 Thunder damage to one foe. 95% accuracy.'
};

export const nanomachineBreak3: Skill = {
	name: 'Nanomachine Break III',
	spCost: 9,
	power: 105,
	attribute: Attribute.Electric,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 105 Thunder damage to one foe. 95% accuracy.'
};

export const needleSpray: Skill = {
	name: 'Needle Spray',
	spCost: 10,
	power: 40,
	attribute: Attribute.Plant,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 40 Plant damage to all foes. 5% chance of paralyzing target.'
};

export const nightRaid: Skill = {
	name: 'Night Raid',
	spCost: 15,
	power: 65,
	attribute: Attribute.Dark,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 65 Dark damage to all foes, absorbs 15% into HP.'
};

export const nightmare1: Skill = {
	name: 'Nightmare I',
	spCost: 3,
	power: 55,
	attribute: Attribute.Dark,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 55 Dark damage to one foe. 95% accuracy.'
};

export const nightmare2: Skill = {
	name: 'Nightmare II',
	spCost: 6,
	power: 75,
	attribute: Attribute.Dark,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 75 Dark damage to one foe. 95% accuracy.'
};

export const nightmare3: Skill = {
	name: 'Nightmare III',
	spCost: 9,
	power: 95,
	attribute: Attribute.Dark,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 95 Dark damage to one foe. 95% accuracy.'
};

export const nightmareSyndrome: Skill = {
	name: 'Nightmare Syndrome',
	spCost: 15,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Reduce 15% HP from one enemy. 20% chance of putting target to sleep.'
};

export const ninjaBlade: Skill = {
	name: 'Ninja Blade',
	spCost: 5,
	power: 35,
	attribute: Attribute.Wind,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 35 Wind damage to all foes.'
};

export const ninjaClaw: Skill = {
	name: 'Ninja Claw',
	spCost: 10,
	power: 30,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '3 physical attacks, 30 Neutral damage to one foe. Tends to critical more often.'
};

export const nitroStinger: Skill = {
	name: 'Nitro Stinger',
	spCost: 30,
	power: 0,
	attribute: Attribute.Electric,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating strong Electric attack on one foe.'
};

export const nuclearLaser: Skill = {
	name: 'Nuclear Laser',
	spCost: 30,
	power: 0,
	attribute: Attribute.Electric,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating medium Electric attack on one foe. Increases DEF by 10%.'
};

export const oblivionBird: Skill = {
	name: 'Oblivion Bird',
	spCost: 15,
	power: 110,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 110 Fire damage to one foe. 50% chance of reducing target\'s DEF by 10%.'
};

export const oceanLove: Skill = {
	name: 'Ocean Love',
	spCost: 20,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: false,
	description: 'Restore HP to all battle members and recover all status effects.'
};

export const oceanWave1: Skill = {
	name: 'Ocean Wave I',
	spCost: 4,
	power: 20,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 20 Water damage to all foes. 95% accuracy.'
};

export const oceanWave2: Skill = {
	name: 'Ocean Wave II',
	spCost: 7,
	power: 35,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 35 Water damage to all foes. 95% accuracy.'
};

export const oceanWave3: Skill = {
	name: 'Ocean Wave III',
	spCost: 10,
	power: 65,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 65 Water damage to all foes. 95% accuracy.'
};

export const odinsBreath: Skill = {
	name: 'Odin\'s Breath',
	spCost: 25,
	power: 105,
	attribute: Attribute.Water,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 105 Water damage to all foes. 10% chance of putting target to sleep.'
};

export const omniSword: Skill = {
	name: 'Omni Sword',
	spCost: 30,
	power: 150,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 150 Light damage to one foe. 30% chance of dotting target.'
};

export const pandemoniumLost: Skill = {
	name: 'Pandemonium Lost',
	spCost: 25,
	power: 80,
	attribute: Attribute.Dark,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 80 Dark damage to all foes, absorbs 20% into HP.'
};

export const pandoraDialogue: Skill = {
	name: 'Pandora Dialogue',
	spCost: 15,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Reduces HP of all foes by 20%. Receive damage equal to 10% of HP from recoil.'
};

export const panicWisp: Skill = {
	name: 'Panic Wisp',
	spCost: 10,
	power: 30,
	attribute: Attribute.Fire,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 30 Fire damage to one foe. Confuses target. 70% accuracy.'
};

export const pendragonsGlory: Skill = {
	name: 'Pendragon\'s Glory',
	spCost: 25,
	power: 145,
	attribute: Attribute.Electric,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 145 Electric damage to one foe.'
};

export const pepperBreath: Skill = {
	name: 'Pepper Breath',
	spCost: 5,
	power: 70,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 70 Fire damage to one foe.'
};

export const perfectRevival: Skill = {
	name: 'Perfect Revival',
	spCost: 60,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Revive all fallen party members with full HP.'
};

export const phantomPain: Skill = {
	name: 'Phantom Pain',
	spCost: 50,
	power: 0,
	attribute: Attribute.Dark,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'INT-penetrating extra strong Dark attack on one foe. 35% chance of poisoning target.'
};

export const physicalDrain: Skill = {
	name: 'Physical Drain',
	spCost: 3,
	power: 50,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 50 Neutral damage to one foe. Absorb 10% SP.'
};

export const pitBomb: Skill = {
	name: 'Pit Bomb',
	spCost: 15,
	power: 105,
	attribute: Attribute.Fire,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 105 Fire damage to one foe.'
};

export const plasmaShot: Skill = {
	name: 'Plasma Shot',
	spCost: 25,
	power: 35,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '3 physical attacks, 35 Fire damage to all foes.'
};

export const plasticBlaze: Skill = {
	name: 'Plastic Blaze',
	spCost: 5,
	power: 60,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 60 Fire damage to one foe. 10% chance of reducing target\'s INT by 10%.'
};

export const platinumJunk: Skill = {
	name: 'Platinum Junk',
	spCost: 20,
	power: 35,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '4 physical attacks, 35 Earth damage to one foe. 30% chance of reducing target\'s ATK by 10%.'
};

export const poisonBubbles: Skill = {
	name: 'Poison Bubbles',
	spCost: 2,
	power: 25,
	attribute: Attribute.Dark,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 25 Dark damage to one foe. 10% chance of poisoning the target.'
};

export const poisonIvy: Skill = {
	name: 'Poison Ivy',
	spCost: 5,
	power: 65,
	attribute: Attribute.Plant,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 65 Plant damage to one foe. 10% chance of poisoning target.'
};

export const poop: Skill = {
	name: 'Poop',
	spCost: 10,
	power: 75,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 75 Earth damage to one foe. 30% chance of reducing target\'s SPD by 10%.'
};

export const poopDunk: Skill = {
	name: 'Poop Dunk',
	spCost: 10,
	power: 80,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 80 Earth damage to one foe. 30% chance of reducing target\'s DEF by 10%.'
};

export const poopToss: Skill = {
	name: 'Poop Toss',
	spCost: 10,
	power: 75,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 75 Earth damage to one foe. 30% chance of reducing target\'s ATK by 10%.'
};

export const positronLaser: Skill = {
	name: 'Positron Laser',
	spCost: 20,
	power: 150,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 150 Light damage to one foe.'
};

export const powerEnergy1: Skill = {
	name: 'Power Energy I',
	spCost: 3,
	power: 60,
	attribute: Attribute.Neutral,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 60 Neutral damage to one foe. Always Hits.'
};

export const powerEnergy2: Skill = {
	name: 'Power Energy II',
	spCost: 6,
	power: 80,
	attribute: Attribute.Neutral,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 80 Neutral damage to one foe. Always Hits.'
};

export const powerEnergy3: Skill = {
	name: 'Power Energy III',
	spCost: 9,
	power: 100,
	attribute: Attribute.Neutral,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 100 Neutral damage to one foe. Always Hits.'
};

export const powerMetal: Skill = {
	name: 'Power Metal',
	spCost: 10,
	power: 90,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 90 Neutral damage to one foe. 30% chance of increasing attack by 10%.'
};

export const prisonFist: Skill = {
	name: 'Prison Fist',
	spCost: 10,
	power: 20,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '3-5 physical attacks, 20 Dark damage to one foe, with 30% of damage restored as HP.'
};

export const protectWave: Skill = {
	name: 'Protect Wave',
	spCost: 30,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: false,
	description: 'Prevents any abnormal statuses in all allies.'
};

export const protectWaveAwake: Skill = {
	name: 'Protect Wave (Awake)',
	spCost: 99,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: false,
	description: 'Nullifies damage received to all allies until next turn and prevents any abnormal statuses.'
};

export const pummelWhack: Skill = {
	name: 'Pummel Whack',
	spCost: 10,
	power: 90,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 90 Dark damage to one foe.'
};

export const puppetPummel: Skill = {
	name: 'Puppet Pummel',
	spCost: 20,
	power: 125,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 125 Earth damage to one foe. 50% chance of stunning target.'
};

export const puppyHowl: Skill = {
	name: 'Puppy Howl',
	spCost: 10,
	power: 0,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'INT-penetrating medium Light attack on one foe. 10% chance of paralyzing target.'
};

export const pyroPunch: Skill = {
	name: 'Pyro Punch',
	spCost: 10,
	power: 45,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '2 physical attacks, 45 Fire damage to one foe.'
};

export const quakeBlastFireFather: Skill = {
	name: 'Quake!Blast!Fire!Father!',
	spCost: 25,
	power: 35,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '4 physical attacks, 35 Fire damage to one foe.'
};

export const quoVadis: Skill = {
	name: 'Quo Vadis',
	spCost: 40,
	power: 0,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating strong Light attack on one foe. Always hits. 10% chance of Instant Death.'
};

export const rareMetalPoop: Skill = {
	name: 'Rare Metal Poop',
	spCost: 10,
	power: 80,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 80 Earth damage to one foe. Causes Knockback.'
};

export const razorWind: Skill = {
	name: 'Razor Wind',
	spCost: 10,
	power: 30,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '2-4 physical attacks, 30 Neutral damage to one foe.'
};

export const restore: Skill = {
	name: 'Restore',
	spCost: 25,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Remove all status effects from one party member and restore some HP.'
};

export const revengeFlame: Skill = {
	name: 'Revenge Flame',
	spCost: 15,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Direct,
	isInheritable: false,
	description: 'Counterattack the enemy when you receive a physical or magic attack.'
};

export const revive: Skill = {
	name: 'Revive',
	spCost: 30,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Revive one fallen party member with 50% HP.'
};

export const rippingNet: Skill = {
	name: 'Ripping Net',
	spCost: 10,
	power: 40,
	attribute: Attribute.Electric,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 40 Thunder damage to one foe. Paralyzes target. 70% accuracy.'
};

export const riverOfPower: Skill = {
	name: 'River of Power',
	spCost: 20,
	power: 130,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 130 Water damage to one foe.'
};

export const rockBreaker: Skill = {
	name: 'Rock Breaker',
	spCost: 5,
	power: 70,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 70 Earth damage to one foe.'
};

export const rockFist: Skill = {
	name: 'Rock Fist',
	spCost: 5,
	power: 65,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 65 Earth damage to one foe. 10% chance of increasing DEF by 10%.'
};

export const runeForest1: Skill = {
	name: 'Rune Forest I',
	spCost: 4,
	power: 20,
	attribute: Attribute.Plant,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 20 Plant damage to all foes. 95% accuracy.'
};

export const runeForest2: Skill = {
	name: 'Rune Forest II',
	spCost: 7,
	power: 35,
	attribute: Attribute.Plant,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 35 Plant damage to all foes. 95% accuracy.'
};

export const runeForest3: Skill = {
	name: 'Rune Forest III',
	spCost: 10,
	power: 65,
	attribute: Attribute.Plant,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 65 Plant damage to all foes. 95% accuracy.'
};

export const sGoldSolarStorm: Skill = {
	name: 'S-Gold Solar Storm',
	spCost: 25,
	power: 75,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 75 Light damage to all foes. Increases DEF by 15%.'
};

export const safetyGuard: Skill = {
	name: 'Safety Guard',
	spCost: 32,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Make one member endure all attacks that could kill you once.'
};

export const saintKnuckle1: Skill = {
	name: 'Saint Knuckle I',
	spCost: 3,
	power: 65,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 65 Light damage to one foe. 95% accuracy.'
};

export const saintKnuckle2: Skill = {
	name: 'Saint Knuckle II',
	spCost: 6,
	power: 85,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 85 Light damage to one foe. 95% accuracy.'
};

export const saintKnuckle3: Skill = {
	name: 'Saint Knuckle III',
	spCost: 9,
	power: 105,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 105 Light damage to one foe. 95% accuracy.'
};

export const savageEmperor: Skill = {
	name: 'Savage Emperor',
	spCost: 15,
	power: 105,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 105 Light damage to one foe.'
};

export const scissorClaw: Skill = {
	name: 'Scissor Claw',
	spCost: 20,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating medium Neutral attack on one foe.'
};

export const scraplessClaw: Skill = {
	name: 'Scrapless Claw',
	spCost: 15,
	power: 110,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 110 Earth damage to one foe. Tends to critical hit more often.'
};

export const seedBlast: Skill = {
	name: 'Seed Blast',
	spCost: 5,
	power: 15,
	attribute: Attribute.Plant,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '2 physical attacks, 15 Plant damage to all foes.'
};

export const sevensFantasia: Skill = {
	name: 'Seven\'s Fantasia',
	spCost: 20,
	power: 75,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 75 Light damage to all foes. 20% chance of confusing target.'
};

export const shadowWing: Skill = {
	name: 'Shadow Wing',
	spCost: 15,
	power: 65,
	attribute: Attribute.Fire,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 65 Fire damage to all foes.'
};

export const shieldOfTheJust: Skill = {
	name: 'Shield of the Just',
	spCost: 25,
	power: 110,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 110 Light damage to one foe. Always hits. Removes basic stat debuffs.'
};

export const shineOfBee: Skill = {
	name: 'Shine of Bee',
	spCost: 35,
	power: 0,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating strong Fire attack on all foes. Cannot move from recoil for one turn.'
};

export const shiningLaser1: Skill = {
	name: 'Shining Laser I',
	spCost: 4,
	power: 20,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 20 Light damage to all foes. 95% accuracy.'
};

export const shiningLaser2: Skill = {
	name: 'Shining Laser II',
	spCost: 7,
	power: 35,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 35 Light damage to all foes. 95% accuracy.'
};

export const shiningLaser3: Skill = {
	name: 'Shining Laser III',
	spCost: 10,
	power: 65,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 65 Light damage to all foes. 95% accuracy.'
};

export const shinyRing: Skill = {
	name: 'Shiny Ring',
	spCost: 5,
	power: 70,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 70 Light damage to one foe. Alwatys hits.'
};

export const shock: Skill = {
	name: 'Shock',
	spCost: 10,
	power: 40,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 40 Earth damage to one foe. Stuns target. 70% accuracy.'
};

export const silentBullet: Skill = {
	name: 'Silent Bullet',
	spCost: 10,
	power: 15,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '2-4 physical attacks, 15 Dark damage to all foes.'
};

export const silentBulletAwake: Skill = {
	name: 'Silent Bullet (Awake)',
	spCost: 20,
	power: 30,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '2-4 physical attacks, 30 Dark damage to all foes.'
};

export const sludge: Skill = {
	name: 'Sludge',
	spCost: 10,
	power: 40,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 40 Earth damage to all foes. 10% chance to poison.'
};

export const smileBomber: Skill = {
	name: 'Smile Bomber',
	spCost: 15,
	power: 110,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 110 Fire damage to one foe. Always hits.'
};

export const smileFang: Skill = {
	name: 'Smile Fang',
	spCost: 2,
	power: 40,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 40 Neutral damage to one foe.'
};

export const smileWarhead: Skill = {
	name: 'Smile Warhead',
	spCost: 20,
	power: 110,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 110 Neutral damage to one foe. Causes knockback.'
};

export const soapFlower: Skill = {
	name: 'Soap Flower',
	spCost: 2,
	power: 30,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 30 Water damage to one foe.'
};

export const sonicVoid1: Skill = {
	name: 'Sonic Void I',
	spCost: 3,
	power: 55,
	attribute: Attribute.Wind,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 55 Wind damage to one foe. 95% accuracy.'
};

export const sonicVoid2: Skill = {
	name: 'Sonic Void II',
	spCost: 6,
	power: 75,
	attribute: Attribute.Wind,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 75 Wind damage to one foe. 95% accuracy.'
};

export const sonicVoid3: Skill = {
	name: 'Sonic Void III',
	spCost: 9,
	power: 95,
	attribute: Attribute.Wind,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 95 Wind damage to one foe. 95% accuracy.'
};

export const sorrowBlue: Skill = {
	name: 'Sorrow Blue',
	spCost: 40,
	power: 0,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'INT-penetrating medium Water attack on all foes. 25% chance of putting target to sleep.'
};

export const soulAbsorption: Skill = {
	name: 'Soul Absorption',
	spCost: 5,
	power: 70,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 70 Dark damage to one foe, with 30% of damage restored as HP.'
};

export const soulChopper: Skill = {
	name: 'Soul Chopper',
	spCost: 30,
	power: 0,
	attribute: Attribute.Dark,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'INT-penetrating extra strong dark attack on one foe. 10% chance of Instant Death.'
};

export const soulCoreAttack: Skill = {
	name: 'Soul Core Attack',
	spCost: 30,
	power: 0,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating strong Earth attack on one foe.'
};

export const soulDigitalization: Skill = {
	name: 'Soul Digitalization',
	spCost: 25,
	power: 90,
	attribute: Attribute.Neutral,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 90 Neutral damage to all foes.'
};

export const speedBreak: Skill = {
	name: 'Speed Break',
	spCost: 6,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Reduces SPD of one enemy by 10%.'
};

export const speedBreakField: Skill = {
	name: 'Speed Break Field',
	spCost: 20,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Reduces SPD of all enemies by 10%.'
};

export const speedCharge: Skill = {
	name: 'Speed Charge',
	spCost: 6,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Increases SPD of one member by 10%.'
};

export const speedChargeField: Skill = {
	name: 'Speed Charge Field',
	spCost: 20,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Increases SPD of all battle members by 10%.'
};

export const speedStar: Skill = {
	name: 'Speed Star',
	spCost: 15,
	power: 90,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 90 Light damage to one foe. Increases SPD by 20%.'
};

export const spiderShooter: Skill = {
	name: 'Spider Shooter',
	spCost: 15,
	power: 30,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '4 physical attacks, 30 Fire damage to one foe. 5% chance of reducing target\'s DEF by 10%.'
};

export const spikingStrike: Skill = {
	name: 'Spiking Strike',
	spCost: 20,
	power: 0,
	attribute: Attribute.Plant,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating medium Plant attack on one foe. Tends to critical more often.'
};

export const spinningNeedle: Skill = {
	name: 'Spinning Needle',
	spCost: 10,
	power: 45,
	attribute: Attribute.Wind,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attak, 45 Wind damage to all foes.'
};

export const spiralBlow: Skill = {
	name: 'Spiral Blow',
	spCost: 10,
	power: 90,
	attribute: Attribute.Wind,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 90 Wind damage to one foe.'
};

export const spiralMasquerade: Skill = {
	name: 'Spiral Masquerade',
	spCost: 25,
	power: 30,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '4 physical attacks, 30 Dark damage to one foe.'
};

export const spiralSword: Skill = {
	name: 'Spiral Sword',
	spCost: 15,
	power: 110,
	attribute: Attribute.Electric,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 110 Electric damage to one foe. Tends to critical more often.'
};

export const spiralTwister: Skill = {
	name: 'Spiral Twister',
	spCost: 5,
	power: 55,
	attribute: Attribute.Fire,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 55 Fire damage to one foe. 10% chance of increasing INT by 10%.'
};

export const spiritDrain: Skill = {
	name: 'Spirit Drain',
	spCost: 3,
	power: 40,
	attribute: Attribute.Neutral,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 40 Neutral damage to one foe. Absorb 10% SP.'
};

export const spitfireBlast: Skill = {
	name: 'Spitfire Blast',
	spCost: 5,
	power: 35,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 35 Fire damage to all foes. 10% chance of increasing ATK by 10%.'
};

export const starlightExplosion: Skill = {
	name: 'Starlight Explosion',
	spCost: 20,
	power: 90,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 90 Light damage to all foes.'
};

export const starlightVelocity: Skill = {
	name: 'Starlight Velocity',
	spCost: 20,
	power: 130,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 130 Light damage to one foe. Increases SPD by 10%.'
};

export const statusBarrier: Skill = {
	name: 'Status Barrier',
	spCost: 16,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Make one member immune to all status effects.'
};

export const stickerBlade: Skill = {
	name: 'Sticker Blade',
	spCost: 10,
	power: 25,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '3-5 physical attacks, 25 Dark damage to one foe, with 10% of damage restored as HP.'
};

export const stickyNet: Skill = {
	name: 'Sticky Net',
	spCost: 5,
	power: 65,
	attribute: Attribute.Plant,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 65 Plant damage to one foe. 30% chance of reducing target\'s SPD by 10%.'
};

export const strikeOfTheSevenStars: Skill = {
	name: 'Strike of the Seven Stars',
	spCost: 20,
	power: 15,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: '7 magic attacks, 15 Light damage to all foes.'
};

export const strikeRoll: Skill = {
	name: 'Strike Roll',
	spCost: 20,
	power: 140,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 140 Neutral damage to one foe. Tends to critical more often.'
};

export const subZeroIcePunch: Skill = {
	name: 'Sub-zero Ice Punch',
	spCost: 10,
	power: 80,
	attribute: Attribute.Water,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 80 Water damage to one foe. 10% chance of stunning target.'
};

export const summon: Skill = {
	name: 'Summon',
	spCost: 5,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Fixed,
	isInheritable: false,
	description: 'Fixed damage of 100 to one foe. 30% chance of increasing INT by 10%.'
};

export const sunshineBeam: Skill = {
	name: 'Sunshine Beam',
	spCost: 10,
	power: 80,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 80 Light damage to one foe.'
};

export const superBubbleBlow: Skill = {
	name: 'Super Bubble Blow',
	spCost: 2,
	power: 35,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 35 Water damage to one foe.'
};

export const superShocker: Skill = {
	name: 'Super Shocker',
	spCost: 5,
	power: 60,
	attribute: Attribute.Electric,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 60 Electric damage to one foe.'
};

export const superStinkyJet: Skill = {
	name: 'Super Stinky Jet',
	spCost: 10,
	power: 20,
	attribute: Attribute.Earth,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 20 Earth damage to all foes. 30% chance of reducing target\'s SPD by 10%.'
};

export const supersonicVoice: Skill = {
	name: 'Supersonic Voice',
	spCost: 30,
	power: 0,
	attribute: Attribute.Wind,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'INT-penetrating extra strong Wind attack on one foe. 20% chance of inflicting Bug.'
};

export const superstarUppercut: Skill = {
	name: 'Superstar Uppercut',
	spCost: 15,
	power: 110,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 110 Light damage to one foe.'
};

export const supportEnd: Skill = {
	name: 'Support End',
	spCost: 10,
	power: 30,
	attribute: Attribute.Light,
	skillType: SkillType.Magic,
	isInheritable: true,
	description: 'Magic attack, 30 Light damage to one foe. Prevents the use of support skills.'
};

export const supremeCannon: Skill = {
	name: 'Supreme Cannon',
	spCost: 30,
	power: 95,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 95 Water damage to all foes.'
};

export const symphonyCrusher: Skill = {
	name: 'Symphony Crusher',
	spCost: 20,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'INT-penetrating medium Neutral attack on one foe.'
};

export const tableFlip: Skill = {
	name: 'Table Flip',
	spCost: 25,
	power: 100,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 100 Earth damage to all foes. 70% accuracy. Tends to critical more often.'
};

export const tailHammer: Skill = {
	name: 'Tail Hammer',
	spCost: 10,
	power: 85,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 85 Earth damage to one foe. 15% chance of stunning target.'
};

export const taizoukaiMandala: Skill = {
	name: 'Taizoukai Mandala',
	spCost: 20,
	power: 70,
	attribute: Attribute.Dark,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 70 Dark damage to all foes. Undoes ACU, EVA, or CRT boosts on target. Always hits.'
};

export const talismanOfLight: Skill = {
	name: 'Talisman of Light',
	spCost: 15,
	power: 105,
	attribute: Attribute.Dark,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 105 Dark damage to one foe.'
};

export const tearingShot: Skill = {
	name: 'Tearing Shot',
	spCost: 5,
	power: 65,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 65 Water damage to one foe.'
};

export const terraForce: Skill = {
	name: 'Terra Force',
	spCost: 20,
	power: 90,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 90 Fire damage to all foes. 30% chance of increasing ATK by 20%.'
};

export const terrierTornado: Skill = {
	name: 'Terrier Tornado',
	spCost: 5,
	power: 20,
	attribute: Attribute.Wind,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 20 Wind damage to all foes.'
};

export const terrorsCluster: Skill = {
	name: 'Terrors Cluster',
	spCost: 20,
	power: 125,
	attribute: Attribute.Electric,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 125 Electric damage to one foe. 50% chance of paralyzing target.'
};

export const textureBlow: Skill = {
	name: 'Texture Blow',
	spCost: 10,
	power: 40,
	attribute: Attribute.Wind,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 40 Wind damage to one foe. Crystallizes target. 70% accuracy.'
};

export const theKingOfFists: Skill = {
	name: 'The King of Fists',
	spCost: 15,
	power: 55,
	attribute: Attribute.Wind,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '1-3 physical attacks, 55 Wind damage to one foe. 15% chance of stunning target.'
};

export const theRayOfVictory: Skill = {
	name: 'The Ray of Victory',
	spCost: 25,
	power: 100,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 100 Light damage to all. Always hits. Increases SPD by 10%.'
};

export const thornWhip: Skill = {
	name: 'Thorn Whip',
	spCost: 20,
	power: 120,
	attribute: Attribute.Plant,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 120 Plant damage to one foe, absorbs 50% into HP. 30% chance of paralyzing target.'
};

export const thousandFists: Skill = {
	name: 'Thousand Fists',
	spCost: 25,
	power: 15,
	attribute: Attribute.Wind,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '8 physical attacks, 15 Wind damage to one foe. Tends to critical more often.'
};

export const thunderCloud: Skill = {
	name: 'Thunder Cloud',
	spCost: 5,
	power: 30,
	attribute: Attribute.Electric,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: '2 magic attacks, 30 Electric damage to one foe.'
};

export const thunderFall1: Skill = {
	name: 'Thunder Fall I',
	spCost: 4,
	power: 30,
	attribute: Attribute.Electric,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 30 Thunder damage to all foes. 95% accuracy.'
};

export const thunderFall2: Skill = {
	name: 'Thunder Fall II',
	spCost: 7,
	power: 45,
	attribute: Attribute.Electric,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 45 Thunder damage to all foes. 95% accuracy.'
};

export const thunderFall3: Skill = {
	name: 'Thunder Fall III',
	spCost: 10,
	power: 75,
	attribute: Attribute.Electric,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 75 Thunder damage to all foes. 95% accuracy.'
};

export const tidalWave: Skill = {
	name: 'Tidal Wave',
	spCost: 15,
	power: 65,
	attribute: Attribute.Water,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 65 Water damage to all foes.'
};

export const tomahawkStinger: Skill = {
	name: 'Tomahawk Stinger',
	spCost: 20,
	power: 130,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 130 Neutral damage to one foe. 40% chance of confusing target.'
};

export const topGun: Skill = {
	name: 'Top Gun',
	spCost: 15,
	power: 110,
	attribute: Attribute.Wind,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 110 Wind damage to one foe.'
};

export const transcendentSword: Skill = {
	name: 'Transcendent Sword',
	spCost: 30,
	power: 130,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 130 Fire damage to one foe.'
};

export const triHornAttack: Skill = {
	name: 'Tri-Horn Attack',
	spCost: 15,
	power: 150,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 150 Earth damage to one foe. Stuns target. 50% accuracy.'
};

export const trickOrTreat: Skill = {
	name: 'Trick or Treat',
	spCost: 15,
	power: 100,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 100 Neutral damage to one foe. Decrease target\'s INT by 10%.'
};

export const tridentRevolver: Skill = {
	name: 'Trident Revolver',
	spCost: 15,
	power: 40,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '3 physical attacks, 40 Fire damage to one foe.'
};

export const tridentSaber: Skill = {
	name: 'Trident Saber',
	spCost: 15,
	power: 40,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '3 physical attacks, 40 Neutral damage to one foe.'
};

export const trumpSword: Skill = {
	name: 'Trump Sword',
	spCost: 20,
	power: 35,
	attribute: Attribute.Neutral,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: '4 magic attacks, 35 Neutral damage to one foe. Prevents the use of support skills.'
};

export const turboStinger: Skill = {
	name: 'Turbo Stinger',
	spCost: 10,
	power: 25,
	attribute: Attribute.Electric,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '4 physical attacks, 25 Electric damage to one foe.'
};

export const twentyDive: Skill = {
	name: 'Twenty Dive',
	spCost: 5,
	power: 75,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 75 Neutral damage to one foe.'
};

export const ultimateFlare: Skill = {
	name: 'Ultimate Flare',
	spCost: 20,
	power: 90,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '3 physical attacks, 90 Fire damage to one foe. Cannot move from recoil for one turn.'
};

export const ultimateOuryuken: Skill = {
	name: 'Ultimate Ouryuken',
	spCost: 50,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating extra strong Neutral attack on one foe.'
};

export const unidentifiedFlyingKiss: Skill = {
	name: 'Unidentified Flying Kiss',
	spCost: 15,
	power: 95,
	attribute: Attribute.Dark,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 95 Dark damage to one foe. 15% chance of dotting target.'
};

export const vNovaBlast: Skill = {
	name: 'V-Nova Blast',
	spCost: 10,
	power: 105,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 105 Fire damage to one foe. After use, receive 5% HP damage from recoil.'
};

export const vantheon: Skill = {
	name: 'Vantheon',
	spCost: 10,
	power: 15,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '4-8 physical attacks, 15 Neutral damage to one foe. 20% chance of increasing ATK by 10%.'
};

export const veeLaser: Skill = {
	name: 'Vee Laser',
	spCost: 10,
	power: 95,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 95 Light damage to one foe.'
};

export const veemonHeadbutt: Skill = {
	name: 'Veemon Headbutt',
	spCost: 5,
	power: 75,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 75 Neutral damage to one foe.'
};

export const venomInfusion: Skill = {
	name: 'Venom Infusion',
	spCost: 20,
	power: 135,
	attribute: Attribute.Dark,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 135 Dark damage to one foe. 50% chance of poisoning target.'
};

export const venomTrap: Skill = {
	name: 'Venom Trap',
	spCost: 10,
	power: 40,
	attribute: Attribute.Plant,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 40 Plant damage to one foe. Poisons target. 70% accuracy.'
};

export const victorySword: Skill = {
	name: 'Victory Sword',
	spCost: 25,
	power: 65,
	attribute: Attribute.Wind,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '2 physical attacks, 65 Wind damage to one foe.'
};

export const volcanicDriver: Skill = {
	name: 'Volcanic Driver',
	spCost: 20,
	power: 130,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 130 Fire damage to one foe. Tends to critical more often.'
};

export const volcanicStrike: Skill = {
	name: 'Volcanic Strike',
	spCost: 10,
	power: 95,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 95 Fire damage to one foe.'
};

export const vortexPenetration: Skill = {
	name: 'Vortex Penetration',
	spCost: 35,
	power: 0,
	attribute: Attribute.Water,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'DEF-penetrating strong Water attack on one foe. Always hits.'
};

export const vulcanCrusher: Skill = {
	name: 'Vulcan Crusher',
	spCost: 30,
	power: 145,
	attribute: Attribute.Earth,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 145 Earth damage to one foe. 35% chance of stunning target. 95% accuracy.'
};

export const vulcansHammer: Skill = {
	name: 'Vulcan\'s Hammer',
	spCost: 15,
	power: 115,
	attribute: Attribute.Electric,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 115 Electric damage to one foe.'
};

export const waltzsEnd: Skill = {
	name: 'Waltz\'s End',
	spCost: 25,
	power: 35,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '3 physical attacks, 35 Neutral damage to all foes.'
};

export const weltgeist: Skill = {
	name: 'Weltgeist',
	spCost: 15,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: false,
	description: 'Nullify all received damage until the next turn, and counterattacks when receiving physical or magic attacks.'
};

export const willOWisp: Skill = {
	name: 'Will-o\'-Wisp',
	spCost: 10,
	power: 30,
	attribute: Attribute.Fire,
	skillType: SkillType.Magic,
	isInheritable: false,
	description: 'Magic attack, 30 Fire damage to all foes.'
};

export const willOWispSlash: Skill = {
	name: 'Will-O\'-Wisp Slash',
	spCost: 20,
	power: 70,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '2 physical attacks, 70 Fire damage to one foe.'
};

export const windClaw1: Skill = {
	name: 'Wind Claw I',
	spCost: 3,
	power: 65,
	attribute: Attribute.Wind,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 65 Wind damage to one foe. 95% accuracy.'
};

export const windClaw2: Skill = {
	name: 'Wind Claw II',
	spCost: 6,
	power: 85,
	attribute: Attribute.Wind,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 85 Wind damage to one foe. 95% accuracy.'
};

export const windClaw3: Skill = {
	name: 'Wind Claw III',
	spCost: 9,
	power: 105,
	attribute: Attribute.Wind,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 105 Wind damage to one foe. 95% accuracy.'
};

export const windCutterSword: Skill = {
	name: 'Wind Cutter Sword',
	spCost: 15,
	power: 40,
	attribute: Attribute.Wind,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: '3 physical attacks, 40 Wind damage to one foe.'
};

export const winningKnuckle: Skill = {
	name: 'Winning Knuckle',
	spCost: 15,
	power: 115,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 115 Neutral damage to one foe. 20% chance of stunning target.'
};

export const wolfClaw: Skill = {
	name: 'Wolf Claw',
	spCost: 15,
	power: 120,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 120 Neutral damage to one foe.'
};

export const wolkenapalm1: Skill = {
	name: 'Wolkenapalm I',
	spCost: 3,
	power: 65,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 65 Fire damage to one foe. 95% accuracy.'
};

export const wolkenapalm2: Skill = {
	name: 'Wolkenapalm II',
	spCost: 6,
	power: 85,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 85 Fire damage to one foe. 95% accuracy.'
};

export const wolkenapalm3: Skill = {
	name: 'Wolkenapalm III',
	spCost: 9,
	power: 105,
	attribute: Attribute.Fire,
	skillType: SkillType.Physical,
	isInheritable: true,
	description: 'Physical attack, 105 Fire damage to one foe. 95% accuracy.'
};

export const wyvernsBreath: Skill = {
	name: 'Wyvern\'s Breath',
	spCost: 25,
	power: 110,
	attribute: Attribute.Wind,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 110 Wind damage to all foes. Receive recoil damage equal to 20% of HP.'
};

export const xAura: Skill = {
	name: 'X-Aura',
	spCost: 25,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Restores HP for all party members.'
};

export const xHeal: Skill = {
	name: 'X-Heal',
	spCost: 8,
	power: 0,
	attribute: Attribute.Neutral,
	skillType: SkillType.Support,
	isInheritable: true,
	description: 'Restores HP for one party member.'
};

export const zweiGlänze: Skill = {
	name: 'Zwei Glänze',
	spCost: 20,
	power: 150,
	attribute: Attribute.Neutral,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 150 Neutral damage to one foe.'
};

export const zweiSieger: Skill = {
	name: 'Zwei Sieger',
	spCost: 10,
	power: 90,
	attribute: Attribute.Light,
	skillType: SkillType.Physical,
	isInheritable: false,
	description: 'Physical attack, 90 Light damage to one for. Tends to critical more often.'
};
