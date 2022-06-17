/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const out = new LinkedList(value);
  out.next = list;
  return out;
}
