import { Attribute } from "./Attribute";
import { DigimonType } from "./DigimonType";
import { Stage } from "./Stage";
import { SupportSkill } from "./SupportSkill";

export interface Digimon {
	fieldGuideNumber: number;
	name: string;
	description: string;
	
	attribute: Attribute;
	stage: Stage;
	type: DigimonType;

	memoryUsage: number;
	equipmentSlots: number;
	
	supportSkill: SupportSkill;

	digivolvesFrom: Digimon[];
	digivolvesTo: Digimon[];
}