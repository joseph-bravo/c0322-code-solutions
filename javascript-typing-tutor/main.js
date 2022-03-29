var $phraseH1 = document.querySelector('.phrase h1');
var $letterNodes = $phraseH1.children;

var phrase;
var phraseList = [
  "i don't know how to handle capital letters lol",
  'top 10 ways to code',
  'bababooey bababooey bababooey',
  'optional keyboard stuff',
  'typing random things',
  'asdf jkl;',
  'jfjfjfjf',
  'me when the uhhhhhh',
  'alphabet',
  'cross country',
  'new zealand',
  'learning fuze'
];

var currentLetter = 0;

var $completionText = document.querySelector('.completion-text');
var $accuracyText = document.querySelector('.accuracy');
var missCount = 0;
var hitCount = 0;

function reset() {
  currentLetter = 0;
  $completionText.className = 'row completion-text hidden';
  while ($letterNodes.length > 0) {
    $letterNodes[0].remove();
  }
}

function initializePhrase() {
  reset();

  phrase = phraseList[Math.floor(phraseList.length * (Math.random()))];
  for (var i = 0; i < phrase.length; i++) {
    var letterNode = document.createElement('span');
    letterNode.appendChild(document.createTextNode(phrase[i]));
    $phraseH1.append(letterNode);
  }
  $letterNodes[currentLetter].className = 'current-letter';
}

function winState() {
  var accuracyNoDecimal = Math.round(((hitCount / (hitCount + missCount)) * 100));
  $accuracyText.textContent = accuracyNoDecimal + '%';
  $completionText.className = 'row completion-text';
}

function checkInput(event) {
  if (currentLetter < phrase.length) {
    if (event.key === phrase[currentLetter]) {
      $letterNodes[currentLetter].className = 'correct-char';
      currentLetter++;
      hitCount++;
      if (currentLetter < phrase.length) {
        $letterNodes[currentLetter].className = 'current-letter';
      } else {
        winState();
      }
    } else {
      $letterNodes[currentLetter].className = 'current-letter incorrect-char';
      missCount++;
    }
  } else if (event.key === 'Enter') {
    initializePhrase();
  }
}

var $window = document.defaultView;
$window.addEventListener('keydown', checkInput);

initializePhrase();
