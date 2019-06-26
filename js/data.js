'use strict';

// ------------ VARIABLES (DATA) ------------

// recipeBook array of recipes

var recipeBook = [
  { name: "Banana Cake", ingredientsOnHand: 0, image: "https://sugarspunrun.com/wp-content/uploads/2018/03/Banana-Cake-Recipe-1-of-1-7.jpg", category: "Cakes", ingredients: ["shortening", "sugar", "eggs", "butter", "milk", "soda water", "flour", "baking powder", "nuts"] },
  { name: "Blueberry Coffee Cake", ingredientsOnHand: 0, image: "https://barefeetinthekitchen.com/wp-content/uploads/2015/08/blueberrycoffeecake-edited1-500x427.jpg", category: "Cakes", ingredients: ["cream cheese", "sugar", "eggs", "lemon juice", "vanilla", "butter", "flour", "baking powder", "milk", "blueberries"] },
  { name: "Chocolate Cake", ingredientsOnHand: 0, image: "https://sugarspunrun.com/wp-content/uploads/2018/09/Best-Chocolate-Cake-Recipe-1-of-1-2.jpg", category: "Cakes", ingredients: ["butter", "sugar", "eggs", "cocoa", "salt", "milk", "baking soda", "flour", "cloves", "vanilla"] },
  { name: "Chocolate Mayonaise Cake", ingredientsOnHand: 0, image: "https://www.tasteofhome.com/wp-content/uploads/2017/10/exps172_MBM1450751D45D.jpg", category: "Cakes", ingredients: ["flour", "sugar", "cocoa", "baking powder", "baking soda", "mayonnaise", "water", "vanilla"] },
  { name: "Crazy Cake", ingredientsOnHand: 0, image: "http://cookdiary.net/wp-content/uploads/images/Crazy-Cake.jpg", category: "Cakes", ingredients: ["lemon cake mix", "water", "lemon jello", "vegetable oil", "eggs", "sugar", "lemon juice"] },
  { name: "Fresh Apple Cake", ingredientsOnHand: 0, image: "https://www.simplyrecipes.com/wp-content/uploads/2018/08/fresh-apple-bundt-cake-horiz-a-1600.jpg", category: "Cakes", ingredients: ["apples", "sugar", "nuts", "eggs", "vanilla", "flour", "baking powder", "cinnamon", "vegetable oil", "baking soda", "salt"] },
  { name: "Fresh Pear Cake", ingredientsOnHand: 0, image: "http://www.seasonsandsuppers.ca/wp-content/uploads/2015/11/pear-almond690-4.jpg", category: "Cakes", ingredients: ["butter", "flour", "pears", "eggs", "sugar", "milk", "salt", "sugar"] },
  { name: "Graham Crackers Cake", ingredientsOnHand: 0, image: "https://amandascookin.com/wp-content/uploads/2017/03/Strawberry-Icebox-Cake-Square-1.jpg", category: "Cakes", ingredients: ["butter", "sugar", "milk", "graham crackers", "baking soda", "nuts"] },
  { name: "Hot Water Chocolate Cake", ingredientsOnHand: 0, image: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/easy_chocolate_cake_31070_16x9.jpg", category: "Cakes", ingredients: ["butter", "sugar", "eggs", "cocoa", "salt", "milk", "baking soda", "flour", "cloves", "vanilla"] },
  { name: "Hungry Bear Cheese Cake", ingredientsOnHand: 0, image: "http://www.disneyfoodblog.com/wp-content/uploads/2015/10/DSC06630.jpg", category: "Cakes", ingredients: ["wheat germ", "graham crackers", "sugar", "cinnamon", "butter", "sour cream", "sugar", "vanilla", "salt", "cream cheese", "cottage cheese", "eggs", "lemon juice", "vanilla", "sugar", "flour", "flour", "salt"] },
  { name: "Lemon Poppy Cake", ingredientsOnHand: 0, image: "https://ohsweetbasil.com/wp-content/uploads/Lemon-Poppy-Seed-Cake-with-Cream-Cheese-Frosting-4-720x720.jpg", category: "Cakes", ingredients: ["lemon cake mix", "eggs", "pudding", "water", "oil", "poppy seeds"] },
  { name: "Light Old Fashioned Fruit Cake", ingredientsOnHand: 0, image: "https://www.rockrecipes.com/wp-content/uploads/2013/12/Old-English-Fruitcake-3.jpg", category: "Cakes", ingredients: ["flour", "baking powder", "salt", "cinnamon", "nutmeg", "pecans", "pineapple", "cherries", "raisins", "butter", "sugar", "eggs", "brandy"] },
  { name: "My Best Gingerbread", ingredientsOnHand: 0, image: "https://sugarspunrun.com/wp-content/uploads/2017/12/Gingerbread-Cookie-Recipe-1-of-1-8.jpg", category: "Cakes", ingredients: ["sugar", "butter", "eggs", "molasses", "flour", "soda", "cinnamon", "ginger", "cloves", "salt", "water"] },
  { name: "Oatmeal Cake", ingredientsOnHand: 0, image: "https://s23991.pcdn.co/wp-content/uploads/oatmeal-cake.jpg", category: "Cakes", ingredients: ["oatmeal", "water", "brown sugar", "sugar", "butter", "eggs", "flour", "salt", "soda", "nutmeg", "cinnamon", "nuts", "milk", "butter", "coconut", "peanuts"] },
  { name: "Orange Angel Food Cake", ingredientsOnHand: 0, image: "https://whatagirleats.com/wp-content/uploads/2014/04/IMG_4352.jpg", category: "Cakes", ingredients: ["cake mix", "orange juice", "whipped topping", "yogurt"] },
  { name: "Orange-Poppy Seed Pound Cake", ingredientsOnHand: 0, image: "https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18143538/fc61re047-01-main.jpg", category: "Cakes", ingredients: ["butter", "sugar", "vanilla", "orange", "flour", "orange juice", "eggs", "baking powder", "baking soda", "salt", "poppy seeds", "sugar", "orange juice"] },
  { name: "Pineapple Cake", ingredientsOnHand: 0, image: "https://www.wilton.com/dw/image/v2/AAWA_PRD/on/demandware.static/-/Sites-wilton-project-master/default/dw705732a6/images/project/WLPROJ-8969/PiBrStHa_39394%201.jpg?sw=502&sh=502&sm=fit", category: "Cakes", ingredients: ["pineapple", "cake mix", "butter", "almonds"] },
  { name: "Pineapple-Carrot Cake", ingredientsOnHand: 0, image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/1/10/0/IG1001_Carrot_and_Pineapple_Cake.jpg.rend.hgtvcom.826.620.suffix/1382538659437.jpeg", category: "Cakes", ingredients: ["oil", "sugar", "eggs", "flour", "soda", "salt", "cinnamon", "vanilla", "pineapple", "carrots", "walnuts", "cream cheese", "butter", "sugar", "vanilla", "water"] },
  { name: "Potatoe Cake", ingredientsOnHand: 0, image: "https://bellyfull.net/wp-content/uploads/2018/12/Loaded-Mashed-Potato-Cakes-blog-5-500x500.jpg", category: "Cakes", ingredients: ["sugar", "shortening", "milk", "potatoes", "eggs", "flour", "baking powder", "cocoa", "walnuts", "vanilla"] },
  { name: "Pumpkin Swirl Cheesecake", ingredientsOnHand: 0, image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2019%2F01%2F07143347%2FR076391.jpg&w=380&c=sc&poi=face&q=85&h=380", category: "Cakes", ingredients: ["vanilla", "butter", "cream cheese", "sugar", "vanilla", "eggs", "pumpkin", "cinnamon", "nutmeg"] },
  { name: "Refrigerator Cheesecake", ingredientsOnHand: 0, image: "https://sugarspunrun.com/wp-content/uploads/2018/07/No-Bake-Cheesecake-Recipe-1-of-1-10-500x500.jpg", category: "Cakes", ingredients: ["cornflakes", "butter", "sugar", "gelatin", "water", "eggs", "salt", "milk", "cottage cheese", "lemon", "lemon juice", "cream"] },
  { name: "Sherry Wine Cake", ingredientsOnHand: 0, image: "https://i.pinimg.com/originals/f5/8b/8a/f58b8a1b2e68bdeddc76216631bcefb8.png", category: "Cakes", ingredients: ["cake mix", "vanilla", "eggs", "oil", "sherry", "nutmeg"] },
  { name: "Special Prune Cake", ingredientsOnHand: 0, image: "http://andreasrecipes.com/photos/Cake_prune2.jpg", category: "Cakes", ingredients: ["eggs", "oil", "sugar", "cinnamon", "flour", "salt", "soda", "baking powder", "buttermilk", "vanilla", "prunes", "nuts", "sugar", "buttermilk", "soda water", "corn syrup", "butter", "vanilla"] },
  { name: "Spicy Fruit and Nut Cake", ingredientsOnHand: 0, image: "https://i1.wp.com/www.butterforall.com/wp-content/uploads/2016/12/2-1.png?resize=595%2C397&ssl=1", category: "Cakes", ingredients: [" prunes", "walnuts", "flour", "baking soda", "cinnamon", "nutmeg", "allspice", "salt", "flour", "vegetable oil", "buttermilk", "eggs", "sugar", "buttermilk", "soda", "butter"] },
  { name: "Strawberry Spice Loaf", ingredientsOnHand: 0, image: "https://www.tasteandtellblog.com/wp-content/uploads/2011/05/Best-Strawberry-Bread-tasteandtellblog.com-1.jpg", category: "Cakes", ingredients: ["berries", "flour", "sugar", "salt", "cinnamon", "nutmeg", "soda water", "oil", "eggs"] },
  { name: "Three Layer Chocolate Mayonnaise Cake", ingredientsOnHand: 0, image: "https://assets.bonappetit.com/photos/57b0094053e63daf11a4e8b0/master/pass/chocolate-mayonnaise-cake-646.jpg", category: "Cakes", ingredients: ["flour", "sugar", "cocoa", "baking powder", "baking soda", "mayonnaise", "water", "vanilla"] },
  { name: "Two Layer Chocolate Mayonnaise Cake", ingredientsOnHand: 0, image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/11/0/FNK_Chocolate-Mayonnaise-Cake-H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1494520427804.jpeg", category: "Cakes", ingredients: ["flour", "sugar", "cocoa", "baking powder", "baking soda", "mayonnaise", "water", "vanilla"] },
  { name: "Upside Down Cake", ingredientsOnHand: 0, image: "https://www.tasteofhome.com/wp-content/uploads/2018/05/Classic-Pineapple-Upside-Down-Cake_exps48510_THCB1914178A12_10_5bC_RMS-1-696x696.jpg", category: "Cakes", ingredients: ["butter", "brown sugar", "eggs", "sugar", "fruit juice", "vanilla", "sifted flour", "baking powder", "salt"] },
  { name: "Blue Chip Cookies", ingredientsOnHand: 0, image: "https://media-cdn.tripadvisor.com/media/photo-s/0b/a0/54/3b/cookie-monster.jpg", category: "Cookies", ingredients: ["butter", "sugar", "brown sugar", "vanilla", "eggs", "flour", "baking soda", "salt", "chocolate chips", "walnuts"] },
  { name: "Bourbon Balls", ingredientsOnHand: 0, image: "https://spicysouthernkitchen.com/wp-content/uploads/Bourbon-Balls-10.jpg", category: "Cookies", ingredients: ["chocolate chips", "corn syrup", "bourbon", "vanilla", "sugar", "walnuts"] },
  { name: "Chocolate Crisp Bran Cookies", ingredientsOnHand: 0, image: "https://panlasangpinoy.com/wp-content/uploads/2016/11/Oat-Bran-Chocolate-Chip-Cookie-Recipe-500x375.jpg", category: "Cookies", ingredients: ["flour", "baking soda", "salt", "butter", "sugar", "eggs", "vanilla", "cereal", "chocolate chips"] },
  { name: "Chocolate Peanut Brunch Bars", ingredientsOnHand: 0, image: "https://www.wellplated.com/wp-content/uploads/2019/01/Homemade-Chocolate-Peanut-Butter-Protein-Bars-600x829.jpg", category: "Cookies", ingredients: ["flour", "brown sugar", "butter", "peanut butter", "salt", "eggs", "vanilla", "chocolate chips", "peanut butter", "cereal"] },
  { name: "Chocolate Trio Squares", ingredientsOnHand: 0, image: "https://www.johnandkiras.com/images/large/peanut_butter_chocolate_trio-beauty-1.jpg", category: "Cookies", ingredients: ["butter", "flour", "salt", "eggs", "brown sugar", "coconut", "vanilla", "salt", "flour", "chips", "corn syrup", "water", "nuts"] },
  { name: "Christmas Logs", ingredientsOnHand: 0, image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--444633_12.jpg?itok=iXDevFBw", category: "Cookies", ingredients: ["walnuts", "dates", "coconut", "brown sugar", "eggs"] },
  { name: "Christmas Snowballs", ingredientsOnHand: 0, image: "https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/2018_Snowball-Cookies_5823_600x600.jpg?ext=.jpg", category: "Cookies", ingredients: ["butter", "vanilla", "water", "salt", "sugar", "flour", "chocolate chips", "walnuts", "sugar"] },
  { name: "Crisp Oatmeal Fruit Strips", ingredientsOnHand: 0, image: "https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_-_900x675/public/crisp-oatmeal-fruit-strips-su.jpg", category: "Cookies", ingredients: ["butter", "sugar", "eggs", "flour", "soda", "raisins", "rolled oats"] },
  { name: "Frosted Delights", ingredientsOnHand: 0, image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Frosted-Chocolate-Delights_EXPS_TOHAR19_11185_E08_07_7b-696x696.jpg", category: "Cookies", ingredients: ["sifted flour", "salt", "baking soda", "shortening", "sugar", "eggs", "vanilla", "brown sugar", "eggs", "nuts"] },
  { name: "Ginger Snap Bars", ingredientsOnHand: 0, image: "https://www.seriouseats.com/recipes/images/2011/12/20111213-cookie-swap-23-spicy-choc-gingersnap-primary.jpg", category: "Cookies", ingredients: ["brown sugar", "eggs", "butter", "molasses", "vanilla", "flour", "soda", "salt", "cinnamon", "ginger", "cloves", "milk", "nuts"] },
  { name: " Ginger Snaps", ingredientsOnHand: 0, image: "https://www.tasteofhome.com/wp-content/uploads/2018/05/Triple-Ginger-Gingersnaps_EXPS_HCCBZ18_136548_B04_12__2b-696x696.jpg", category: "Cookies", ingredients: ["shortening", "brown sugar", "eggs", "molasses", "ginger", "cinnamon", "cloves", "soda", "flour"] },
  { name: "Honey Graham Crackers", ingredientsOnHand: 0, image: "https://cdn.shopify.com/s/files/1/0079/1972/products/grahams_stacked_web_600x.jpg?v=1544829096", category: "Cookies", ingredients: ["flour", "whole wheat flour", "brown sugar", "shortening", "cinnamon", "honey", "oil", "water", "salt", "baking soda"] },
  { name: "Jello Pastel Cookies", ingredientsOnHand: 0, image: "https://i.pinimg.com/originals/4b/83/b2/4b83b2812c755628aea999ed985cc15a.jpg", category: "Cookies", ingredients: ["butter", "sugar", "jello", "vanilla", "flour", "baking powder", "salt"] },
  { name: "Lemon Squares", ingredientsOnHand: 0, image: "https://www.rockrecipes.com/wp-content/uploads/2011/03/Super-Easy-Lemon-Bars-close-up-shot.jpg", category: "Cookies", ingredients: ["flour", "butter", "sugar", "sugar", "baking powder", "salt", "lemon peel", "lemon juice"] },
  { name: "Minties", ingredientsOnHand: 0, image: "https://skinnyms.com/wp-content/uploads/2015/02/DIY-Doggie-Breath-Mints-Recipe-750x500.jpg", category: "Cookies", ingredients: ["eggs", "oil", "sugar", "mint jelly", "flour", "baking powder", "salt"] },
  { name: "Oatmeal Cookies", ingredientsOnHand: 0, image: "http://www.completelydelicious.com/wp-content/uploads/2016/09/oatmeal-cookies-3.jpg", category: "Cookies", ingredients: ["brown sugar", "shortening", "eggs", "raisin", "soda", "flour", "oats", "salt", "raisins", "cinnamon", "all-spice", "walnuts"] },
  { name: "Oatmeal Fudge Bars", ingredientsOnHand: 0, image: "https://i2.wp.com/dinnersdishesanddesserts.com/wp-content/uploads/2017/02/Fudge-Oatmeal-Bars-2.jpg?resize=533%2C800&ssl=1", category: "Cookies", ingredients: ["shortening", "brown sugar", "eggs", "vanilla", "flour", "baking soda", "salt", "oats", "walnuts", "chocolate chips", "butter", "milk", "salt", "walnuts", "vanilla"] },
  { name: "Peanut Butter Cookies", ingredientsOnHand: 0, image: "https://www.cookingclassy.com/wp-content/uploads/2017/07/peanut-butter-cookies-5-500x500.jpg", category: "Cookies", ingredients: ["sugar", "brown sugar", "butter", "eggs", "peanut butter", "flour", "soda", "salt", "vanilla"] },
  { name: "Pineapple Graham Bars", ingredientsOnHand: 0, image: "https://www.rockrecipes.com/wp-content/uploads/2017/11/Pineapple-Squares-3.jpg", category: "Cookies", ingredients: ["butter", "brown sugar", "eggs ", "flour", "graham crackers", "pineapple", "walnuts"] },
  { name: "Prune Nut Bars", ingredientsOnHand: 0, image: "http://static1.squarespace.com/static/54221bdee4b08f4bdb265c34/55243fc1e4b0077269c55fcc/55fc2811e4b09e343d6de604/1476754635685/?format=1500w", category: "Cookies", ingredients: ["prunes", "butter", "sugar", "flour", "baking powder", "salt", "brown sugar", "eggs", "lemon juice", "vanilla", "walnuts", "coconut", " sugar"] },
  { name: "Pumpkin Oatmeal Cookies", ingredientsOnHand: 0, image: "https://i1.wp.com/www.livewellbakeoften.com/wp-content/uploads/2018/10/Pumpkin-Oatmeal-Cookies-6.jpg?resize=500%2C500&ssl=1", category: "Cookies", ingredients: ["eggs", "sugar", "oil", "oatmeal", "soda", "salt", "nuts", "raisins", "allspice", "ginger", "spice", "cinnamon", "cloves", "nutmeg", "spice", "flour"] },
];
console.log(recipeBook);
// list of current favorite recipes
var favoriteRecipes = [];


// all users data object to push to Local storage
var allUsersData = {};
var allUsersKey = 'allUsersKey';
var userNameKey = 'userNameKey';

// current user UserName
var currentUserName;


// ------------ FUNCTIONS ------------

function retrieveLocalStorage() {

  var dataRetrieved = localStorage.getItem(allUsersKey);
  //  if data exists
  if (dataRetrieved) {
    var dataParsed = JSON.parse(dataRetrieved);
    allUsersData = dataParsed;
  }

  var storedUserName = localStorage.getItem(userNameKey);
  //  if there is a stored current user name log them in
  if (storedUserName) {
    currentUserName = storedUserName;
  }
}

retrieveLocalStorage();
