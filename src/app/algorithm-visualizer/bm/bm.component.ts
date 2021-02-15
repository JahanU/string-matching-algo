import { OnChanges } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlgorithmEnum } from 'src/app/shared/algorithm.enum';
import { Colours } from 'src/app/shared/colours.enum';
import { Letters } from 'src/app/shared/models/Letters';
import { StringService } from 'src/app/shared/string.service';

@Component({
  selector: 'app-bm',
  templateUrl: './bm.component.html',
  styleUrls: ['./bm.component.scss']
})
export class BMComponent implements OnInit {

  // https://algs4.cs.princeton.edu/53substring/BoyerMoore.java.html
  //  *  Reads in two strings, the pattern and the input text, and
  //  *  searches for the pattern in the input text using the
  //  *  bad-character rule part of the Boyer-Moore algorithm.
  //  *  (does not implement the strong good suffix rule)
  //  * 

  @Input() isSorting: boolean;
  @Output() public bmEvent = new EventEmitter();
  @Input() parentStack: Letters[] = []; // Take value from parent
  @Input() parentNeedle: Letters[] = [];

  stackArr: Letters[] = [];
  needleArr: Letters[] = [];
  shiftArr: Letters[] = []; // Auxilary array used to shift the needleArr when a match fails

  animations: AnimationValues[] = [];
  occurrencesCount: number = 0;
  animationMaxLimit: number = 0;
  timeTaken: string = "00:00:00";
  codeSnippet: string = AlgorithmEnum.BM_CODE;

  radix: number;
  badChars: number[]; // // the bad-character skip array
  badCharsMap = new Map();
  displayedColumns: string[] = ['shift', 'character'];
  ELEMENT_DATA: badCharacter[] = [];

  constructor(private readonly stringService: StringService) {
    this.radix = 256;
    this.badCharsMap = new Map<string, number>();
    this.badChars = new Array(this.radix);
  }

  ngOnInit(): void { }

  ngOnChanges(changes: OnChanges): void { // whenever parent values change, this updates!
    if (this.isSorting)
      this.startBMSearch();
    else {
      this.cloneArrays();
      this.genBadCharArray();
    }
  }

  cloneArrays() {
    this.stackArr = this.stringService.deepCloneArray(this.parentStack);
    this.needleArr = this.stringService.deepCloneArray(this.parentNeedle);
    this.shiftArr = [];
  }

  startBMSearch() {
    this.BMSearch();
    this.bmSearchAnimation();
  }
  /*
   * Preprocesses the pattern string. 1
   * @param pat the pattern string
   */
  genBadCharArray() {
    this.badChars.fill(-1, 0, this.radix);
    this.badCharsMap = new Map<string, number>();

    for (let j = 0; j < this.needleArr.length; j++) {
      this.badChars[this.needleArr[j].character.charCodeAt(0)] = j;
      this.badCharsMap.set(this.needleArr[j].character, j);
    }
    this.createBadCharsTable();
  }

  createBadCharsTable(): void {
    this.ELEMENT_DATA = [];
    for (let [k, v] of this.badCharsMap) {
      this.ELEMENT_DATA.push({ character: k, shift: v });
    }
  }

  BMSearch() {
    const m = this.needleArr.length;
    const n = this.stackArr.length;
    let s = 0;
    let matchCount = 0;

    if (this.stackArr.length < this.needleArr.length) return 0;
    if (this.stackArr.length == 0 || this.needleArr.length == 0) return 0;

    while (s <= (n - m)) {
      let j = (m - 1);

      while (j >= 0 && this.needleArr[j].character == this.stackArr[s + j].character) {
        this.animations.push({ isMatch: true, occurrencesCount: matchCount, stackIndex: (s + j), needleIndex: j });
        j--;
      }

      if (j < 0) {
        // console.log('match found! at index: ' + s);
        matchCount++;
        this.animations.push({ isMatch: true, occurrencesCount: matchCount, stackIndex: (s + j), needleIndex: j });
        s += (s + m < n) ? m - this.badChars[this.stackArr[s + m].character.charCodeAt(0)] : 1;
      }
      else {
        this.animations.push({ isMatch: false, occurrencesCount: matchCount, stackIndex: (s + j), needleIndex: j });
        s += Math.max(1, j - this.badChars[this.stackArr[s + j].character.charCodeAt(0)]);
      }
    }
    this.animationMaxLimit = this.animations.length;
    return matchCount;
  }


  bmSearchAnimation(): void {
    let resetToWhite = false;
    this.timeTakenInMilli();

    const timerBM = setInterval(() => {
      const action: AnimationValues = this.animations.shift();
      if (action) {
        this.occurrencesCount = action.occurrencesCount;

        if (resetToWhite) {
          this.shiftTextRight();
          this.setToWhite();
          resetToWhite = false;
        }

        if (action.isMatch) {
          this.needleArr[action.needleIndex].colour = Colours.SELECTED;
          this.stackArr[action.stackIndex].colour = Colours.SELECTED;
          if (action.needleIndex == 0) {
            resetToWhite = true;
            this.setToGreen(action.stackIndex);
          }
        }
        else {
          this.needleArr[action.needleIndex].colour = Colours.RED;
          this.stackArr[action.stackIndex].colour = Colours.RED;
          resetToWhite = true;
        }
      }
      else { // animations finished 
        clearInterval(timerBM);
        this.isSorting = false;
        this.bmEvent.emit(this.isSorting);
        this.setToWhite();
      }
    }, this.stringService.animationSpeed);
  }

  setToWhite() {
    this.stackArr.forEach((chr) => (chr.colour = Colours.WHITE));
    this.needleArr.forEach((chr) => (chr.colour = Colours.WHITE));
  }
  setToGreen(stackIndex: number) {
    const needleLen = this.needleArr.length - 1;

    for (let i = stackIndex; i <= (stackIndex + needleLen); i++)
      this.stackArr[i].colour = Colours.GREEN;

    this.needleArr.forEach((chr) => (chr.colour = Colours.GREEN));
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
  isMatch: boolean;
  occurrencesCount: number;
  stackIndex: number;
  needleIndex: number;
}

interface badCharacter {
  character: string;
  shift: number;
}