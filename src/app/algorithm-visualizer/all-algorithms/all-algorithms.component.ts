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
  @Input() needleArrFromP: Letters[] = []; // Take value from parent
  @Input() stackArrFromP: Letters[] = [];
  
  allAnimationsCompleteCount: number = 0;

  constructor(public stringService: StringService) { }

  ngOnInit(): void {
    console.log('in ALL');
  }
  handleIsSorting(event: any) { // event/message from child back to parent
    this.allAnimationsCompleteCount++;
    
    if (this.allAnimationsCompleteCount == 3)
      this.allEvent.emit(event);  
  }

}
