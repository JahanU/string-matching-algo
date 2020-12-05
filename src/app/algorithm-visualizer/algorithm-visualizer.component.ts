import { Component, OnInit } from '@angular/core';
import { ArraysService } from '../shared/arrays.service';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { AlgorithmEnum } from '../shared/algorithm.enum';
import { ArrayBars } from '../shared/models/ArrayBars';
import { BubbleSort } from './algorithms/bubble-sort';

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

  constructor(public arrService: ArraysService) { }

  ngOnInit(): void {
    this.arrService.resetArray();
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

}
