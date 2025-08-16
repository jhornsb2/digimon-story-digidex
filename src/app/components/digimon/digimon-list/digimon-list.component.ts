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

  stages = Object.values(Stage);
  attributes = Object.values(Attribute);
  digimonTypes = Object.values(DigimonType);
  skillTypes = Object.values(SkillType);

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

      const matchesStage = !this.selectedStage || this.stages[digimon.stage] === this.selectedStage;

      const matchesAttribute = !this.selectedAttribute || this.attributes[digimon.attribute] === this.selectedAttribute;

      const matchesType = !this.selectedType || this.digimonTypes[digimon.type] === this.selectedType;

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
    const iconName = digimon.name.toLowerCase().replace(/[\s\-.]/g, '-');
    return `assets/digimon-icons/${paddedNumber}-${iconName}-icon.png`;
  }

  getStageClass(stage: number): string {
    return 'stage-' + this.stages[stage].toString().toLowerCase().replace(/\s+/g, '-');
  }

  getAttributeClass(attribute: number): string {
    return 'attribute-' + this.attributes[attribute].toString().toLowerCase();
  }

  getTypeClass(type: number): string {
    return 'type-' + this.digimonTypes[type].toString().toLowerCase();
  }
}
