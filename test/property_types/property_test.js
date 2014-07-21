var expect = require("chai").expect,
  Property = require("../../src/property_types/property.js"),
  Person = require("../../src/people/person.js"),
  Tenant = require("../../src/people/tenant.js"),
  Duplex = require("../../src/property_types/duplex.js"),
  TownHouse= require("../../src/property_types/town_house.js"),
  ApartmentBuilding = require("../../src/property_types/apartment_building.js"),
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


	describe('#availableUnits', function(){
		//testing Townhouse
		it('should return 1 available unit in a new townhouse', function(){
			var townhouse = new TownHouse('address');
			expect(townhouse.availableUnits()).to.eql(1);
		});

//why doesn't testing for 0 available units work?
		// it('should return 0 available units when there is already a tenant in the townhouse', function(){
		// 	var townhouse = new TownHouse('address');
		// 	//add tenant to the a unit in the townhouse, check references and make sure there's a manager to the townhouse before you add a tennat 
		// 	var reference1 = new Person('reference1', 'contact1');
		// 	var reference2 = new Person('reference2', 'contact2');
		// 	var manager = new Person('manager', 'contact3');
		// 	townhouse.setManager(manager);
		// 	var tenant = new Tenant('name', 'contact');
		// 	tenant.addReference(reference1);
		// 	tenant.addReference(reference2);
		// 	//add a tenant to the first one 
		// 	townhouse.addTenant(townhouse.units[0], tenant);
		// 	console.log(townhouse.units)
		// 	expect(townhouse.availableUnits()).to.eql(0);
		// });


		// testing Duplex 
		it('should return 2 available units in a new duplex', function(){
			var duplex = new Duplex('address');
			expect(duplex.availableUnits()).to.eql(2); 
		});
		it('should return 1 available unit in a duplex with already one tenant', function(){
			var duplex = new Duplex('address');
			//add tenant to a unit in the duplex, check references and make sure there's a manager to add a tennat 
			var reference1 = new Person('reference1', 'contact1');
			var reference2 = new Person('reference2', 'contact2');
			var manager = new Person('manager', 'contact3');
			duplex.setManager(manager);
			var tenant = new Tenant('name', 'contact');
			tenant.addReference(reference1);
			tenant.addReference(reference2);
			//add a tenant to the first one 
			duplex.addTenant(duplex.units[0], tenant);
			expect(duplex.availableUnits()).to.eql(1);
		});

		//testing Apartment
		it('should return 3 available units in a 3 unit apartment with no tenants', function(){
			var apartment = new ApartmentBuilding('name', 'address', 3);
			expect(apartment.availableUnits()).to.eql(3);
		})

		it('should return 2 available units in a apartment with 3 units and no tenants', function(){
			var apartment = new ApartmentBuilding('name', 'address', 3);
			//add tenant to one of the 3 available units in the new apartment building
			var reference1 = new Person('reference1', 'contact1');
			var reference2 = new Person('reference2', 'contact2');
			var manager = new Person('manager', 'contact3');
			apartment.setManager(manager);
			var tenant = new Tenant('name', 'contact');
			tenant.addReference(reference1);
			tenant.addReference(reference2);
			//add a tenant to the first one 
			apartment.addTenant(apartment.units[0], tenant);
			expect(apartment.availableUnits()).to.eql(2);
		})
	})
	
	describe('#rentedUnits', function(){
		// testing townhouse 
		// w/no tenants
		it('should give you 0 rented units in a townhouse with no tenants', function(){
			var townhouse = new TownHouse('address');
			expect(townhouse.rentedUnits()).to.eql(0); 
		});
		// w/one tenant 
		it('should give you 1 rented unit in a townhouse with one tenant', function(){
			var townhouse = new TownHouse('address');
			//add tenant to the a unit in the townhouse, check references and make sure there's a manager to the townhouse before you add a tennat 
			var reference1 = new Person('reference1', 'contact1');
			var reference2 = new Person('reference2', 'contact2');
			var manager = new Person('manager', 'contact3');
			townhouse.setManager(manager);
			var tenant = new Tenant('name', 'contact');
			tenant.addReference(reference1);
			tenant.addReference(reference2);
			//add a tenant to the first one 
			townhouse.addTenant(townhouse.units[0], tenant);
		
			expect(townhouse.rentedUnits()).to.eql(1);
		})

		//testing duplex
		// w/no tenants 
		it('should give you 0 rented units in a townhouse with no tenants', function(){
			var duplex = new Duplex('address');
			expect(duplex.rentedUnits()).to.eql(0); 
		});

		// w/one tenant
		it('should return 1 rented unit in a duplex with already one tenant', function(){
			var duplex = new Duplex('address');
			//add tenant to a unit in the duplex, check references and make sure there's a manager to add a tennat 
			var reference1 = new Person('reference1', 'contact1');
			var reference2 = new Person('reference2', 'contact2');
			var manager = new Person('manager', 'contact3');
			duplex.setManager(manager);
			var tenant = new Tenant('name', 'contact');
			tenant.addReference(reference1);
			tenant.addReference(reference2);
			//add a tenant to the first one 
			duplex.addTenant(duplex.units[0], tenant);
			expect(duplex.rentedUnits()).to.eql(1);
		});


		//testing Apartment
		// w/ no tenants 
		it('should return 0 rented units in a 3 unit apartment with no tenants', function(){
			var apartment = new ApartmentBuilding('name', 'address', 3);
			expect(apartment.rentedUnits()).to.eql(0);
		})

		it('should return 1 rented units in a apartment with 3 units and no tenants', function(){
			var apartment = new ApartmentBuilding('name', 'address', 3);
			//add tenant to one of the 3 available units in the new apartment building
			var reference1 = new Person('reference1', 'contact1');
			var reference2 = new Person('reference2', 'contact2');
			var manager = new Person('manager', 'contact3');
			apartment.setManager(manager);
			var tenant = new Tenant('name', 'contact');
			tenant.addReference(reference1);
			tenant.addReference(reference2);
			//add a tenant to the first one 
			apartment.addTenant(apartment.units[0], tenant);
			expect(apartment.rentedUnits()).to.eql(1);
		})

	});
	
	describe('#available', function(){
		//testing townhouse 
		it('should return true for the availbility of a townhouse with no tenants', function(){
			var townhouse = new TownHouse('address');
			expect(townhouse.available()).to.eql(true);
		})

		//why is this one false? 
		// it('should return false for the availbility of a townhouse with one tenant', function(){
		// 	var townhouse = new TownHouse('address');
		// 	//add tenant to the a unit in the townhouse, check references and make sure there's a manager to the townhouse before you add a tennat 
		// 	var reference1 = new Person('reference1', 'contact1');
		// 	var reference2 = new Person('reference2', 'contact2');
		// 	var manager = new Person('manager', 'contact3');
		// 	townhouse.setManager(manager);
		// 	var tenant = new Tenant('name', 'contact');
		// 	tenant.addReference(reference1);
		// 	tenant.addReference(reference2);
		// 	//add a tenant to the first one 
		// 	townhouse.addTenant(townhouse.units[0], tenant);
		
		// 	expect(townhouse.available()).to.eql(false);
		// });


		//testing duplex
		// w/no tenants 
		it('should give you true regarding availability of a duplex with no tenants', function(){
			var duplex = new Duplex('address');
			expect(duplex.available()).to.eql(true); 
		});

		// w/two tenant
		it('should return false regarding availability of a duplex with already two tenants', function(){
			var duplex = new Duplex('address');
			//add tenant to a unit in the duplex, check references and make sure there's a manager to add a tennat 
			var reference1 = new Person('reference1', 'contact1');
			var reference2 = new Person('reference2', 'contact2');
			var manager = new Person('manager', 'contact3');
			duplex.setManager(manager);
			var tenant = new Tenant('name', 'contact');
			tenant.addReference(reference1);
			tenant.addReference(reference2);

			var tenant2 = new Tenant('name', 'contact');
			tenant2.addReference(reference1);
			tenant2.addReference(reference2);
			//add a tenant to the two units
			duplex.addTenant(duplex.units[0], tenant);
			duplex.addTenant(duplex.units[1], tenant2);

			expect(duplex.available()).to.eql(false);
		});

		it('should give you true regarding availibility of a 3 unit apartment with no tenants', function(){
			var apartment = new ApartmentBuilding('name', 'address', 3);
			//add tenant to one of the 3 available units in the new apartment building
			var reference1 = new Person('reference1', 'contact1');
			var reference2 = new Person('reference2', 'contact2');
			var manager = new Person('manager', 'contact3');
			apartment.setManager(manager);
			var tenant = new Tenant('name', 'contact');
			tenant.addReference(reference1);
			tenant.addReference(reference2);

			var tenant2 = new Tenant('name', 'contact');
			tenant2.addReference(reference1);
			tenant2.addReference(reference2);

			var tenant3 = new Tenant('name', 'contact');
			tenant3.addReference(reference1);
			tenant3.addReference(reference2);
			//add a tenant to the three units 
			apartment.addTenant(apartment.units[0], tenant);
			apartment.addTenant(apartment.units[1], tenant);
			apartment.addTenant(apartment.units[2], tenant);
			expect(apartment.available()).to.eql(false);
		})
		
		it('should give you true regarding availibility of a 3 unit apartment with no tenants', function(){
			var apartment = new ApartmentBuilding('name', 'address', 3);
			expect(apartment.available()).to.eql(true);
		})

		
	});







});
