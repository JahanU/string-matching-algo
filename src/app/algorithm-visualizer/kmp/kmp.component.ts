import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { StringService } from 'src/app/shared/string.service';
import { Letters } from 'src/app/shared/models/Letters';
import { Colours } from '../../shared/colours.enum';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { AlgorithmEnum } from 'src/app/shared/algorithm.enum';

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

  stackArr: Letters[] = []; // Take value from parent
  needleArr: Letters[] = [];
  shiftArr: Letters[] = []; // Auxilary array used to shift the needleArr when a match fails

  animations: AnimationValues[] = [];
  occurrencesCount: number = 0;
  animationMaxLimit: number = 0;
  timeTaken: string = "00:00:00";
  codeSnippet: string = AlgorithmEnum.KMP_CODE;

  lps: number[] = []; // Longest proper prefix (the DFA (KMP automoton))
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

  genSuffixArray() {
    let [left, right] = [0, 1];
    this.lps = new Array(this.needleArr.length).fill(0);

    while (right < this.lps.length) {
      // if left and right index match, increment!
      if (this.needleArr[left].character === this.needleArr[right].character) {
        this.lps[right] = left + 1;
        left++;
        right++;
      }
      else {
        // if they do not match, keep traversing
        if (left !== 0)
          left = this.lps[left - 1];
        else {
          this.lps[right] = 0;
          right++;
        }
      }
    }
    this.createFailureTable();
  }

  createFailureTable(): void {
    this.ELEMENT_DATA = [];
    for (let i = 0; i < this.lps.length; i++) {
      this.ELEMENT_DATA.push({ character: this.needleArr[i].character, index: i, failValue: this.lps[i] });
    }
  }

  KMPSearch(): number {
    if (this.stackArr.length < this.needleArr.length) return 0;
    if (this.stackArr.length == 0 || this.needleArr.length == 0) return 0;

    let matchCount: number = 0;
    let [ind, needle] = [0, 0]; // ind traverses whole stack, n checks and traverses through needle

    while (ind < this.stackArr.length) {
      if (this.stackArr[ind].character == this.needleArr[needle].character) {
        this.animations.push({ isMatch: true, occurrencesCount: matchCount, stackIndex: ind, needleIndex: needle });
        ind++;
        needle++;

        if (needle == this.needleArr.length) {
          matchCount++;
          this.animations.push({ isMatch: true, occurrencesCount: matchCount, stackIndex: ind - 1, needleIndex: needle - 1 });
          needle = this.lps[needle - 1];
        }
      }

      else {
        if (needle != 0)
          needle = this.lps[needle - 1];
        else
          ind++;
        this.animations.push({ isMatch: false, occurrencesCount: matchCount, stackIndex: ind, needleIndex: needle });
      }
    }

    this.animationMaxLimit = this.animations.length;
    return matchCount;
  }

  KMPSearchAnimation(): void {
    let resetToWhite = false;
    this.timeTakenInMilli();

    const timer = setInterval(() => {
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

          if (action.needleIndex > 0) { // Traverse back from the prefix~
            for (let c = 0; c < action.needleIndex; c++) {
              this.needleArr[c].colour = Colours.SELECTED; // From index 0 to failValue index
              this.stackArr[action.stackIndex - (c + 1)].colour = Colours.SELECTED; // From current stack index, decrement from fail index value
            }
          }

          if (action.needleIndex == this.needleArr.length - 1)
            this.setToGreen(action.stackIndex);

        }
        else {
          this.needleArr[action.needleIndex].colour = Colours.RED;
          this.stackArr[action.stackIndex].colour = Colours.RED;
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

interface failArray {
  character: string;
  index: number;
  failValue: number;
}