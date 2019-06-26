'use strict';

// ------------ VARIABLES (DATA) ------------

// recipeBook array of recipes
var recipeBook = [{ name: 'Banana Cake', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['shortening', 'sugar', 'eggs', 'butter', 'sour milk', 'soda water', 'flour', 'baking powder', 'chopped nuts'] },
{ name: 'Blueberry Coffee Cake', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['cream cheese', 'sugar', 'eggs', 'lemon juice', 'vanilla', 'butter', 'flour', 'baking powder', 'milk', 'blueberries'] },
{ name: 'Chocolate Cake', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['margarine', 'sugar', 'eggs', 'cocoa', 'salt', 'milk', 'baking soda', 'flour', 'cloves', 'vanilla'] },
{ name: 'Chocolate Mayonaise Cake', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['flour', 'sugar', 'cocoa', 'baking powder', 'baking soda', 'mayonnaise', 'water', 'vanilla'] },
{ name: 'Crazy Cake', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['lemon cake mix', 'water', 'lemon jello', 'vegetable oil', 'eggs', 'sugar', 'lemon juice'] },
{ name: 'Fresh Apple Cake', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['diced apples', 'sugar', 'chopped nuts', 'eggs', 'vanilla', 'flour', 'baking powder', 'cinnamon', 'vegetable oil', 'baking soda', 'salt'] },
{ name: 'Fresh Pear Cake', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['butter', 'flour', 'pears', 'eggs', 'sugar', 'milk', 'salt', 'powdered sugar'] },
{ name: 'Graham Cracker Cake', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['butter', 'sugar', 'sour milk', 'graham crackers, crushed', 'baking soda', 'chopped nuts'] },
{ name: 'Hot Water Chocolate Cake', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['margarine', 'sugar', 'eggs', 'cocoa', 'salt', 'sour milk', 'baking soda', 'flour', 'cloves', 'vanilla'] },
{ name: 'Hungry Bear Cheese Cake', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['wheat germ, optional', 'graham cracker crumbs', 'sugar', 'cinnamon', 'melted butter', 'sour cream', 'sugar', 'vanilla', 'salt', 'cream cheese', 'cottage cheese', 'eggs', 'lemon juice', 'vanilla', 'sugar', 'flour', 'flour', 'salt'] },
{ name: 'Lemon Poppy Cake', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['lemon cake mix', 'eggs', 'lemon instant pudding', 'water', 'oil', 'poppy seeds'] },
{ name: 'Light Old Fashioned Fruit Cake', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['sifted flour', 'baking powder', 'salt', 'cinnamon', 'nutmeg', 'whole pecans', 'canned pineapple, chopped', 'whole canned cherries', 'golden raisins', 'butter', 'sugar', 'eggs', 'brandy flavoring'] },
{ name: 'My Best Gingerbread', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['sugar', 'butter', 'egg', 'molasses', 'sifted flour', 'soda', 'cinnamon', 'ginger', 'cloves', 'salt', 'hot water'] },
{ name: 'Oatmeal Cake', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['oatmeal', 'boiling water', 'brown sugar', 'white sugar', 'margarine', 'eggs', 'flour', 'salt', 'soda', 'nutmeg', 'cinnamon', 'chopped nuts', 'evaporated milk', 'butter', 'coconut', 'valencia peanuts'] },
{ name: 'Orange Angel Food Cake', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['angel food cake mix', 'frozen orange juice concentrate, thawed', 'frozen light whipped topping, thawed', 'plain low fat yogurt'] },
{ name: 'Orange-Poppy Seed Pound Cake', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['unsalted butter, softened', 'sugar', 'vanilla', 'grated orange peel', 'unsifted cake flour', 'fresh orange juice', 'eggs', 'baking powder', 'baking soda', 'salt', 'poppy seeds', 'powdered sugar', 'fresh orange juice'] },
{ name: 'Pineapple Cake', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['crushed pineapple', 'yellow cake mix', 'butter', 'sliced almonds'] },
{ name: 'Pineapple-Carrot Cake*', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['oil', 'sugar', 'eggs', 'flour', 'soda', 'salt', 'cinnamon', 'vanilla', 'crushed pineapple, drained', 'grated carrots', 'chopped walnuts', 'cream cheese', 'margarine', 'powdered sugar', 'vanilla', 'water'] },
{ name: 'Potatoe Cake', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['sugar', 'shortening', 'milk', 'mashed potatoes', 'eggs, beaten separately', 'flour', 'baking powder', 'cocoa', 'chopped walnuts', 'vanilla'] },
{ name: 'Pumpkin Swirl Cheesecake', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['vanilla wafer crumbs', 'melted margarine', 'lite cream cheese', 'sugar', 'vanilla', 'eggs', 'pumpkin', 'cinnamon', 'nutmeg'] },
{ name: 'Refrigerator Cheesecake', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['cornflakes', 'butter', 'sugar', 'gelatin', 'cold water', 'eggs, separated', 'salt', 'milk', 'cottage cheese', 'grated lemon rind', 'lemon juice', 'heavy cream'] },
{ name: 'Sherry Wine Cake', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['yellow cake mix', 'instant vanilla pudding', 'eggs', 'oil', 'sherry cooking wine', 'nutmeg'] },
{ name: 'Special Prune Cake*', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['eggs', 'oil', 'sugar', 'nutmeg, cinnamon, and allspice', 'flour', 'salt', 'soda', 'baking powder', 'buttermilk', 'vanilla', 'cooked prunes', 'chopped nuts', 'sugar', 'buttermilk', 'soda water', 'white corn syrup', 'butter', 'vanilla'] },
{ name: 'Spicy Fruit and Nut Cake*', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['chopped pitted prunes', 'walnuts', 'flour', 'baking soda', 'cinnamon', 'nutmeg', 'allspice', 'salt', 'flour', 'vegetable oil', 'buttermilk', 'eggs', 'sugar', 'buttermilk', 'soda', 'unsalted butter'] },
{ name: 'Strawberry Spice Loaf', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['berries', 'flour', 'sugar', 'salt', 'cinnamon', 'nutmeg', 'soda water', 'oil', 'eggs'] },
{ name: 'Three Layer Chocolate Mayonnaise Cake', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['flour', 'sugar', 'cocoa', 'baking powder', 'baking soda', 'Best Foods Mayonnaise', 'water', 'vanilla'] },
{ name: 'Two Layer Chocolate Mayonnaise Cake', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['flour', 'sugar', 'cocoa', 'baking powder', 'baking soda', 'Best Foods Mayonnaise', 'water', 'vanilla'] },
{ name: 'Upside Down Cake', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cakes', ingredients: ['butter', 'brown sugar', 'eggs', 'sugar', 'fruit juice', 'vanilla', 'sifted flour', 'baking powder', 'salt'] },
{ name: 'Blue Chip Cookies', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cookies', ingredients: ['cold butter', 'sugar', 'brown sugar', 'vanilla', 'egg', 'flour', 'baking soda', 'salt', 'chocolate chips', 'walnuts'] },
{ name: 'Bourbon Balls', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cookies', ingredients: ['semisweet chocolate chips', 'light corn syrup', 'bourbon (or light cream)', 'crushed vanilla wafers', 'powdered sugar', 'finely chopped walnuts'] },
{ name: 'Chocolate Crisp Bran Cookies', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cookies', ingredients: ['flour', 'baking soda', 'salt', 'margarine', 'sugar', 'eggs', 'vanilla', 'All-Bran cereal', 'chocolate chips'] },
{ name: 'Chocolate Peanut Brunch Bars', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cookies', ingredients: ['flour', 'brown sugar', 'margarine', 'crunchy peanut butter', 'salt', 'egg yolk, beaten', 'vanilla', 'chocolate chips', 'crunchy peanut butter', 'Special K cereal'] },
{ name: 'Chocolate Trio Squares*', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cookies', ingredients: ['margarine', 'sifted flour', 'salt', 'eggs, well beaten', 'light brown sugar', 'coconut', 'vanilla', 'salt', 'flour', 'semisweet chocolate chips', 'light corn syrup', 'water', 'chopped nuts'] },
{ name: 'Christmas Logs', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cookies', ingredients: ['crushed walnuts', 'pitted dates', 'flake coconut', 'brown sugar', 'eggs'] },
{ name: 'Christmas Snowballs', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cookies', ingredients: ['butter', 'vanilla', 'water', 'salt', 'sugar', 'flour', 'chocolate chips', 'finely chopped walnuts', 'powdered sugar'] },
{ name: 'Crisp Oatmeal Fruit Strips', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cookies', ingredients: ['butter or margarine', 'sugar', 'egg', 'flour', 'soda', 'raisins (or finely diced prunes or dates)', 'rolled oats'] },
{ name: 'Frosted Delights', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cookies', ingredients: ['sifted flour', 'salt', 'baking soda', 'shortening', 'granulated sugar', 'eggs', 'vanilla', 'brown sugar', 'egg white, stiffly beaten', 'chopped nuts'] },
{ name: 'Ginger Snap Bars', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cookies', ingredients: ['brown sugar', 'egg', 'margarine', 'molasses', 'vanilla', 'flour', 'soda', 'salt', 'cinnamon', 'ginger', 'cloves', 'milk', 'chopped nuts'] },
{ name: ' Ginger Snaps', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cookies', ingredients: ['shortening', 'brown sugar', 'egg', 'molasses', 'ginger', 'cinnamon', 'cloves', 'soda', 'flour'] },
{ name: 'Honey Graham Crackers', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cookies', ingredients: ['flour', 'whole wheat flour', 'brown sugar', 'shortening', 'cinnamon', 'honey', 'oil', 'cold water', 'salt', 'baking soda'] },
{ name: 'Jello Pastel Cookies', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cookies', ingredients: ['margarine', 'sugar', 'fruit jello', 'vanilla', 'flour', 'baking powder', 'salt'] },
{ name: 'Lemon Squares', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cookies', ingredients: ['flour', 'margarine', 'powdered sugar', 'sugar', 'baking powder', 'salt', 'lemon peel', 'Lemon juice'] },
{ name: 'Minties', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cookies', ingredients: ['egg', 'oil', 'sugar', 'mint apple jelly', 'flour', 'baking powder', 'salt'] },
{ name: 'Oatmeal Cookies', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cookies', ingredients: ['brown sugar', 'shortening', 'eggs', 'raisin liquid', 'soda, dissolved in raisin liquid', 'flour', 'oats', 'salt', 'raisins, boiled 20 min.', 'cinnamon', 'all-spice', 'walnuts'] },
{ name: 'Oatmeal Fudge Bars*', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cookies', ingredients: ['shortening', 'light brown sugar, firmly packed', 'egg', 'vanilla', 'sifted flour', 'baking soda', 'salt', 'quick-cooking oats', 'walnuts, chopped', 'semi-sweet chocolate chips', 'butter or margarine', 'sweetened condensed milk', 'salt', 'walnuts, chopped', 'vanilla'] },
{ name: 'Peanut Butter Cookies', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cookies', ingredients: ['sugar', 'brown sugar', 'margarine', 'eggs', 'peanut butter', 'flour', 'soda', 'salt', 'vanilla'] },
{ name: 'Pineapple Graham Bars', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cookies', ingredients: ['butter or margarine', 'light brown sugar, firmly packed', 'egg ', 'sifted flour', 'graham cracker crumbs', 'crushed pineapple, drained.', 'walnuts, chopped'] },
{ name: 'Prune Nut Bars', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cookies', ingredients: ['pitted prunes', 'margarine', 'sugar', 'sifted flour', 'baking powder', 'salt', 'brown sugar', 'eggs', 'lemon juice', 'vanilla', 'walnuts, chopped', 'coconut', 'confectioner\'s sugar'] },
{ name: 'Pumpkin Oatmeal Cookies', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cookies', ingredients: ['eggs', 'sugar', 'oil', 'oatmeal', 'soda', 'salt', 'nuts', 'raisins', 'allspice', 'ginger', 'pumpkin pie spice', 'cinnamon', 'cloves', 'nutmeg', 'pumpkin pie spice', 'flour'] },
{ name: 'Snickerdoodles', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cookies', ingredients: ['flour', 'cream of tartar', 'baking soda', 'salt', 'margarine', 'sugar', 'eggs', 'sugar', 'cinnamon'] },
{ name: 'Soft Sugar Cookies', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cookies', ingredients: ['butter or margarine', 'sugar', 'eggs', 'vanilla', 'sifted flour', 'salt', 'baking powder', 'baking soda', 'sour cream', 'cinnamon and sugar'] },
{ name: 'Thumbprint Cookies', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cookies', ingredients: ['Crisco (shortening)', 'egg', 'sugar', 'salt', 'vanilla', 'flour'] },
{ name: 'Walnut Squares', ingredientsOnHand: 0, image: 'http://something.com', category: 'Cookies', ingredients: ['margarine', 'sugar', 'egg', 'flour', 'nutmeg', 'nuts, chopped'] },
{ name: 'Banana Cream Pie', ingredientsOnHand: 0, image: 'http://something.com', category: 'Pies', ingredients: ['baked pastry shell', 'cornstarch', 'water', 'sweetened condensed milk', 'egg yolks, beaten', ' margarine or butter', 'vanilla', 'bananas', 'lemon juice from concentrate', 'whipped cream'] },
{ name: 'Blackberry Nectarine Pie', ingredientsOnHand: 0, image: 'http://something.com', category: 'Pies', ingredients: ['blackberries', 'sugar', 'cornstarch', 'water', 'nectarines, sliced', 'baked pie shell', 'whipped cream'] },
{ name: 'Creamy Apple Pie', ingredientsOnHand: 0, image: 'http://something.com', category: 'Pies', ingredients: ['pie shell, unbaked', 'tart apples, peeled and sliced', 'sugar', 'flour', 'salt', 'heavy cream', 'cinnamon'] },
{ name: 'Dutch Apple Pie', ingredientsOnHand: 0, image: 'http://something.com', category: 'Pies', ingredients: ['large apples, sliced', 'sugar', 'cinnamon', 'flour', 'butter', 'cinnamon'] },
{ name: 'Fresh Strawberry Pie', ingredientsOnHand: 0, image: 'http://something.com', category: 'Pies', ingredients: ['cornstarch', 'sugar', 'water', 'red food coloring', 'butter', 'lemon juice', 'strawberries', 'pie shell, baked'] },
{ name: 'Lemon Cloud Pie', ingredientsOnHand: 0, image: 'http://something.com', category: 'Pies', ingredients: ['sugar', 'cornstarch', 'water', 'lemon rind, grated', 'lemon juice', 'eggs', 'cream cheese', 'graham cracker crust'] },
{ name: 'Lemon Luscious Pie', ingredientsOnHand: 0, image: 'http://something.com', category: 'Pies', ingredients: ['sugar', 'cornstarch', 'butter', 'lemon rind, grated', 'lemon juice', 'egg yolks, slightly beaten', 'milk', 'sour cream', 'pie shell'] },
{ name: 'Lemon Meringue Pie', ingredientsOnHand: 0, image: 'http://something.com', category: 'Pies', ingredients: ['sugar', 'cornstarch', 'salt', 'hot water', 'lemon juice, fresh or bottled', 'grated lemon juice', 'egg yolks', 'butter', 'egg whites', 'sugar'] },
{ name: 'Old Fashioned Apple Pie', ingredientsOnHand: 0, image: 'http://something.com', category: 'Pies', ingredients: ['sliced', 'sugar', 'cinnamon', 'water', 'butter'] },
{ name: 'Peach Almond Pie', ingredientsOnHand: 0, image: 'http://something.com', category: 'Pies', ingredients: ['fresh peaches, sliced', 'lemon juice', 'sugar', 'cornstarch', 'butter', 'salt', 'almond extract', 'pie shell'] },
{ name: 'Peach Parfait Pie', ingredientsOnHand: 0, image: 'http://something.com', category: 'Pies', ingredients: ['peach or lemon gelatin', 'hot water', 'Peach or vanilla ice cream', 'fresh peaches, peeled and diced', 'sugar', 'baked pie shell, chilled', 'heavy cream'] },
{ name: 'Peanut Butter Ice Cream Pie', ingredientsOnHand: 0, image: 'http://something.com', category: 'Pies', ingredients: ['graham cracker crumbs, 18 squares', 'sugar', 'margarine, melted', 'whipped cream or cool whip', 'vanilla ice cream', 'chunk style peanut buter'] },
{ name: 'Peanut Butter Pie', ingredientsOnHand: 0, image: 'http://something.com', category: 'Pies', ingredients: ['light or dark corn syrup', 'sugar', 'eggs, slightly beaten', 'vanilla', 'chunk style peanut butter', 'pie shell, unbaked', 'whipped cream'] },
{ name: 'Pie Crust', ingredientsOnHand: 0, image: 'http://something.com', category: 'Pies', ingredients: ['sifted flour', 'salt', 'shortening', 'ice water or 7-up'] },
{ name: 'Sour Cream Raisin Pie', ingredientsOnHand: 0, image: 'http://something.com', category: 'Pies', ingredients: ['raisins', 'water', 'flour', 'sugar', 'egg yolks, slightly beaten', 'sour cream', 'vanilla', 'nutmeg'] },
{ name: 'Walnut Pie', ingredientsOnHand: 0, image: 'http://something.com', category: 'Pies', ingredients: ['sugar', 'light corn syrup', 'eggs', 'evaporated milk', 'vanilla', 'flour', 'nutmeg'] },
{ name: 'Walnut-Raisin pie', ingredientsOnHand: 0, image: 'http://something.com', category: 'Pies', ingredients: ['sugar', 'eggs', 'walnuts, chopped', 'butter', 'vanilla', 'raisins'] },
{ name: 'Angel Hash', ingredientsOnHand: 0, image: 'http://something.com', category: 'Pies', ingredients: ['cornstarch', 'sugar', 'pineapple juice', 'eggs', 'Dream Whip or whipped cream', 'pineapple tidbits', 'walnuts, chopped', 'marshmallows', 'bananas, sliced'] },
{ name: 'Blue Cheese Dressing', ingredientsOnHand: 0, image: 'http://something.com', category: 'Salads and Dressings', ingredients: ['blue cheese', 'buttermilk', 'mayonnaise', 'white sauterne wine', 'garlic powder', 'accent seasoning mix'] },
{ name: 'Broccoli Curry Salad', ingredientsOnHand: 0, image: 'http://something.com', category: 'Salads and Dressings', ingredients: ['broccoli, cut into small pieces', 'raisins', 'red onion', 'sunflower seed', 'mayonnaise', 'stalks of celery', 'red wine vinegar ', 'curry, to taste'] },
{ name: 'Broccoli Salad', ingredientsOnHand: 0, image: 'http://something.com', category: 'Salads and Dressings', ingredients: ['broccoli florets, bite size', 'mozzarella cheese, shredded', 'red onion, chopped', 'crisp bacon, crumbled', 'mayonnaise', 'sugar', 'vinegar'] },
{ name: 'Broccoli Salad with Pineapple', ingredientsOnHand: 0, image: 'http://something.com', category: 'Salads and Dressings', ingredients: ['bacon, but small, fry until crisp', 'broccoli', 'crushed pineapple, well drained', ' red onion, chopped fine', 'sunflower seeds', 'mayonnaise', 'sugar', 'vinegar'] },
{ name: 'Carrot Carousel', ingredientsOnHand: 0, image: 'http://something.com', category: 'Salads and Dressings', ingredients: ['Knox Unflavored Gelatin', 'cold orange juice, divided', 'boiling orange juice', 'salt', 'salad dressing', 'carrot pieces', 'crushed pineapple'] },
{ name: 'Coleslaw', ingredientsOnHand: 0, image: 'http://something.com', category: 'Salads and Dressings', ingredients: ['cabbage', 'mayonnaise', 'sour cream', 'vinegar', 'sugar', 'horseradish', 'salt and pepper', 'caraway seed (optional)'] },
{ name: 'Cranberry Mold', ingredientsOnHand: 0, image: 'http://something.com', category: 'Salads and Dressings', ingredients: ['hot water', 'cherry jello, or 1 large', 'whole cranberry sauce', 'sour cream', 'nuts, chopped'] },
{ name: 'Cucumbers in Sour Cream', ingredientsOnHand: 0, image: 'http://something.com', category: 'Salads and Dressings', ingredients: ['cucumbers, sliced', 'salt', 'pepper', 'chives or scallions, minced', 'sour cream', 'lemon juice'] },
{ name: 'Five Bean Salad', ingredientsOnHand: 0, image: 'http://something.com', category: 'Salads and Dressings', ingredients: ['green beans', 'wax beans', 'kidney beans', 'garbanzo beans', 'bean sprouts', 'red onion, sliced', 'sugar', 'vinegar', 'oil'] },
{ name: 'Five Cup Salad', ingredientsOnHand: 0, image: 'http://something.com', category: 'Salads and Dressings', ingredients: ['pineapple chunks', 'mandarin oranges', 'coconut', 'marshmallows', 'sour cream'] },
{ name: 'Garden Vegetable Pasta', ingredientsOnHand: 0, image: 'http://something.com', category: 'Salads and Dressings', ingredients: ['asparagus', 'broccoli', 'cauliflower', 'green onions', 'radishes', 'peeled tomato', 'avacado', 'fresh mushrooms', 'pasta', 'Italian Dressing'] },
{ name: 'Green Bean Salad', ingredientsOnHand: 0, image: 'http://something.com', category: 'Salads and Dressings', ingredients: ['fresh beans', 'salad oil', 'white vinegar', 'red onion, chopped', 'grated lemon rind', 'blue cheese', 'walnuts, chopped'] },
{ name: 'Heavenly Cheese Salad', ingredientsOnHand: 0, image: 'http://something.com', category: 'Salads and Dressings', ingredients: ['lemon jello', 'pineapple juice + water', 'crushed pineapple', 'cream cheese', 'walnuts, chopped', 'whipped cream'] },
{ name: 'Horseradish Dressing', ingredientsOnHand: 0, image: 'http://something.com', category: 'Salads and Dressings', ingredients: ['horseradish', 'mayonnaise', 'sour cream', 'buttermilk', 'oil', 'onion powder', 'salt', 'pepper', 'kelp', 'vinegar'] },
{ name: 'Lemon Cloud Salad', ingredientsOnHand: 0, image: 'http://something.com', category: 'Salads and Dressings', ingredients: ['lemon jello', 'mandarin oranges', 'pineapple tidbits', 'bananas, sliced', 'Dream Whip'] },
{ name: 'Lima Bean Salad', ingredientsOnHand: 0, image: 'http://something.com', category: 'Salads and Dressings', ingredients: ['frozen lima beans', 'fresh mushrooms, sliced', 'green onions, sliced', 'parsley, choped', 'oregano', 'vegetable oil', 'salt', 'pepper', 'garlic, crushed or 1/8 tsp. garlic pwder.'] },
{ name: 'Pea Salad', ingredientsOnHand: 0, image: 'http://something.com', category: 'Salads and Dressings', ingredients: ['frozen peas, uncooked', 'green onion, chopped', 'crumbled bacon bits', 'water chestnuts, sliced', 'salted cashew pieces.', 'sour cream'] },
{ name: 'School French Dressing', ingredientsOnHand: 0, image: 'http://something.com', category: 'Salads and Dressings', ingredients: ['oil', 'vinegar', 'salt and  pepper to taste', 'dry mustard', 'paprika', 'sugar'] },
{ name: 'Spinach Salad', ingredientsOnHand: 0, image: 'http://something.com', category: 'Salads and Dressings', ingredients: ['spinach leaves', 'onion, red is best', 'bacon', 'vinegar', 'water', 'sugar', 'salt', 'egg, slightly beaten', 'egg, hard-boiled', 'sour cream'] },
{ name: 'Spinach Salad with Avocado', ingredientsOnHand: 0, image: 'http://something.com', category: 'Salads and Dressings', ingredients: ['fresh spinach', 'avocado', 'lemon juice', 'red onion', 'mandarin oranges', 'sour cream', 'garlic, crushed', 'salt', 'lemon peel', 'paprika', 'pepper', 'vinegar', 'olive oil', 'bacon, crisp and crumbled'] },
{ name: 'Spinach Salad with Alfalfa Sprouts', ingredientsOnHand: 0, image: 'http://something.com', category: 'Salads and Dressings', ingredients: ['spinach greens', 'sliced onion', 'alfalfa sprouts', 'bacon bits', 'grated jack cheese', 'sunflower seeds', 'mayonnaise', 'catsup', 'lemon juice', 'sugar'] },
{ name: 'Summer Fruit Salad', ingredientsOnHand: 0, image: 'http://something.com', category: 'Salads and Dressings', ingredients: ['pineapple chunks in juice', 'mandarin oranges', 'seedless grapes', 'cantaloupe, cut into chunks', 'watermelon chunks', 'marshmallows', 'sour cream'] },
{ name: 'Top Ramen Salad', ingredientsOnHand: 0, image: 'http://something.com', category: 'Salads and Dressings', ingredients: ['chicken Ramen', 'oil', 'vinegar', 'sugar', 'salad greens', 'red onion', 'frozen peas'] },
{ name: 'Zucchini Apple Slaw', ingredientsOnHand: 0, image: 'http://something.com', category: 'Salads and Dressings', ingredients: ['mayonnaise', 'vinegar', 'sugar', 'caraway seed', 'zucchini, coarsely shredded', 'green onions, sliced', 'tart apples, cut in chunks', 'salt and pepper'] },
{ name: 'Broccoli Cheese Soup', ingredientsOnHand: 0, image: 'http://something.com', category: 'Soup', ingredients: ['potato (2-3 cups), peeled and diced', 'broccoli florets, cut or broken', 'carrot, peeled and chopped', 'cloves of garlic, peeled', 'onion, chopped', 'salt', 'water', 'cheddar cheese, grated', 'low-fat milk', 'dill'] },
{ name: 'Chicken Noodle Soup', ingredientsOnHand: 0, image: 'http://something.com', category: 'Soup', ingredients: ['chicken, cooked and chopped', 'potato, diced', 'carrots, diced', 'celery, sliced', 'onion, chopped', 'chicken bouillion', 'poultry seasoning', 'salt, to taste', 'narrow egg noodles'] },
{ name: 'Cleo\'s Clam Chowder', ingredientsOnHand: 0, image: 'http://something.com', category: 'Soup', ingredients: ['bacon, chopped and browned', 'onion, suated', 'celery, sauted', 'potatoes, peeled and diced', 'half and half', 'milk', 'salt and pepper', 'thyme or basil', 'chopped clams with juice'] },
{ name: 'Creamy Zucchini Mushroom Soup', ingredientsOnHand: 0, image: 'http://something.com', category: 'Soup', ingredients: ['zucchini, thinly sliced (about 3/4 lb.)', 'onion, chopped', 'garlic, minced', 'butter or margarine', 'cream of mushroom soup, condensed', 'water', 'milk', 'fresh oregano, chopped or 1/4 tsp dried', 'fresh basil, or 1/4 tsp dried', 'sour cream', 'ground pepper, to taste', 'pine nuts, toasted'] },
{ name: 'Elephant Stew', ingredientsOnHand: 0, image: 'http://something.com', category: 'Soup', ingredients: ['elephant', 'salt and pepper to taste', 'brown gravy', 'rabbits'] },
{ name: 'Hungry Bear Vegetable Soup', ingredientsOnHand: 0, image: 'http://something.com', category: 'Soup', ingredients: ['hamburger', 'potatoes, diced', 'carrots, diced', 'onion, coarsely chopped', 'celery, sliced', 'stewed tomatoes, crushed', 'tomatoes, crushed', 'cabbage', 'salt, to taste'] },
{ name: 'Mexican Meatball Soup', ingredientsOnHand: 0, image: 'http://something.com', category: 'Soup', ingredients: ['hamburger', 'minute rice', 'egg', 'onion, finely chopped', 'garlic powder', 'oregano', 'cumin', 'chili powder', 'chicken or beef broth', 'tomatoes, crushed', 'carrots, chopped', 'onion, chopped', 'celery, chopped', 'garlic powder', 'oregano', 'cumin', 'chili powder', 'tomato sauce', 'cup'] },
{ name: 'Minestrone Soup', ingredientsOnHand: 0, image: 'http://something.com', category: 'Soup', ingredients: ['hamburger', 'potatoes, cubed', 'onion, chopped', 'carrots, diced', 'stalks of celery, chopped', 'kidney beans', 'frozen spinach', 'zucchini, diced', 'cabbage, chopped', 'stewed tomatoes', 'tomato sauce', 'spaghetti sauce mix', 'broken spaghetti'] },
{ name: 'Tortilla Soup', ingredientsOnHand: 0, image: 'http://something.com', category: 'Soup', ingredients: ['lime', 'vegetable oil', 'onion, chopped', 'ground cumin', 'diced oregano leaves, crushed', 'garlic, minced', 'Campbell\'s condensed chicken broth', 'water', 'tomato, chopped', 'chopped green chiles', 'corn tortillas', 'monterey jack or cheddar cheese, shredded', 'lettuce, shredded'] }
];

// all unique ingredients list
var allIngredients = [];

// all users data object to push to Local storage
var allUsersData = {};
var allUsersKey = 'allUsersKey';
var userNameKey = 'userNameKey';

// list of current favorite recipes
var favoriteRecipes = [];

// all currently user selected ingredients
var selectedIngredients = {};

// current user UserName
var currentUserName;

// not used yet. potentially used for recipe sorting method
var sortRecipesBy = 'ingredients';


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
  loginButton.parentNode.firstChild.textContent = currentUserName;

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
  loginButton.parentNode.firstChild.textContent = '    ';

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
    handleLogin(currentUserName);
  }
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
}

// render ingredients table
function renderIngredientsTable() {
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
function sortRecipeBookByCategory() {
  recipeBook.sort(function (a, b) {
    var nameA = a.category.toUpperCase();
    var nameB = b.category.toUpperCase();
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
    h3Element.textContent = `${recipeBook[i].name} (${recipeBook[i].ingredientsOnHand} Ingredients on Hand) ${recipeBook[i].category}`;
    imageElement.src = 'https://via.placeholder.com/150';

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
      changeIngredientsOnHand(keys[i], 1);
    }
    favoriteRecipes = allUsersData[currentUserName].userRecipes;
  }
}

function onPageLoad() {
  // create array of unique ingredients
  buildIngredientArrays();
  // retrieve local storage
  retrieveLocalStorage();
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


// test calls
// handleLogin('TEMP USER', 'ADMIN PASSWORD');
// handleLogout();
// handleLogin('TEMP USER2', 'ADMIN PASSWORD');
// handleLogin('TEMP USER', 'ADMIN PASSWORD');
// handleLogin('Benjamin', 'ADMIN PASSWORD');
// saveToLocalStorage();



