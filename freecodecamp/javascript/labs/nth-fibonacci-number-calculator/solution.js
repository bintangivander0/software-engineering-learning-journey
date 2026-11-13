const fibonacci = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    return "Mohon mengisi angka positif & bulat!"
  }
  let sequence = [0, 1];
  if (n <= 1) return n;

  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  console.log(sequence);
  return sequence[n];
}

console.log(fibonacci(-1));
