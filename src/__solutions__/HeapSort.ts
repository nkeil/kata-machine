export default function heap_sort(arr: number[]): void {
  const parent = (idx: number) => Math.floor((idx - 1) / 2);
  const left = (idx: number) => idx * 2 + 1;
  const right = (idx: number) => idx * 2 + 2;

  const heapifyDown = (idx: number, heapSize: number) => {
    if (idx >= heapSize) return;

    const leftIdx = left(idx);
    const rightIdx = right(idx);

    const val = arr[idx];
    const leftVal = leftIdx >= heapSize ? -Infinity : arr[leftIdx];
    const rightVal = rightIdx >= heapSize ? -Infinity : arr[rightIdx];

    if (leftVal > val && leftVal > rightVal) {
      [arr[idx], arr[leftIdx]] = [leftVal, val];
      heapifyDown(leftIdx, heapSize);
    } else if (rightVal > val && rightVal > leftVal) {
      [arr[idx], arr[rightIdx]] = [rightVal, val];
      heapifyDown(rightIdx, heapSize);
    }
  };

  // 1. Create a MAX heap from the array O(N)
  for (let i = Math.floor(arr.length / 2); i >= 0; --i) {
    heapifyDown(i, arr.length);
  }

  // 2. Continuously pop off the top value of the MAX heap,
  // and move it to the end. O(N logN)
  for (let heapSize = arr.length; heapSize > 0; --heapSize) {
    [arr[0], arr[heapSize - 1]] = [arr[heapSize - 1], arr[0]];
    heapifyDown(0, heapSize - 1);
  }
}
