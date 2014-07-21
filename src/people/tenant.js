// require('locus');

var Person = require("./person.js");
var inherits = require("../inheritance.js");


function Tenant(name, contact) {
  // set this.name, and contact
  Person.call(this, name, contact); 
  // this.name = name;
  // this.contact = contact;
  this.references = [];
};


inherits(Tenant, Person)

Tenant.prototype.addReference = function(reference){
  // add reference to references
  if (reference instanceof Person && reference.contact) {		//check that what was passed is an instance of person and that the contact info exists 
  	this.references.push(reference);
  } else {
  	console.log("A person wasn't passed, or didn't have a contact")
  }

  
};

module.exports = Tenant;

// eval(locus)
