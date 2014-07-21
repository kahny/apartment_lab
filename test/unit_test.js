var expect = require("chai").expect;
var Unit = require("../src/unit.js"); 
var Property = require("../src/property_types/property.js");
var Person = require("../src/people/person.js");
var Tenant = require("../src/people/tenant.js");


describe("Unit", function(){

	beforeEach(function(){
		newProperty = new Property('address'),
		unit = new Unit('num', 'building', 'sqft', 'rent');
		
	});

	it('can expect there to be no tenant initially', function(){
		newProperty.tenants = [];
	})

	describe('#available', function(){
		it('can expect that if there isn\'t a tenant, the available method will return true', function(){
			expect(unit.available()).to.equal(true)
		})

		it('can expect that if there is a tenant, the availble method will return false', function(){
			var reference1 = new Person('reference1', 'contact1');
			var reference2 = new Person('reference2', 'contact2');
			var manager = new Person('manager', 'contact3');
			newProperty.setManager(manager);
			var tenant = new Tenant('name', 'contact');
			tenant.addReference(reference1);
			tenant.addReference(reference2);
			newProperty.addTenant(unit, tenant);
			expect(unit.available()).to.equal(false);
		})
	})
	
});
