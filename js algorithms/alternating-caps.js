function alternatingCaps(arr) {
    let result = '';
    let isUpper=true;
    for(let word of arr) {
      for(let index = 0; index < word.length; index++) {
          if(isUpper) {
            result += word[index].toUpperCase();
        } else {
            result += word[index].toLowerCase();
        }
        isUpper = !isUpper;
      }
      result += ' ';
    }
    return result.trim();
  }
  
  let arr = ['Create', 'a','sentence','using','alternating','caps'];
  console.log(alternatingCaps(arr));