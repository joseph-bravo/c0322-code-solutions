/* exported countValues */

function countValues(stack) {
  let count = 0;
  for (; stack.pop() !== undefined; count++);
  return count;
}
