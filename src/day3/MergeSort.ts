export default function merge_sort(arr: number[]): void {
  const merge = (lo: number, mid: number, hi: number) => {
    const left = arr.slice(lo, mid + 1);
    const right = arr.slice(mid + 1, hi + 1);
    left.push(Infinity);
    right.push(Infinity);

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
