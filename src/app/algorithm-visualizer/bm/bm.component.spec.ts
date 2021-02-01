import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmComponent } from './bm.component';

describe('BmComponent', () => {
  let component: BmComponent;
  let fixture: ComponentFixture<BmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
