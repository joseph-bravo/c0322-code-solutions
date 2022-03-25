/* exported numVowels */
// yoinking isVowel from string-manipulation-1 and defining it in this file
function isVowel(character) {
  var vowels = ['A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < vowels.length; i++) {
    if (character.toUpperCase() === vowels[i]) {
      return true;
    }
  }
  return false;
}

/*
empty number var output
split() string with '', assign to splitArray for further manipulation
iterate through splitArray indexes, pass each value through isVowel()
  if true, increment output
end of loop, return output
 */

function numVowels(string) {
  var output = 0;
  var splitArray = string.split('');
  for (var i = 0; i < splitArray.length; i++) {
    if (isVowel(splitArray[i])) {
      output++;
    }
  }
  return output;
}
