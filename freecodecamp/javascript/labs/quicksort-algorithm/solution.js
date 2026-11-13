function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let middleIndex = Math.floor(arr.length / 2);
  let pivot = arr[middleIndex];

  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === middleIndex) continue;

    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}

console.log(quicksort([10, 5, 2, 9, 6, 1]));
