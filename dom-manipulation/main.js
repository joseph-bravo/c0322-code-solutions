var clicks = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function checkButtonTemp() {
  if (clicks >= 16) {
    return 'nuclear';
  } else if (clicks >= 13) {
    return 'hot';
  } else if (clicks >= 10) {
    return 'warm';
  } else if (clicks >= 7) {
    return 'tepid';
  } else if (clicks >= 4) {
    return 'cool';
  } else {
    return 'cold';
  }
}

$hotButton.addEventListener('click', function () {
  clicks++;
  $clickCount.textContent = 'Clicks: ' + clicks;
  $hotButton.className = 'hot-button ' + checkButtonTemp();
});
