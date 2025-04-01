function checkSpam(str) {
  if (!str) return false;

  str = str.toLowerCase();

  const value_alpha = '1xBet'.toLowerCase();
  const value_beta = 'XXX'.toLowerCase();

  return str.includes(value_alpha) || str.includes(value_beta);
}
