
'use strict';

// ------------ VARIABLES (DATA) ------------

// hardcode recipe objects
var recipe01 = { name: 'Banana Cake', ingredientsOnHand: 0, image: 'http://something.com', ingredients: ['shortening', 'sugar', 'eggs', 'butter', 'sour milk', 'soda water', 'flour', 'baking powder', 'chopped nuts'] };
var recipe02 = { name: 'Blueberry Coffee Cake', ingredientsOnHand: 0, image: 'http://something.com', ingredients: ['cream cheese', 'sugar', 'eggs', 'lemon juice', 'vanilla', 'butter', 'flour', 'baking powder', 'milk', 'blueberries'] };
var recipe03 = { name: 'Chocolate Cake', ingredientsOnHand: 0, image: 'http://something.com', ingredients: ['margarine', 'sugar', 'eggs', 'cocoa', 'salt', 'milk', 'baking soda', 'flour', 'cloves', 'vanilla'] };
var recipe04 = { name: 'Chocolate Mayonaise Cake', ingredientsOnHand: 0, image: 'http://something.com', ingredients: ['flour', 'sugar', 'cocoa', 'baking powder', 'baking soda', 'mayonnaise', 'water', 'vanilla'] };
var recipe05 = { name: 'Crazy Cake', ingredientsOnHand: 0, image: 'http://something.com', ingredients: ['lemon cake mix', 'water', 'lemon jello', 'vegetable oil', 'eggs', 'sugar', 'lemon juice'] };
var recipe06 = { name: 'Fresh Apple Cake', ingredientsOnHand: 0, image: 'http://something.com', ingredients: ['diced apples', 'sugar', 'chopped nuts', 'eggs', 'vanilla', 'flour', 'baking powder', 'cinnamon', 'vegetable oil', 'baking soda', 'salt'] };
var recipe07 = { name: 'Fresh Pear Cake', ingredientsOnHand: 0, image: 'http://something.com', ingredients: ['butter', 'flour', 'pears', 'eggs', 'sugar', 'milk', 'salt', 'powdered sugar'] };
var recipe08 = { name: 'Graham Cracker Cake', ingredientsOnHand: 0, image: 'http://something.com', ingredients: ['butter', 'sugar', 'sour milk', 'graham crackers', 'baking soda', 'chopped nuts'] };
var recipe09 = { name: 'Hot Water Chocolate Cake', ingredientsOnHand: 0, image: 'http://something.com', ingredients: ['margarine', 'sugar', 'eggs', 'cocoa', 'salt', 'sour milk', 'baking soda', 'flour', 'cloves', 'vanilla'] };
var recipe10 = { name: 'Hungry Bear Cheese Cake', ingredientsOnHand: 0, image: 'http://something.com', ingredients: ['wheat germ', 'graham crackers', 'sugar', 'cinnamon', 'butter', 'sour cream', 'sugar', 'vanilla', 'salt', 'cream cheese', 'cottage cheese', 'eggs', 'lemon juice', 'vanilla', 'sugar', 'flour', 'flour', 'salt'] };

// recipeBook array of recipes
var recipeBook = [recipe01, recipe02, recipe03, recipe04, recipe05, recipe06, recipe07, recipe08, recipe09, recipe10];

// all unique ingredients list
var allIngredients = [];

// ------------ FUNCTIONS ------------

// get all unique ingredients from all recipes and put them in allIngredients array
function buildIngredientsArray() {
	for (var i = 0; i < recipeBook.length; i++) {
		for (var j = 0; j < recipeBook[i].ingredients.length; j++) {
			if (!allIngredients.includes(recipeBook[i].ingredients[j])) {
				allIngredients.push(recipeBook[i].ingredients[j]);
			}
		}
	}
}

// render ingredients table
function renderIngredientsTable() {
	for (var i = 0; i < allIngredients.length; i++) {
		var buttonElement = document.createElement('input');
		buttonElement.type = 'button';
		buttonElement.value = allIngredients[i];
		buttonElement.click('onIngredientSelect()');
		var ingredientsDiv = document.getElementById('ingredients');
		ingredientsDiv.appendChild(buttonElement);
	}
}

// handle a ingredient button being selected
function onIngredientSelect() {
	console.log('button pushed');
}

// render recipes
function renderRecipes() {
	var recipeContainer = document.getElementById('recipes');
	for (var i = 0; i < recipeBook.length; i++) {
		//create recipes element
		var recipeDiv = document.createElement('div');
		var imageDiv = document.createElement('div');
		var imageElement = document.createElement('img');
		var h3Element = document.createElement('h3');
		var ulElement = document.createElement('ul');
		// create li elements for each ingredient in the recipe
		for (var j = 0; j < recipeBook[i].ingredients.length; j++) {
			var liElement = document.createElement('li');
			liElement.textContent = recipeBook[i].ingredients[j];
			ulElement.appendChild(liElement);
		}
		// add element content
		h3Element.textContent = recipeBook[i].name;
		imageElement.src = 'https://via.placeholder.com/150';
		//append elements
		imageDiv.appendChild(imageElement);
		recipeDiv.appendChild(imageDiv);
		recipeDiv.appendChild(h3Element);
		recipeDiv.appendChild(ulElement);
		recipeContainer.appendChild(recipeDiv);

	}

}




// ------------ CALLS ------------
buildIngredientsArray();
renderIngredientsTable();
renderRecipes();



