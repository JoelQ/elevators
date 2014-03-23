(function() {
  this.SystemView = (function() {
    function SystemView(system, ctx) {
      this.system = system;
      this.ctx = ctx;
      this.buildingView = new BuildingView(this.system.building, this.ctx);
      this.carView = new CarView(this.system.car, this.system.building, this.ctx);
    }

    SystemView.prototype.render = function() {
      this.ctx.clearRect(0, 0, 500, 500);
      this.ctx.strokeRect(50, 50, 100, 50);
      this.ctx.font = '50px Arial';
      this.ctx.fillText(this._currentLocation(), 65, 93);
      this.buildingView.render();
      return this.carView.render();
    };

    SystemView.prototype._currentLocation = function() {
      return "0" + (Math.floor(this.system.currentLocation() / 50));
    };

    return SystemView;

  })();

}).call(this);
