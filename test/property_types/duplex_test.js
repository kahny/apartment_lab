var expect = require("chai").expect,
  Duplex = require("../../src/property_types/duplex.js")
  Property = require("../../src/property_types/property.js"),
  Person = require("../../src/people/person.js"),
  Tenant = require("../../src/people/tenant.js"),
  Unit = require("../../src/unit.js");



describe("Duplex", function(){
  	beforeEach(function(){
		duplex = new Duplex('address');
	});

	//check this.address  = address 
	it('can call the Duplex object\'s address and check that there are only two units', function(){
		expect(duplex.address).to.eql('address')
		expect(duplex.units.length).to.eql(2)
	})

	//check inheritence at least one property for now
	//.setManager 
	describe('#setManager', function(){
		it('should add a manager to the Property', function(){
			var manager = new Person('person', 'contact');
			duplex.setManager(manager);
			expect(duplex.manager).to.eql(manager);
		});
	});

	
});
