/* exported capitalizeWords */
/* global capitalizeWord */
/*
new var output to empty string
split string by spaces ' ' into new array
call capitalizeWord on each word in array with loop
  concat words in array together into output string with loop
  check if index is last index, if not, concat space ' '
return output after loop

can combine capitalize and concat in same line
 */

function capitalizeWords(string) {
  var output = '';

  var splitString = string.split(' ');
  for (var i = 0; i < splitString.length; i++) {
    output += capitalizeWord(splitString[i]);
    if (i < splitString.length - 1) {
      output += ' ';
    }
  }

  return output;
}
