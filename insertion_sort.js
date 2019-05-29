/**
 * Sorts an array using insertion sort
 * @param {Array} arr
 * @return {Array}
 */
function insertionSort(arr) {
  let current, j;

  for (let i = 1; i < arr.length; i++) {
    console.log(arr);
    current = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];

      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}
