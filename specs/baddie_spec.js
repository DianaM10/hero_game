var Baddie = require('../baddie');
var Food = require('../food');
var Rat = require('../rat');
var assert = require("assert");



describe("Baddie", function() {

  var baddie1;
  var food1;
  var food2;
  var rat1;

  beforeEach(function() {
   baddie1 = new Baddie('Sherri Martel', 'Cheeseburger');
   food1 = new Food('Cheeseburger', 10);
   food2 = new Food('Dough balls', 5);
   rat1 = new Rat('Macho King Randy Savage');
  });

  it("should have name", function() {
    assert.equal('Sherri Martel', baddie1.name);
  });

  it("should have fave food", function() {
    assert.equal('Cheeseburger', baddie1.faveFood);
  });

  it("should have health", function() {
    assert.equal(50, baddie1.health);
  });

  it("can say name", function() {
    assert.equal('I am Sherri Martel.', baddie1.talk());
  });

  it("can eat fav food and gain health", function() {
    baddie1.eat(food1);
    assert.equal(65, baddie1.health);
  });

  it("can eat other food and gain health", function() {
    baddie1.eat(food2);
    assert.equal(55, baddie1.health);
  });

  it('loses health eating poisoned food', function() {
    rat1.getSick();
    rat1.contaminate(food1);
    baddie1.eat(food1);
    assert.equal(35, baddie1.health);
  });

  it('cant go over 100', function() {
    baddie1.health = 99;
    assert.equal(false, baddie1.foodWontPutBaddieOver100(food2));
  });

  it('cant go under 1', function() {
    baddie1.health = 6;
    rat1.getSick();
    rat1.contaminate(food1);
    assert.equal(false, baddie1.foodWontPutBaddieUnder1(food1));
  });

  it('loses health eating poisoned food', function() {
    rat1.getSick();
    rat1.contaminate(food1);
    baddie1.eat(food1);
    assert.equal(35, baddie1.health);
  });

  it('cant go over 100 2', function() {
    baddie1.health = 99;
    baddie1.eat(food1)
    assert.equal(100, baddie1.health);
  });

  it('dies if health is 0', function() {
    baddie1.health = 14;
    rat1.getSick();
    rat1.contaminate(food1);
    baddie1.eat(food1);
    assert.equal(0, baddie1.health);
    assert.equal(false, baddie1.isAlive);
  });

});