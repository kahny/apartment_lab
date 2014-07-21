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
	it('can call the Townhouse object\'s address', function(){
		expect(townhouse.address).to.eql('address')
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

	//TownHouse.prototype.available 
	describe('#available', function(){
		it('should return true if there is a unit available', function(){
			unit = new Unit('num', 'building', 'sqft', 'rent'); //do i need this?
			
			// console.log(townhouse.available())
			expect(townhouse.available()).to.eql(true);
		})

		it('should return false if the unit is already taken by a tenant', function(){
			var reference1 = new Person('reference1', 'contact1');
			var reference2 = new Person('reference2', 'contact2');
			var manager = new Person('manager', 'contact3');
			townhouse.setManager(manager);
			var tenant = new Tenant('name', 'contact');
			unit = new Unit('num', 'building', 'sqft', 'rent');
			tenant.addReference(reference1);
			tenant.addReference(reference2);
			townhouse.addTenant(unit, tenant);

			// console.log(townhouse.available())		
			expect(townhouse.available()).to.eql(false)
			// expect(townhouse.units[0].available()).to.eql(false)
		});
	});
});
