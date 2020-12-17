import { Component, OnInit, OnChanges } from '@angular/core';
import { StringService } from '../shared/string.service';

import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { AlgorithmEnum } from '../shared/algorithm.enum';
import { InputDataEnum } from '../shared/input-data.enum';
import { InputDataSourceEnum } from '../algorithm-visualizer/input-data-source.enum';
import { NaiveSearch } from './algorithms/naive-search';
import { FormControl, FormGroup } from '@angular/forms';
import { KMPSearch } from './algorithms/KMP-search';
import { NaiveComponent } from './naive/naive.component';
import { Letters } from '../shared/models/Letters';



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

  algorithmEnum = AlgorithmEnum; // init
  inputDataEnum = InputDataEnum; // init
  selectedAlgorithm: AlgorithmEnum = AlgorithmEnum.NAIVE; // default
  selectedInput: InputDataEnum = InputDataEnum.SELECTED_INPUT; // default
  message = "ParentToChild";

  inputForm = new FormGroup({
    needle: new FormControl(this.stringService.needle),
    stack: new FormControl(this.stringService.stack),
  });
  
  stackArr: Letters[] = []; // Take from service! child can access from parent
  needleArr: Letters[] = [];

  constructor(public stringService: StringService) { }

  ngOnInit(): void {
    this.stringService;
    this.stackArr = this.stringService.stackArr;
    this.needleArr = this.stringService.needleArr;
  }

  updateStrings() {
    this.stringService.needle = this.inputForm.get('needle').value; // update service strings
    this.stringService.stack = this.inputForm.get('stack').value;
    this.stringService.createStringsArrays(); // create array in service
    this.needleArr = this.stringService.needleArr; // get array from service to this parent class
    this.stackArr = this.stringService.stackArr;
    /* 1)
    update selected child components using @input
    or child component copies service?

    2)
    when all being displayed, each child gets a copy of needle and stack.
    // allows them to perform animation and display!
    */
  }

  pitchSpeed = (event: any) => this.stringService.animationSpeed = event.value;
  displayInput = (pickedInput: InputDataEnum) => this.selectedInput = pickedInput;
  
  updateInputData() { 
    if (this.selectedInput == InputDataEnum.DNA) 
      this.inputForm.get('stack').setValue(InputDataSourceEnum.DNA);
    if (this.selectedInput == InputDataEnum.STORY) 
      this.inputForm.get('stack').setValue(InputDataSourceEnum.STORY);

    this.updateStrings();
  }

  selectAlgo(algoName: AlgorithmEnum): any {
    this.selectedAlgorithm = algoName;
  }

  startSearching(): void {
    // this.stringService.isSorting = true;
    if (this.selectedAlgorithm === AlgorithmEnum.NAIVE) { 
      const ns = new NaiveComponent(this.stringService);
    }
    
    if (this.selectedAlgorithm === AlgorithmEnum.KMP) { 
      this.KMPSearch();
    }
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
