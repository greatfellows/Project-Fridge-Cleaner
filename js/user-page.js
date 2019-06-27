'use strict';
//welcome message for user
var userName = allUsersData[currentUserName].userName;
var welcome = document.getElementById('welcome');

welcome.textContent = 'Welcome back, ' + userName;

//render users selected ingredients
var favIngredientsDiv = document.getElementById('userIngredients');
var renderUserIngredients = function () {
  var userIngredients = allUsersData[currentUserName].userIngredients;
  var keys = Object.keys(userIngredients);
  var ulElement = document.createElement('ul');
  for (var i = 0; i < keys.length; i++) {
    var liElement = document.createElement('li');
    liElement.textContent = keys[i];
    ulElement.appendChild(liElement);
  }
  favIngredientsDiv.appendChild(ulElement);
};
//render users favorited recipes
var renderFavRecipes = function () {

  var favRecContainer = document.getElementById('userRecipes');

  for (var i = 0; i < recipeBook.length; i++) {
    if (allUsersData[currentUserName].userRecipes.includes(recipeBook[i].name)) {


      var favRecDiv = document.createElement('div');
      var imageElement = document.createElement('img');
      var title = document.createElement('h3');
      var ulElement = document.createElement('ul');

      for (var j = 0; j < recipeBook[i].ingredients.length; j++) {

        var liElement = document.createElement('li');
        liElement.textContent = recipeBook[i].ingredients[j];
        ulElement.appendChild(liElement);
      }
      title.textContent = recipeBook[i].name;
      imageElement.src = recipeBook[i].image;
      favRecDiv.appendChild(title);
      favRecDiv.appendChild(imageElement);
      favRecDiv.appendChild(ulElement);
      favRecContainer.appendChild(favRecDiv);
    }
  }
};

renderFavRecipes();
renderUserIngredients();
