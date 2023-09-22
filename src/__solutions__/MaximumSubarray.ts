export interface MaximumSubarrayReturn {
  range: [number, number];
  sum: number;
}

/**
 * Kadane's algorithm
 * Runtime: O(N)
 * Space: O(1)
 */
export default function maximum_subarray(
  prices: number[]
): MaximumSubarrayReturn {
  if (prices.length < 2) throw new Error("prices.length must be >= 2");

  let range: MaximumSubarrayReturn["range"] = [-1, -1];
  let sum: MaximumSubarrayReturn["sum"] = -Infinity;
  let maxRange = range;
  let maxSum = sum;

  /**
   * For each `i` in [1, priceChanges.length),
   * find the maximum subarray ending at `i`.
   * Since this covers the entire set of possible
   * outputs, return the max range seen from the results.
   */
  for (let i = 1; i < prices.length; ++i) {
    const nextPriceDiff = prices[i] - prices[i - 1];
    if (nextPriceDiff >= sum + nextPriceDiff) {
      range = [i - 1, i];
      sum = nextPriceDiff;
    } else {
      range = [range[0], i];
      sum += nextPriceDiff;
    }
    if (sum > maxSum) {
      maxSum = sum;
      maxRange = range;
    }
  }
  return {
    range: maxRange,
    sum: maxSum,
  };
}
