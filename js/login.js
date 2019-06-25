'use strict';


var loginButton = document.getElementById('loginbutton');
loginButton.addEventListener('click', popupForm);
function popupForm(event){
  console.log(event);
  var popupForm = document.getElementById('formInvis');

  popupForm.id = 'formVis';

}


var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', submitLogin);
function submitLogin(){

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;


  console.log(username);
  console.log(password);

  handleLogin(username, password);
  var popDown = document.getElementById('formVis');
  popDown.id = 'formInvis';
 
}



