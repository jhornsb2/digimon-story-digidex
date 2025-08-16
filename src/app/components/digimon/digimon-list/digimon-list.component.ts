import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { Digimon, Attribute, Stage, DigimonType, SkillType } from '../../../lib';
import * as DigimonConstants from '../../../lib/constants/DigimonConstants';
import { DigimonDetailComponent } from '../digimon-detail/digimon-detail.component';

@Component({
  selector: 'app-digimon-list',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './digimon-list.component.html',
  styleUrls: ['./digimon-list.component.scss'],
})
export class DigimonListComponent implements OnInit {
  allDigimon: Digimon[] = [];
  filteredDigimon: Digimon[] = [];

  searchTerm = '';
  selectedStage = '';
  selectedAttribute = '';
  selectedType = '';

  // Get string values only, filtering out numeric keys
  stages = Object.values(Stage).filter(value => typeof value === 'string');
  attributes = Object.values(Attribute).filter(value => typeof value === 'string');
  digimonTypes = Object.values(DigimonType).filter(value => typeof value === 'string');
  skillTypes = Object.values(SkillType).filter(value => typeof value === 'string');

  constructor(private readonly dialog: MatDialog) {}

  ngOnInit() {
    this.loadDigimon();
    this.filterDigimon();
  }

  private loadDigimon() {
    // Get all Digimon from the constants file
    this.allDigimon = Object.values(DigimonConstants).filter(
      digimon => digimon && typeof digimon === 'object' && 'name' in digimon && 'fieldGuideNumber' in digimon
    );

    // Sort by field guide number
    this.allDigimon.sort((a, b) => a.fieldGuideNumber - b.fieldGuideNumber);
  }

  filterDigimon() {
    this.filteredDigimon = this.allDigimon.filter(digimon => {
      const matchesSearch =
        !this.searchTerm ||
        digimon.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        digimon.description.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesStage = !this.selectedStage || Stage[digimon.stage] === this.selectedStage;

      const matchesAttribute = !this.selectedAttribute || Attribute[digimon.attribute] === this.selectedAttribute;

      const matchesType = !this.selectedType || DigimonType[digimon.type] === this.selectedType;

      return matchesSearch && matchesStage && matchesAttribute && matchesType;
    });
  }

  openDigimonDetail(digimon: Digimon) {
    this.dialog.open(DigimonDetailComponent, {
      data: digimon,
      width: '800px',
      maxWidth: '90vw',
      maxHeight: '90vh',
    });
  }

  onDigimonCardKeyDown(event: KeyboardEvent, digimon: Digimon): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.openDigimonDetail(digimon);
    }
  }

  getDigimonIconPath(digimon: Digimon): string {
    const paddedNumber = digimon.fieldGuideNumber.toString().padStart(3, '0');
    const iconName = digimon.name
      .toLowerCase()
      .replace(/[\s\\-]/g, '-')
      .replace(/[.(<>)]/g, '');
    return `assets/digimon-icons/${paddedNumber}-${iconName}-icon.png`;
  }

  // Helper methods for display
  getStageName(stage: Stage): string {
    return Stage[stage];
  }

  getAttributeName(attribute: Attribute): string {
    return Attribute[attribute];
  }

  getTypeName(type: DigimonType): string {
    return DigimonType[type];
  }

  getStageClass(stage: Stage): string {
    return 'stage-' + Stage[stage].toLowerCase().replace(/\s+/g, '-');
  }

  getAttributeClass(attribute: Attribute): string {
    return 'attribute-' + Attribute[attribute].toLowerCase().replace(/\s+/g, '-');
  }

  getTypeClass(type: DigimonType): string {
    return 'type-' + DigimonType[type].toLowerCase().replace(/\s+/g, '-');
  }
}
