var expect = require("chai").expect,
  ApartmentBuilding = require("../../src/property_types/apartment_building.js")
  Property = require("../../src/property_types/property.js"),
  Person = require("../../src/people/person.js"),
  Tenant = require("../../src/people/tenant.js"),
  Unit = require("../../src/unit.js");



describe("ApartmentBuilding", function(){
  	beforeEach(function(){
		apartmentbuilding = new ApartmentBuilding('name','address',2);
	});

	//check this.address  = address 
	it('can call the Apartment Building object\'s name and address', function(){
		expect(apartmentbuilding.address).to.eql('address')
		expect(apartmentbuilding.name).to.eql('name')
		expect(apartmentbuilding.max).to.eql(2)
	})


	//check inheritence at least one property for now
	//.setManager 
	describe('#setManager', function(){
		it('should add a manager to the Property', function(){
			var manager = new Person('person', 'contact');
			apartmentbuilding.setManager(manager);
			expect(apartmentbuilding.manager).to.eql(manager);
		});
	});

	//duplex.prototype.available 
	describe('#available', function(){
		it('should return true if there is a unit available', function(){
			unit = new Unit('num', 'building', 'sqft', 'rent'); //do i need this?
			
			// console.log(duplex.available())
			expect(apartmentbuilding.available()).to.eql(true);
		})

		it('should return false if the 2 units are already taken by tenants', function(){
			var reference1 = new Person('reference1', 'contact1');
			var reference2 = new Person('reference2', 'contact2');
			var manager = new Person('manager', 'contact3');
			apartmentbuilding.setManager(manager);
			var tenant = new Tenant('name', 'contact');
			unit = new Unit('num', 'building', 'sqft', 'rent');
			tenant.addReference(reference1);
			tenant.addReference(reference2);
			apartmentbuilding.addTenant(unit, tenant);

			var tenant1 = new Tenant('name', 'contact');
			unit2 = new Unit('num', 'building', 'sqft', 'rent');
			tenant1.addReference(reference1);
			tenant1.addReference(reference2);
			apartmentbuilding.addTenant(unit2, tenant1);


			// console.log(apartmentbuilding.units.length)
			// console.log(apartmentbuilding.units[0])
			// console.log(apartmentbuilding.available())
			expect(apartmentbuilding.available()).to.eql(false)
		});
	});
});
