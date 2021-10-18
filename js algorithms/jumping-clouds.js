function jumpingOnClouds(c) {
    let currentCloud = 0;
    let jumps = 0;

    for (let clouds of c) {
        if(c[currentCloud + 2] === 0 || c[currentCloud + 2] === undefined) {
            currentCloud += 2;
            jumps++;
        } else if(c[currentCloud + 2] === 1) {
            currentCloud++;
            jumps++;        
        }

        if(currentCloud >= c.length - 1) {
            return jumps;        
        }
    }
}