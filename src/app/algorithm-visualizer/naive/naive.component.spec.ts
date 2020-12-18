import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaiveComponent } from './naive.component';

describe('NaiveComponent', () => {
  let component: NaiveComponent;
  let fixture: ComponentFixture<NaiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
