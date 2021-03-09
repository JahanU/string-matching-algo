export enum AlgorithmEnum {
  SELECTED_ALGORITHM = 'Algorithms',
  NAIVE = 'Naive',
  DFA = 'Deterministic Finite Automation',
  KMP = 'Knuth-Morris-Pratt',
  BM = 'Boyer-Moore',
  RK = 'Rabin-Karp',
  ALL = 'All',
  // TWSM = 'Two-way String Matching',
  // 
  NAIVE_CODE = `naiveSearch(): number {
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
  DFA_CODE = `setDFA() {
  const R = 256; // the radix
  const M = needleArr.length; // length of pattern
  dfa = []; // the KMP automoton

  // build DFA from pattern
  for (let r = 0; r < R; r++)
    dfa.push(new Array(M).fill(0));

  for (let i = 0, j = 1; j < M; j++) {
    for (let c = 0; c < R; c++) {
      dfa[c][j] = dfa[c][i]; // Copy mismatch cases. 
    }
    dfa[needleArr[j].character.charCodeAt(0)][j] = j + 1; // Set match case. 
    i = dfa[needleArr[j].character.charCodeAt(0)][i]; // Update restart state. 
  }
}

DFASearch(): number {
  if (stackArr.length < needleArr.length) return 0;
  if (stackArr.length == 0 || needleArr.length == 0) return 0;
  let n = stackArr.length;
  let m = needleArr.length;
  let matchCount = 0;

  for (let i = 0, j = 0; i < n; i++) { // i = stack, j = needle
    j = dfa[stackArr[i].character.charCodeAt(0)][j];

    if (j == m) { // perfect match!
      j = dfa[stackArr[i].character.charCodeAt(0)][0];
      matchCount++;
    }
  }
  return matchCount;
}
    `,
  //
  KMP_CODE = `next = []; // the kmp automoton

// Create Knuth-Morris-Pratt NFA from pattern
setNFA() {
  let n = needleArr.length;
  let j = 0;
  next.push(j);

  for (let i = 1; i < n; i++) {
    while (j > 0 && needleArr[j].character != needleArr[i].character) {
      j = next[j - 1];
    }
    if (needleArr[j].character == needleArr[i].character) {
      ++j;
    }
    next[i] = j;
  }
}

// simulate the NFA to find match 
kmpSearch() {
  if (stackArr.length < needleArr.length) return 0;
  if (stackArr.length == 0 || needleArr.length == 0) return 0;
  var n = stackArr.length;
  var m = needleArr.length;
  let matchCount = 0;
  var j = 0;

  for (var i = 0; i < n; i++) {
    while (j > 0 && needleArr[j].character != stackArr[i].character) {
      j = next[j - 1];
    }
    if (needleArr[j].character == stackArr[i].character) {
      ++j;
    }
    if (j == m) {
      j = next[j - 1];
      matchCount++;
    }
  }
  return matchCount;
}
  `,
  // 
  BM_CODE = `radix = 256;

genBadCharArray() {
  // position of rightmost occurrence of c in the pattern
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
  RK_CODE = `R = 256;
prime = 199;
RM = 1; // precompute R^(m-1) % j for use in removing leading digit

// Create hashcode for Needle
setNeedleHash() {
  for (let i = 1; i <= needleArr.length - 1; i++) {
    RM = (R * RM) % prime;
  }
  patHash = hash(needleArr, needleArr.length);
}

// Compute hash for key[0..m-1]. - e.g. For every substring we pass in
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
  let n = stackArr.length;
  let m = needleArr.length;

  let txtHash = hash(stackArr, m);

  // check for match at offset 0
  if ((patHash == txtHash) && check(0)) 
    matchCount++;

  // check for hash match; if hash match, then check for exact match (Via Las Vegas)
  for (let i = m; i < n; i++) {
    // Remove leading digit, add trailing digit, check for match. 
    txtHash = (txtHash + prime - RM * stackArr[i - m].character.charCodeAt(0) % prime) % prime;
    txtHash = (txtHash * R + stackArr[i].character.charCodeAt(0)) % prime;
    currentHashedSubstring += stackArr[i].character;

    const offset = i - m + 1;
    currentHashedSubstring = currentHashedSubstring.substring(1);
    if ((patHash == txtHash) && check(offset)) // match
      matchCount++;
  }
  return matchCount;
}
  `,
}
