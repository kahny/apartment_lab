var property = require("./property");
var inherit = require("../inheritance.js");


function Duplex(address) {
  // A duplex only has 2 units;
  this.address = address;
}


inherits(Duplex, Property);


Duplex.prototype.available = function(){
  // a tenant it should not be available
  if(this.units[0].available || this.units[1].available){	//takes the available from the unit.js 
  	return true; 
  }
  else{
  	return false;
  }
};


module.exports = Duplex;