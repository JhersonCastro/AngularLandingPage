import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoCard } from './medico-card';

describe('MedicoCard', () => {
  let component: MedicoCard;
  let fixture: ComponentFixture<MedicoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicoCard],
    }).compileComponents();

    fixture = TestBed.createComponent(MedicoCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
