import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonSummaryComponent } from './digimon-summary.component';

describe('DigimonSummaryComponent', () => {
  let component: DigimonSummaryComponent;
  let fixture: ComponentFixture<DigimonSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigimonSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
