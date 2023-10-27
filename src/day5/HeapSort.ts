export default function heap_sort(arr: number[]): void {
  function heapifyDown(i: number, heapsize: number) {
    if (i >= heapsize) return;

    const left = i * 2 + 1;
    const right = i * 2 + 2;

    const val = arr[i];
    const leftVal = left >= heapsize ? -Infinity : arr[left];
    const rightVal = right >= heapsize ? -Infinity : arr[right];

    if (leftVal > val && leftVal > rightVal) {
      [arr[left], arr[i]] = [arr[i], arr[left]];
      heapifyDown(left, heapsize);
    } else if (rightVal > val && rightVal > leftVal) {
      [arr[right], arr[i]] = [arr[i], arr[right]];
      heapifyDown(right, heapsize);
    }
  }

  for (let i = Math.floor(arr.length / 2); i >= 0; --i) {
    heapifyDown(i, arr.length);
  }

  for (let heapsize = arr.length; heapsize > 0; --heapsize) {
    [arr[0], arr[heapsize - 1]] = [arr[heapsize - 1], arr[0]];
    heapifyDown(0, heapsize - 1);
  }
}
