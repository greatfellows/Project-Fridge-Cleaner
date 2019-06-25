'use strict';

var loginButton = document.getElementById('submit');
loginButton.addEventListener('click', submitLogin);
function submitLogin(){

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;


  console.log(username);
  console.log(password);

  handleLogin(username, password);
}
