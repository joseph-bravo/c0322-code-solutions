/* exported includes */
/*
for every value, check if value is equal to each index
  return true if it is
return false after loop
 */

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
