/* exported reverseWords */
/*
split the fellas with space,
call reverse word from string-manipulation-1 on each string in array
  assign result into the same index in array.
join array with space in between
*/

function reverseWord(word) {
  var output = '';
  for (var i = 0; i < word.length; i++) {
    output = word[i] + output;
  }
  return output;
}
