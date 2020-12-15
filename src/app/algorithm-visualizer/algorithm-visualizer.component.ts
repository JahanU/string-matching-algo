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

  algoEnum = AlgorithmEnum;
  inputEnum = InputDataEnum;
  selectedAlgorithm: AlgorithmEnum = AlgorithmEnum.NAIVE;
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
    if (this.selectedInput == InputDataEnum.DNA) { 
      this.inputForm.get('stack').setValue(InputDataSourceEnum.DNA);
      this.updateStrings();
    }

  }

  startSorting(): void {
    this.stringService.isSorting = true;
    if (this.selectedAlgorithm === AlgorithmEnum.BUBBLE) { this.bubbleSort(); }
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
    let needleCopy = [...this.stringService.needleArr];
    let stackCopy = [...this.stringService.stackArr];
    let occurrencesCount = ns.naiveSearch(stackCopy, needleCopy);
    ns.naiveSearchAnimation();
    return occurrencesCount;
  }

}
