function palindromeChecker(str) {
    //a string needs to be at least 3 characters long to be considered a palindrome... i guess
if(str.length <= 2) {
return false;
  }
  //counts occurrences of a character
  let charCount = new Map();
  for(let index = 0; index<str.length; index++) {
    const char = str[index];
    if(charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }
  //the string is a palindrom if no more than 1 character has a single occurance
  let oddCount = 0;
  for (let charsCount of charCount.values()) {
		if(charsCount%2 === 1) {
      oddCount++;
      if(oddCount > 1) {
        return false;
    	}
    }
	}
  return true;
}

//some tests
console.log(palindromeChecker('madam'),
palindromeChecker('damam'),
palindromeChecker('da'),
palindromeChecker('a'),
palindromeChecker(''),
palindromeChecker('redivider'),
palindromeChecker('ererviidd'),
palindromeChecker('daa'),
palindromeChecker('dada'),
palindromeChecker('dadamnf'),
palindromeChecker('tattattatrar'));