(function() {
  this.CarView = (function() {
    function CarView(car, building, ctx) {
      this.car = car;
      this.building = building;
      this.ctx = ctx;
      this.buildingBaseX = 200;
      this.buildingBaseY = 450;
    }

    CarView.prototype.render = function() {
      return this.ctx.strokeRect(this.x(), this.y(), this.car.width, this.car.height);
    };

    CarView.prototype.x = function() {
      return this.building.x + 150;
    };

    CarView.prototype.y = function() {
      return this.building.y + this.building.height - this.car.height - this.car.location;
    };

    return CarView;

  })();

}).call(this);
