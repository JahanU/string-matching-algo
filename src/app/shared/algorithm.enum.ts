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
  `naiveSearch(): number {
  if (stackArr.length < needleArr.length) return 0;
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
  return matchCount;
}
    `,
  // 
  KMP_CODE =
  `genSuffixArray() {
  const R = 256;
  const M = needleArr.length;
  lps = [];
  for (let r = 0; r < R; r++)
    lps.push(new Array(M).fill(0));

  for (let i = 0, j = 1; j < M; j++) {
    for (let c = 0; c < R; c++) {
      lps[c][j] = lps[c][i]; // Copy mismatch cases. 
    }
    lps[needleArr[j].character.charCodeAt(0)][j] = j + 1; // Set match case. 
    i = lps[needleArr[j].character.charCodeAt(0)][i]; // Update restart state. 
  }
}

KMPSearch(): number {
  if (stackArr.length < needleArr.length) return 0;
  if (stackArr.length == 0 || needleArr.length == 0) return 0;
  matchCount = 0;
  let i, j; // i = stack index, j = needle index

  // simulate operation of DFA on text
  for (i = 0, j = 0; i < stackArr.length && j < needleArr.length; i++) { 
    j = lps[stackArr[i].character.charCodeAt(0)][j];
    if (j == needleArr.length) { // perfect match!
      matchCount++;
      j = 0;
    }
  }
  return matchCount;
}
    `,
  // 
  BM_CODE =
  `radix = 256;

genBadCharArray() {
  badChars.fill(-1, 0, radix);
  for (let j = 0; j < needleArr.length; j++) {
    badChars[needleArr[j].character.charCodeAt(0)] = j;
  }
}

BMSearch() {
  let m = needleArr.length;
  let n = stackArr.length;
  if (n < m) return 0;
  if (n == 0 || m == 0) return 0;
  
  let skip = 0;
  let matchCount = 0;

  for (let i = 0; i <= n - m; i += skip) {
      skip = 0;

      for (let j = m-1; j >= 0; j--) {
          if (needleArr[j].character !== stackArr[i+j].character) {
              skip = Math.max(1, j - badChars[stackArr[i+j].character.charCodeAt(0)]);
              break;
          }
      }

      if (skip == 0) { // found
        matchCount++;
        skip++;
      }
  }
  return matchCount; // not found
}
  `,
  // 
  RK_CODE =
  `R = 256;
prime = 199;
RM = 1; // precompute R^(m-1) % q for use in removing leading digit

setNeedleHash() {
  // precompute R^(m-1) % q for use in removing leading digit
  for (let i = 1; i <= needleArr.length - 1; i++) {
    RM = (R * RM) % prime;
  }
  patHash = hash(needleArr, needleArr.length);
}

// Compute hash for key[0..m-1]. 
hash(text: Letters[], wordLength: number): number {
  let h = 0;
  for (let i = 0; i < wordLength; i++) {
    h = (R * h + text[i].character.charCodeAt(0)) % prime;
  }
  return h;
}

check(i: number) { // Las Vegas Version
  for (let j = 0; j < needleArr.length; j++) {
    if (needleArr[j].character != stackArr[i + j].character)
      return false; 
  }
  return true;
}

rkSearch(): number {
  if (stackArr.length < needleArr.length) return 0;
  if (stackArr.length == 0 || needleArr.length == 0) return 0;

  let txtHash = hash(stackArr, needleArr.length); // check for match at offset 0
  if ((patHash == txtHash) && check(0)) 
    matchCount++;
    
// check for hash match; if hash match, check for exact match
      for (let i = needleArr.length; i < stackArr.length; i++) {
        // Remove leading digit, add trailing digit, check for match. 
        txtHash = (txtHash + prime - RM * stackArr[i - needleArr.length].character.charCodeAt(0) % prime) % prime; 
        txtHash = (txtHash * R + stackArr[i].character.charCodeAt(0)) % prime; 
        
        const offset = i - needleArr.length + 1;
        if ((patHash == txtHash) && check(offset)) // match
          matchCount++;
      }
  return matchCount;
}
  `,


}
