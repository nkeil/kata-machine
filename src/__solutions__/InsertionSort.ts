export default function insertion_sort(arr: number[]): void {
  for (let i = 1; i < arr.length; ++i) {
    // Get a copy of the value, since it will be
    // overridden when values are shifted to the right
    const value = arr[i];

    /**
     * Loop invariant:
     * The subarray [0,i-1] will always consist of the elements
     * originally in [0,i-1], but in sorted order.
     *
     * In each iteration, insert `value` into the correct position,
     * shifting each element with a greater value to the right by one.
     */

    let j = i - 1;
    // Push every element that is greater than `value` right by one
    for (; j >= 0 && arr[j] > value; --j) {
      arr[j + 1] = arr[j];
    }
    // Insert `value` into the most recently shifted position
    arr[j + 1] = value;
  }
}

/**
 * Example:
 *
 * 0: [ 5, 2, 4, 6, 1, 3 ]
 * 1: [ 2, 5, 4, 6, 1, 3 ]
 * 2: [ 2, 4, 5, 6, 1, 3 ]
 * 3: [ 2, 4, 5, 6, 1, 3 ]
 * 4: [ 1, 2, 4, 5, 6, 3 ]
 * 5: [ 1, 2, 3, 4, 5, 6 ]
 */
