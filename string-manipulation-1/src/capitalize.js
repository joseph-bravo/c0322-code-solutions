/* exported capitalize */
// new empty string "output"
// take argument, find first index of arg, toUpperCase(), then add to output
// for every index in arg, toLowerCase, then add to output, then return output

function capitalize(string) {
  var output = '';
  output += string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) output += string[i].toLowerCase();
  return output;
}
