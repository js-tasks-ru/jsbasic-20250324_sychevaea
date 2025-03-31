function factorial(n) {
  if (n == 0) return 1;
  if (n == 1) return 1;

  let result = 1;
  let delta = 0;
  while(n-delta) {
    result *= (n -delta);
    delta++;
  }
}