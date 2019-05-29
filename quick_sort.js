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
 * Finds where item with index of "start"
 * should go in sorted array
 * @param {Array} arr
 * @param {Integer} start
 * @param {Integer} end
 * @return {Integer}
 */
function getPivotIndex(arr, start = 0, end = arr.length) {
  let pivot = arr[start];
  let pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      pivotIndex++;

      swap(arr, i, pivotIndex);
    }
  }

  swap(arr, start, pivotIndex);

  return pivotIndex;
}

/**
 * Sorts an array using quick sort
 * @param {Array} arr
 * @param {Integer} start
 * @param {Integer} end
 */
function quickSort(arr, start = 0, end = arr.length) {
  let pivotIndex;

  if (start < end) {
    pivotIndex = getPivotIndex(arr, start, end);

    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }
}
