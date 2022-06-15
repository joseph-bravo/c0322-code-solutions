/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (typeof queue.peek() === 'undefined') return;
  while (index + 1) {
    const out = queue.dequeue();
    if (!index) return out;
    queue.enqueue(out);
    index--;
  }
}
