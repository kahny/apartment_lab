var Property = require("./property.js");
var inherits = require("../inheritance.js");


function ApartmentBuilding(name, address, max) {    //what happens if there's more arguments in the child of inheritence?
  // A building can have many many units 
  this.name = name;
  this.address = address;
  this.max = max 
}

inherits(ApartmentBuilding, Property)


ApartmentBuilding.prototype.available = function(){

	if (this.units.length < this.max){
		return true;
		console.log('There are units available')
	}
	else if (this.units.length == this.max){
		return false;
		console.log("there are no units available")
	}
}


module.exports = ApartmentBuilding;