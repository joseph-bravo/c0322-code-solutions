var $contactForm = document.forms['contact-form'];
var $contactName = $contactForm.name;
var $contactEmail = $contactForm.email;
var $contactMessage = $contactForm.message;

var contactValues = [$contactName, $contactEmail, $contactMessage];

var messageData = {};

// for each contact value, add name: value to object

// add listener to submit to disable default behavior
$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  for (var i = 0; i < contactValues.length; i++) {
    messageData[contactValues[i].name] = contactValues[i].value;
  }
  console.log(messageData);
  $contactForm.reset();
});
