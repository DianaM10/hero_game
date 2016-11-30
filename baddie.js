var Baddie = function(name, faveFood) {
  this.name = name;
  this.health = 50;
  this.faveFood = faveFood;
  this.isAlive = true;
  };

  Baddie.prototype = {
    talk: function() {
      return("I am " + this.name + ".");
    },

      foodWontPutBaddieOver100: function(food) {
        if ((this.health + food.value) <= 100) {
          return true;
        } else {
          return false;
        }
      },

      foodWontPutBaddieUnder1: function(food) {
        if ((this.health + food.value) >= 1)  {
          return true;
        } else {
          return false;
        }
      },

      eat: function(food) {
        if (food.name === this.faveFood) {
          food.value *= 1.5;
        };
        if ((this.foodWontPutBaddieOver100(food)) && (this.foodWontPutBaddieUnder1(food))) {
          this.health += food.value;
        } else if (this.foodWontPutBaddieOver100(food) === false) {
          this.health = 100;
        }  else { 
          this.health = 0;
          this.isAlive = false;
        }
      }
    };



    module.exports = Baddie;





