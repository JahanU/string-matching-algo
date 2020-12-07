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

  constructor() {
    this.stackArr = []; 
    this.needleArr = [];
    this.createArrays();
  }

  createArrays() {
    this.stack = "ABZZAZZZABC";
    this.needle = "ABC";
    let splitStack = this.stack.split(''); // Will always be unchanged!
    let splitNeedle = this.needle.split('');

    for (let i = 0; i < splitStack.length; i++) {
      this.stackArr.push({character: splitStack[i], colour: 'white', index: i});
    }

    for (let i = 0; i < splitNeedle.length; i++) {
      this.needleArr.push({character: splitNeedle[i], colour: 'white', index: i});
    }
  }
}

