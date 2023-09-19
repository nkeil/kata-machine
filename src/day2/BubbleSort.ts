export default function bubble_sort(arr: number[]): void {
  for (let end = arr.length; end > 1; --end) {
    for (let i = 1; i < end; ++i) {
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      }
    }
  }
}
