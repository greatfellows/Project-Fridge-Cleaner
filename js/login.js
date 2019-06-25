'use strict';



var loginButton = document.getElementById('submit');
loginButton.addEventListener('click', submitLogin);
function submitLogin(){
  event.preventDefault();
  //add username and password to object User/local storage;
  localStorage.setItem('username', 'password');
  console.log(username.value);
}
//expected string arguments username and password
