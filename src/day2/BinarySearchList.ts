export default function bs_list(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length;

  while (lo < hi) {
    let mid_index = Math.floor((lo + hi) / 2);
    let mid_value = haystack[mid_index];
    if (mid_value === needle) return true;
    else if (mid_value < needle) {
      lo = mid_index + 1;
    } else {
      hi = mid_index;
    }
  }
  return false;
}
