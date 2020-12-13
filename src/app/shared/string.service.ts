import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Letters } from './models/Letters';
import { map, delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StringService {

  private _stack: string;
  private _needle: string;

  stackArr: Letters[];
  needleArr: Letters[];
  occurrencesCount: number = 0;

  isSorting: boolean = false;
  animationSpeed: number = 500;

  constructor(private httpClient: HttpClient) {

  
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


  formatLabel(value: number): string {
    value /= 1000;
    if (value.toString().length > 1)
      return value.toString().substring(0, 4) + 's';
    return value + 's';
  }



  public get stack(): string {
    return this._stack;
  }
  public set stack(value: string) {
    if (value.length <= 0)
      this._stack = 'ABCDE';
    this._stack = value;
  }

  public get needle(): string {
    return this._needle;
  }
  public set needle(value: string) {
    if (value.length <= 0)
      this._needle = 'ABC';
    this._needle = value;  
  }

}

