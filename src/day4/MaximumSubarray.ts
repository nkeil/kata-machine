export interface MaximumSubarrayReturn {
  range: [number, number];
  sum: number;
}

export default function maximum_subarray(
  prices: number[]
): MaximumSubarrayReturn {
  if (prices.length < 2) throw new Error("There must be at least 2 prices");

  let range: [number, number] = [-1, -1];
  let sum = -Infinity;
  let maxRange = range;
  let maxSum = sum;

  for (let i = 1; i < prices.length; ++i) {
    const priceChange = prices[i] - prices[i - 1];
    if (sum + priceChange > priceChange) {
      range = [range[0], i];
      sum += priceChange;
    } else {
      range = [i - 1, i];
      sum = priceChange;
    }

    if (sum > maxSum) {
      maxRange = range;
      maxSum = sum;
    }
  }

  return { range: maxRange, sum: maxSum };
}
