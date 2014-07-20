var property = require("./property");
var inherit = require("../inheritance.js");


function TownHouse(address){
  // only has one unit per address
  this.address = address; 
};



inherits(TownHouse, Property)

TownHouse.prototype.available = function(){
  // a tenant it should not be available
  if(this.units[0].available){	//takes the available from the unit.js 
  	return true; 
  }
  else{
  	return false;
  }
};

module.exports = TownHouse;
