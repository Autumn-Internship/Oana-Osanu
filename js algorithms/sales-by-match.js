function sockMerchant(n, ar) {
    let pairsTotal = 0;
    const socks = new Map();
    for(let index = 0; index < n; index++) {
       const sockColor = ar[index];
        if(socks.has(sockColor)) {
            socks.set(sockColor, socks.get(sockColor) + 1);
        } else {
            socks.set(sockColor, 1);
        }
        if(socks.get(sockColor) % 2 === 0){
            pairsTotal += 1;
        }
    }
    return pairsTotal;
}