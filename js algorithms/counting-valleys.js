function countingValleys(steps, path) {
    let valleysTotal = 0;
    let level = 0;
    let isInValley = false;
    for(let index = 0; index < steps; index++) {
        let step = path[index];
        if(step === 'D') {
            level--;
        } else if(step === 'U') {
            level++;
        }
        if(level < 0) {
            isInValley = true;
        }
        if(level === 0 && isInValley) {
            valleysTotal++;
            isInValley = false;
        }
    }
    return valleysTotal;
}