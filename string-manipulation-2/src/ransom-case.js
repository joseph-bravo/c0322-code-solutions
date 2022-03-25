/* exported ransomCase */
/*
empty string called var output
take arg and split into array of letters
loop through array starting at 0
  modulo index by 2
    if 0 (even), then lowercase split @ index,
      else uppercase it
        concat value to output
      it'll cover for first index too
return output after loop
*/

function ransomCase(string) {
  var output = '';
  var split = string.split('');
  for (var i = 0; i < split.length; i++) {
    if (i % 2) {
      output += split[i].toUpperCase();
    } else {
      output += split[i].toLowerCase();
    }
  }
  return output;
}
