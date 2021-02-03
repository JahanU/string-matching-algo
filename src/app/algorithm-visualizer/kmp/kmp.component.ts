import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { StringService } from 'src/app/shared/string.service';
import { Letters } from 'src/app/shared/models/Letters';
import { Colours } from '../../shared/colours.enum';

@Component({
  selector: 'app-kmp',
  templateUrl: './kmp.component.html',
  styleUrls: ['./kmp.component.scss']
})
export class KMPComponent implements OnInit {

  @Input() isSorting: boolean = false;
  @Output() public kmpEvent = new EventEmitter();
  @Input() stackArrFromP: Letters[] = []; // Take value from parent
  @Input() needleArrFromP: Letters[] = [];

  stackArr: Letters[] = []; // Take value from parent
  needleArr: Letters[] = [];
  animations: AnimationValues[] = [];
  occurrencesCount: number = 0;

  lps: number[] = []; // Longest proper prefix (the DFA (KMP automoton))

  displayedColumns: string[] = [ 'character', 'index', 'failValue' ];
  ELEMENT_DATA: failArray[] = [];

  constructor(
    private readonly stringService: StringService,
  ) { }
  
  ngOnInit(): void { }

  ngOnChanges(changes: OnChanges): void { // whenever parent values change, this updates!
    if (this.isSorting)
      this.startKMPSearch();
    else {
      this.cloneService();
      this.genSuffixArray();
    }
  }

  startKMPSearch() {
    this.KMPSearch();
    this.KMPSearchAnimation();
  }

  cloneService() {
    this.stackArr = JSON.parse(JSON.stringify(this.stackArrFromP))
    this.needleArr = JSON.parse(JSON.stringify(this.needleArrFromP))
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
    this.createFailureTable();
  }

  createFailureTable(): void {
    this.ELEMENT_DATA = [];
    for (let i = 0; i < this.lps.length; i++) {
      this.ELEMENT_DATA.push({ character: this.needleArr[i].character, index: i, failValue: this.lps[i] });
    }
  }

  KMPSearch(): number {
    if (this.stackArr.length < this.needleArr.length) return 0;
    if (this.stackArr.length == 0 || this.needleArr.length == 0) return 0;

    let matchCount: number = 0;
    let [ind, needle] = [0, 0]; // ind traverses whole stack, n checks and traverses through needle

    while (ind < this.stackArr.length) {
      if (this.stackArr[ind].character == this.needleArr[needle].character) {
        this.animations.push({ isMatch: true, occurrencesCount: matchCount, stackIndex: ind, needleIndex: needle });

        console.log(ind, needle);
        ind++;
        needle++;

        if (needle == this.needleArr.length) {
          matchCount++;
          this.animations.push({ isMatch: true, occurrencesCount: matchCount, stackIndex: ind - 1, needleIndex: needle - 1 });
          needle = this.lps[needle - 1];
        }
      }

      else {
        if (needle != 0)
          needle = this.lps[needle - 1];
        else
          ind++;
        this.animations.push({ isMatch: false, occurrencesCount: matchCount, stackIndex: ind, needleIndex: needle });
      }
    }

    
    return matchCount;
  }

  KMPSearchAnimation(): void {
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
          this.occurrencesCount = action.occurrencesCount;
          this.needleArr[action.needleIndex].colour = Colours.GREEN;
          this.stackArr[action.stackIndex].colour = Colours.GREEN;

          if (action.needleIndex > 0) {
            for (let c = 0; c < action.needleIndex; c++) {
              this.needleArr[c].colour = Colours.GREEN; // From index 0 to failValue index
              this.stackArr[action.stackIndex - (c + 1)].colour = Colours.GREEN; // From current stack index, decrement from fail index value
            }
          }
        }
        else {
          this.needleArr[action.needleIndex].colour = Colours.RED;
          this.stackArr[action.stackIndex].colour = Colours.RED;;
          resetToWhite = true;
        }
      }
      else {
        clearInterval(timer);
        this.isSorting = false;
        this.kmpEvent.emit(this.isSorting);
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

interface failArray {
  character: string;
  index: number;
  failValue: number; 
}