import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAlgorithmsComponent } from './all-algorithms.component';

describe('AllAlgorithmsComponent', () => {
  let component: AllAlgorithmsComponent;
  let fixture: ComponentFixture<AllAlgorithmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAlgorithmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAlgorithmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
