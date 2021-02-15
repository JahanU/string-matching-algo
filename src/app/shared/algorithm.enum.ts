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
`if (stackArr.length < needleArr.length) return 0;
  if (stackArr.length == 0 || needleArr.length == 0) return 0;
  matchCount = 0;

  for (let i = 0; i <= stackArr.length - needleArr.length; i++) {
    let j = 0;

    for (j; j < needleArr.length; j++) {
      if (stackArr[i + j].character != needleArr[j].character) {
        break;
      }
    }
    if (j == needleArr.length)
      matchCount++;
  }

  animationMaxLimit = animations.length;
  return this.matchCount;
  `,
  KMP_CODE = 
  `if (stackArr.length < needleArr.length) return 0;
    if (stackArr.length == 0 || needleArr.length == 0) return 0;
    matchCount = 0;
  
    for (let i = 0; i <= stackArr.length - needleArr.length; i++) {
      let j = 0;
  
      for (j; j < needleArr.length; j++) {
        if (stackArr[i + j].character != needleArr[j].character) {
          break;
        }
      }
      if (j == needleArr.length)
        matchCount++;
    }
  
    animationMaxLimit = animations.length;
    return this.matchCount;
    `
  
}
