import { DigimonDetailsComponent } from './digimon-details/digimon-details.component';
import { DigimonSummaryComponent } from './digimon-summary/digimon-summary.component';
import { DigidexComponent } from './digidex/digidex.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
	{ path: 'digidex', component: DigidexComponent },
	{ path: 'digimon-summary', component: DigimonSummaryComponent },
	{ path: 'digimon-details', component: DigimonDetailsComponent },
	{ path: '', component: DigimonDetailsComponent }
];