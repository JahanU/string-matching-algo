import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { StringService } from 'src/app/shared/string.service';
import { Letters } from 'src/app/shared/models/Letters';

@Component({
  selector: 'app-kmp',
  templateUrl: './kmp.component.html',
  styleUrls: ['./kmp.component.scss']
})
export class KMPComponent implements OnInit {

  @Output() public naiveEvent = new EventEmitter();
  @Input() stackArr: Letters[] = []; // Take value from parent
  @Input() needleArr: Letters[] = [];
  @Input() isSorting: boolean = false;

  animations: AnimationValues[] = [];
  occurrencesCount: number = 0;

  lps: number[] = []; // Longest proper prefix (the DFA (KMP automoton))

  constructor(
    private readonly stringService: StringService,
  ) { }
  
  ngOnInit(): void { }

  ngOnChanges(changes: OnChanges): void { // whenever parent values change, this updates!
    if (this.isSorting)
      this.startKMPSearch();

  }
  startKMPSearch() {
    this.genSuffixArray();
    this.KMPSearch();
    this.KMPSearchAnimation();
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
  }

  KMPSearch(): number {

    if (this.stackArr.length < this.needleArr.length) return 0;
    if (this.stackArr.length == 0 || this.needleArr.length == 0) return 0;

    let matchCount: number = 0;
    let [ind, n] = [0, 0]; // ind traverses whole stack, n checks and traverses through needle

    while (ind < this.stackArr.length) {
      if (this.stackArr[ind].character == this.needleArr[n].character) {
        this.animations.push({ isMatch: true, occurrencesCount: matchCount, stackIndex: ind, needleIndex: n });
        ind++;
        n++;

        if (n == this.needleArr.length) {
          matchCount++;
          this.animations.push({ isMatch: true, occurrencesCount: matchCount, stackIndex: ind - 1, needleIndex: n - 1 });
          n = this.lps[n - 1];
        }
      }

      else {
        if (n != 0)
          n = this.lps[n - 1];
        else
          ind++;
        this.animations.push({ isMatch: false, occurrencesCount: matchCount, stackIndex: ind, needleIndex: n });
      }
    }
    return matchCount;
  }

  KMPSearchAnimation(): void {
    let resetToWhite = false;
    // this.animations.pop();

    const timer = setInterval(() => {
      const action: AnimationValues = this.animations.shift();
      if (action) {
        this.occurrencesCount = action.occurrencesCount;

        if (resetToWhite) {
          this.setToWhite();
          resetToWhite = false;
        }
        if (action.isMatch) {
          this.needleArr[action.needleIndex].colour = '#b2ff59';
          this.stackArr[action.stackIndex].colour = '#b2ff59';

          // if (action.needleIndex == this.stringService.needleArr.length) {
          //   resetToWhite = true;
          //   console.log('match!');
          // }
        }
        else {
          this.needleArr[action.needleIndex].colour = 'red';
          this.stackArr[action.stackIndex].colour = 'red';
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
    this.stackArr.map((chr) => (chr.colour = 'white'));
    this.needleArr.map((chr) => (chr.colour = 'white'));
  }
}

interface AnimationValues {
  isMatch: boolean;
  occurrencesCount: number;
  stackIndex: number;
  needleIndex: number;
}
