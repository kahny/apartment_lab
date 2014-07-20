var expect = require("chai").expect;
var Person = require("../../src/people/person.js");
var Manager = require("../../src/people/manager.js")
  // Manager = 

describe("Person", function(){
  it('can return the objects name and contact', function(){
  	var newPerson = new Person('name', 'contact');
  	expect(newPerson.name).to.eql('name');
  	expect(newPerson.contact).to.eql('contact');
  })
});
