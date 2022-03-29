/* eslint-disable no-redeclare */
/* exported titleCase */

/*
  new function: capitalize word
    from string-manipulation-2

  new function named titleCase(title)
  title into lowercase, assign to new var titleLowerCase
  titleLowerCase split by ': ', assign to new var titleParts
  for each x in titleParts, split by ' ', reassign to index

  i.e. javascript: the definitive guide
  we now have titleParts = [ ['javascript'], ['the', 'definitive', 'guide'] ]

  titleParts = [ [word, word] , [word, word, word] ]
  titleParts = [titlepart, titlepart]

  for each word in title part in titleParts, titleCase check...
    keyword? >>>
      ----
      for each keyword in keywords object, check if keyword === word
      (split into function to allow for loop flow via if statement)
        y: assign value of property to index
        n: pass
      ---

    hyphen?
      y: split by hyphen into array, capitalize both indexes, join with hyphen seperator
      n: pass

    first word?
      y: capitalize normally
      n: pass

    check if >= 4
      y: capitalize normally
      n: check if minor word >>>
        minor word? >>>
        -----
          for each minorWord in minor words array, check if minorWord === word
        -----
          y: capitalize normally
          n: return lowercase

  for each x in title part, rejoin with space seperator
  for each title part in titleParts, rejoin with ': ' seperator
  return output
*/

function capitalizeWordStandard(word) {
  var splitOutput = (word.toLowerCase()).split('');
  splitOutput[0] = splitOutput[0].toUpperCase();
  var output = splitOutput.join('');
  return output;
}

var keyWords = { javascript: 'JavaScript', api: 'API', i: 'I' };

function isKeyWord(word) {
  for (var keyWord in keyWords) {
    if (keyWord === word) {
      return true;
    }
  }
  return false;
}

var minorWords = ['and', 'or', 'not', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

function isMinorWord(word) {
  for (var minorWord = 0; minorWord < minorWords.length; minorWord++) {
    if (word === minorWords[minorWord]) {
      return true;
    }
  }
  return false;
}

function titleCase(title) {
  var titleLowerCase = title.toLowerCase();
  var titleParts = titleLowerCase.split(': ');
  for (var i = 0; i < titleParts.length; i++) {
    var workingTitle = titleParts[i].split(' ');
    for (var word = 0; word < workingTitle.length; word++) {
      // keyword?
      if (isKeyWord(workingTitle[word])) {
        workingTitle[word] = keyWords[workingTitle[word]];
      } else if (workingTitle[word].includes('-')) {
        var hyphenWordArray = workingTitle[word].split('-');
        for (var hyphenWord = 0; hyphenWord < hyphenWordArray.length; hyphenWord++) {
          hyphenWordArray[hyphenWord] = capitalizeWordStandard(hyphenWordArray[hyphenWord]);
        }
        workingTitle[word] = hyphenWordArray.join('-');
      } else if (word === 0) {
        workingTitle[word] = capitalizeWordStandard(workingTitle[word]);
      } else if (workingTitle[word].length > 3) {
        workingTitle[word] = capitalizeWordStandard(workingTitle[word]);
      } else if (!isMinorWord(workingTitle[word])) {
        workingTitle[word] = capitalizeWordStandard(workingTitle[word]);
      }
      titleParts[i] = workingTitle.join(' ');
    }
  }
  return titleParts.join(': ');
}
