export default function merge_sort(arr: number[]): void {
  const merge = (lo: number, mid: number, hi: number) => {
    // Copy [lo, mid] into `left`, and [mid + 1, hi] into `right`
    const left = arr.slice(lo, mid + 1);
    const right = arr.slice(mid + 1, hi + 1);

    // Push a *sentinel* value to the end of each subarray,
    // which lets us avoid checking if either subarray is empty.
    left.push(Infinity);
    right.push(Infinity);

    /**
     * Loop invariant:
     * At the start of each iteration, the subarray [lo, i - 1] contains
     * the `i - lo` smallest elements of `left` and `right` in sorted order.
     *
     * Additionally, `left[left_i]` and `right[right_i]` are always the smallest
     * elements of their arrays that have not been copied back into the main array.
     */
    let left_i = 0;
    let right_i = 0;
    for (let i = lo; i <= hi; ++i) {
      if (left[left_i] < right[right_i]) {
        arr[i] = left[left_i];
        left_i++;
      } else {
        arr[i] = right[right_i];
        right_i++;
      }
    }
  };

  const merge_sort_partial = (lo: number, hi: number) => {
    if (lo >= hi) return;

    const mid = Math.floor((lo + hi) / 2);
    merge_sort_partial(lo, mid);
    merge_sort_partial(mid + 1, hi);
    merge(lo, mid, hi);
  };

  merge_sort_partial(0, arr.length - 1);
}
