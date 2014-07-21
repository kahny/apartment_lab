var expect = require("chai").expect,
  ApartmentBuilding = require("../../src/property_types/apartment_building.js")
  Property = require("../../src/property_types/property.js"),
  Person = require("../../src/people/person.js"),
  Tenant = require("../../src/people/tenant.js"),
  Unit = require("../../src/unit.js");



describe("ApartmentBuilding", function(){
  	beforeEach(function(){
		apartment = new ApartmentBuilding('name','address', 2);
	});

	//check this.address  = address 
	it('can call the Apartment Building object\'s name, address, number of units, and length of the initialized unit array', function(){
		expect(apartment.address).to.eql('address')
		expect(apartment.name).to.eql('name')
		expect(apartment.numApartments).to.eql(2)
		expect(apartment.units.length).to.eql(2);
	})


	//check inheritence at least one property for now
	//.setManager 
	describe('#setManager', function(){
		it('should add a manager to the Property', function(){
			var manager = new Person('person', 'contact');
			apartment.setManager(manager);
			expect(apartment.manager).to.eql(manager);
		});
	});

	//duplex.prototype.available is tested in prototype file 
});
