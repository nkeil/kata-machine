export default function two_crystal_balls(breaks: boolean[]): number {
  let increment = Math.floor(Math.sqrt(breaks.length));

  let i = increment;
  for (; i < breaks.length; i += increment) {
    if (breaks[i]) break;
  }

  for (let j = i - increment; j <= i; ++j) {
    if (breaks[j]) return j;
  }

  return -1;
}
