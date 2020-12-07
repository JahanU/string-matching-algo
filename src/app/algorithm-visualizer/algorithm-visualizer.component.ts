import { Component, OnInit } from '@angular/core';
import { ArraysService } from '../shared/arrays.service';
import { StringService } from '../shared/string.service';

import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { AlgorithmEnum } from '../shared/algorithm.enum';
import { BubbleSort } from './algorithms/bubble-sort';
import { NaiveSearch } from './algorithms/NaiveSearch';

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
  selectedAlgorithm: AlgorithmEnum = AlgorithmEnum.BUBBLE;

  constructor(public arrService: ArraysService, public stringService: StringService) { }

  ngOnInit(): void {
    this.arrService.resetArray();
    this.stringService;
    this.naiveSearch();
  }

  resetArray(): void {
    this.arrService.resetArray();
  }

  pitchSize(event: any): void {
    this.arrService.arrayLength = event.value;
    this.arrService.setBarWidth();
    this.arrService.resetArray();
  }

  pitchSpeed(event: any): void {
    this.arrService.animationSpeed = event.value;
  }

  displayInfo(pickedAlgo: AlgorithmEnum): void {
    this.selectedAlgorithm = pickedAlgo;
  }

  startSorting(): void {
    this.arrService.sorting = true;
    if (this.selectedAlgorithm === AlgorithmEnum.BUBBLE) { this.bubbleSort(); }
  }

  bubbleSort(): void {
    const bs = new BubbleSort(this.arrService);
    const numbersCopy = [...this.arrService.numbers];
    bs.bubbleSort(numbersCopy);
    bs.bubbleSortAnimation();
  }

  naiveSearch(): void {
    const ns = new NaiveSearch(this.arrService, this.stringService);
    ns.naiveSearch(this.stringService.stackArr, this.stringService.needleArr);
  }

}
