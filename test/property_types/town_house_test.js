var expect = require("chai").expect,
  TownHouse = require("../../src/property_types/town_house.js")
  Property = require("../../src/property_types/property.js"),
  Person = require("../../src/people/person.js"),
  Tenant = require("../../src/people/tenant.js"),
  Unit = require("../../src/unit.js");



describe("TownHouse", function(){
  	beforeEach(function(){
		townhouse = new TownHouse('address');
	});

	//check this.address  = address 
	it('can call the Townhouse object\'s address, and there should be one unit per townhouse', function(){
		expect(townhouse.address).to.eql('address');
		expect(townhouse.units.length).to.eql(1);
	})

	//check inheritence at least one property for now
	//.setManager 
	describe('#setManager', function(){
		it('should add a manager to the Property', function(){
			var manager = new Person('person', 'contact');
			townhouse.setManager(manager);
			expect(townhouse.manager).to.eql(manager);
		});
	});

});
