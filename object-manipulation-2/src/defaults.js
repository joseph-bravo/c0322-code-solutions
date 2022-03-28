/* exported defaults */
/* global omit */
/*
new output empty object
grab target keys into an array of strings Object.toKeys()
use omit(), source as 1st arg and targetKeys as 2nd arg, assign to var
for each value in source remaining and all of target, add into output
return output
 */

function defaults(target, source) {
  var targetKeys = Object.keys(target);
  var sourceFiltered = omit(source, targetKeys);

  for (var key2 in sourceFiltered) {
    target[key2] = source[key2];
  }
}
