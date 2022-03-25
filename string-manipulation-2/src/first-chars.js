/* exported firstChars */
/*
this is literally just trunc without the ellipsis but i'll do it another way
new var output = empty string
string to array via split(''), assigned to stringSplit
loop through and concat to output until index is value of length
  check if value is defined first with if statement
*/

function firstChars(length, string) {
  var output = '';
  var stringSplit = string.split('');
  for (var i = 0; i < length; i++) {
    if (stringSplit[i]) {
      output += stringSplit[i];
    }
  }
  return output;
}
