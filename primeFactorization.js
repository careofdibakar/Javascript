let primeFactorization = (n) => {
  let primeFactors = "";

  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    while (n % i == 0) {
      primeFactors += i + " ";
      n /= i;
    }
  }

  if (n > 2) {
    primeFactors += n + " ";
  }

  return primeFactors;
};

console.log(primeFactorization(100));
