/* exported getWords */
/*
check if empty string. if so, return an empty array
else, return string with split(' ')
*/

function getWords(string) {
  if (string === '') return [];
  return string.split(' ');
}
