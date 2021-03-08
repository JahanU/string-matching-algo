import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { StringService } from 'src/app/shared/string.service';
import { Letters } from 'src/app/shared/models/Letters';
import { Colours } from '../../shared/colours.enum';
import { AlgorithmEnum } from 'src/app/shared/algorithm.enum';

@Component({
  selector: 'app-kmp',
  templateUrl: './kmp.component.html',
  styleUrls: ['./kmp.component.scss']
})
export class KmpComponent implements OnInit {

  @Input() isSorting: boolean;
  @Output() public kmpEvent = new EventEmitter();
  @Input() parentStack: Letters[] = []; // Take value from parent
  @Input() parentNeedle: Letters[] = [];
  @Input() hideCodeSnippet: boolean = false;

  stackArr: Letters[] = []; // Take value from parent
  needleArr: Letters[] = [];
  shiftArr: Letters[] = []; // Auxilary array used to shift the needleArr when a match fails

  animations: AnimationValues[] = [];
  occurrencesCount: number = 0;
  animationMaxLimit: number = 0;
  timeTaken: string = "00:00:00";
  codeSnippet: string = AlgorithmEnum.KMP_CODE;

  next: number[] = []; // // the kmp automoton
  displayedColumns: string[] = ['character', 'index', 'failValue'];
  ELEMENT_DATA: failArray[] = [];

  constructor(
    private readonly stringService: StringService,
  ) { }

  ngOnInit(): void { }

  ngOnChanges(changes: OnChanges): void { // whenever parent values change, this updates!
    if (this.isSorting)
      this.startkmpSearch();
    else {
      this.cloneArrays();
      this.setNFA();
    }
  }

  startkmpSearch() {
    this.kmpSearch();
    this.kmpSearchAnimation();
  }

  cloneArrays() {
    this.stackArr = this.stringService.deepCloneArray(this.parentStack);
    this.needleArr = this.stringService.deepCloneArray(this.parentNeedle);
    this.shiftArr = [];
  }


  createFailureTable(): void {
    this.ELEMENT_DATA = []; // HTML table
    for (let i = 0; i < this.needleArr.length; i++) {
      this.ELEMENT_DATA.push({ character: this.needleArr[i].character, index: i, failValue: this.next[i] });
    }
  }

  // create Knuth-Morris-Pratt NFA from pattern
  setNFA() {
    if (this.stackArr.length < this.needleArr.length) return 0;
    if (this.stackArr.length == 0 || this.needleArr.length == 0) return 0;

    var n = this.needleArr.length;
    var q = 0;
    this.next.push(q);

    for (var i = 1; i < n; i++) {
      while (q > 0 && this.needleArr[q].character != this.needleArr[i].character) {
        q = this.next[q - 1];
      }
      if (this.needleArr[q].character == this.needleArr[i].character) {
        ++q;
      }
      this.next[i] = q;
    }
    this.createFailureTable();
  }

  // return offset of first occurrence of text in pattern (or n if no match)
  // simulate the NFA to find match 
  kmpSearch() {
    if (this.stackArr.length < this.needleArr.length) return 0;
    if (this.stackArr.length == 0 || this.needleArr.length == 0) return 0;
    let matchCount = 0;
    var n = this.stackArr.length;
    var m = this.needleArr.length;
    var q = 0;

    for (var i = 0; i < n; i++) {
      while (q > 0 && this.needleArr[q].character != this.stackArr[i].character) {
        this.animations.push({ isMatch: isMatchEnum.FAILED, occurrencesCount: matchCount, stackIndex: i, needleIndex: q, skip: (q - this.next[q - 1]) - 1 });
        q = this.next[q - 1];
      }
      if (this.needleArr[q].character == this.stackArr[i].character) {
        this.animations.push({ isMatch: isMatchEnum.CHAR_MATCH, occurrencesCount: matchCount, stackIndex: i, needleIndex: q, skip: -1 });
        ++q;
      }
      else {
        this.animations.push({ isMatch: isMatchEnum.FAILED, occurrencesCount: matchCount, stackIndex: i, needleIndex: q, skip: q });
      }
      if (q == m) {
        this.animations.push({ isMatch: isMatchEnum.COMPLETE, occurrencesCount: matchCount, stackIndex: i, needleIndex: q, skip: (q - this.next[q - 1]) - 1 });
        q = this.next[q - 1];
        matchCount++;
      }
    }

    this.animationMaxLimit = this.animations.length;
    return matchCount;
  }


  kmpSearchAnimation(): void {
    this.timeTakenInMilli();
    let resetToWhite = false;
    let lastSkipped = -1;

    const timer = setInterval(() => {
      const action: AnimationValues = this.animations.shift();

      if (action) {
        this.occurrencesCount = action.occurrencesCount;

        if (resetToWhite) {
          this.setToWhite();
          this.shiftTextRight(lastSkipped);
          lastSkipped = -1;
          resetToWhite = false;
        }

        if (action.isMatch === isMatchEnum.CHAR_MATCH) {
          this.needleArr[action.needleIndex].colour = Colours.SELECTED;
          this.stackArr[action.stackIndex].colour = Colours.SELECTED;

          if (action.needleIndex > 0) { // Traverse back from the prefix~
            for (let c = 0; c < action.needleIndex; c++) {
              this.needleArr[c].colour = Colours.SELECTED; // From index 0 to failValue index
              this.stackArr[action.stackIndex - (c + 1)].colour = Colours.SELECTED; // From current stack index, decrement from fail index value
            }
          }
        }

        if (action.isMatch === isMatchEnum.COMPLETE) {
          this.setToGreen(action.stackIndex);
          lastSkipped = action.skip;
          resetToWhite = true;
        }

        if (action.isMatch === isMatchEnum.FAILED) {
          this.needleArr[action.needleIndex].colour = Colours.RED;
          this.stackArr[action.stackIndex].colour = Colours.RED;
          lastSkipped = action.skip;
          resetToWhite = true;
        }
      }
      else {
        clearInterval(timer);
        this.isSorting = false;
        this.kmpEvent.emit(this.isSorting);
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
    stackIndex -= needleLen; // Go back to the first index, since now we know this is a perf match!

    for (let i = stackIndex; i <= (stackIndex + needleLen); i++)
      this.stackArr[i].colour = Colours.GREEN;

    this.needleArr.forEach((chr) => (chr.colour = Colours.GREEN));
  }

  shiftTextRight(skipNum: number) {
    // > 0 so if match is last, it does uneededly shift chars
    if (this.animations.length == 0) return;
    if (skipNum <= -1) return;

    while (skipNum-- >= 0)
      this.shiftArr.push({ character: " ", colour: null, index: null });
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
  stackIndex: number;
  needleIndex: number;
  skip: number;
}

export enum isMatchEnum {
  FAILED = 'FAILED_MATCH',
  CHAR_MATCH = 'CHAR_MATCH',
  COMPLETE = 'COMPLETE_MATCH',
}


interface failArray {
  character: string;
  index: number;
  failValue: number;
}