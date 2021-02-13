export enum AlgorithmEnum {
  SELECTED_ALGORITHM = 'Algorithms',
  NAIVE = 'Naive',
  KMP = 'Knuth-Morris-Pratt',
  BM = 'Boyer-Moore',
  RK = 'Rabin-Karp',
  ALL = 'All',
  // TWSM = 'Two-way String Matching',
  // 
  NAIVE_CODE = 
`if (this.stackArr.length < this.needleArr.length) return 0;
  if (this.stackArr.length == 0 || this.needleArr.length == 0) return 0;
  this.matchCount = 0;

  for (let i = 0; i <= this.stackArr.length - this.needleArr.length; i++) {
    let j = 0;

    for (j; j < this.needleArr.length; j++) {
      if (this.stackArr[i + j].character != this.needleArr[j].character) {
        break;
      }
    }
    if (j == this.needleArr.length)
      this.matchCount++;
  }

  this.animationMaxLimit = this.animations.length;
  return this.matchCount;
  `,
}
