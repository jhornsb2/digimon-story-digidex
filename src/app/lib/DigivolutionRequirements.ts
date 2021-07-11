import { Digimon } from './Digimon';
import { Stats } from './Stats';

export interface DigivolutionRequirements {
	//basic requirements
	level?: number;
	stats?: Stats;

	//additional requirements
	clearedHackersMemory?: boolean;
	humanSpiritOfFlame?: boolean;
	humanSpiritOfLight?: boolean;
	beastSpiritOfFlame?: boolean;
	beastSpiritOfLight?: boolean;

	digimon?: Digimon[];
}