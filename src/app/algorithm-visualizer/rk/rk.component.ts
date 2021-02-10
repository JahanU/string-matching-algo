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
  needleArr: Letters[] = []; // Needed only for Las Vegas
  matchCount: number = 0;

  animations: AnimationValues[] = [];
  occurrencesCount: number = 0;
  animationMaxLimit: number = 0;
  timeTaken: string = "00:00:00";

  patHash: number;    // pattern hash value
  prime: number;      // a large prime, small enough to avoid long overflow
  R: number;          // radix
  RM: number;         // R^(M-1) % Q
  
  constructor(public stringService: StringService) { 
    this.R = 256;
    this.prime = 199;
    this.RM = 1; // precompute R^(m-1) % q for use in removing leading digit
  }

  ngOnInit(): void {  }

  ngOnChanges(changes: OnChanges): void { // whenever parent values change, this updates!
    if (this.isSorting) // Parent triggers to start sorting
      this.startRKSearch();
    else {
      this.cloneArraysFromService();
    }
  }

  cloneArraysFromService() {
    this.stackArr = this.stringService.deepCloneArray(this.parentStack);
    this.needleArr = this.stringService.deepCloneArray(this.parentNeedle);
  }

  startRKSearch() {
    this.matchCount = 0;
    this.setNeedleHash();
    this.rkSearch();
    this.rkAnimation();
  }

    /**
     * Preprocesses the pattern string.
     *
     */
  setNeedleHash() {
    this.RM = 1;
    for (let i = 1; i <= this.needleArr.length - 1; i++) {
      this.RM = (this.R * this.RM) % this.prime;
    }
    this.patHash = this.hash(this.needleArr, this.needleArr.length);
    console.log('pattern hash: ', this.patHash);

  }
  
   // Compute hash for key[0..m-1]. 
  hash(pat: Letters[], wordLength: number): number {
    let h = 0;
    for (let i = 0; i < wordLength; i++)
      h = (this.R * h + pat[i].character.charCodeAt(0)) % this.prime;

    return h;
  }

    // Las Vegas version: does pat[] match txt[i..i-m+1] ?
  check(i: number) {
    for (let j = 0; j < this.needleArr.length; j++) {
      if (this.needleArr[j].character != this.stackArr[i + j].character) {
        this.animations.push({ isMatch: false, occurrencesCount: this.matchCount, stackIndex: (i + j), needleIndex: j });
        return false; 
      }
      else 
        this.animations.push({ isMatch: true, occurrencesCount: this.matchCount, stackIndex: (i + j), needleIndex: j });
    }
    return true;
  }


  rkSearch(): number {
    if (this.stackArr.length < this.needleArr.length) return 0;
    if (this.stackArr.length == 0 || this.needleArr.length == 0) return 0;

    let txtHash = this.hash(this.stackArr, this.needleArr.length);

      // check for match at offset 0
        if ((this.patHash == txtHash) && this.check(0))
          this.matchCount++;

        // check for hash match; if hash match, check for exact match
        for (let i = this.needleArr.length; i < this.stackArr.length; i++) {
          this.animations.push({ isMatch: false, occurrencesCount: this.matchCount, stackIndex: i, needleIndex: null });

          // Remove leading digit, add trailing digit, check for match. 
          txtHash = (txtHash + this.prime - this.RM * this.stackArr[i - this.needleArr.length].character.charCodeAt(0) % this.prime) % this.prime; 
          txtHash = (txtHash * this.R + this.stackArr[i].character.charCodeAt(0)) % this.prime; 

          // match
          const offset = i - this.needleArr.length + 1;
          if ((this.patHash == txtHash) && this.check(offset)) 
            this.matchCount++;
      }

    this.animationMaxLimit = this.animations.length;
    return this.matchCount;
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
        }
      }
      else {
        clearInterval(timer);
        this.isSorting = false;
        this.rkEvent.emit(this.isSorting);
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

