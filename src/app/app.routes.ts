import { Routes } from '@angular/router';
import { SkillListComponent } from './components/skill/skill-list/skill-list.component';
import { DigimonListComponent } from './components/digimon/digimon-list/digimon-list.component';

export const appRoutes: Routes = [
  { path: 'digimon', component: DigimonListComponent },
  { path: 'skills', component: SkillListComponent },
];
