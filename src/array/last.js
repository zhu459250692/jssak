/**
 * @description Get the last element or last n elements of an array.
 * 
 * @param {Array} array: The array to query. 
 * @param {*} num: The last elements count.
 * 
 * @returns {*|Array} Returns the last element or last n elements of array.
 * 
 * @example
 * 
 * ``` js
 * last(['a', 'b', 'c', 'd', 'e', 'f']); 
 * // => 'f'
 * 
 * last(['a', 'b', 'c', 'd', 'e', 'f'], 1);
 * // => 'f'
 * 
 * last(['a', 'b', 'c', 'd', 'e', 'f'], 3);
 * // => ['d', 'e', 'f']
 * ```
 */

export default function (array, num = 1) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected array.');
  }

  const arrayLen = array.length;
  if (!arrayLen) {
    return undefined;
  }
  if (num === 1) {
    return array[arrayLen - 1];
  }
  return array.slice(arrayLen - num);
}
