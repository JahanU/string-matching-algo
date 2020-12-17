import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { StringService } from 'src/app/shared/string.service';
import { Letters } from 'src/app/shared/models/Letters';

@Component({
  selector: 'app-naive',
  templateUrl: './naive.component.html',
  styleUrls: ['./naive.component.scss']
})
export class NaiveComponent implements OnInit {

  animations: AnimationValues[] = [];
  @Input() stackArr: Letters[] = []; // Take value from parent, @input
  @Input() needleArr: Letters[] = [];
  stackAnimation: Letters[] = [];
  needleAnimationation: Letters[] = [];

  constructor(public stringService: StringService) { }

  ngOnInit(): void {  }
  
  ngOnChanges(changes: OnChanges): void {
    if (this.stackArr.length > 0) {
        this.stackAnimation = [...this.stackArr];
    }
    if (this.needleArr.length > 0) {
      this.needleAnimationation = [...this.needleArr];
    }

    alert('on change');
    alert(this.stackArr.length + ' ' + this.needleArr.length);
    alert(this.stackAnimation.length + ' ' + this.needleAnimationation.length);
    this.startNaiveSearch();

  }
  startNaiveSearch() {
    alert('on search');
    alert(this.stackArr.length);
    alert(this.stackAnimation.length);
    this.naiveSearch();
    this.naiveSearchAnimation();
  }

  naiveSearch(): number {
    if (this.stackAnimation.length < this.needleAnimationation.length) return 0;
    if (this.stackAnimation.length == 0 || this.needleAnimationation.length == 0) return 0;

    alert('in naiveSearch');

    let matchCount: number = 0;
      for (let i = 0; i <= this.stackAnimation.length - this.needleAnimationation.length; i++) {
        let j = 0;

        for (j; j < this.needleAnimationation.length; j++) {
              if (this.stackAnimation[i + j].character != this.needleAnimationation[j].character) {
                this.animations.push({isMatch: false, occurrencesCount: matchCount, stackIndex: i, needleIndex: j});
                break;
              }
              else 
                this.animations.push({isMatch: true, occurrencesCount: matchCount, stackIndex: i, needleIndex: j});   
          }
          if (j == this.needleAnimationation.length) 
              matchCount++;
      }

      alert(matchCount);
      return matchCount;
  }


  naiveSearchAnimation(): void {    
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
        this.stringService.isSorting = false;    
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

