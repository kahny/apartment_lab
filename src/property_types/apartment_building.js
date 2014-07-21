var Property = require("./property.js");
var inherits = require("../inheritance.js");
var Unit = require("../unit.js");



function ApartmentBuilding(name, address, numApartments) {    //what happens if there's more arguments in the child of inheritence?
  // A building can have many many units 
  this.name = name;
  this.address = address;
  this.numApartments = numApartments;
  this.units = []
  for (var i = numApartments; i > 0; i--) {
  	this.units.push(new Unit(null, null, null, null))
  };
}

inherits(ApartmentBuilding, Property)


module.exports = ApartmentBuilding;