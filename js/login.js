'use strict';

// add event listener to login button - triggers popup login form
var loginButton = document.getElementById('loginbutton');
loginButton.addEventListener('click', loginLogoutButtonClicked);

// add evnet listener to login form submit button - triggers submitLogin call
var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', submitLogin);

// change id of login form to fromVis to style visible
function loginLogoutButtonClicked() {
  // if user is clicking sign in
  if (loginButton.value === "Sign In") {
    var popupForm = document.getElementById('formInvis');
    popupForm.id = 'formVis';
  }
  // if user is clicking sign out
  if (loginButton.value === "Sign Out") {
    handleLogout();
  }

}


// get username and password from login form and pass as arguments to function handleLogin() on app.js
function submitLogin() {

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // check if user filled out both test fields
  var userEntryOk = true;
  if (username.length === 0 || password.length === 0) {
    alert('Sorry, User Name and Password need to both be filled out');
    userEntryOk = false;
  }

  if (userEntryOk) {
    //check if password entered matches password stored
    // if user already exists and user filled out User Name field
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
  }

  // make login form invisible again
  var popDown = document.getElementById('formVis');
  popDown.id = 'formInvis';
}


