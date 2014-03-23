(function() {
  this.Car = (function() {
    function Car() {
      this.location = 0;
      this.width = 30;
      this.height = 50;
    }

    Car.prototype.moveUp = function() {
      return this.location += 1;
    };

    Car.prototype.moveDown = function() {
      return this.location -= 1;
    };

    return Car;

  })();

}).call(this);
