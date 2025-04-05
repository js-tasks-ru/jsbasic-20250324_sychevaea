function getMinMax(str) {
  if (!str) return false;

  let arr = str.split(' ');
  let updated_arr = arr.map((item) => parseFloat(item))
  .filter((item) => Number.isFinite(item));

  return {
    max: Math.max(...updated_arr),
    min: Math.min(...updated_arr)
  };
}
