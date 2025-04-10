function highlight(table) {
  const headers = table.tHead.rows[0].cells;
  const body = table.tBodies[0];

  Array.from(headers).forEach((header, index, array) => {
    for(let row of body.rows){
      let cell = row.cells[index];

      // устанавливаем класс available/unavailable взависимости от значения атрибута data-available у ячейки Status
      if (header.textContent == 'Status' && cell.dataset.available == 'true'){
        row.classList.add('available');
      }

      if (header.textContent == 'Status' && cell.dataset.available == 'false'){
        row.classList.add('unavailable');
      }

      if (header.textContent == 'Status' && cell.hasAttribute('data-available') == false){
        row.setAttribute('hidden', '');
      }

      // Проставить класс male/female в зависимости от содержимого ячейки Gender
      if (header.textContent == 'Gender' && cell.textContent == 'm'){
        row.classList.add('male');
      }

      if (header.textContent == 'Gender' && cell.textContent == 'f'){
        row.classList.add('female');
      }

      // если значение ячейки Age меньше 18
      if (header.textContent == 'Age' && cell.textContent && parseInt(cell.textContent) < 18){
        row.style.textDecoration = 'line-through';
      }
    }
  });
  return table;
}
