function camelize(str) {
  if (!str) return false;

  let arr = str.split('-');

  let updated_arr = arr.map((item, index) => {
    return index == 0 ? item : item[0].toUpperCase() + item.slice(1);
  })

  return updated_arr.join('');
}
