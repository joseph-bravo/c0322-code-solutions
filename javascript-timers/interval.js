var count = 4;
var stringToSet = '~Earth Beeeelooowww Us~';

var $countdownDisplay = document.querySelector('.countdown-display');

var intervalID = setInterval(function () {
  if (count === 1) {
    $countdownDisplay.textContent = stringToSet;
    clearInterval(intervalID);
  } else {
    count--;
    $countdownDisplay.textContent = count;
  }
}, 1000);
