/* exported getLength */

function getLength(list) {
  let current = list;
  let count = 0;
  while (current !== null) {
    count++;
    current = current.next;
  }
  return count;
}
