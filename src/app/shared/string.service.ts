import { Injectable } from '@angular/core';
import { Letters } from './models/Letters';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  stack: string;
  needle: string;
  stackArr: string[];
  needleArr: Letters[];

  constructor() { 
    this.needleArr = [];
    this.createArray();
  }

  createArray() {
    this.stack = "ABCDEABCABC";
    this.needle = "ABC";
    this.stackArr = this.stack.split(''); // Will always be unchanged!
    let splitNeedle = this.needle.split('');

    for (let i = 0; i < splitNeedle.length; i++) {
      const letter = splitNeedle[i];
      this.needleArr.push({character: letter, colour: '#b2ff59'});
    }
  }
}

