import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlgorithmEnum } from 'src/app/shared/algorithm.enum';
import { InputDataEnum } from 'src/app/shared/input-data.enum';
import { Letters } from 'src/app/shared/models/Letters';
import { StringService } from 'src/app/shared/string.service';

@Component({
  selector: 'app-all-algorithms',
  templateUrl: './all-algorithms.component.html',
  styleUrls: ['./all-algorithms.component.scss']
})
export class AllAlgorithmsComponent implements OnInit {

  @Output() public allEvent = new EventEmitter();
  @Input() isSorting: boolean = false;
  @Input() parentStack: Letters[] = [];
  @Input() parentNeedle: Letters[] = []; // Take value from parent
  @Input() hideCodeSnippet: boolean;

  allAnimationsCompleteCount: number = 0;

  constructor(public stringService: StringService) { }

  ngOnInit(): void {
    console.log('in ALL');
    this.allAnimationsCompleteCount = 0;
  }
  handleIsSorting(event: any) { // event/message from child back to parent
    this.allAnimationsCompleteCount++;
    console.log('anim done!');
    if (this.allAnimationsCompleteCount == 2) {
      this.allEvent.emit(event);  
      this.allAnimationsCompleteCount = 0;
    }
  }

}
