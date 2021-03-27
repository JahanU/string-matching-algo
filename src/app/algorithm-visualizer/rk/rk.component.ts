import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { AlgorithmEnum } from 'src/app/shared/enums/algorithm.enum';
import { Colours } from 'src/app/shared/enums/colours.enum';
import { Letters } from 'src/app/shared/models/Letters';
import { StringService } from 'src/app/shared/services/string.service';

@Component({
  selector: 'app-rk',
  templateUrl: './rk.component.html',
  styleUrls: ['./rk.component.scss']
})
// https://algs4.cs.princeton.edu/53substring/RabinKarp.java.html

export class RkComponent implements OnInit {

  @Input() isSorting: boolean;
  @Output() public rkEvent = new EventEmitter(); // Emit when animation is done
  @Input() parentStack: Letters[] = []; // Take value from parent
  @Input() parentNeedle: Letters[] = [];
  @Input() hideCodeSnippet: boolean = false;

  stackArr: Letters[] = [];
  needleArr: Letters[] = []; // Needed only for Las Vegas
  shiftArr: Letters[] = []; // Auxilary array used to shift the needleArr when a match fails

  needle: string = '';
  animations: AnimationValues[] = [];
  matchCount: number = 0;
  occurrencesCount: number = 0;
  animationMaxLimit: number = 0;
  timeTaken: string = "00:00:00";
  codeSnippet: string = AlgorithmEnum.RK_CODE;
  currentHashedSubstring: string = '';

  patHash: number;    // pattern hash value
  prime: number;      // a large prime, small enough to avoid long overflow
  R: number;          // radix
  RM: number;         // R^(M-1) % Q

  constructor(public stringService: StringService) {
    this.R = 256;
    this.prime = 199;
    this.RM = 1; // precompute R^(m-1) % q for use in removing leading digit
  }

  ngOnInit(): void { }

  ngOnChanges(changes: OnChanges): void { // whenever parent values change, this updates!
    if (this.isSorting) // Parent triggers to start sorting
      this.startRKSearch();
    else {
      this.cloneArrays();
      this.setNeedleHash();
    }
  }


  cloneArrays() {
    this.stackArr = this.stringService.deepCloneArray(this.parentStack);
    this.needleArr = this.stringService.deepCloneArray(this.parentNeedle);
    this.needle = this.needleArr.map((ch) => ch.character).join('');
    this.shiftArr = [];
  }

  startRKSearch() {
    this.matchCount = 0;
    this.animations = [];
    this.rkSearch();
    this.rkAnimation();
  }

  // Create hashcode for Needle
  setNeedleHash() {
    this.RM = 1;
    for (let i = 1; i <= this.needleArr.length - 1; i++) {
      this.RM = (this.R * this.RM) % this.prime;
    }
    this.currentHashedSubstring = this.stackArr.slice(0, this.needleArr.length).map((chr) => chr.character).join('');
    this.patHash = this.hash(this.needleArr, this.needleArr.length);

  }

  getHashCode(text: string): number { // To display hash code
    let h = 0;
    for (let i = 0; i < this.needleArr.length; i++) {
      h = (this.R * h + text[i].charCodeAt(0)) % this.prime;
    }
    return h;
  }

  /**
   * Preprocesses the pattern string.
   *
   */
  // Compute hash for key[0..m-1]. - e.g. For every substring we pass in
  hash(text: Letters[], wordLength: number): number {
    let h = 0;
    for (let i = 0; i < wordLength; i++) {
      h = (this.R * h + text[i].character.charCodeAt(0)) % this.prime;
      this.animations.push({ isMatch: isMatchEnum.HASHING, occurrencesCount: this.matchCount, currentString: this.currentHashedSubstring, stackIndex: i, needleIndex: i, shiftRight: false });
    }
    return h;
  }

  // Las Vegas version: does pat[] match txt[i..i-m+1]
  check(i: number) {
    for (let j = 0; j < this.needleArr.length; j++) {
      if (this.needleArr[j].character != this.stackArr[i + j].character) {
        this.animations.push({ isMatch: isMatchEnum.FAILED, occurrencesCount: this.matchCount, currentString: this.currentHashedSubstring, stackIndex: (i + j), needleIndex: j, shiftRight: false });
        return false;
      }
      else
        this.animations.push({ isMatch: isMatchEnum.SELECTED_INDEX_MATCH, occurrencesCount: this.matchCount, currentString: this.currentHashedSubstring, stackIndex: (i + j), needleIndex: j, shiftRight: false });
    }

    this.animations.push({ isMatch: isMatchEnum.COMPLETE, occurrencesCount: this.matchCount, currentString: this.currentHashedSubstring, stackIndex: i, needleIndex: null, shiftRight: true });
    return true;
  }


