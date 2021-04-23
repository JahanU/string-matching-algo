import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlgorithmVisualizerComponent } from './algorithm-visualizer.component';
import { StringService } from '../shared/services/string.service';

describe('AlgorithmVisualizerComponent', () => { // Top hierarchy
  // init variables 
  let component: AlgorithmVisualizerComponent;
  let fixture: ComponentFixture<AlgorithmVisualizerComponent>; // Test env for component
  let stringService: StringService;

  // Assign variables, prepare test suite, ng modules etc
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmVisualizerComponent ],
      providers: [ { provide: StringService } ]
    })
    // .compileComponents(); // compiles template (HTML, CSS)
  }));

  beforeEach(() => {
    // Variables we plan to use for testing!
    fixture = TestBed.createComponent(AlgorithmVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    stringService = TestBed.get(StringService);
  });
});
