// import { ArrayBars } from 'src/app/shared/models/ArrayBars';
// import { StringService } from 'src/app/shared/string.service';
// import { Letters } from 'src/app/shared/models/Letters';

// export class KMPSearch {

//     animations: AnimationValues[] = [];
//     lps: number[] = []; // Longest proper prefix (the DFA (KMP automoton))

//     constructor(
//         private readonly stringService: StringService,
//     ) { }


//     genSuffixArray(needle: Letters[]) {
//       let [left, right] = [0, 1];
//       this.lps = new Array(needle.length).fill(0);

//       while (right < this.lps.length) {
//         // if left and right index match, increment!
//         if (needle[left].character === needle[right].character) {
//           this.lps[right] = left + 1;
//           left++;
//           right++;
//         }
//         else {
//           // if they do not match, keep traversing
//           if (left !== 0)
//             left = this.lps[left - 1];
//           else {
//             this.lps[right] = 0;
//             right++;
//           }
//         }
//       }      
//     }

//     KMPSearch(stack: Letters[], needle: Letters[]): number {
      
//       if (stack.length < needle.length)
//         return 0;
//       if (stack.length == 0 || needle.length == 0)
//         return 0;
//       let matchCount: number = 0;

//       // ind traverses whole stack, n checks and traverses through needle
//       let [ind, n] = [0, 0]; 

//       while (ind < stack.length) {
//         if (stack[ind].character == needle[n].character) {
//           this.animations.push({isMatch: true, occurrencesCount: matchCount, stackIndex: ind, needleIndex: n});
//           ind++;
//           n++;

//           if (n == needle.length) {
//             matchCount++; 
//             this.animations.push({isMatch: true, occurrencesCount: matchCount, stackIndex: ind - 1, needleIndex: n - 1});
//             n = this.lps[n - 1];  
//           }
//         } 

//         else {
//           if (n != 0) 
//             n = this.lps[n - 1];
//           else 
//             ind++;
//           this.animations.push({isMatch: false, occurrencesCount: matchCount, stackIndex: ind, needleIndex: n});
//         }
//       }
//       return matchCount;
//     }

//     KMPSearchAnimation(): void {
//       let resetToWhite = false; 
//       // this.animations.pop();

//       const timer = setInterval(() => {
//       const action: AnimationValues = this.animations.shift();
//       if (action) {       
//         this.stringService.occurrencesCount = action.occurrencesCount;

//         if (resetToWhite) {
//           this.setToWhite();  
//           resetToWhite = false;
//         }
//         if (action.isMatch) {
//             this.stringService.needleArr[action.needleIndex].colour = '#b2ff59';
//             this.stringService.stackArr[action.stackIndex].colour = '#b2ff59';

//           // if (action.needleIndex == this.stringService.needleArr.length) {
//           //   resetToWhite = true;
//           //   console.log('match!');
//           // }
//         }
//         else { 
//           this.stringService.needleArr[action.needleIndex].colour = 'red';
//           this.stringService.stackArr[action.stackIndex].colour = 'red';
//           resetToWhite = true;
//         }
//       }
//       else {
//         clearInterval(timer);
//         this.stringService.isSorting = false;    
//         this.setToWhite();  
//       }
//     }, this.stringService.animationSpeed);
//   }

//   setToWhite() {
//     this.stringService.stackArr.map((chr) => (chr.colour = 'white'));
//     this.stringService.needleArr.map((chr) => (chr.colour = 'white'));    
//   }

// }

// interface AnimationValues {
//   isMatch: boolean;
//   occurrencesCount: number; 
//   stackIndex: number;
//   needleIndex: number;

// }
