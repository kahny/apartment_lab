// require('locus');

var Tenant = require("../people/tenant.js");
var Unit = require("../unit.js");
var Person = require("../people/person.js");
var Manager = require("../people/manager.js");


function Property(address) {
  this.address = address;
  this.units = [];          //assuming only storing a unit in property when there is a tenant and a manager? 
  // this.tenant = []; 
  this.manager = [];
}


Property.prototype.setManager = function(person) {
  // set this.manager to person
  this.manager = person
};

Property.prototype.getManager = function(){
  // return this.manager 
  return this.manager
};

Property.prototype.addTenant = function(unit, tenant) {
  // add tenant but check to make sure there
  // is a manager first and a tenant has 2 references
  //and check that the unit is available 
  if(this.manager && tenant.references.length >= 2 && unit.available){
    unit.tenant = tenant;      //link back to unit 
    this.units.push(unit); 
  }
  else{
    console.log("Unable to add tenant")
  }
};

Property.prototype.removeTenant = function(unit, tenant) {
  // remove tenant
  if(unit.tenant == tenant){    
    unit.tenant = null;         
  }
  else{
    console.log("Unable to remove tenant")
  }
};

Property.prototype.availableUnits = function(){
  // return num of units available

}

Property.prototype.rentedUnits = function(){
  // return rented units
  return this.units.length;
}


module.exports = Property;

// eval(locus)