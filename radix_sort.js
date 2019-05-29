/**
 * Returns a digit on position "i"
 * @param {Integer} num
 * @param {Integer} i
 */
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

/**
 * Returns number of digits
 * @param {Integer} num
 */
function digitCount(num) {
  return Math.abs(num).toString().length;
}

/**
 * Get number of digits of the largest number in an array
 * @param {Array} arr
 * @return {Integer}
 */
function maxDigits(arr) {
  let max = digitCount(arr[0]),
    temp;

  for (let i = 1; i < arr.length; i++) {
    temp = digitCount(arr[i]);

    if (temp > max) max = temp;
  }

  return max;
}

/**
 * Sorts an array of numbers using radix sort
 * @param {Array} arr
 */
function radixSort(arr) {
  let digits = maxDigits(arr),
    tempArr;

  for (let i = 0; i < digits; i++) {
    tempArr = Array.apply(null, { length: 10 }).map(() => []);

    for (let j = 0; j < arr.length; j++) {
      let numberDigit = getDigit(arr[j], i);

      tempArr[numberDigit].push(arr[j]);
    }

    arr = [].concat(...tempArr);
  }

  return arr;
}
