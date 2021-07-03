import { Digimon } from './lib/Digimon';
import { Component } from '@angular/core';
import { ALL_DIGIMON } from './lib/constants/DigimonConstants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'digimon-story-digidex';
  digimons: Digimon[] = ALL_DIGIMON;
}
