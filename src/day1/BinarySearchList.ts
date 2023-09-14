export default function bs_list(haystack: number[], needle: number): boolean {
  let min = 0;
  let max = haystack.length;

  while (min < max) {
    const mid_index = Math.floor((min + max) / 2);
    const mid_value = haystack[mid_index];
    if (mid_value === needle) return true;
    else if (mid_value < needle) {
      min = mid_index + 1;
    } else {
      max = mid_index;
    }
  }
  return false;
}

// alternate version when using the upper pointer as inclusive
// a better way of doing this would be to make the while loop `while (min <= max)`
// since we still want it to execute when the two pointers are equal
//
//
// you should choose to do inclusive or exclusive, but be aware of off-by-one issues

// export default function bs_list(haystack: number[], needle: number): boolean {
//     let min = 0,
//         max = haystack.length - 1;
//     while (min < max) {
//         const mid_index = Math.floor((max + min) / 2);
//         if (haystack[mid_index] === needle) return true;
//         else if (haystack[mid_index] < needle) {
//             min = mid_index + 1;
//         } else {
//             max = mid_index - 1;
//         }
//     }
//     return haystack[min] === needle;
// }
//
