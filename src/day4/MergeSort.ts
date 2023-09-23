export default function merge_sort(arr: number[]): void {
  const merge = (lo: number, mid: number, hi: number) => {
    const left = arr.slice(lo, mid + 1);
    const right = arr.slice(mid + 1, hi + 1);
    left.push(Infinity);
    right.push(Infinity);

    let left_idx = 0;
    let right_idx = 0;
    for (let i = lo; i <= hi; ++i) {
      if (left[left_idx] < right[right_idx]) {
        arr[i] = left[left_idx++];
      } else {
        arr[i] = right[right_idx++];
      }
    }
  };
  const merge_sort = (lo: number, hi: number) => {
    if (lo >= hi) return;
    const mid = Math.floor((lo + hi) / 2);
    merge_sort(lo, mid);
    merge_sort(mid + 1, hi);
    merge(lo, mid, hi);
  };

  merge_sort(0, arr.length - 1);
}
