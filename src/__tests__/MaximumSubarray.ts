import maximum_subarray, {
  type MaximumSubarrayReturn,
} from "@code/MaximumSubarray";
import { test, expect } from "@jest/globals";

test("maximum subarray", function () {
  const tests: Array<{ prices: number[]; output: MaximumSubarrayReturn }> = [
    { prices: [0, 1], output: { range: [0, 1], sum: 1 } },
    { prices: [1, 0], output: { range: [0, 1], sum: -1 } },
    { prices: [0, 1, 2, 3, 4, 5, 6], output: { range: [0, 6], sum: 6 } },
    { prices: [0, 1, 2, 3, 4, 5, 2], output: { range: [0, 5], sum: 5 } },
    {
      prices: [5, 4, 3, 2, 1, 6, 5, 4, 3, 2, 1],
      output: { range: [4, 5], sum: 5 },
    },
    {
      prices: [
        100, 113, 110, 85, 105, 102, 86, 63, 81, 101, 94, 106, 101, 79, 94, 90,
        97,
      ],
      output: { range: [7, 11], sum: 43 },
    },
  ];

  for (const { prices, output } of tests) {
    debugger;
    expect(maximum_subarray(prices)).toEqual(output);
  }
});
