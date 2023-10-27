const input = [0.78, 0.17, 0.39, 0.26, 0.72, 0.94, 0.21, 0.23, 0.68];

export function bucketSort(input: number[]) {
  // Space O(n): Create an array of empty buckets
  const B = Array.from(Array(input.length), (_) => []);

  // Runtime O(n): Fill each bucket
  for (const num of input) {
    B[Math.floor(num * input.length)].push(num);
  }

  // Assuming each bucket is of size O(1), sort each bucket
  // Runtime O(n)
  for (const nums of B) nums.sort();

  // Runtime O(n): Reassemble the array
  const out = [];
  for (const nums of B) out.push(...nums);
  return out;
}

console.log(bucketSort(input));

/**
 * Bucket sort:
 *
 * While counting sort assumes that the input is in a specific range of
 * integers, bucket sort assumes that the input is in a roughly equal
 * distribution among two floating point numbers (here 0 to 1). The
 * algorithm shortens the sort time to O(n) by creating a "bucket"
 * for each element of the list (taking O(n) extra space), and dividing
 * the range such that an equal sub-range of values corresponds to each
 * bucket. It then iterates over the input array, and adds each element
 * to its corresponding bucket. Then it simply sorts each bucket and
 * conjoins all the buckets together.
 */
