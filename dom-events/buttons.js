function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('target of event:', event.target);
}

var $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('target of event:', event.target);
}

var $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('target of event:', event.target);
}

var $dblClickButton = document.querySelector('.double-click-button');
$dblClickButton.addEventListener('dblclick', handleDoubleClick);
