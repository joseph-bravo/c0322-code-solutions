var $openButton = document.querySelector('.open-button');
var $closeButton = document.querySelector('.close-button');

var $modalContainer = document.querySelector('.modal-container');

var modalHide = 'modal-container hidden';
var modalShow = 'modal-container';

$openButton.addEventListener('click', function () {
  $modalContainer.className = modalShow;
});
$closeButton.addEventListener('click', function () {
  $modalContainer.className = modalHide;
});
