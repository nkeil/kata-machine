export default function insertion_sort(arr: number[]): void {
  for (let i = 1; i < arr.length; ++i) {
    const value = arr[i];
    let j = i - 1;
    for (; j >= 0 && arr[j] > value; --j) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = value;
  }
}
