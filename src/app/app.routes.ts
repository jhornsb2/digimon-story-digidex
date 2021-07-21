import { DigidexComponent } from './digidex/digidex.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
	{ path: 'digidex', component: DigidexComponent },
	{ path: '', component: DigidexComponent }
];