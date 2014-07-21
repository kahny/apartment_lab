// require('locus');
var Property = require("./property");
var inherits = require("../inheritance.js");
var Unit = require("../unit.js");


function Duplex(address) {
  // A duplex only has 2 units;
  this.address = address;
  this.units = []
  var unit1 = new Unit(null, null, null, null);
  var unit2 = new Unit(null, null, null, null);

  this.units.push(unit1);
  this.units.push(unit2);
}


inherits(Duplex, Property);


module.exports = Duplex;


// eval(locus)