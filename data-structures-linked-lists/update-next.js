/* exported updateNext */

function updateNext(list, value) {
  if (!list.next) return;
  list.next.data = value;
}
