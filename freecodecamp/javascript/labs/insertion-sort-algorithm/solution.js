function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentNumber = array[i];
    let firstNumber = i - 1;

    while (firstNumber >= 0 && array[firstNumber] > currentNumber) {
      array[firstNumber + 1] = array[firstNumber];
      firstNumber -= 1
    }

    array[firstNumber + 1] = currentNumber;
  }
  return array;
}

console.log(insertionSort([42, 4, 12, 24, 2]));
