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
