/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (typeof queue.peek() === 'undefined') return;
  let current = queue.dequeue();
  while (true) {
    const next = queue.peek();
    if (typeof next === 'undefined') return current;
    switch (current <= next) {
      case true:
        return current;
      case false:
        queue.dequeue();
        queue.enqueue(current);
        current = next;
    }
  }
}
