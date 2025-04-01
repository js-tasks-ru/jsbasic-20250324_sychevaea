function truncate(str, maxlength) {
  if(!str) return str;
  if (!maxlength) return '';

  const symb = "…";

  if (str.length > maxlength){
    return str.slice(0, maxlength - 1) + symb;
  }
  return str;
}
