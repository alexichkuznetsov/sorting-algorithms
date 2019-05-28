/**
 * Swaps two elements in an array
 * @param {Array} arr
 * @param {Integer} i
 * @param {Integer} j
 */
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/**
 * Sorts an array using selection sort
 * @param {Array} arr
 * @return {Array}
 */
function selectionSort(arr) {
  let min;

  for (let i = 0; i < arr.length; i++) {
    min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }

    if (min !== i) swap(arr, min, i);
  }

  return arr;
}
