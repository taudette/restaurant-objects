var FoodItem = function(name, calories, vegan, glutenFree, citrusFree){
	this.name = name;
	this.calories = calories;
	this.vegan = vegan; 
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
};

FoodItem.prototype.toString = function(){	
	return 'This food is a '+ this.name + ' it has ' + this.calories + ' calories ' + 'it is vegan: ' + this.vegan + ' it is glutenFree: ' + this.glutenFree + ' it is citrusFree: ' + this.citrusFree;

};

var steak = new FoodItem ('steak', 500, false, true, true);
var salad = new FoodItem ('salad', 100, true, true, false );
var pasta = new FoodItem ('pastra', 300, true, false, true);
steak.toString();
console.log(steak.toString());
console.log(salad.toString());
console.log(pasta.toString());



var Drink = function(name, description, price, ingredients){
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
};

var Plate = function (name, description, price, ingredients){
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
};

var Order = function(plates){
	this.plates = plates;
};

var Menu = function(plates){
	this.plates = plates;
};

var Restaurant = function(name, description, menu){
	this.name = name;
	this.description = description;
	this.menu = menu;
};

var Customer = function(dietaryPreferences){
	this.dietaryPreferences = dietaryPreferences; 
};




