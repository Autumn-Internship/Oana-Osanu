function sumPairs(ints, s) {
    const set = new Set();
    for(let int of ints) {
      const rem = s - int;
      if(set.has(rem)) {
        return [rem, int];
      }
      set.add(int);
    }
    return undefined ;
  }