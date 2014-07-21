// require('locus');
var Property = require("./property");
var inherits = require("../inheritance.js");


function Duplex(address) {
  // A duplex only has 2 units;
  this.address = address;
}


inherits(Duplex, Property);


Duplex.prototype.available = function(){
  // a tenant it should not be available
  if(this.units[0]!== undefined && this.units[1]!== undefined){	//takes the available from the unit.js 
  	return false;
  	console.log("no apartments are available") 
  }
  else{
  	return true;
  	console.log("apartments are available")
  }
};


module.exports = Duplex;


// eval(locus)