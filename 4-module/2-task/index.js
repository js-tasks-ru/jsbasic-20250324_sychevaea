function makeDiagonalRed(table) {
  Array.from(table.rows).forEach((tr, index) => {
    Array.from(tr.cells).forEach((cell, i, arr) => {
      arr[index].style.backgroundColor = 'red';
    })
  });
  return table;
}
