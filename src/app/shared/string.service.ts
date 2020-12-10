import { Injectable } from '@angular/core';
import { Letters } from './models/Letters';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  stack: string;
  needle: string;
  stackArr: Letters[];
  needleArr: Letters[];
  isSorting: boolean = false;
  animationSpeed: number = 1000;
  occurrencesCount: number = 0;

  constructor() {
    this.reset();
    this.createStringsArrays();
  }

  reset() {
    [this.stack, this.needle, this.stackArr, this.needleArr] = ['ABCDE','ABC',[],[]];
  }

  createStringsArrays() {
    let splitStack = this.stack.split(''); 
    let splitNeedle = this.needle.split('');

    this.stackArr = [];
    this.needleArr = [];

    for (let i = 0; i < splitStack.length; i++) {
      this.stackArr.push({character: splitStack[i], colour: 'white', index: i});
    }

    for (let i = 0; i < splitNeedle.length; i++) {
      this.needleArr.push({character: splitNeedle[i], colour: 'white', index: i});
    }
  }

}

