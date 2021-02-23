import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { StringService } from 'src/app/shared/string.service';
import { Letters } from 'src/app/shared/models/Letters';
import { Colours } from 'src/app/shared/colours.enum';
import { AlgorithmEnum } from '../../shared/algorithm.enum';

@Component({
  selector: 'app-naive',
  templateUrl: './naive.component.html',
  styleUrls: ['./naive.component.scss']
})
export class NaiveComponent implements OnInit {

  @Input() isSorting: boolean;
  @Output() public naiveEvent = new EventEmitter(); // Emit when animation is done
  @Input() parentStack: Letters[] = []; // Take value from parent
  @Input() parentNeedle: Letters[] = [];
  @Input() hideCodeSnippet: boolean = false;

  stackArr: Letters[] = [];
  needleArr: Letters[] = [];
  shiftArr: Letters[] = []; // Auxilary array used to shift the needleArr when a match fails

  animations: AnimationValues[] = [];
  matchCount: number = 0;
  occurrencesCount: number = 0;
  animationMaxLimit: number = 0;
  timeTaken: string = "00:00:00";
  codeSnippet: string = AlgorithmEnum.NAIVE_CODE;

  constructor(
    public stringService: StringService,
  ) { }

  ngOnInit(): void {
    console.log('In Naive');
  }

  ngOnChanges(changes: OnChanges): void { // whenever parent values change, this updates!
    if (this.isSorting) // Parent triggers to start sorting
      this.startNaiveSearch();
    else {
      this.cloneArrays();
    }
  }

  cloneArrays() {
    this.stackArr = this.stringService.deepCloneArray(this.parentStack);
    this.needleArr = this.stringService.deepCloneArray(this.parentNeedle);
    this.shiftArr = [];
  }

  startNaiveSearch() {
    this.naiveSearch();
    this.naiveSearchAnimation();
  }

  naiveSearch(): number {
    if (this.stackArr.length < this.needleArr.length) return 0;
    if (this.stackArr.length == 0 || this.needleArr.length == 0) return 0;
    this.matchCount = 0;

    for (let i = 0; i <= this.stackArr.length - this.needleArr.length; i++) {
      let j = 0;

      for (j; j < this.needleArr.length; j++) {
        if (this.stackArr[i + j].character != this.needleArr[j].character) {
          this.animations.push({ isMatch: false, occurrencesCount: this.matchCount, stackIndex: i + j, needleIndex: j });
          break;
        }
        else
          this.animations.push({ isMatch: true, occurrencesCount: this.matchCount, stackIndex: i + j, needleIndex: j });
      }
      if (j == this.needleArr.length)
        this.matchCount++;
    }

    this.animationMaxLimit = this.animations.length;
    return this.matchCount;
  }


  naiveSearchAnimation(): void {
    let resetToWhite = false;
    this.timeTakenInMilli();
    // If match is found at the last animation, we push this so that the occurence var can update
    this.animations.push({ isMatch: false, occurrencesCount: this.matchCount, stackIndex: null, needleIndex: null });

    const timer = setInterval(() => {
      const action: AnimationValues = this.animations.shift();
      if (action) {
        this.occurrencesCount = action.occurrencesCount;
        console.log(this.shiftArr);

        if (resetToWhite) {
          this.shiftTextRight();
          this.setToWhite();
          resetToWhite = false;
        }

        if (action.isMatch) {
          this.needleArr[action.needleIndex].colour = Colours.SELECTED;
          this.stackArr[action.stackIndex].colour = Colours.SELECTED;
          if (action.needleIndex == this.needleArr.length - 1) { // Full match
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
      else {
        clearInterval(timer);
        this.isSorting = false;
        this.naiveEvent.emit(this.isSorting);
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

