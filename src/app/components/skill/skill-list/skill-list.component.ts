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
import { Skill, SkillType, Attribute } from '../../../lib';
import * as SkillConstants from '../../../lib/constants/SkillConstants';
import { SkillDetailComponent } from '../skill-detail/skill-detail.component';

@Component({
  selector: 'app-skill-list',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss'],
})
export class SkillListComponent implements OnInit {
  allSkills: Skill[] = [];
  filteredSkills: Skill[] = [];

  searchTerm = '';
  selectedSkillType = '';
  selectedAttribute = '';
  selectedInheritable = '';

  // Get string values only, filtering out numeric keys
  skillTypes = Object.values(SkillType).filter(value => typeof value === 'string');
  attributes = Object.values(Attribute).filter(value => typeof value === 'string');

  constructor(private readonly dialog: MatDialog) {}

  ngOnInit() {
    this.loadSkills();
    this.filterSkills();
  }

  private loadSkills() {
    // Get all skills from the constants file
    this.allSkills = Object.values(SkillConstants).filter(
      skill => skill && typeof skill === 'object' && 'name' in skill
    );
  }

  filterSkills() {
    this.filteredSkills = this.allSkills.filter(skill => {
      const matchesSearch =
        !this.searchTerm ||
        skill.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesSkillType = !this.selectedSkillType || SkillType[skill.skillType] === this.selectedSkillType;

      const matchesAttribute = !this.selectedAttribute || Attribute[skill.attribute] === this.selectedAttribute;

      const matchesInheritable =
        !this.selectedInheritable || skill.isInheritable.toString() === this.selectedInheritable;

      return matchesSearch && matchesSkillType && matchesAttribute && matchesInheritable;
    });
  }

  openSkillDetail(skill: Skill) {
    this.dialog.open(SkillDetailComponent, {
      data: skill,
      width: '600px',
      maxWidth: '90vw',
    });
  }

  onSkillCardKeyDown(event: KeyboardEvent, skill: any): void {
    // Handle Enter or Space key to trigger the same action as click
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Prevent default scrolling behavior for Space
      this.openSkillDetail(skill);
    }
  }

  // Helper methods for display
  getSkillTypeName(skillType: SkillType): string {
    return SkillType[skillType];
  }

  getAttributeName(attribute: Attribute): string {
    return Attribute[attribute];
  }

  getSkillTypeClass(skillType: SkillType): string {
    return 'skill-type-' + SkillType[skillType].toLowerCase().replace(/\s+/g, '-');
  }

  getAttributeClass(attribute: Attribute): string {
    return 'attribute-' + Attribute[attribute].toLowerCase().replace(/\s+/g, '-');
  }
}
