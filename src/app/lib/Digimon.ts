import { DigivolutionRequirements } from './DigivolutionRequirements';
import { Attribute } from './Attribute';
import { DigimonType } from './DigimonType';
import { Stage } from './Stage';
import { SupportSkill } from './SupportSkill';
import { SkillMapping } from './SkillMapping';

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
  skills: SkillMapping;

  digivolvesFrom: Digimon[];
  digivolvesTo: Digimon[];

  digivolutionRequirements?: DigivolutionRequirements;
}
