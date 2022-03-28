/* eslint-disable no-redeclare */
/* exported omit */
/*
variable: unbanned empty array, list out source keys,
  for each source key, check if it's banned with each item of keys
  , if not, then add to unbanned array
once that's done, iterate through unbanned array and add property to obj output
*/

// function omit(source, argKeys) {
//   var output = {};
//   var sourceKeys = Object.keys(source);
//   var unbannedKeys = [];
//   for (var i = 0; i < sourceKeys.length; i++) {
//     var isOkay = true;
//     for (var x = 0; x < argKeys.length; x++) {
//       if (sourceKeys[i] === argKeys[x]) {
//         isOkay = false;
//       }
//     }
//     if (isOkay) {
//       unbannedKeys.push(sourceKeys[i]);
//     }
//   }
//   for (var i = 0; i < unbannedKeys.length; i++) {
//     output[unbannedKeys[i]] = source[unbannedKeys[i]];
//   }
//   return output;
// }

function omit(source, argKeys) {
  var output = {};
  var unbannedKeys = [];
  for (var i in source) {
    var isOkay = true;
    for (var x = 0; x < argKeys.length; x++) {
      if (i === argKeys[x]) {
        isOkay = false;
      }
    }
    if (isOkay) {
      unbannedKeys.push(i);
    }
  }
  for (var i = 0; i < unbannedKeys.length; i++) {
    output[unbannedKeys[i]] = source[unbannedKeys[i]];
  }
  return output;
}
