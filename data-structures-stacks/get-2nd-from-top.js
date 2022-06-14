/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return;
  }
  const temp = stack.pop();
  const out = stack.peek();
  stack.push(temp);
  return out;
}
