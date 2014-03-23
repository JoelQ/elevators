(function() {
  this.System = (function() {
    function System() {
      this.building = new Building;
      this.car = new Car;
    }

    System.prototype.currentLocation = function() {
      return this.car.location;
    };

    System.prototype.moveTo = function(destination) {
      return this.destination = destination;
    };

    System.prototype.tick = function() {
      if (this.car.location < this.destination) {
        return this.car.moveUp();
      } else if (this.car.location > this.destination) {
        return this.car.moveDown();
      }
    };

    return System;

  })();

}).call(this);