  rkSearch(): number {
    if (this.stackArr.length < this.needleArr.length) return 0;
    if (this.stackArr.length == 0 || this.needleArr.length == 0) return 0;
    let n = this.stackArr.length;
    let m = this.needleArr.length;

    let txtHash = this.hash(this.stackArr, m);

    // check for match at offset 0
    if ((this.patHash == txtHash) && this.check(0))
      this.matchCount++;
    else // If no match, then we pop the first element, otherwise we keep the first element as this is a perf match!
      this.animations.push({ isMatch: isMatchEnum.POP, occurrencesCount: this.matchCount, currentString: this.currentHashedSubstring, stackIndex: 0, needleIndex: 0, shiftRight: true });

    // check for hash match; if hash match, then check for exact match (Via Las Vegas)
    for (let i = m; i < n; i++) {

      // Remove leading digit, add trailing digit, check for match. 
      txtHash = (txtHash + this.prime - this.RM * this.stackArr[i - m].character.charCodeAt(0) % this.prime) % this.prime;
      txtHash = (txtHash * this.R + this.stackArr[i].character.charCodeAt(0)) % this.prime;
      this.animations.push({ isMatch: isMatchEnum.HASHING, occurrencesCount: this.matchCount, currentString: this.currentHashedSubstring, stackIndex: i, needleIndex: null, shiftRight: false }); // Push current char first
      this.currentHashedSubstring += this.stackArr[i].character;

      // match
      const offset = i - m + 1;
      this.currentHashedSubstring = this.currentHashedSubstring.substring(1);
      this.animations[this.animations.length - 1].currentString = this.currentHashedSubstring;
      this.animations.push({ isMatch: isMatchEnum.POP, occurrencesCount: this.matchCount, currentString: this.currentHashedSubstring, stackIndex: offset, needleIndex: 0, shiftRight: true });
      if ((this.patHash == txtHash) && this.check(offset))
        this.matchCount++;
    }

    this.animationMaxLimit = this.animations.length;
    return this.matchCount;
  }


  rkAnimation(): void {
    this.timeTakenInMilli();
    this.currentHashedSubstring = this.animations[0].currentString;

    const timer = setInterval(() => {
      const action: AnimationValues = this.animations.shift();

      if (action) {
        this.occurrencesCount = action.occurrencesCount;
        this.currentHashedSubstring = action.currentString;

        if (isMatchEnum.FAILED === action.isMatch) {
          this.stackArr[action.stackIndex].colour = Colours.RED;
          this.needleArr[action.needleIndex].colour = Colours.RED;
        }

        if (isMatchEnum.HASHING === action.isMatch) {
          this.stackArr[action.stackIndex].colour = Colours.SELECTED;
          if (action.needleIndex !== null) this.needleArr[action.needleIndex].colour = Colours.SELECTED;
        }

        if (isMatchEnum.POP == action.isMatch) {
          this.stackArr[action.stackIndex].colour = Colours.WHITE;
          this.shiftTextRight();

        }

        if (isMatchEnum.SELECTED_INDEX_MATCH == action.isMatch) {
          if (action.stackIndex - 1 >= 0 && this.stackArr[action.stackIndex - 1].colour !== Colours.GREEN) {
            this.shiftArr.pop();
          }
          this.stackArr[action.stackIndex].colour = Colours.GREEN;
          this.needleArr[action.needleIndex].colour = Colours.GREEN;
        }

        if (isMatchEnum.COMPLETE == action.isMatch) {
          this.setColourFromIndex(action.stackIndex, Colours.GREEN);
          this.setColourFromIndex(action.stackIndex, Colours.SELECTED);
          this.setToWhiteToIndex(this.stackArr, action.stackIndex)
          this.shiftTextRight();

        }

      }
      else {
        clearInterval(timer);
        this.isSorting = false;
        this.rkEvent.emit(this.isSorting);
        this.setToWhiteToIndex(this.stackArr, this.stackArr.length - 1);
      }
    }, this.stringService.animationSpeed);
  }

  setToWhiteToIndex(array: Letters[], maxIndex: number) {
    for (let i = 0; i <= maxIndex; i++) {
      array[i].colour = Colours.WHITE;
    }
  }

  setColourFromIndex(stackIndex: number, colourName: Colours) {
    const needleLen = this.needleArr.length - 1;
    for (let i = stackIndex; i <= (stackIndex + needleLen); i++) // from stack index to (stackIndex + needleIndex) -> covers the whole distance of the stack!
      this.stackArr[i].colour = colourName;
    this.needleArr.forEach((chr) => (chr.colour = colourName));
  }

  shiftTextRight() {
    // > 0 so if match is last, it does uneededly shift chars
    if (this.animations.length == 0) return;
    this.shiftArr.push({ character: null, colour: null, index: 0 });
  }

  timeTakenInMilli() {
    const startTime = Date.now();
    const timer = setInterval(() => {
      if (this.isSorting) {
        const elapsedTime = Date.now() - startTime;
        this.timeTaken = this.stringService.timeToString(elapsedTime);
      }
      else {
        clearInterval(timer);
      }
    }, 10);
  }

}

interface AnimationValues {
  isMatch: isMatchEnum;
  occurrencesCount: number;
  currentString: string;
  stackIndex: number;
  needleIndex: number;
  shiftRight: boolean
}

export enum isMatchEnum {
  FAILED = 'FAILED_MATCH',
  HASHING = 'HASHING_MATCH',
  SELECTED_INDEX_MATCH = 'SELECTED_INDEX_MATCH',
  COMPLETE = 'COMPLETE_MATCH',
  POP = 'POP_FIRST',
}

