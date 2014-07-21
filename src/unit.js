// require('locus');

var Property = require("./property_types/property.js");
var Person = require("./people/person.js")
var Tenant = require("./people/tenant.js")


function Unit (number, building, sqft, rent) {
  // set params above using this

  this.number = number;
  this.building = building;
  this.sqft = sqft;
  this.rent = rent;
  this.tenant = null;
}


Unit.prototype.available = function(){
  // check for tenant
  if (this.tenant == null){ 
  	return true; 
  }
  else{
  	return false;
  }

}

module.exports = Unit;

// eval(locus)
