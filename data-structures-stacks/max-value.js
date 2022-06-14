/* exported maxValue */
// prettier-ignore

function maxValue(stack) {
  let max = stack.pop();
  if (max === undefined) return Number.NEGATIVE_INFINITY;
  for (; stack.peek() !== undefined;) {
    const x = stack.pop();
    if (max < x) max = x;
  }
  return max;
}
