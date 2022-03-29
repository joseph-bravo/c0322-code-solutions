var switchStatus = true;
var $switch = document.querySelector('.switch');
var $container = document.querySelector('.container');

var bgDark = 'container bg-dark';
var bgLight = 'container bg-light';
var swDark = 'switch switch-dark';
var swLight = 'switch switch-light';

function switchToggle() {
  if (switchStatus) {
    $switch.className = swDark;
    $container.className = bgDark;
    switchStatus = false;
  } else {
    $switch.className = swLight;
    $container.className = bgLight;
    switchStatus = true;
  }
}

$switch.addEventListener('click', switchToggle);
