import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { StringService } from 'src/app/shared/string.service';
import { Letters } from 'src/app/shared/models/Letters';

@Component({
  selector: 'app-naive',
  templateUrl: './naive.component.html',
  styleUrls: ['./naive.component.scss']
})
export class NaiveComponent implements OnInit {

  @Output() public naiveEvent = new EventEmitter(); // Emit when animation is done
  @Input() stackArr: Letters[] = []; // Take value from parent
  @Input() needleArr: Letters[] = [];
  @Input() isSorting: boolean = false;
  
  animations: AnimationValues[] = [];
  occurrencesCount: number = 0;

  constructor(public stringService: StringService) { }

  ngOnInit(): void {  }
  
  ngOnChanges(changes: OnChanges): void { // whenever parent values change, this updates!
    if (this.isSorting) // Parent triggers to start sorting
      this.startNaiveSearch();

  }
  startNaiveSearch() {
    this.naiveSearch();
    this.naiveSearchAnimation();
  }

  naiveSearch(): number {
    if (this.stackArr.length < this.needleArr.length) return 0;
    if (this.stackArr.length == 0 || this.needleArr.length == 0) return 0;

    let matchCount: number = 0;
    
    for (let i = 0; i <= this.stackArr.length - this.needleArr.length; i++) {
        let j = 0;

        for (j; j < this.needleArr.length; j++) {
              if (this.stackArr[i + j].character != this.needleArr[j].character) {
                this.animations.push({isMatch: false, occurrencesCount: matchCount, stackIndex: i, needleIndex: j});
                break;
              }
              else 
                this.animations.push({isMatch: true, occurrencesCount: matchCount, stackIndex: i, needleIndex: j});   
          }
          if (j == this.needleArr.length) 
              matchCount++;
      }
      return matchCount;
  }


  naiveSearchAnimation(): void {    
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
          this.needleArr[action.needleIndex].colour = '#b2ff59';
          this.stackArr[action.stackIndex + action.needleIndex].colour = '#b2ff59';
          if (action.needleIndex == this.needleArr.length - 1) {
            resetToWhite = true;
          }
        }
        else { 
          this.needleArr[action.needleIndex].colour = 'red';
          this.stackArr[action.stackIndex + action.needleIndex].colour = 'red';
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
