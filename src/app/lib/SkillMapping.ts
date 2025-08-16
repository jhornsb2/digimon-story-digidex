import { Skill } from './Skill';

/**
 * Type for mapping the level a skill is learned to which skill is learned.
 */
export interface SkillMapping {
  [key: number]: Skill;
}
