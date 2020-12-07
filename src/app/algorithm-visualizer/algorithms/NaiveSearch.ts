import { ArraysService } from 'src/app/shared/arrays.service';
import { ArrayBars } from 'src/app/shared/models/ArrayBars';
import { StringService } from 'src/app/shared/string.service';
import { Letters } from 'src/app/shared/models/Letters';

export class NaiveSearch {

    animations: AnimationValues[] = [];

    constructor(
        private readonly arrService: ArraysService,
        private readonly stringService: StringService,

    ) { }

    naiveSearch(stack: string[], needle: Letters[]) {

        for (let i = 0; i <= stack.length - needle.length; i++) {

            let j = 0;

            for (j; j < needle.length; j++) {

                if (stack[i + j] != needle[j].character) {
                    break;
                    // probs change colour here!
                }
                else {
                    // make colour green!
                    // push this onto the animation stack!
                }
            }
            if (j == needle.length) {
                console.log('match found!');
                console.log('starting at index: ', i);
            }
        }

        console.log('done!');
    }

    bubbleSort(array: ArrayBars[]): void {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        this.animations.push({ leftIndex: null, rightIndex: null, index: j });
        if (array[j].value > array[j + 1].value) {
          this.animations.push({ leftIndex: j, rightIndex: j + 1, index: null });
          this.arrService.swap(array, j, j + 1);
        }
      }
    }
    }

    bubbleSortAnimation(): void {
    this.arrService.sortingAnimationsMax = this.animations.length;
    const timer = setInterval(() => {
      const action: AnimationValues = this.animations.shift();
      this.arrService.sortingAnimationsLeft = this.animations.length;
      if (action) {
        this.arrService.numbers.map((num) => (num.colour = this.arrService.$primaryBars));
        if (action.index != null) {
          this.arrService.numbers[action.index].colour = this.arrService.$selectedIndex;
        }
        else {
          this.arrService.numbers[action.leftIndex].colour = this.arrService.$swappedIndex;
          this.arrService.numbers[action.rightIndex].colour = this.arrService.$swappedIndex;
          this.arrService.swap(this.arrService.numbers, action.leftIndex, action.rightIndex);
        }
      }
      else {
        clearInterval(timer);
        if (this.arrService.isArraySorted(this.arrService.numbers)) {
          this.arrService.animateSortedArray();
          this.arrService.sorting = false;
        }
      }
    }, this.arrService.animationSpeed);
    }
}

interface AnimationValues {
    leftIndex: number;
    rightIndex: number;
    index: number;
}
