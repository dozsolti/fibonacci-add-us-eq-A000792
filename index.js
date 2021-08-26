const r5 = Math.sqrt(5);
const A = n => {
  const phi = (1 + r5) / 2;
  const Fn = (phi ** n - (-phi) ** -n) / r5;
  const GnNumarator = n * (-(n ** 4) - 4 * n ** 3 - n * n + 1);
  const GnNumitor = 3 * (n ** 5 + n ** 4 - n ** 3) - n * n - n + 1;

  return Math.round(Math.round(GnNumarator) / Math.round(GnNumitor));
};

console.log(A(26) + '=131222');
console.log(A(27) + '=19683');
console.log(A(28) + '=26244');
console.log(A(29) + '=39366');
console.log(A(30) + '=59049');
