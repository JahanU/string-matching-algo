import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmVisualizerComponent } from './algorithm-visualizer.component';

describe('AlgorithmVisualizerComponent', () => {
  let component: AlgorithmVisualizerComponent;
  let fixture: ComponentFixture<AlgorithmVisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmVisualizerComponent ]
      // may need providers: [stringService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    console.log(component.inputForm.get('needle').value);
    expect(component.inputForm.get('needle').value).toBe('ABC');
  });

});
