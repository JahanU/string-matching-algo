import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RkComponent } from './rk.component';

describe('RkComponent', () => {
  let component: RkComponent;
  let fixture: ComponentFixture<RkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
