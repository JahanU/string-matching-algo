import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Letters } from './models/Letters';
import { map, delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StringService {

  stack: string;
  needle: string;
  stackArr: Letters[];
  needleArr: Letters[];
  occurrencesCount: number = 0;

  animationSpeed: number = 200;

  constructor() {
    [this.stack, this.needle, this.stackArr, this.needleArr] = ['ABC ABCDABCDABD','ABCDABD',[],[]];
    this.updateStringsArray();
  }

  updateStringsArray() {
    // If the new stack message is different from the curr arr, update!
    const currStack = this.stackArr.map((obj) => obj.character).join('');
    if (currStack !== this.stack) { 
      let splitStack = this.stack.split(''); 
      this.stackArr = [];
      for (let i = 0; i < splitStack.length; i++) 
        this.stackArr.push({character: splitStack[i], colour: 'white', index: i});
    }

    const currNeedle = this.needleArr.map((obj) => obj.character).join('');
    if (currNeedle !== this.needle) { 
      let needleStack = this.needle.split(''); 
      this.needleArr = [];
      for (let i = 0; i < needleStack.length; i++) 
        this.needleArr.push({character: needleStack[i], colour: 'white', index: i});
    }
  }

  formatLabel(value: number): string {
    value /= 1000;
    if (value.toString().length > 1)
      return value.toString().substring(0, 4) + 's';
    return value + 's';
  }

  deepCloneArray(array: Letters[]) {
    return JSON.parse(JSON.stringify(array))
  }


  timeToString(time) {
    const diffInHrs = time / 3600000;
    const hh = Math.floor(diffInHrs);
  
    const diffInMin = (diffInHrs - hh) * 60;
    const mm = Math.floor(diffInMin);
  
    const diffInSec = (diffInMin - mm) * 60;
    const ss = Math.floor(diffInSec);
  
    const diffInMs = (diffInSec - ss) * 100;
    const ms = Math.floor(diffInMs);
  
    const formattedMM = mm.toString().padStart(2, "0");
    const formattedSS = ss.toString().padStart(2, "0");
    const formattedMS = ms.toString().padStart(2, "0");
  
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
  }

}

