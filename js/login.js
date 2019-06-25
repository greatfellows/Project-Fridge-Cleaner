'use strict';

if(userList.userName.password === password) {
  handleLogin( username, password);
}
else {
  alert('invalid user');
}

document.getElementById('submit').addEventListener('click', handleLogin);

//expected string arguments username and password
