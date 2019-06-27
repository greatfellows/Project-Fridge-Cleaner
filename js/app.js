'use strict';

// ------------ VARIABLES (DATA) ------------

// all unique ingredients list
var allIngredients = [];

// all currently user selected ingredients
var selectedIngredients = {};


// ------------ FUNCTIONS (User related) ------------

function User(userName, password, userIngredients, userRecipes) {
  this.userName = userName;
  this.password = password;
  this.userIngredients = userIngredients;
  this.userRecipes = userRecipes;
  allUsersData[userName] = this;
}


function handleLogin(userName, password) {

  // change login button to logout button
  var loginButton = document.getElementById('loginbutton');
  loginButton.value = 'Sign Out';

  // render current user name to top of screen
  loginButton.parentNode.firstElementChild.textContent = `Welcome, ${userName}`;

  // check if user already exists login
  if (allUsersData[userName]) {
    currentUserName = userName;
    loadCurrentUsersData();
    renderAll();

    // if not create
  } else {
    new User(userName, password, selectedIngredients, favoriteRecipes);
    currentUserName = userName;
  }

  saveToLocalStorage();
}

function handleLogout() {
  // change logout button to login button
  var loginButton = document.getElementById('loginbutton');
  loginButton.value = 'Sign In';

  // clear current username on top of screen
  loginButton.parentNode.firstElementChild.textContent = 'Click to login!';

  // save to local storage
  saveToLocalStorage();

  // unload current user data
  currentUserName = '';
  favoriteRecipes = [];
  selectedIngredients = {};
  clearIngredientsOnHand();

  // save to Local and re-render
  saveToLocalStorage();
  renderAll();
}


function saveToLocalStorage() {

  // update allUserData current user information
  if (currentUserName) {
    allUsersData[currentUserName].userIngredients = selectedIngredients;
    allUsersData[currentUserName].userRecipes = favoriteRecipes;

    // stingify and save all user data to storage
    var dataToStore = JSON.stringify(allUsersData);
    localStorage.setItem(allUsersKey, dataToStore);
  }
  // save current username to storage
  localStorage.setItem(userNameKey, currentUserName);
}

// ------------ FUNCTIONS ------------


// get all unique ingredients from all recipes and put them in allIngredients array
function buildIngredientArrays() {
  for (var i = 0; i < recipeBook.length; i++) {
    for (var j = 0; j < recipeBook[i].ingredients.length; j++) {
      if (!allIngredients.includes(recipeBook[i].ingredients[j])) {
        allIngredients.push(recipeBook[i].ingredients[j]);
      }
    }
  }
  sortIngredientsAlphabetically();
}

// render ingredients table
function renderIngredientsTable() {
  // TODO sort ingredients alphabetically
  // sortIngredientsAlphabetically();
  //get ingredients section
  var ingredientsDiv = document.getElementById('ingredients');
  //clear ingredients section
  ingredientsDiv.innerHTML = '';
  // go through allIngredients list and create a button for it
  for (var i = 0; i < allIngredients.length; i++) {
    var buttonElement = document.createElement('input');
    buttonElement.type = 'button';
    buttonElement.value = allIngredients[i];
    //if current ingredient is in selected ingredients list set class to buttonON
    if (selectedIngredients[allIngredients[i]] === 1) {
      buttonElement.className = 'buttonOn';
    } else {
      buttonElement.className = 'buttonOff';
    }
    buttonElement.addEventListener('click', onIngredientSelect);
    // add button to ingredient section
    ingredientsDiv.appendChild(buttonElement);
  }
}

function sortRecipeBookByIngredients() {
  recipeBook.sort(function (a, b) {
    return b.ingredientsOnHand - a.ingredientsOnHand;
  });
}

