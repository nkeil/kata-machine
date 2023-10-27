export function countingSort(input: number[], min: number, max: number) {
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

/**
 * =================
 * Counting sort:
 * =================
 *
 * Think O(nlogn) is the best you can get in terms of sorting algorithms?
 * Think again. Counting sort uses additional information given to reduce
 * that even further. We provide the range of possible values that the
 * input values can take on. For example, we might have an array of values
 * that are all 0, 1, or 2. Even if that array is a million members long,
 * the fact that each value can only be one of three values means that
 * we can sort the array in O(n) time. Well technically, O(n + k) where
 * k is the range of possible values, so here O(n + 3).
 *
 * The algorithm works by first counting the number of each possible value
 * in the range. E.g. you might have 300 0's, 100 1's, and 800 2's. Then,
 * from this information you can already determine the final array. If you
 * want O(k) space complexity, you can just overrite the original array
 * with the new values. However, if you want to maintain *stability* (meaning
 * that elements of the same value in the input will have the same order
 * in the output), you'll need to create a new array of the same length
 * and copy values over one by one, resulting in a space complexity of O(n).
 */
