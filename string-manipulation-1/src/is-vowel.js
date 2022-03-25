/* exported isVowel */
/*
create array of vowels capitalized. take arg and capitalize
for every vowel in array, check if equal to arg. if true, then return true
return false at the end when for loop finishes without returning true
*/

function isVowel(character) {
  var vowels = ['A', 'E', 'I', 'O', 'U'];
  for (var i in ['A', 'E', 'I', 'O', 'U']) {
    if (character.toUpperCase() === vowels[i]) { return true; }
  }
  return false;
}
