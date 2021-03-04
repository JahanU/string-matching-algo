// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { AlgorithmVisualizerComponent } from './algorithm-visualizer.component';
// import { StringService } from '../shared/string.service';
// import { InputDataSourceEnum } from './input-data-source.enum';

// describe('AlgorithmVisualizerComponent', () => { // Top hierarchy
//   // init variables 
//   let component: AlgorithmVisualizerComponent;
//   let fixture: ComponentFixture<AlgorithmVisualizerComponent>; // Test env for component
//   let stringService: StringService;

//   // Assign variables, prepare test suite, ng modules etc
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ AlgorithmVisualizerComponent ],
//       providers: [ { provide: StringService } ]
//     })
//     // .compileComponents(); // compiles template (HTML, CSS)
//   }));

//   beforeEach(() => {
//     // Variables we plan to use for testing!
//     fixture = TestBed.createComponent(AlgorithmVisualizerComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     stringService = TestBed.get(StringService);
//   });


//   /* AAA
//   Arrange -> Prepare code required for specific tests
//   Act -> Invocation of the method to be tested
//   Assert -> Check if result is expected
//   */

//   // Testing empty inputs
//   it('1) should return 0, occurrences = 0', () => {
//     stringService.stack = '';
//     stringService.needle = 'ABC';
//     stringService.createStringsArrays();
//     let occurrencesNaive = component.naiveSearch();
//     expect(occurrencesNaive).toBe(0);
//     let occurrencesDFA = component.DFASearch();
//     expect(occurrencesDFA).toBe(0);
//   });

//   it('2) should return 0, occurrences = 0', () => {
//     stringService.stack = 'ABC';
//     stringService.needle = '';
//     stringService.createStringsArrays();
//     let occurrencesNaive = component.naiveSearch();
//     expect(occurrencesNaive).toBe(0);
//     let occurrencesDFA = component.DFASearch();
//     expect(occurrencesDFA).toBe(0);
//   });

//   it('3) should return 0, occurrences = 0', () => {
//     stringService.stack = '';
//     stringService.needle = '';
//     stringService.createStringsArrays();
//     let occurrencesNaive = component.naiveSearch();
//     expect(occurrencesNaive).toBe(0);
//     let occurrencesDFA = component.DFASearch();
//     expect(occurrencesDFA).toBe(0);
//   });


//   it('4) should return 0, occurrences = 0', () => {
//     stringService.stack = 'AB';
//     stringService.needle = 'ABC';
//     stringService.createStringsArrays();
//     let occurrencesNaive = component.naiveSearch();
//     expect(occurrencesNaive).toBe(0);
//     let occurrencesDFA = component.DFASearch();
//     expect(occurrencesDFA).toBe(0);
//   });

//   it('should return correct occurrences = 1', () => {
//     stringService.stack = 'ABCDE';
//     stringService.needle = 'ABC';
//     stringService.createStringsArrays();
//     let occurrencesNaive = component.naiveSearch();
//     expect(occurrencesNaive).toBe(1);
//     let occurrencesDFA = component.DFASearch();
//     expect(occurrencesDFA).toBe(1);
//   });

//   it('should return correct occurrences = 2', () => {
//     stringService.stack = 'ABCABC';
//     stringService.needle = 'ABC';
//     stringService.createStringsArrays();
//     let occurrencesNaive = component.naiveSearch();
//     expect(occurrencesNaive).toBe(2);
//     let occurrencesDFA = component.DFASearch();
//     expect(occurrencesDFA).toBe(2);
//   });

//   it('should return correct occurrences = 6', () => {
//     stringService.stack = InputDataSourceEnum.DNA;
//     stringService.needle = 'ATG';
//     stringService.createStringsArrays();
//     let occurrencesNaive = component.naiveSearch();
//     expect(occurrencesNaive).toBe(6);
//     let occurrencesDFA = component.DFASearch();
//     expect(occurrencesDFA).toBe(6);
//   });
// });
