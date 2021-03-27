import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlgorithmEnum } from 'src/app/shared/enums/algorithm.enum';
import { InputDataEnum } from 'src/app/shared/enums/input-data-titles.enum';
import { Letters } from 'src/app/shared/models/Letters';
import { StringService } from 'src/app/shared/services/string.service';

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
    this.allAnimationsCompleteCount = 0;
  }

  // child components e.g. naive, kmp all emit their value when they complete their animation.
  // this handles them until the count (i.e. they all finished) is met.
  handleCompletion(event: any) { // event/message from child back to parent

    this.allAnimationsCompleteCount++;
    if (this.allAnimationsCompleteCount == 5) {
      this.allEvent.emit(event);
      this.allAnimationsCompleteCount = 0;
    }
  }

}
