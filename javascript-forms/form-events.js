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

// grab everything
var $contactForm = document.forms['contact-form'];
var $contactName = $contactForm.name;
var $contactEmail = $contactForm.email;
var $contactMessage = $contactForm.message;

// for the loop
var eventListenersToAdd = ['focus', 'blur', 'input'];
var eventHandlers = [handleFocus, handleBlur, handleInput];

// stuff we wanna add listeners to
var contactValues = [$contactName, $contactEmail, $contactMessage];

// add listener to all in contact values array
for (var i = 0; i < contactValues.length; i++) {
  for (var e = 0; e < eventListenersToAdd.length; e++) {
    contactValues[i].addEventListener(eventListenersToAdd[e], eventHandlers[e]);
  }
}
