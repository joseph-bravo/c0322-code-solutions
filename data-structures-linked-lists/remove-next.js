/* exported removeNext */

function removeNext(list) {
  if (!list.next) return;
  const x = list.next.next;
  list.next = x;
}
