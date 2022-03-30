function handleFocus(event) {
  console.log('fired: focus event');
  console.log('target of focus:', event.target.name);
}

function handleBlur(event) {
  console.log('fired: blur event');
  console.log('target of blur:', event.target.name);
}

function handleInput(event) {
  console.log('handle input: name:', event.target.name, '|| value:', event.target.value);
}

var $contactForm = document.forms['contact-form'];
var $contactName = $contactForm.name;
var $contactEmail = $contactForm.email;
var $contactMessage = $contactForm.message;
var eventListenersToAdd = ['focus', 'blur', 'input'];
var eventHandlers = [handleFocus, handleBlur, handleInput];

var contactValues = [$contactName, $contactEmail, $contactMessage];

for (var i = 0; i < contactValues.length; i++) {
  for (var e = 0; e < eventListenersToAdd.length; e++) {
    contactValues[i].addEventListener(eventListenersToAdd[e], eventHandlers[e]);
  }
}

$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  var messageData = {};
  for (var i = 0; i < contactValues.length; i++) {
    messageData[contactValues[i].name] = contactValues[i].value;
  }
  console.log(messageData);
  $contactForm.reset();
});
