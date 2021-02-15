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
    return matchCount;
    `,
    // 
  KMP_CODE = 
    `
    genSuffixArray() {
      let [left, right] = [0, 1];
      lps = new Array(needleArr.length).fill(0);
  
      while (right < lps.length) {
        // if left and right index match, increment!
        if (needleArr[left].character === needleArr[right].character) {
          lps[right] = left + 1;
          left++;
          right++;
        }
        else {
          // if they do not match, keep traversing
          if (left !== 0)
            left = lps[left - 1];
          else {
            lps[right] = 0;
            right++;
          }
        }
      }
    }

    KMPSearch(): number {
      if (stackArr.length < needleArr.length) return 0;
      if (stackArr.length == 0 || needleArr.length == 0) return 0;

      let matchCount: number = 0;
      let [ind, needle] = [0, 0]; // ind traverses whole stack, n checks and traverses through needle

      while (ind < stackArr.length) {
        if (stackArr[ind].character == needleArr[needle].character) {
          ind++;
          needle++;

          if (needle == needleArr.length) {
            matchCount++;
            needle = lps[needle - 1];
          }
        }

        else {
          if (needle != 0)
            needle = lps[needle - 1];
          else
            ind++;
        }
      }
      animationMaxLimit = animations.length;
      return matchCount;
    }
    `,
    // 
  BM_CODE = 
  `
  genBadCharArray() {
    badChars.fill(-1, 0, radix);
    badCharsMap = new Map<string, number>();

    for (let j = 0; j < needleArr.length; j++) {
      badChars[needleArr[j].character.charCodeAt(0)] = j;
      badCharsMap.set(needleArr[j].character, j);
    }
  }

  BMSearch() {
    const m = needleArr.length;
    const n = stackArr.length;
    let s = 0;
    let matchCount = 0;

    if (stackArr.length < needleArr.length) return 0;
    if (stackArr.length == 0 || needleArr.length == 0) return 0;

    while (s <= (n - m)) {
      let j = (m - 1);

      while (j >= 0 && needleArr[j].character == stackArr[s + j].character) {
        j--;
      }

      if (j < 0) {
        // console.log('match found! at index: ' + s);
        matchCount++;
        s += (s + m < n) ? m - badChars[stackArr[s + m].character.charCodeAt(0)] : 1;
      }
      else {
        s += Math.max(1, j - badChars[stackArr[s + j].character.charCodeAt(0)]);
      }
    }
    animationMaxLimit = animations.length;
    return matchCount;
  }
  `,
  // 
  RK_CODE = 
  `
  setPreNeedleHash() {
    RM = 1;
    for (let i = 1; i <= needleArr.length - 1; i++) {
      RM = (R * RM) % prime;
    }
    patHash = hash(needleArr, needleArr.length);
  }

  hash(text: Letters[], wordLength: number): number {
    let h = 0;
    currentHashedSubstring = stackArr.slice(0, wordLength).map((chr) => chr.character).join('');

    for (let i = 0; i < wordLength; i++) {
      h = (R * h + text[i].character.charCodeAt(0)) % prime;
      animations.push({ isMatch: isMatchEnum.HASHING, occurrencesCount: matchCount, currentString: currentHashedSubstring, stackIndex: i, needleIndex: i });
    }
    return h;
  }

  check(i: number) { // Las Vegas Version
    for (let j = 0; j < needleArr.length; j++) {
      if (needleArr[j].character != stackArr[i + j].character) {
        return false; 
      }
    }
    return true;
  }

  rkSearch(): number {
    if (stackArr.length < needleArr.length) return 0;
    if (stackArr.length == 0 || needleArr.length == 0) return 0;

    let txtHash = hash(stackArr, needleArr.length);
        if ((patHash == txtHash) && check(0)) 
          matchCount++;
      
        for (let i = needleArr.length; i < stackArr.length; i++) {
          txtHash = (txtHash + prime - RM * stackArr[i - needleArr.length].character.charCodeAt(0) % prime) % prime; 
          txtHash = (txtHash * R + stackArr[i].character.charCodeAt(0)) % prime; 
          
          const offset = i - needleArr.length + 1;
          if ((patHash == txtHash) && check(offset)) 
            matchCount++;
        }
    animationMaxLimit = animations.length;
    return matchCount;
  }
  `,

  
}
