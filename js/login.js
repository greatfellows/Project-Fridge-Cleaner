'use strict';

var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', submitLogin);
function submitLogin(){

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;


  console.log(username);
  console.log(password);

  handleLogin(username, password);
}

var loginButton = document.getElementById('loginbutton');
loginButton.addEventListener('click', loginNow);
function loginNow(){
  
}


