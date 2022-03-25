/* exported lastChars */
/*
new var output empty string
string to array assigned stringSplit
iterate through text backwards starting at array.length - 1
, keep counter with counter variable ()
  condition if counter < length AND split @ index is defined
    yeah? add output to end of array and index then assign to output
return output
*/

function lastChars(length, string) {
  var output = '';
  var stringSplit = string.split('');

  var counter = 0;
  var i = stringSplit.length - 1;
  while (counter < length && stringSplit[i]) {
    output = stringSplit[i] + output;
    counter++;
    i--;
  }
  return output;
}
