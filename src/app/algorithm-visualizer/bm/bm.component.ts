import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Colours } from 'src/app/shared/colours.enum';
import { Letters } from 'src/app/shared/models/Letters';
import { StringService } from 'src/app/shared/string.service';

@Component({
  selector: 'app-bm',
  templateUrl: './bm.component.html',
  styleUrls: ['./bm.component.scss']
})
export class BMComponent implements OnInit {

// https://algs4.cs.princeton.edu/53substring/BoyerMoore.java.html
//  *  Reads in two strings, the pattern and the input text, and
//  *  searches for the pattern in the input text using the
//  *  bad-character rule part of the Boyer-Moore algorithm.
//  *  (does not implement the strong good suffix rule)
//  * 

  @Output() public bmEvent = new EventEmitter();
  @Input() isSorting: boolean = false;
  @Input() stackArr: Letters[] = []; // Take value from parent
  @Input() needleArr: Letters[] = [];
  radix: number;
  right: number[]; // // the bad-character skip array

  animations: AnimationValues[] = [];
  occurrencesCount: number = 0;

  
  constructor(private readonly stringService: StringService) { 
    this.radix = 256;
    console.log('In BM!');
  }

  ngOnInit(): void {
    
    this.setBadCharArray();
    this.BMSearch();
    this.bmSearchAnimation();
  }
 
    /*
     * Preprocesses the pattern string. 1
     * @param pat the pattern string
     */
  setBadCharArray() {
    
    this.right = new Array(this.radix);
    this.right.fill(-1, 0, this.radix);

    for (let j = 0; j < this.needleArr.length; j++) {
      this.right[this.needleArr[j].character.charCodeAt(0)] = j;
    }
  }

  BMSearch() {
    const n = this.needleArr.length;
    const s = this.stackArr.length;
    let skip;
    let matchCount = 0;

    for (let i = 0; i <= s - n; i += skip) { // From 0, to (stack.length - needle.length), inc by amount we skipped
        skip = 0;
        for (let j = n-1; j >= 0; j--) { // from length of Needle, to 0, dec by 1
            if (this.needleArr[j].character != this.stackArr[i+j].character) { // if no match - needle last element != curr word in stack (e.g. (i + j))
              this.animations.push({isMatch: false, occurrencesCount: matchCount, stackIndex: (i + j), needleIndex: j});
              skip = Math.max(1, j - this.right[this.stackArr[i+j].character.charCodeAt(0)]); // skip the max amount, e.g. the bad character index
                break;
            }
            else { // letters matched, push animation onto stack
              this.animations.push({isMatch: true, occurrencesCount: matchCount, stackIndex: (i + j), needleIndex: j});
            }

            if (skip === 0) return i;
      
        }
    }

    return matchCount; 
  }


  bmSearchAnimation(): void {    
    let resetToWhite = false; 
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
      else { // animations finished 
        clearInterval(timer);
        this.isSorting = false;  
        this.bmEvent.emit(this.isSorting);  
        this.setToWhite();  
      }
    }, this.stringService.animationSpeed);
  }

  setToWhite() {
    this.stackArr.map((chr) => (chr.colour = Colours.WHITE));
    this.needleArr.map((chr) => (chr.colour = Colours.WHITE));
  }
}



interface AnimationValues {
  isMatch: boolean;
  occurrencesCount: number;
  stackIndex: number;
  needleIndex: number;
}