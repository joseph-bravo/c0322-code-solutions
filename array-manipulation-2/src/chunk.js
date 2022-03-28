/* exported chunk */
/*
output array
temp array create
iterate through array with index var until size are pushed into temp
  if temp array length = size, then push temp into output and clear temp
after loop, if there's anything left in temp, push it (temp.length > 0)
return output
*/

function chunk(array, size) {
  var output = [];
  var temp = [];
  for (var i = 0; i < array.length; i++) {
    temp.push(array[i]);
    if (temp.length === size) {
      output.push(temp);
      temp = [];
    }

  }
  if (temp.length > 0) {
    output.push(temp);
    temp = [];
  }
  return output;
}
