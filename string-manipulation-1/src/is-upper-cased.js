/* exported isUpperCased */
// grab arg, loop through indexes with condition if letter is NOT capitalized
//        for checking caps: turn word[index] "letter" into caps, compare to original letter with ===
// if true break, else continue
// return true at end of loop

function isUpperCased(word) {

  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) return false;
  }
  return true;
}
