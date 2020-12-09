import { ArraysService } from 'src/app/shared/arrays.service';
import { ArrayBars } from 'src/app/shared/models/ArrayBars';
import { StringService } from 'src/app/shared/string.service';
import { Letters } from 'src/app/shared/models/Letters';

export class NaiveSearch {

    animations: AnimationValues[] = [];

    constructor(
        private readonly stringService: StringService,
    ) { }

    naiveSearch(stack: Letters[], needle: Letters[]) {

        for (let i = 0; i <= stack.length - needle.length; i++) {
          let j = 0;

          for (j; j < needle.length; j++) {
                if (stack[i + j].character != needle[j].character) {
                  this.animations.push({isMatch: false, stackIndex: i, needleIndex: j});
                  break;
                }
                else {
                  this.animations.push({isMatch: true, stackIndex: i, needleIndex: j});
                }
            }
            if (j == needle.length) {
                console.log('match found! At index: ', i);
            }
        }

    }

    naiveSearchAnimation(): void {
      let resetToWhite = false; 
      const timer = setInterval(() => {
      const action: AnimationValues = this.animations.shift();
      if (action) {
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
  stackIndex: number;
  needleIndex: number;

}
