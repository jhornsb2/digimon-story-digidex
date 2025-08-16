import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Attribute, Skill, SkillType } from '../../../lib';

@Component({
  selector: 'app-skill-detail',
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatChipsModule, MatIconModule],
  templateUrl: './skill-detail.component.html',
  styleUrl: './skill-detail.component.scss',
})
export class SkillDetailComponent {
  skillTypes = Object.values(SkillType);
  attributes = Object.values(Attribute);

  constructor(
    public dialogRef: MatDialogRef<SkillDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public skill: Skill
  ) {}

  getSkillAnalysis(skill: Skill): string[] {
    const analysis: string[] = [];

    if (skill.spCost === 0) analysis.push('No SP Cost');
    if (skill.spCost >= 30) analysis.push('High SP Cost');
    if (skill.power >= 100) analysis.push('High Damage');
    if (skill.power === 0) analysis.push('No Direct Damage');
    if (skill.description.includes('all foes')) analysis.push('Area of Effect');
    if (skill.description.includes('always hits')) analysis.push('Never Misses');
    if (skill.description.includes('critical')) analysis.push('Critical Hit Bonus');
    if (skill.description.includes('absorb')) analysis.push('HP/SP Drain');
    if (skill.description.includes('poison')) analysis.push('Poison Effect');
    if (skill.description.includes('stun')) analysis.push('Stun Effect');
    if (skill.description.includes('paralyze')) analysis.push('Paralyze Effect');
    if (skill.description.includes('sleep')) analysis.push('Sleep Effect');
    if (skill.description.includes('confus')) analysis.push('Confusion Effect');
    if (skill.description.includes('increase')) analysis.push('Stat Boost');
    if (skill.description.includes('reduce')) analysis.push('Stat Reduction');
    if (skill.description.includes('penetrating')) analysis.push('Defense Piercing');
    if (skill.description.includes('recoil')) analysis.push('Recoil Damage');

    return analysis;
  }
}
