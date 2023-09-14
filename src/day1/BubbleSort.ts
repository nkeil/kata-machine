/**
 *
 * [1, 3, 7, 4, 2] length = 5
 *
 * Iteration 1: (4 comparisons)
 *
 * [1, 3, 7, 4, 2]
 *  -  -
 *
 * [1, 3, 7, 4, 2]
 *     -  -
 *
 * [1, 3, 4, 7, 2]
 *        -  -
 *
 * [1, 3, 4, 2, 7]
 *           -  -
 *
 * Iteration 2: (3 comparisons)
 * [1, 3, 2, 4 | 7]
 *
 * Iteration 3: (2 comparisons)
 * [1, 2, 3, | 4, 7]
 *
 * Iteration 4: (1 comparison)
 * [1, 2, | 3, 4, 7]
 *
 * Iteration 5: (0 comparisons)
 * [1, | 2, 3, 4, 7]
 *
 * 5 iterations
 * 4 + 3 + 2 + 1 comparisons
 *
 * n * (sum_i=0^n (i))
 * = O(n^2)
 *
 */

export default function bubble_sort(arr: number[]): void {
  for (let hi = arr.length; hi > 1; --hi) {
    for (let i = 1; i < hi; ++i) {
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      }
    }
  }
}
