/* exported isLowerCased */
// grab arg, loop through indexes with condition if letter is NOT lowercase
//        for checking caps: turn word[index] "letter" into lowercase, compare to original letter with !==
// if true break, else continue
// return true at end of loop

function isLowerCased(word) {

  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) { return false; }
  }
  return true;
}
