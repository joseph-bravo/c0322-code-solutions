/* exported truncate */
/* slice() string from 0 to provided length,
concatenate with ... and return value */

function truncate(length, string) {
  return string.slice(0, length) + '...';
}
