// require('locus');

var Person = require("./person");    //how come doesn't need .js?? 
var inherits = require("../inheritance.js");
var Property = require("../property_types/property.js");

function Manager(name, contact) {
  // set name and contact
  Person.call(this, name, contact); 
  // this.name = name;		
  // this.contact = contact;    //how come when I type manager.contact it shoes undefined, but manager.name = name 
  this.properties = [];
}

// Manager.prototype = new Person.prototype   //this is here for testing purposes to see the difference between using inherit and not 
inherits(Manager, Person)

Manager.prototype.addProperty = function(property) {
  // add property from properties

  if (property instanceof Property) {
  	this.properties.push(property);
  }
};

Manager.prototype.removeProperty = function(property) {
  // remove properties
  if (property instanceof Property) {
  	this.properties.splice(this.properties[this.properties.indexOf(property)], 1)
  }
};


module.exports = Manager;

// eval(locus)



//add and remove address 