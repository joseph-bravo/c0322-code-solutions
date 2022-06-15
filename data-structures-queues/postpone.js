/* exported postpone */

function postpone(queue) {
  const val = queue.dequeue();
  return typeof val !== 'undefined' ? queue.enqueue(val) : undefined;
}
