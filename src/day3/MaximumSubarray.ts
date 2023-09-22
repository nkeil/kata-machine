export interface MaximumSubarrayReturn {
  range: [number, number];
  sum: number;
}

export default function maximum_subarray(
  prices: number[]
): MaximumSubarrayReturn {
  // return maximum_subarray_divide_and_conquer(prices);
  return maximum_subarray_kadane(prices);
}

function maximum_subarray_kadane(prices: number[]): MaximumSubarrayReturn {
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

function maximum_subarray_divide_and_conquer(
  prices: number[]
): MaximumSubarrayReturn {
  if (prices.length < 2) throw new Error("prices.length must be >= 2");

  const priceChanges: number[] = [];
  for (let i = 1; i < prices.length; ++i) {
    priceChanges.push(prices[i] - prices[i - 1]);
  }

  const maximum_subarray_recursive = (
    lo: number,
    hi: number
  ): MaximumSubarrayReturn => {
    /**
     * Similar to merge sort, at each iteration the array is halved,
     * and the function recurses on each half. The results of each half
     * are combined to return the max subarray value of the full array.
     *
     * T(N) = 2 * T(n/2) + O(N)
     *
     * O(T(N)) = O(N log N)
     */

    /**
     * Base case:
     * If priceChanges is length 1, return.
     */
    if (lo === hi) return { range: [lo, hi], sum: priceChanges[lo] };

    /**
     * Recursive case
     * Find a midpoint, and compute the maximum left subarray,
     * the maximum right subarray, and the maximum crossing subarray.
     * Then return the max among those three.
     */
    const mid = Math.floor((hi + lo) / 2);
    const left = maximum_subarray_recursive(lo, mid);
    const right = maximum_subarray_recursive(mid + 1, hi);
    const cross = max_crossing_subarray(lo, mid, hi);
    if (left.sum > right.sum && left.sum > cross.sum) return left;
    else if (right.sum > cross.sum) return right;
    else return cross;
  };

  const max_crossing_subarray = (
    lo: number,
    mid: number,
    hi: number
  ): MaximumSubarrayReturn => {
    /**
     * Go middle out to both ends to find the maximum
     * subarray that crosses the middle index.
     *
     * O(N)
     */

    let leftSum = 0;
    let maxLeftSum = -Infinity;
    let maxLeftIndex = -1;
    for (let i = mid; i >= lo; --i) {
      leftSum += priceChanges[i];
      if (leftSum > maxLeftSum) {
        maxLeftSum = leftSum;
        maxLeftIndex = i;
      }
    }

    let rightSum = 0;
    let maxRightSum = -Infinity;
    let maxRightIndex = -1;
    for (let i = mid + 1; i <= hi; ++i) {
      rightSum += priceChanges[i];
      if (rightSum > maxRightSum) {
        maxRightSum = rightSum;
        maxRightIndex = i;
      }
    }

    return {
      range: [maxLeftIndex, maxRightIndex],
      sum: maxLeftSum + maxRightSum,
    };
  };

  const { range, sum } = maximum_subarray_recursive(0, priceChanges.length - 1);
  return {
    range: [range[0], range[1] + 1],
    sum,
  };
}
