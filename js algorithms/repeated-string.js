function repeatedString(s, n) {
    let aInStr = 0;
    let totalA = 0;     

    for(let index = 0; index < s.length; index++) {
        if(s[index] === 'a') {
            aInStr++;
        }
    }

    if(n % s.length === 0) {
        totalA = (n / s.length) * aInStr;
    } else {
        let aInStrRest = 0;   
        for(let index2 = 0; index2 < n % s.length; index2++) {
            if(s[index2] === 'a') {
                aInStrRest++;
            }
        }
        totalA = (Math.floor(n / s.length) * aInStr) + aInStrRest;
    }
    return totalA;
}