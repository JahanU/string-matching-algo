import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmVisualizerComponent } from './algorithm-visualizer.component';
import { StringService } from '../shared/string.service';
import { InputDataSourceEnum } from './input-data-source.enum';

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


  /* AAA
  Arrange -> Prepare code required for specific tests
  Act -> Invocation of the method to be tested
  Assert -> Check if result is expected
  */

  // Testing empty inputs
  it('should return default values, occurrences = 1', () => {
    stringService.createStringsArrays();
    stringService.stack = '';
    stringService.needle = 'ABC';
    stringService.createStringsArrays();
    let occurrences = component.naiveSearch();
    expect(occurrences).toBe(1);
  });

  it('should return default values, occurrences = 1', () => {
    stringService.createStringsArrays();
    stringService.stack = 'ABC';
    stringService.needle = '';
    stringService.createStringsArrays();
    let occurrences = component.naiveSearch();
    expect(occurrences).toBe(1);
  });

  it('should return default values, occurrences = 1', () => {
    stringService.createStringsArrays();
    stringService.stack = '';
    stringService.needle = '';
    stringService.createStringsArrays();
    let occurrences = component.naiveSearch();
    expect(occurrences).toBe(1);
  });


  it('should return correct occurrences = 0', () => {
    stringService.createStringsArrays();
    stringService.stack = 'AB';
    stringService.needle = 'ABC';
    stringService.createStringsArrays();
    let occurrences = component.naiveSearch();
    expect(occurrences).toBe(0);
  });

  it('should return correct occurrences = 1', () => {
    stringService.createStringsArrays();
    stringService.stack = 'ABCDE';
    stringService.needle = 'ABC';
    stringService.createStringsArrays();
    let occurrences = component.naiveSearch();
    expect(occurrences).toBe(1);
  });

  it('should return correct occurrences = 2', () => {
    stringService.createStringsArrays();
    stringService.stack = 'ABCABC';
    stringService.needle = 'ABC';
    stringService.createStringsArrays();
    let occurrences = component.naiveSearch();
    expect(occurrences).toBe(2);
  });

  it('should return correct occurrences = 6', () => {
    stringService.createStringsArrays();
    stringService.stack = InputDataSourceEnum.DNA;
    stringService.needle = 'ATG';
    stringService.createStringsArrays();
    let occurrences = component.naiveSearch();
    expect(occurrences).toBe(6);
  });
});
