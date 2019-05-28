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
 * Sorts an array using bubble sort
 * @param {Array} arr
 * @return {Array}
 */
function bubbleSort(arr) {
  let swapped;

  for (let i = arr.length; i > 0; i--) {
    swapped = false;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
}