// TODO make function
function sortIngredientsAlphabetically() {
  allIngredients.sort(function (a, b) {
    var nameA = a.toUpperCase();
    var nameB = b.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
}

// render recipes
function renderRecipes() {

  // sort recipeBook by # of ingredients on hand
  sortRecipeBookByIngredients();
  // get recipe container DIV
  var recipeContainer = document.getElementById('recipes');
  // clear recipe container DIV
  recipeContainer.innerHTML = '';

  for (var i = 0; i < recipeBook.length; i++) {
    //create recipes element
    var recipeDiv = document.createElement('div');
    var imageDiv = document.createElement('div');
    var imageElement = document.createElement('img');
    var h3Element = document.createElement('h3');
    var ulElement = document.createElement('ul');
    var recipeTitleDiv = document.createElement('div');
    var favoriteDiv = document.createElement('div');
    var favoriteImg = document.createElement('img');


    // create li elements for each ingredient in the recipe
    for (var j = 0; j < recipeBook[i].ingredients.length; j++) {

      var liElement = document.createElement('li');
      liElement.textContent = recipeBook[i].ingredients[j];

      if (selectedIngredients[recipeBook[i].ingredients[j]]) {
        liElement.className = 'selectedIngredient';
      }

      ulElement.appendChild(liElement);
    }

    // add element content
    h3Element.textContent = `${recipeBook[i].name} ( ${recipeBook[i].ingredientsOnHand} )`;
    imageElement.src = recipeBook[i].image;

    //if recipe is already in favorite recipes, assign .liked
    if (favoriteRecipes.includes(recipeBook[i].name)) {
      favoriteImg.className = 'liked';
      favoriteImg.src = './imgs/heart-after.png';
    }
    else {
      favoriteImg.className = 'unliked';
      favoriteImg.src = './imgs/heart-before.jpg';
    }

    favoriteDiv.addEventListener('click', onFavoriteButtonSelected);
    favoriteDiv.title = recipeBook[i].name;

    //append elements
    imageDiv.appendChild(imageElement);
    favoriteDiv.appendChild(favoriteImg);


    recipeTitleDiv.appendChild(h3Element);
    recipeTitleDiv.appendChild(favoriteDiv);

    recipeDiv.appendChild(imageDiv);
    recipeDiv.appendChild(recipeTitleDiv);
    recipeDiv.appendChild(ulElement);
    recipeContainer.appendChild(recipeDiv);
  }
}


// handle a ingredient button being selected
function onIngredientSelect(event) {
  if (event.target.className === 'buttonOff') {
    event.target.className = 'buttonOn';
    selectedIngredients[event.target.value] = 1;
    changeIngredientsOnHand(event.target.value, 1);
  } else {
    event.target.className = 'buttonOff';
    selectedIngredients[event.target.value] = 0;
    changeIngredientsOnHand(event.target.value, -1);
  }
  renderRecipes();
  saveToLocalStorage();
}


//create a function that takes an ingredient that's selected and take -1 or +1 to change ingredients on hand
function changeIngredientsOnHand(ingredient, positive1Negative1) {
  for (var i = 0; i < recipeBook.length; i++) {
    for (var j = 0; j < recipeBook[i].ingredients.length; j++) {
      if (recipeBook[i].ingredients[j] === ingredient) {
        recipeBook[i].ingredientsOnHand += positive1Negative1;
      }
    }
  }
}

function clearIngredientsOnHand() {
  for (var i = 0; i < recipeBook.length; i++) {
    recipeBook[i].ingredientsOnHand = 0;
  }

}

function onFavoriteButtonSelected(event) {
  // TODO add favorited recipe to favoriteRecipes
  if (event.target.className === 'unliked') {
    event.target.className = 'liked';
    event.target.src = './imgs/heart-after.png';
    //add favorited recipe to favorite recipes
    favoriteRecipes.push(event.target.parentNode.title);

    //save data function
  } else {
    event.target.className = 'unliked';
    event.target.src = './imgs/heart-before.jpg';
    for (var i = 0; i < favoriteRecipes.length; i++) {
      if (event.target.parentNode.title === favoriteRecipes[i]) {
        favoriteRecipes.splice(i, 1);
      }
    }
  }
  saveToLocalStorage();
}

function loadCurrentUsersData() {
  if (currentUserName) {
    selectedIngredients = allUsersData[currentUserName].userIngredients;
    // clear all ingredients on hand
    clearIngredientsOnHand();
    // loop through recipe book and adjust ingredients on hand up by 1 for all selected ingredients
    var keys = Object.keys(selectedIngredients);
    for (var i = 0; i < keys.length; i++) {
      if (selectedIngredients[keys[i]] === 1) {
        changeIngredientsOnHand(keys[i], 1);
      }
    }
    favoriteRecipes = allUsersData[currentUserName].userRecipes;
  }
}

function onPageLoad() {
  // create array of unique ingredients
  buildIngredientArrays();
  // retrieve local storage
  retrieveLocalStorage();

  // if there is a current user log in as current user
  if (currentUserName) {
    handleLogin(currentUserName);
  }
  //set local current user data to retrieved data
  loadCurrentUsersData();
  renderAll();
}

function renderAll() {
  renderIngredientsTable();
  renderRecipes();
}




// ------------ CALLS ------------

onPageLoad();




