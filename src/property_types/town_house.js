// require('locus');

var Property = require("./property");
var inherits = require("../inheritance.js");
var Unit = require("../unit.js");
var Person = require("../people/person.js");
var Tenant = require("../people/tenant.js");



function TownHouse(address){
  // only has one unit per address
  this.address = address; 
  var unit1 = new Unit(null, null, null, null);
  this.units.push(unit1);
};


inherits(TownHouse, Property)


module.exports = TownHouse;

// eval(locus)