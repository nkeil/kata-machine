export default function quick_sort(arr: number[]): void {
  function partition(lo: number, hi: number) {
    const pivot = lo + Math.floor(Math.random() * (hi - lo + 1));
    const pivotVal = arr[pivot];
    [arr[pivot], arr[hi]] = [arr[hi], arr[pivot]];

    let j = lo - 1;
    for (let i = lo; i < hi; ++i) {
      if (arr[i] < pivotVal) {
        j++;
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
    ++j;
    [arr[j], arr[hi]] = [arr[hi], arr[j]];
    return j;
  }

  function quick_sort_recursive(lo: number, hi: number) {
    if (lo >= hi) return;

    const mid = partition(lo, hi);
    quick_sort_recursive(lo, mid - 1);
    quick_sort_recursive(mid + 1, hi);
  }

  quick_sort_recursive(0, arr.length - 1);
}
