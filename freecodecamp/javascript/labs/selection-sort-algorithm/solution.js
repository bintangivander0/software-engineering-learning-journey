function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallestIndex]) {
        smallestIndex = j;
      }
    }
    if (smallestIndex !== i) {
      let temp = array[i];
      array[i] = array[smallestIndex];
      array[smallestIndex] = temp;
    }
  }
  return array;
}

console.log(selectionSort([1, 3, 5, 6, 2]));
