import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Colours } from 'src/app/shared/colours.enum';
import { Letters } from 'src/app/shared/models/Letters';
import { StringService } from 'src/app/shared/string.service';

@Component({
  selector: 'app-rk',
  templateUrl: './rk.component.html',
  styleUrls: ['./rk.component.scss']
})
export class RkComponent implements OnInit {

  @Input() isSorting: boolean;
  @Output() public rkEvent = new EventEmitter(); // Emit when animation is done
  @Input() parentStack: Letters[] = []; // Take value from parent
  @Input() parentNeedle: Letters[] = [];

  stackArr: Letters[] = [];
  needleArr: Letters[] = [];

  animations: AnimationValues[] = [];
  occurrencesCount: number = 0;
  animationMaxLimit: number = 0;
  timeTaken: string = "00:00:00";


  // private String pat;      // the pattern  // needed only for Las Vegas
  // private long patHash;    // pattern hash value
  // private int m;           // pattern length
  // private long q;          // a large prime, small enough to avoid long overflow
  // private int R;           // radix
  // private long RM;         // R^(M-1) % Q
  
  constructor(public stringService: StringService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: OnChanges): void { // whenever parent values change, this updates!
    if (this.isSorting) // Parent triggers to start sorting
      this.rkSearch();
    else {
      this.cloneArraysFromService();
    }
  }

  cloneArraysFromService() {
    this.stackArr = this.stringService.deepCloneArray(this.parentStack);
    this.needleArr = this.stringService.deepCloneArray(this.parentNeedle);
  }

  startRKSearch() {
    this.rkSearch();
    this.rkAnimation();
  }

  rkSearch(): number {
    if (this.stackArr.length < this.needleArr.length) return 0;
    if (this.stackArr.length == 0 || this.needleArr.length == 0) return 0;

    let matchCount: number = 0;


    // TODO




    this.animationMaxLimit = this.animations.length;
    return matchCount;
  }


  rkAnimation(): void {
    let resetToWhite = false;
    this.timeTakenInMilli();

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

