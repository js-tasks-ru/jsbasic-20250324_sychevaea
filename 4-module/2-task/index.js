function makeDiagonalRed(table) {
  const tbl = document.body.firstElementChild;

  Array.from(tbl.rows).forEach((tr, index) => {
    Array.from(tr.cells).forEach((cell, i, arr) => {
      arr[index].style.backgroundColor = 'red';
    })
  });
  return tbl;
}
