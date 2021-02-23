import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { StringService } from 'src/app/shared/string.service';
import { Letters } from 'src/app/shared/models/Letters';
import { Colours } from '../../shared/colours.enum';
import { AlgorithmEnum } from 'src/app/shared/algorithm.enum';
import { ElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-kmp',
  templateUrl: './kmp.component.html',
  styleUrls: ['./kmp.component.scss']
})
export class KMPComponent implements OnInit {

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

  lps: any[] = []; // Longest proper prefix (the DFA (KMP automoton))
  displayedColumns: string[] = ['character', 'index', 'failValue'];
  ELEMENT_DATA: failArray[] = [];

  constructor(
    private readonly stringService: StringService,
  ) { }

  ngOnInit(): void { }

  ngOnChanges(changes: OnChanges): void { // whenever parent values change, this updates!
    if (this.isSorting)
      this.startKMPSearch();
    else {
      this.cloneArrays();
      this.genSuffixArray();
    }
  }

  startKMPSearch() {
    this.KMPSearch();
    this.KMPSearchAnimation();
  }

  cloneArrays() {
    this.stackArr = this.stringService.deepCloneArray(this.parentStack);
    this.needleArr = this.stringService.deepCloneArray(this.parentNeedle);
    this.shiftArr = [];
  }


  createFailureTable(): void {

    this.ELEMENT_DATA = []; // HTML table
    let notEmptyArray = []; // Array rows with relevent rows, ignoring those filled with just 0s

    // let letterCache = {};
    // let sortedLetters = this.needleArr.reduce((acc, ch) => {
    //   if (!letterCache[ch.character]) {
    //     letterCache[ch.character] = true;
    //     acc.push(ch.character);
    //   }
    //   return acc;
    // }, []).sort();

    let sortedLetters = [...new Set(this.needleArr.map((ch) => ch.character).sort())]; 
    const reducerSum = (accumulator, currentValue) => accumulator + currentValue;
    
    for (let row of this.lps) {
      let sum = row.reduce(reducerSum);
      if (sum > 0)
        notEmptyArray.push(row);
    }
    for (let i = 0; i < sortedLetters.length; i++) {
      this.ELEMENT_DATA.push({ character: sortedLetters[i], index: i, failValue: notEmptyArray[i] });
    }
  }

  genSuffixArray() {
    if (this.stackArr.length < this.needleArr.length) return 0;
    if (this.stackArr.length == 0 || this.needleArr.length == 0) return 0;

    const R = 256;
    const M = this.needleArr.length;

    this.lps = [];
    for (let r = 0; r < R; r++) {
      this.lps.push(new Array(M).fill(0));
    }

    const hasChar = this.needleArr[0].character != '';
    if (hasChar)
      this.lps[this.needleArr[0].character.charCodeAt(0)][0] = 1;

    for (let i = 0, j = 1; j < M; j++) {
      for (let c = 0; c < R; c++)
        this.lps[c][j] = this.lps[c][i]; // Copy mismatch cases. 

      this.lps[this.needleArr[j].character.charCodeAt(0)][j] = j + 1; // Set match case. 
      i = this.lps[this.needleArr[j].character.charCodeAt(0)][i]; // Update restart state. 
    }

    this.createFailureTable();
  }

  KMPSearch() {// simulate operation of DFA on text
    if (this.stackArr.length < this.needleArr.length) return 0;
    if (this.stackArr.length == 0 || this.needleArr.length == 0) return 0;

    let n = this.stackArr.length;
    let m = this.needleArr.length;
    let matchCount = 0;
    let i, j; // i = stack, j = needle

    for (i = 0, j = 0; i < n && j < m; i++) { // i < stack, j < needle

      if (this.stackArr[i].character == this.needleArr[j].character)
        this.animations.push({ isMatch: isMatchEnum.CHAR_MATCH, occurrencesCount: matchCount, stackIndex: i, needleIndex: j, skip: -1 });
      else {
        this.animations.push({ isMatch: isMatchEnum.FAILED, occurrencesCount: matchCount, stackIndex: i, needleIndex: j, skip: j });
      }

      j = this.lps[this.stackArr[i].character.charCodeAt(0)][j];
      if (j == m) { // perfect match!
        this.animations.push({ isMatch: isMatchEnum.COMPLETE, occurrencesCount: matchCount, stackIndex: i, needleIndex: j, skip: j - 1 });
        matchCount++;
        j = 0;
      }

    }

    this.animationMaxLimit = this.animations.length;
    return matchCount;
  }


  KMPSearchAnimation(): void {
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
    if (skipNum == -1) return;

    while (skipNum-- >= 0)
      this.shiftArr.push({ character: this.shiftArr.length.toString(), colour: 'pink', index: this.shiftArr.length });


    while ((this.shiftArr.length + this.needleArr.length) > this.stackArr.length)
      this.shiftArr.pop();

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