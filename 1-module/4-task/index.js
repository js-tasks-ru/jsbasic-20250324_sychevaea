function checkSpam(str) {
  if (!str) return false;

  str = str.toLowerCase();

  const value_alpha = '1xBet'.toLowerCase();
  const value_beta = 'XXX'.toLowerCase();

  if (str.includes(value_alpha)) return true;

  if(str.includes(value_beta)) return true;

  return false;
}
