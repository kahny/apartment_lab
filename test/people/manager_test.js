
var expect = require("chai").expect;
var Person = require("../../src/people/person.js");

console.log("blah")
var Manager = require("../../src/people/manager.js");
var Property = require("../../src/property_types/property.js");



describe("Manager", function(){
	beforeEach(function() {
  		manager = new Manager('name', 'phone');
  	});

	it('can call the Person objects name and contact', function(){
		
		expect(manager.name).to.eql('name');
		expect(manager.contact).to.eql('phone');
	});

	describe('#addProperty', function(){
		it('should add a property to the Manager\'s property list', function(){
			var newProperty = new Property('address');
			manager.addProperty(newProperty);	
			expect(manager.properties).to.eql([newProperty]) 
		});
	});

	describe('#removeProperty', function(){
		it('should remove a property off the Manager\'s property list', function(){
			var newProperty = new Property('address');
			manager.addProperty(newProperty);
			manager.removeProperty(newProperty);
			expect(manager.properties).to.eql([]);
		});
	});

});





