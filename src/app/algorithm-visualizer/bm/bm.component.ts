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
  @Input() hideCodeSnippet: boolean = false;

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
    this.animations = [];
  }

  startBMSearch() {
    // this.BMSearch();
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
    let m = this.needleArr.length;
    let n = this.stackArr.length;
    if (n < m) return 0;
    if (n == 0 || m == 0) return 0;

    let skip = 0;
    let matchCount = 0;
    this.animations.push({ isMatch: this.stackArr[m-1].character === this.needleArr[m-1].character, occurrencesCount: matchCount, stackIndex: m-1, needleIndex: m-1, skipped: -1 });

    for (let i = 0; i <= n - m; i += skip) {
        skip = 0;

        for (let j = m-1; j >= 0; j--) {
            if (this.needleArr[j].character !== this.stackArr[i+j].character) {
                skip = Math.max(1, j - this.badChars[this.stackArr[i+j].character.charCodeAt(0)]);
                this.animations.push({ isMatch: false, occurrencesCount: matchCount, stackIndex: i+j, needleIndex: j, skipped: -1 });
                this.animations.push({ isMatch: false, occurrencesCount: matchCount, stackIndex: i+j, needleIndex: j, skipped: skip });
                break;
            }
            else {
              this.animations.push({ isMatch: true, occurrencesCount: matchCount, stackIndex: i+j, needleIndex: j, skipped: skip });
            }
        }

        if (skip == 0) { // found
          matchCount++;
          skip++;
          this.animations.push({ isMatch: true, occurrencesCount: matchCount, stackIndex: null, needleIndex: null, skipped: skip });
        }
    }
    
    this.animationMaxLimit = this.animations.length;
    return matchCount; // not found
  }

  bmSearchAnimation(): void {
    let resetToWhite = false;
    this.timeTakenInMilli();
    this.animations.shift();

    const timerBM = setInterval(() => {
      const action: AnimationValues = this.animations.shift();
      if (action) {
        this.occurrencesCount = action.occurrencesCount;

        if (resetToWhite) {
          this.setToWhite();
          this.shiftTextRight(action.skipped);
          resetToWhite = false;
        }

        if (action.isMatch) {
          if (action.needleIndex) this.needleArr[action.needleIndex].colour = Colours.SELECTED;
          if (action.stackIndex) this.stackArr[action.stackIndex].colour = Colours.SELECTED;
          
          if (action.needleIndex == 0) {
            resetToWhite = true;
            this.setToGreen(action.stackIndex);
          }
        }

        if (!action.isMatch) {
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

  shiftTextRight(skipNum: number) {
    // > 0 so if match is last, it does uneededly shift chars
    if (this.animations.length == 0) return;
    if (skipNum == -1) return;
    console.log('skipped: ', skipNum);

    for (let i = 0; i < skipNum; i++) {
      this.shiftArr.push({ character: null, colour: null, index: null });
    }

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
  skipped: number;
}

interface badCharacter {
  character: string;
  shift: number;
}