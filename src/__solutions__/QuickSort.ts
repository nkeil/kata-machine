export default function quick_sort(arr: number[]): void {
  /**
   * Partition selects a *pivot* element around which to partition the subarray.
   * It then distributes every element less than the pivot and every element
   * greater than the pivot around the pivot element. ("weak sort")
   * @returns the index of the new pivot
   * Runtime: O(N)
   */
  const partition = (lo: number, hi: number): number => {
    // Perform random sampling to determine the pivot.
    // Then swap it with the value at `hi` before partitioning.
    let pivot = Math.floor(Math.random() * (hi + 1 - lo)) + lo;
    [arr[pivot], arr[hi]] = [arr[hi], arr[pivot]];

    pivot = hi;
    const pivotValue = arr[hi];

    let i = lo - 1;
    for (let j = lo; j <= hi - 1; ++j) {
      if (arr[j] <= pivotValue) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    i++;
    [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
    return i;
  };
  /**
   * Recursive helper function for quick sort
   */
  const quick_sort = (lo: number, hi: number) => {
    if (lo >= hi) return;
    const mid = partition(lo, hi);
    quick_sort(lo, mid - 1);
    quick_sort(mid + 1, hi);
  };

  quick_sort(0, arr.length - 1);
}

/**
 * Quick sort is one of the most interesting sorting algorithms,
 * and one of the most efficient without additional information.
 * It sorts in-place, in contrast to merge sort which takes up
 * a lot of extra memory to keep track of the recursive arrays.
 *
 * Like merge sort, quick sort is recursive. On each recursive
 * run, quick sort splits the array in two. It finds a random
 * pivot value, and on one side, it puts every element less
 * than or equal to the pivot, and on the other side, every
 * element greater than or equal to the pivot. It does this in
 * one pass with a series of swaps, keeping track of the end
 * of the left group of elements which are all <= the pivot.
 * If a new element is found which is <= the pivot, that value
 * is swapped with the end element. Finally the pivot is placed
 * in the middle.
 *
 * Recursively, both sides are then sorted, resulting in an
 * eventually sorted array.
 */

/**
 * This algorithm can also be used the find the "nth largest element"
 * in the array. You find the pivot, and if the pivot element is in
 * the nth position, you know the answer. Otherwise, by comparing
 * n to the pivot index, you can throw away the half of elements with
 * index either greater or less than your target. Sort of a combination
 * of quick sort and binary search. This results in a runtime of O(n).
 */
