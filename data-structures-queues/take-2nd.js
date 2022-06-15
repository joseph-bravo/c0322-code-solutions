/* exported take2nd */

function take2nd(queue) {
  const valA = queue.dequeue();
  if (typeof valA === 'undefined') return;
  const valB = queue.dequeue();
  if (typeof valB === 'undefined') return valA;
  queue.enqueue(valA);
  return valB;
}
