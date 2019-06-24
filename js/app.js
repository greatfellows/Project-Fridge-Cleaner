
'use strict';
var recipeBook = [recipe01, recipe02, recipe03, recipe04, recipe05, recipe06, recipe07, recipe08, recipe09, recipe10];
var recipe01 = { name: 'Banana Cake', ingredientsOnHand: 0, image: 'http://something.com', ingredients: ['shortening', 'sugar', 'eggs', 'butter', 'sour milk', 'soda water', 'flour', 'baking powder', 'chopped nuts'] };
var recipe02 = { name: 'Blueberry Coffee Cake', ingredientsOnHand: 0, image: 'http://something.com', ingredients: ['cream cheese', 'sugar', 'eggs', 'lemon juice', 'vanilla', 'butter', 'flour', 'baking powder', 'milk', 'blueberries'] };
var recipe03 = { name: 'Chocolate Cake', ingredientsOnHand: 0, image: 'http://something.com', ingredients: ['margarine', 'sugar', 'eggs', 'cocoa', 'salt', 'milk', 'baking soda', 'flour', 'cloves', 'vanilla'] };
var recipe04 = { name: 'Chocolate Mayonaise Cake', ingredientsOnHand: 0, image: 'http://something.com', ingredients: ['flour', 'sugar', 'cocoa', 'baking powder', 'baking soda', 'mayonnaise', 'water', 'vanilla'] };
var recipe05 = { name: 'Crazy Cake', ingredientsOnHand: 0, image: 'http://something.com', ingredients: ['lemon cake mix', 'water', 'lemon jello', 'vegetable oil', 'eggs', 'sugar', 'lemon juice'] };
var recipe06 = { name: 'Fresh Apple Cake', ingredientsOnHand: 0, image: 'http://something.com', ingredients: ['diced apples', 'sugar', 'chopped nuts', 'eggs', 'vanilla', 'flour', 'baking powder', 'cinnamon', 'vegetable oil', 'baking soda', 'salt'] };
var recipe07 = { name: 'Fresh Pear Cake', ingredientsOnHand: 0, image: 'http://something.com', ingredients: ['butter', 'flour', 'pears', 'eggs', 'sugar', 'milk', 'salt', 'powdered sugar'] };
var recipe08 = { name: 'Graham Cracker Cake', ingredientsOnHand: 0, image: 'http://something.com', ingredients: ['butter', 'sugar', 'sour milk', 'graham crackers, crushed', 'baking soda', 'chopped nuts'] };
var recipe09 = { name: 'Hot Water Chocolate Cake', ingredientsOnHand: 0, image: 'http://something.com', ingredients: ['margarine', 'sugar', 'eggs', 'cocoa', 'salt', 'sour milk', 'baking soda', 'flour', 'cloves', 'vanilla'] };
var recipe10 = { name: 'Hungry Bear Cheese Cake', ingredientsOnHand: 0, image: 'http://something.com', ingredients: ['wheat germ, optional', 'graham cracker crumbs', 'sugar', 'cinnamon', 'melted butter', 'sour cream', 'sugar', 'vanilla', 'salt', 'cream cheese', 'cottage cheese', 'eggs', 'lemon juice', 'vanilla', 'sugar', 'flour', 'flour', 'salt'] };


var allIngredients = [];
function buildIngredientsArray() {
  for (var i = 0; i < recipeBook.length; i++) {
    for (var j = 0; j < recipeBook[i].ingredients.length; j++) {
      if (!allIngredients.includes(recipeBook[i].ingredients[j])) {
        allIngredients.push(recipeBook[i].ingredients[j]);
      }
    }
  }
}

buildIngredientsArray();
console.log(allIngredients);