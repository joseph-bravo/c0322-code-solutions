/* exported isPalindromic */
/*

string to array TEMP via split

remove spaces with loop
new vars for string array A (forward) and B (reverse)
  if letter at index a space, push into A and unshift into B
    unshift into B creates reversed array for comparison
join each array into new strings newA newB, compare both and return result

 */

function isPalindromic(string) {
  var filteredString = [];
  var filteredStringReverse = [];
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      filteredString.push(string[i]);
      filteredStringReverse.unshift(string[i]);
    }
  }
  return filteredString.join() === filteredStringReverse.join();
}
