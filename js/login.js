'use strict';

// add event listener to login button - triggers popup login form
var loginButton = document.getElementById('loginbutton');
loginButton.addEventListener('click', popupForm);

// change id of login form to fromVis to style visible
function popupForm() {
  var popupForm = document.getElementById('formInvis');
  popupForm.id = 'formVis';
}

// add evnet listener to login form submit button - triggers submitLogin call
var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', submitLogin);

// get username and password from login form and pass as arguments to function handleLogin() on app.js
function submitLogin() {

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  //check if password entered matches password stored
  // if user already exists
  if (allUsersData[username]) {

    // if user password matches - call login
    if (password === allUsersData[username].password) {
      handleLogin(username, password);

      //if user password doesn't match alert message
    } else {
      alert('Sorry, the password you entered does not match password for user ' + username);
    }

    // if user doesn't exist - call login
  } else {
    handleLogin(username, password);
  }


  // make login form invisible again
  var popDown = document.getElementById('formVis');
  popDown.id = 'formInvis';
}



