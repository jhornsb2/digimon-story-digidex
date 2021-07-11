import { Stats } from '.';

export interface DigivolutionRequirements {
	//basic requirements
	level?: number;
	stats?: Stats;

	//additional requirements
	clearedHackersMemory?: boolean;
	humanSpiritOfFlame?: boolean;
	humanSpiritOfLight?: boolean;
}