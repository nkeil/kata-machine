export interface MaximumSubarrayReturn {
  range: [number, number];
  sum: number;
}

export default function maximum_subarray(
  prices: number[]
): MaximumSubarrayReturn {
  // TODO: implement
  return { range: [-1, -1], sum: NaN };
}
