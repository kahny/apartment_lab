// require('locus');

var Tenant = require("../people/tenant.js");
var Unit = require("../unit.js");
var Person = require("../people/person.js");
var Manager = require("../people/manager.js");


function Property(address) {
  this.address = address;
  this.units = [];
  this.tenant = []; 
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
  if(this.manager && tenant.references.length >= 2){
    this.tenant = tenant;      //what would unit.tenant return  
  }
  else{
    console.log("Either no manager or less than two references")
  }
};

Property.prototype.removeTenant = function(unit, tenant) {
  // remove tenant
  if(this.tenant == tenant){    //what would unit.tenant return 
    this.tenant = null;         
  }
};

Property.prototype.availableUnits = function(){
  // return num of units available
}

Property.prototype.rentedUnits = function(){
  // return rented units
}


module.exports = Property;

// eval(locus)