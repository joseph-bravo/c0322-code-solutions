/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return;
  }
  const temp = stack.pop();
  stack.push(value);
  stack.push(temp);
}
