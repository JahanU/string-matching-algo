import { ArraysService } from 'src/app/shared/arrays.service';
import { ArrayBars } from 'src/app/shared/models/ArrayBars';
import { StringService } from 'src/app/shared/string.service';
import { Letters } from 'src/app/shared/models/Letters';

export class KMPSearch {

    animations: AnimationValues[] = [];
    lps: number[] = []; // Longest proper prefix (the DFA (KMP automoton))

    constructor(
        private readonly stringService: StringService,
    ) { }


    genSuffixArray(needle: Letters[]) {
      let [left, right] = [0, 1];
      this.lps = new Array(needle.length).fill(0);
      console.log(needle);

      while (right < this.lps.length) {
        // if left and right index match, increment!
        if (needle[left].character === needle[right].character) {
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
      console.log(this.lps);
      
    }

    KMPSearch(stack: Letters[], needle: Letters[]): number {

      if (stack.length < needle.length)
        return 0;
      let matchCount: number = 0;
      // j == left
      // i == right

      let [left, right] = [0, 1];
      while (left < stack.length) {
        console.log('in loop');
        if (needle[left].character === stack[right].character) {
          left++;
          right++;
          if (left == needle.length) { // 
              matchCount++;
          }
          else if (right < stack.length && needle[left].character != stack[right].character) {
            if (left !== 0)
              left = this.lps[left - 1];
          }
          else
            right++;
        }
      }

      console.log('KMP matches found: ', matchCount);
      return matchCount;
    }

    KMPSearchAnimation(): void {
      let resetToWhite = false; 
      const timer = setInterval(() => {
      const action: AnimationValues = this.animations.shift();
      if (action) {       
        this.stringService.occurrencesCount = action.occurrencesCount;
        if (resetToWhite) {
          this.setToWhite();  
          resetToWhite = false;
        }
        if (action.isMatch) {
          this.stringService.needleArr[action.needleIndex].colour = '#b2ff59';
          this.stringService.stackArr[action.stackIndex + action.needleIndex].colour = '#b2ff59';
          if (action.needleIndex == this.stringService.needleArr.length - 1) {
            resetToWhite = true;
          }
        }
        else { 
          this.stringService.needleArr[action.needleIndex].colour = 'red';
          this.stringService.stackArr[action.stackIndex + action.needleIndex].colour = 'red';
          resetToWhite = true;
        }
      }
      else {
        clearInterval(timer);
        this.stringService.isSorting = false;    
        this.setToWhite();  
      }
    }, this.stringService.animationSpeed);
  }

  setToWhite() {
    this.stringService.stackArr.map((chr) => (chr.colour = 'white'));
    this.stringService.needleArr.map((chr) => (chr.colour = 'white'));    
  }

}

interface AnimationValues {
  isMatch: boolean;
  occurrencesCount: number; 
  stackIndex: number;
  needleIndex: number;

}
