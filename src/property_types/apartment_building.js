var property = require("./property.js");
var inherit = require("../inheritance.js");


function ApartmentBuilding(name, address) {
  // A building can have many many units 
  this.name = name;
  this.address = address;
}

inherits(ApartmentBuilding, Property)


//is there a max for apartment building?


// ApartmentBuilding.prototype.available = function(){
//   // a tenant it should not be available
//   if(this.units[0].available || this.units[1].available){	//takes the available from the unit.js 
//   	return true; 
//   }
//   else{
//   	return false;
//   }
// };


module.exports = ApartmentBuilding;