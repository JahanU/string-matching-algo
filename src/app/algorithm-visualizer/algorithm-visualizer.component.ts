import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { StringService } from '../shared/string.service';

import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { AlgorithmEnum } from '../shared/algorithm.enum';
import { InputDataEnum } from '../shared/input-data.enum';
import { InputDataSourceEnum } from '../shared/input-data-source.enum';
import { FormControl, FormGroup } from '@angular/forms';
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
  selectedAlgorithm: AlgorithmEnum = AlgorithmEnum.RK; // default
  selectedInput: InputDataEnum = InputDataEnum.SELECTED_INPUT; // default
  
  stackArr: Letters[] = []; // Take from service! child can access from parent or parent send to class
  needleArr: Letters[] = [];
  isSorting: boolean = false;
  
  inputForm = new FormGroup({
    needle: new FormControl(this.stringService.needle),
    stack: new FormControl(this.stringService.stack),
  });
  
  constructor(public stringService: StringService) { }
  
  ngOnInit(): void {
    this.stringService;
    this.stackArr = this.stringService.stackArr;
    this.needleArr = this.stringService.needleArr;
  }

  updateStrings() {
    this.stringService.needle = this.inputForm.get('needle').value; // update service strings
    this.stringService.stack = this.inputForm.get('stack').value;
    this.stringService.updateStringsArray(); // create array in service
    this.needleArr = this.stringService.needleArr; // get array from service to this parent class
    this.stackArr = this.stringService.stackArr;
  }

  pitchSpeed = (event: any) => this.stringService.animationSpeed = event.value;
  displayInput = (pickedInput: InputDataEnum) => this.selectedInput = pickedInput;
  
  updateInputData() { 
    if (this.selectedInput == InputDataEnum.DNA) {
      this.inputForm.get('stack').setValue(InputDataSourceEnum.DNA);
      this.inputForm.get('needle').setValue(InputDataSourceEnum.DNA_NEEDLE);
    }
    if (this.selectedInput == InputDataEnum.STORY) {
      this.inputForm.get('stack').setValue(InputDataSourceEnum.STORY);
      this.inputForm.get('needle').setValue(InputDataSourceEnum.STORY_NEEDLE);
    }
    this.updateStrings();
  }

  selectAlgo(algoName: AlgorithmEnum): any {
    this.selectedAlgorithm = algoName;
  }

  startSearching(): void {
    this.isSorting = true;
  }

  handleIsSorting(event: any) { // event/message from child back to parent
    this.isSorting = event;
  }

}
