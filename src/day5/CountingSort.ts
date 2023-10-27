const input = [
  1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0, 1, 2, 1, 2, 0, 2, 1, 3, 1, 2, 3, 0,
];

function countingSort(input: number[], min: number, max: number) {
  // O(N): Holds the sorted output
  const B = [];

  // O(K): Temporary working storage
  let C = new Array(max - min + 1).fill(0);

  // Step 1: Count the number of each possible value
  for (const num of input) C[num - min] += 1;
  console.log(C);

  // Step 2: Determine how many elements are <= each value
  // E.g. C[1] = number of elements <= 1
  for (const [i, num] of C.entries()) C[i] = num + (C[i - 1] ?? 0);
  console.log(C);

  // Step 3: Populate the output array
  for (const num of input.reverse()) {
    const numElementsLeq = C[num];
    B[numElementsLeq - 0] = num;
    C[num] -= 1;
  }

  return B;
}

console.log(countingSort(input, 0, 3));
