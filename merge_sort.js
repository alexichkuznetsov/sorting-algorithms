/**
 * Merges two sorted arrays into 1 sorted array
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
function mergeArrays(arr1, arr2) {
  let arr = [],
    i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);

      i++;
    } else {
      arr.push(arr2[j]);

      j++;
    }
  }

  while (i < arr1.length) {
    arr.push(arr1[i]);

    i++;
  }

  while (j < arr2.length) {
    arr.push(arr2[j]);

    j++;
  }

  return arr;
}

/**
 * Sorts an array using merge sort
 * @param {Array} arr
 * @return {Array}
 */
function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let middle = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));

  return mergeArrays(left, right);
}
