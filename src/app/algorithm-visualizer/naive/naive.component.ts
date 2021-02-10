import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { StringService } from 'src/app/shared/string.service';
import { Letters } from 'src/app/shared/models/Letters';
import { Colours } from 'src/app/shared/colours.enum';

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

  stackArr: Letters[] = [];
  needleArr: Letters[] = [];

  animations: AnimationValues[] = [];
  matchCount: number = 0;
  occurrencesCount: number = 0;
  animationMaxLimit: number = 0;
  timeTaken: string = "00:00:00";

  constructor(public stringService: StringService) { }

  ngOnInit(): void { }

  ngOnChanges(changes: OnChanges): void { // whenever parent values change, this updates!
    if (this.isSorting) // Parent triggers to start sorting
      this.startNaiveSearch();
    else {
      this.cloneArraysFromService();
    }
  }

  cloneArraysFromService() {
    this.stackArr = this.stringService.deepCloneArray(this.parentStack);
    this.needleArr = this.stringService.deepCloneArray(this.parentNeedle);
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
    this.animations.push({ isMatch: false, occurrencesCount: this.matchCount, stackIndex: null, needleIndex: null}); // If match is found at the last animation, we push this so that the occurence var can update

    const timer = setInterval(() => {
      const action: AnimationValues = this.animations.shift();
      if (action) {
        this.occurrencesCount = action.occurrencesCount;

        if (resetToWhite) {
          this.setToWhite();
          resetToWhite = false;
        }
        if (action.isMatch) {
          this.needleArr[action.needleIndex].colour = Colours.GREEN;
          this.stackArr[action.stackIndex].colour = Colours.GREEN;
          if (action.needleIndex == this.needleArr.length - 1) {
            resetToWhite = true;
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
    this.stackArr.map((chr) => (chr.colour = Colours.WHITE));
    this.needleArr.map((chr) => (chr.colour = Colours.WHITE));
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

