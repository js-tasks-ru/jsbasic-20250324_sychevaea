function isEmpty(obj) {
  let flag = true;
  for(key in obj){
    flag = false;
  }
  return flag;
}
