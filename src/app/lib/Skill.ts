import { SkillType } from './SkillType';
import { Attribute } from "./Attribute";

export interface Skill {
	name: string;
	spCost: number;
	power: number;
	attribute: Attribute;
	skillType: SkillType;
	isInheritable: boolean;
}