/* exported reverseWord */
/*
No splits :( just try uhhhh
create output = empty string
for index in string provided, add output to end of index and assign to output
*/

function reverseWord(word) {
  var output = '';
  for (var i = 0; i < word.length; i++) { output = word[i] + output; }
  return output;
}
