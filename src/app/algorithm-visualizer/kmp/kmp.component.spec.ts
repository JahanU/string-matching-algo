import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KMPComponent } from './kmp.component';

describe('KMPComponent', () => {
  let component: KMPComponent;
  let fixture: ComponentFixture<KMPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KMPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
