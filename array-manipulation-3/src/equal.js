/* exported equal */
/*
  check if lengths are the same
    y: for each index of either array, check if both indexes for both arrays !==
      y: return false
      n: pass
      after: return true
    n: return false
 */
function equal(first, second) {
  if (first.length === second.length) {
    for (var i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
