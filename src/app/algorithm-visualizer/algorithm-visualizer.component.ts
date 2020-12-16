import { Component, OnInit, OnChanges } from '@angular/core';
import { ArraysService } from '../shared/arrays.service';
import { StringService } from '../shared/string.service';

import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { AlgorithmEnum } from '../shared/algorithm.enum';
import { InputDataEnum } from '../shared/input-data.enum';
import { InputDataSourceEnum } from '../algorithm-visualizer/input-data-source.enum';
import { BubbleSort } from './algorithms/bubble-sort';
import { NaiveSearch } from './algorithms/naive-search';
import { FormControl, FormGroup } from '@angular/forms';
import { KMPSearch } from './algorithms/KMP-search';


const ELEMENT_DATA: any[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-algorithm-visualizer',
  templateUrl: './algorithm-visualizer.component.html',
  styleUrls: ['./algorithm-visualizer.component.scss'],
  providers: [
    {
      provide: BsDropdownConfig,
      useValue: { isAnimated: true, autoClose: true },
    },
  ],
})

export class AlgorithmVisualizerComponent implements OnInit {


displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
dataSource = ELEMENT_DATA;

  algoEnum = AlgorithmEnum;
  inputEnum = InputDataEnum;
  selectedAlgorithm: AlgorithmEnum = AlgorithmEnum.KMP;
  selectedInput: InputDataEnum = InputDataEnum.SELECTED_INPUT;

  inputForm = new FormGroup({
    needle: new FormControl(this.stringService.needle),
    stack: new FormControl(this.stringService.stack),
  });
  

  constructor(public arrService: ArraysService, public stringService: StringService) { }

  ngOnInit(): void {
    // this.arrService.resetArray();
    this.stringService;
  }

  resetArray(): void {
    // this.arrService.resetArray();
  }

  updateStrings() {
      this.stringService.needle = this.inputForm.get('needle').value;
      this.stringService.stack = this.inputForm.get('stack').value;
    this.stringService.createStringsArrays();
  }

  pitchSize(event: any): void {
    // this.arrService.arrayLength = event.value;
    // this.arrService.setBarWidth();
    // this.arrService.resetArray();
  }

  pitchSpeed(event: any): void {
    this.stringService.animationSpeed = event.value;
  }

  displayAlgo = (pickedAlgo: AlgorithmEnum) => this.selectedAlgorithm = pickedAlgo;
  displayInput = (pickedInput: InputDataEnum) => this.selectedInput = pickedInput;
  
  updateInputData() { // Could use a Map and a key to get the stories, but since its small, no need!
    if (this.selectedInput == InputDataEnum.DNA) 
      this.inputForm.get('stack').setValue(InputDataSourceEnum.DNA);

    if (this.selectedInput == InputDataEnum.STORY) 
      this.inputForm.get('stack').setValue(InputDataSourceEnum.STORY);

    

    this.updateStrings();

  }

  startSorting(): void {
    // this.stringService.isSorting = true;
    if (this.selectedAlgorithm === AlgorithmEnum.KMP) { this.KMPSearch(); }
    if (this.selectedAlgorithm === AlgorithmEnum.NAIVE) { this.naiveSearch(); }
  }

  bubbleSort(): void {
    const bs = new BubbleSort(this.arrService);
    const numbersCopy = [...this.arrService.numbers];
    bs.bubbleSort(numbersCopy);
    bs.bubbleSortAnimation();
  }

  naiveSearch(): number {
    const ns = new NaiveSearch(this.stringService);
    let stackCopy = [...this.stringService.stackArr];
    let needleCopy = [...this.stringService.needleArr];
    let occurrencesCount = ns.naiveSearch(stackCopy, needleCopy);
    ns.naiveSearchAnimation();
    return occurrencesCount;
  }

  KMPSearch(): number {
    const KMP = new KMPSearch(this.stringService);
    let stackCopy = [...this.stringService.stackArr];
    let needleCopy = [...this.stringService.needleArr];
    KMP.genSuffixArray(needleCopy);
    let occurrencesCount = KMP.KMPSearch(stackCopy, needleCopy);
    KMP.KMPSearchAnimation();
    return occurrencesCount;
  }
}
