// require('locus');

var Property = require("./property");
var inherits = require("../inheritance.js");
var Unit = require("../unit.js");
var Person = require("../people/person.js");
var Tenant = require("../people/tenant.js");



function TownHouse(address){
  // only has one unit per address
  this.address = address; 

};



inherits(TownHouse, Property)

TownHouse.prototype.available = function(){
  // a tenant it should not be available
  if(this.units[0] !== undefined){	//takes the available from the unit.js 
  	return false;
  	console.log("There are no units available")
  }
  else{
  	return true; 
 	console.log(this.units[0])
  }
};

module.exports = TownHouse;

// eval(locus)