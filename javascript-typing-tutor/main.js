var $letterNodes = document.querySelectorAll('.phrase h1 span');
var $completionText = document.querySelector('.completion-text');
var currentLetter = 0;
var letters = [];

for (var i = 0; i < $letterNodes.length; i++) {
  letters.push($letterNodes[i].textContent);
}

function checkInput(event) {
  if (currentLetter < letters.length) {
    if (event.key === letters[currentLetter]) {
      $letterNodes[currentLetter].className = 'correct-char';
      currentLetter++;
      if (currentLetter < letters.length) {
        $letterNodes[currentLetter].className = 'current-letter';
      } else {
        $completionText.className = 'row completion-text';
      }
    } else {
      $letterNodes[currentLetter].className = 'current-letter incorrect-char';
    }
  }
}

var $window = document.defaultView;

$window.addEventListener('keydown', checkInput);
