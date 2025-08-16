import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { Attribute, Digimon, DigimonType, Skill, SkillType, Stage } from '../../../lib';

@Component({
  selector: 'app-digimon-detail',
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatChipsModule, MatIconModule, MatTabsModule],
  templateUrl: './digimon-detail.component.html',
  styleUrl: './digimon-detail.component.scss',
})
export class DigimonDetailComponent {
  stages = Object.values(Stage);
  attributes = Object.values(Attribute);
  digimonTypes = Object.values(DigimonType);
  skillTypes = Object.values(SkillType);

  constructor(
    public dialogRef: MatDialogRef<DigimonDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public digimon: Digimon
  ) {}

  getDigimonIconPath(digimon: Digimon): string {
    const paddedNumber = digimon.fieldGuideNumber.toString().padStart(3, '0');
    const iconName = digimon.name.toLowerCase().replace(/[\s\-.]/g, '-');
    return `assets/digimon-icons/${paddedNumber}-${iconName}-icon.png`;
  }

  getStatRequirements(stats: any): string[] {
    const requirements: string[] = [];
    if (stats.hp) requirements.push(`HP: ${stats.hp}`);
    if (stats.sp) requirements.push(`SP: ${stats.sp}`);
    if (stats.atk) requirements.push(`ATK: ${stats.atk}`);
    if (stats.def) requirements.push(`DEF: ${stats.def}`);
    if (stats.int) requirements.push(`INT: ${stats.int}`);
    if (stats.spd) requirements.push(`SPD: ${stats.spd}`);
    if (stats.cam) requirements.push(`CAM: ${stats.cam}`);
    if (stats.abi) requirements.push(`ABI: ${stats.abi}`);
    return requirements;
  }

  getStageClass(stage: number): string {
    return 'stage-' + this.stages[stage].toString().toLowerCase().replace(/\s+/g, '-');
  }

  getAttributeClass(attribute: number): string {
    return 'attribute-' + this.attributes[attribute].toString().toLowerCase().replace(/\s+/g, '-');
  }

  getTypeClass(type: number): string {
    return 'type-' + this.digimonTypes[type].toString().toLowerCase().replace(/\s+/g, '-');
  }

  getSkillTypeClass(skillType: number): string {
    return 'skill-type-' + this.skillTypes[skillType].toString().toLowerCase().replace(/\s+/g, '-');
  }

  getSkillsArray(): Skill[] {
    if (!this.digimon.skills) {
      return [];
    }

    // If skills is an object, convert to array
    if (typeof this.digimon.skills === 'object' && !Array.isArray(this.digimon.skills)) {
      return Object.values(this.digimon.skills);
    }

    // If it's already an array, return as-is
    return this.digimon.skills as Skill[];
  }
}
