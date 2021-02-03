import { OnChanges } from '@angular/core';
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

  @Input() isSorting: boolean = false;
  @Output() public bmEvent = new EventEmitter();
  @Input() stackArrFromP: Letters[] = []; // Take value from parent
  @Input() needleArrFromP: Letters[] = [];
  
  stackArr: Letters[] = []; 
  needleArr: Letters[] = [];
  animations: AnimationValues[] = [];
  occurrencesCount: number = 0;

  radix: number;
  badChars: number[]; // // the bad-character skip array
  badCharsMap = new Map();

  displayedColumns: string[] = [ 'shift', 'character' ];
  ELEMENT_DATA: badCharacter[] = [];

  constructor(private readonly stringService: StringService) { 
    this.radix = 256;
    this.badCharsMap = new Map<string, number>();
  }

  ngOnInit(): void {}

  ngOnChanges(changes: OnChanges): void { // whenever parent values change, this updates!
    if (this.isSorting)
      this.startBMSearch();
    else { 
      this.cloneService();
      this.genBadCharArray();
    }
  }

  cloneService() {
    this.stackArr = JSON.parse(JSON.stringify(this.stackArrFromP))
    this.needleArr = JSON.parse(JSON.stringify(this.needleArrFromP))
  }

  startBMSearch() {
    this.genBadCharArray();
    this.BMSearch();
    this.bmSearchAnimation();
  }
    /*
     * Preprocesses the pattern string. 1
     * @param pat the pattern string
     */
  genBadCharArray() {
    this.badChars = new Array(this.radix);
    this.badChars.fill(-1, 0, this.radix);

    for (let j = 0; j < this.needleArr.length; j++) {
      this.badChars[this.needleArr[j].character.charCodeAt(0)] = j;
      this.badCharsMap.set(this.needleArr[j].character, j);
    }
    this.createBadCharsTable();
  }

  createBadCharsTable(): void {
    this.ELEMENT_DATA = [];
    for (let [k, v] of this.badCharsMap) {
      this.ELEMENT_DATA.push({ character: k, shift: v });
    }
  }

  BMSearch() {
    const m = this.needleArr.length;
    const n = this.stackArr.length;
    let s = 0;
    let matchCount = 0;

    if (this.stackArr.length < this.needleArr.length) return 0;
    if (this.stackArr.length == 0 || this.needleArr.length == 0) return 0;

    while (s <= (n - m)) {
        let j = (m - 1);

        while (j >= 0 && this.needleArr[j].character == this.stackArr[s+j].character) {
          this.animations.push({ isMatch: true, occurrencesCount: matchCount, stackIndex: (s+j), needleIndex: j });
          j--;
        }

        if (j < 0) {
          // console.log('match found! at index: ' + s);
          matchCount++;
          this.animations.push({ isMatch: true, occurrencesCount: matchCount, stackIndex: (s+j), needleIndex: j });
          s += (s+m < n)? m-this.badChars[this.stackArr[s+m].character.charCodeAt(0)] : 1;
        }
        else {
          this.animations.push({ isMatch: false, occurrencesCount: matchCount, stackIndex: (s+j), needleIndex: j }); 
          s += Math.max(1, j - this.badChars[this.stackArr[s+j].character.charCodeAt(0)]);
        }
    }
    return matchCount;
  }


  bmSearchAnimation(): void {    
    let resetToWhite = false; 
    const timerBM = setInterval(() => {
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
          if (action.needleIndex == 0) {
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
        clearInterval(timerBM);
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

interface badCharacter {
  character: string;
  shift: number; 
}