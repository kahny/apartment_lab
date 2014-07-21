
var expect = require("chai").expect;
var Person = require("../../src/people/person.js");
var Tenant = require("../../src/people/tenant.js");


describe("Tenant", function(){
	beforeEach(function() {
  		tenant = new Tenant('name', 'phone');
  	});

	it('can call the Person objects name and contact', function(){
		
		expect(tenant.name).to.eql('name');
		expect(tenant.contact).to.eql('phone');
	});

	describe('#addReference', function(){
		it('should add a property to the Manager\'s property list', function(){
			var reference = new Person("refName", "refPhone")
			tenant.addReference(reference);	
			expect(tenant.references).to.eql([reference]) 
		});
	});
});





