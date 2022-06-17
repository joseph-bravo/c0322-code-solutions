/* exported includes */

function includes(list, value) {
  let current = list;
  while (current !== null) {
    if (current.data === value) return true;
    current = current.next;
  }
  return false;
}
