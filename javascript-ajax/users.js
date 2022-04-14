var $userList = document.querySelector('#user-list');
var userXHR = new XMLHttpRequest();
userXHR.open('GET', 'https://jsonplaceholder.typicode.com/users');
userXHR.responseType = 'json';
userXHR.addEventListener('load', function () {
  console.log('status:', this.status);
  console.log('response:', this.response);
  this.response.forEach(function (element) {
    var $li = document.createElement('li');
    $li.textContent = element.name;
    $userList.append($li);
  });
});
userXHR.send();
