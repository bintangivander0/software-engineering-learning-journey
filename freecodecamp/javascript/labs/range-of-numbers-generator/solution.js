function rangeOfNumbers(min, max) {
  let countArray = [];
  if (max < min) {
    return [];
  } else {
    countArray = rangeOfNumbers(min, max - 1);
    countArray.push(max);
    return countArray;
  }
}

console.log(rangeOfNumbers(3, 9));
