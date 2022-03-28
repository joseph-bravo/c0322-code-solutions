/* exported isAnagram */
/*
take string and slap all non-spaces into new array for both A and B
  i'm gonna create a new function just for this actually lol
turn both strings into array and remove spaces (A and B)
for each letter in A string, check if it exists in B string.
  NEW FUNCTION: isStringInArray. default to false. set output to true if one string isn't in array
  if it does, continue loop, if not, return false
    return true at end of loop
 */
function toArrayAndRemoveCharacter(string, char) {
  var output = [];
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== char) {
      output.push(string[i]);
    }
  }
  return output;
}

function isStringInArray(array, string) {
  var output = false;
  for (var i = 0; i < array.length; i++) {
    if (string === array[i]) {
      output = true;
    }
  }
  return output;
}

function isAnagram(firstString, secondString) {
  var arrayA = toArrayAndRemoveCharacter(firstString, ' ');
  var arrayB = toArrayAndRemoveCharacter(secondString, ' ');
  for (var i = 0; i < arrayB.length; i++) {
    if (!isStringInArray(arrayA, arrayB[i])) {
      return false;
    }
  }
  return true;
}
