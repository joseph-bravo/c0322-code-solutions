/* exported titleCase */

/*
  new function: capitalize word
    from string-manipulation-2

  new function: is keyword
    var keywords containing object with keyword property with value of property capitalization

  new function: titleCaseWord, including ones separated by hyphens, args (word, index)
  check if keyword, assign to proper string capitalization if true
    set output to proper capitalization
  else if word length >= 4 || index !== 0
    check string has hyphen
      if:
          split by hyphen
          capitalize each with for loop
          join with hyphen
    else capitalize normally
  return output string

  TITLE CASE FUNCTION

  lowercase all of string
  split words by space into new array
  for each splitword, run titleCaseWorld, pass word and index, assign to current index
  join with spaces

*/

function capitalizeWord(word) {
  var splitOutput = (word.toLowerCase()).split('');
  splitOutput[0] = splitOutput[0].toUpperCase();
  var output = splitOutput.join('');
  return output;
}

var keywords = { javascript: 'JavaScript', api: 'API' };

function isKeyWord(word) {
  for (var i in keywords) {
    if (word.toLowerCase() === i) {
      return true;
    }
  }
  return false;
}

function titleCaseWord(word, index) {
  if (isKeyWord(word)) {
    for (var i in keywords) {
      if (word.toLowerCase() === i) {
        return keywords[i];
      }
    }
  } else if (word.length >= 4 || index !== 0) {
    if (word.includes('-')) {
      var splitString = word.split('-');
      for (var i = 0; i < splitString.length; i++) {
        splitString[i] = capitalizeWord(splitString[i]);
      }
      return splitString.join('-');
    } else {
      return capitalizeWord(word);
    }
  } else {
    return word.toLowerCase();
  }
}

function titleCase(title) {
  var titleLowerCase = title.toLowerCase();
  var titleSplit = titleLowerCase.split(' ');
  for (var i = 0; i < titleSplit.length; i++) {
    titleSplit[i] = titleCaseWord(titleSplit[i], i);
  }
  return titleSplit.join(' ');
}
