/* exported swapChars */
/*
split() string into split variable
save splitString @ 1st index and 2nd index into seperate variables
assign splitString @ index with the saved variables
combine via join('') array method and return
*/
function swapChars(firstIndex, secondIndex, string) {
  var split = string.split('');
  var a = split[firstIndex];
  var b = split[secondIndex];
  split[firstIndex] = b;
  split[secondIndex] = a;
  return split.join('');
}
