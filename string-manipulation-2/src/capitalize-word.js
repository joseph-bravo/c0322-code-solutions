/* exported capitalizeWord */
/*
toLowerCase all letters, check if value is 'javascript',
  if so, then return 'JavaScript'
  string to array of letters with sep, assign to splitOutput
  1st index toUpperCase, then rejoin with loop adding into empty string var output
  return output
*/

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  var splitOutput = (word.toLowerCase()).split('');
  splitOutput[0] = splitOutput[0].toUpperCase();
  var output = '';
  for (var i = 0; i < splitOutput.length; i++) {
    output += splitOutput[i];
  }
  return output;
}
