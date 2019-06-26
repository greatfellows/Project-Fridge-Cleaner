'use strict';

var renderFavRecipes = function(){
//pull fav recipe array and append it to user page
  var favRecContainer = document.getElementById('userRecipes');

  for (var i = 0; i < recipeBook.length; i++) {
    if(favoriteRecipes.includes(recipeBook[i].name)){
      console.log('found it');

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
      imageElement.src = 'https://via.placeholder.com/150';
      liElement.textContent =  recipeBook[i].ingredients[j];
      favRecDiv.appendChild(imageElement);
      favRecDiv.appendChild(title);
      favRecDiv.appendChild(ulElement);
      favRecContainer.appendChild(favRecDiv);
    }
  }

};
renderFavRecipes();
