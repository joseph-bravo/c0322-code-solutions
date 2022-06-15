/* exported takeSmaller */

function takeSmaller(queue) {
  const valA = queue.dequeue();
  if (typeof valA === 'undefined') return;
  const valB = queue.dequeue();
  if (typeof valB === 'undefined') return valA;
  switch (Math.min(valA, valB)) {
    case valA:
      queue.enqueue(valB);
      return valA;
    case valB:
      queue.enqueue(valA);
      return valB;
  }
}
