function sumPrimes(n) {
  if (n < 2) return n;

  let primesArr = [];

  for (let i = 2; i <= limit; i++) {
    let isPrime = true;

    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primesArr.push(i);
    }
  }

  return primesArr.reduce((akumulator, value) => akumulator + value, 0);;
}
