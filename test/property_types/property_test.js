var expect = require("chai").expect,
  Property = require("../../src/property_types/property.js"),
  Person = require("../../src/people/person.js"),
  Tenant = require("../../src/people/tenant.js"),
  Unit = require("../../src/unit.js");



describe("Property", function(){
  	beforeEach(function(){
		property = new Property('address');
	});

	//check this.address  = address 
	it('can call the Property object\'s address', function(){
		expect(property.address).to.eql('address')
	})

	//.setManager
	describe('#setManager', function(){
		it('should add a manager to the Property', function(){
			var manager = new Person('person', 'contact');
			property.setManager(manager);
			expect(property.manager).to.eql(manager);
		});
	});

	//.getManager 
	describe('#getManager', function(){
		it('should return the Property object\'s manager', function(){
			var manager = new Person('person', 'contact');
			property.setManager(manager);
			expect(property.getManager()).to.eql(property.manager)
		});
	});

	// .addTenant 
	describe('#addTenant', function(){
		it('should add a tenant to a unit, if there is a manager, the tenant has more than two references, and the unit is available', function(){
			var reference1 = new Person('reference1', 'contact1');
			var reference2 = new Person('reference2', 'contact2');
			var manager = new Person('manager', 'contact3');
			property.setManager(manager);
			var tenant = new Tenant('name', 'contact');
			unit = new Unit('num', 'building', 'sqft', 'rent');
			tenant.addReference(reference1);
			tenant.addReference(reference2);
			property.addTenant(unit, tenant);
			
			expect(unit.tenant).to.eql(tenant);
			//expect(property.unit).to.eql(unit);   check the property.unit 
			expect(property.units).to.eql([unit]);
		});
	});

	describe('#removeTenant', function(){
		it('should remove a tenant from the unit', function(){
			var reference1 = new Person('reference1', 'contact1');
			var reference2 = new Person('reference2', 'contact2');
			var manager = new Person('manager', 'contact3');
			property.setManager(manager);
			var tenant = new Tenant('name', 'contact');
			unit = new Unit('num', 'building', 'sqft', 'rent');
			tenant.addReference(reference1);
			tenant.addReference(reference2);
			property.addTenant(unit, tenant);
			property.removeTenant(unit,tenant);

			expect(unit.tenant).to.eql(null)
		});
	});


	describe('#rentedUnits', function(){
		it('should give you the number of units in this property object', function(){
			var reference1 = new Person('reference1', 'contact1');
			var reference2 = new Person('reference2', 'contact2');
			var manager = new Person('manager', 'contact3');
			property.setManager(manager);
			var tenant = new Tenant('name', 'contact');
			unit = new Unit('num', 'building', 'sqft', 'rent');
			tenant.addReference(reference1);
			tenant.addReference(reference2);
			property.addTenant(unit, tenant);


			var tenant1 = new Tenant('name', 'contact');
			unit1 = new Unit('num', 'building', 'sqft', 'rent');
			tenant1.addReference(reference1);
			tenant1.addReference(reference2);
			property.addTenant(unit1, tenant1);


			expect(property.rentedUnits()).to.eql(2);

		});
	});








});
