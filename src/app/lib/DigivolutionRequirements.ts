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
	modeChange?: boolean; //if mode change is true we  dont have to match other requirements to switch to and from

	//digimon required for DNA digivolution
	digimon?: Digimon[];
}