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

  algorithmEnum = AlgorithmEnum; // init, to use in HTML
  inputDataEnum = InputDataEnum; // init

  selectedAlgorithm: AlgorithmEnum = AlgorithmEnum.DFA; // default
  selectedInput: InputDataEnum = InputDataEnum.USER_INPUT; // default
  allStories = new Map<InputDataEnum, [InputDataSourceEnum, InputDataSourceEnum]>();

  stackArr: Letters[] = []; // Take from service! child can access from parent or parent send to class
  needleArr: Letters[] = [];
  isSorting: boolean = false;

  inputForm = new FormGroup({
    needle: new FormControl(this.stringService.needle),
    stack: new FormControl(this.stringService.stack),
  });

  constructor(public stringService: StringService) {
    this.preLoadInputData();
  }
  

  ngOnInit(): void {
    this.stringService;
    this.stackArr = this.stringService.stackArr;
    this.needleArr = this.stringService.needleArr;
  }

  preLoadInputData() {
    // Input type, e.g. DNA, story, movie etc
    // array, containing the predetermined needle and stack based on the input type!
    this.allStories.set(InputDataEnum.USER_INPUT, [InputDataSourceEnum.INPUT_NEEDLE, InputDataSourceEnum.INPUT_STACK]);
    this.allStories.set(InputDataEnum.DNA, [InputDataSourceEnum.DNA_NEEDLE, InputDataSourceEnum.DNA_STACK]);
    this.allStories.set(InputDataEnum.STORY, [InputDataSourceEnum.STORY_NEEDLE, InputDataSourceEnum.STORY_STACK]);
    this.allStories.set(InputDataEnum.BIBLE, [InputDataSourceEnum.BIBLE_NEEDLE, InputDataSourceEnum.BIBLE_STACK]);
    this.allStories.set(InputDataEnum.STOCKS, [InputDataSourceEnum.STOCKS_NEEDLE, InputDataSourceEnum.STOCKS_STACK]);
    this.allStories.set(InputDataEnum.MOVIES, [InputDataSourceEnum.MOVIES_NEEDLE, InputDataSourceEnum.MOVIES_STACK]);
  }

  updateStrings() {
    this.stringService.needle = this.inputForm.get('needle').value; // update service strings
    this.stringService.stack = this.inputForm.get('stack').value;
    this.stringService.updateStringsArray(); // create array in service
    this.needleArr = this.stringService.needleArr; // get array from service to this parent class
    this.stackArr = this.stringService.stackArr;
  }

  pitchSpeed = (event: any) => this.stringService.animationSpeed = event.value;
  displayInput = (pickedInput: string) => this.selectedInput = pickedInput as InputDataEnum;
  

  updateInputData() {

    let stackAndNeedle = this.allStories.get(this.selectedInput); // [needle, stack];
    if (stackAndNeedle) {
      this.inputForm.get('needle').setValue(stackAndNeedle[0]); // e.g. DNA_NEEDLE
      this.inputForm.get('stack').setValue(stackAndNeedle[1]);// e.g. DNA_STACK
    }
    else 
      console.log('error');

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
