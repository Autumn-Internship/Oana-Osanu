function multiplicationTable(n) {
	let table = [];
  for (let row = 0; row < n; row++) {
  	table.push([]);
    let count = 0;
    for(let column = 0; column < n; column++) {
      count += row + 1;
      table[row].push(count);
    }
  }
  return table;
}
console.log(multiplicationTable(3));
