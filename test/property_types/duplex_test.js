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
	it('can call the Duplex object\'s address', function(){
		expect(duplex.address).to.eql('address')
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

	//duplex.prototype.available 
	describe('#available', function(){
		it('should return true if there is a unit available', function(){
			unit = new Unit('num', 'building', 'sqft', 'rent'); //do i need this?
			
			// console.log(duplex.available())
			expect(duplex.available()).to.eql(true);
		})

		it('should return false if the 2 units are already taken by tenants', function(){
			var reference1 = new Person('reference1', 'contact1');
			var reference2 = new Person('reference2', 'contact2');
			var manager = new Person('manager', 'contact3');
			duplex.setManager(manager);
			var tenant = new Tenant('name', 'contact');
			unit = new Unit('num', 'building', 'sqft', 'rent');
			tenant.addReference(reference1);
			tenant.addReference(reference2);
			duplex.addTenant(unit, tenant);

			var tenant1 = new Tenant('name', 'contact');
			unit2 = new Unit('num', 'building', 'sqft', 'rent');
			tenant1.addReference(reference1);
			tenant1.addReference(reference2);
			duplex.addTenant(unit2, tenant1);

			// console.log(duplex.units[0])
			expect(duplex.available()).to.eql(false)
		});
	});
});
