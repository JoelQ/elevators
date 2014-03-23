(function() {
  this.Building = (function() {
    function Building() {
      this.x = 200;
      this.y = 50;
      this.height = 400;
      this.width = 230;
      this.floorHeight = 50;
    }

    Building.prototype.farSide = function() {
      return this.x + this.width;
    };

    Building.prototype.lastFloor = function() {
      return this.y - this.floorHeight;
    };

    Building.prototype.firstFloor = function() {
      return this.y + this.height - this.floorHeight;
    };

    return Building;

  })();

}).call(this);
(function() {
  this.BuildingView = (function() {
    function BuildingView(building, ctx) {
      this.building = building;
      this.ctx = ctx;
    }

    BuildingView.prototype.render = function() {
      var y, _i, _ref, _ref1, _ref2, _results;
      this.ctx.strokeRect(this.building.x, this.building.y, this.building.width, this.building.height);
      _results = [];
      for (y = _i = _ref = this.building.lastFloor(), _ref1 = this.building.firstFloor(), _ref2 = this.building.floorHeight; _ref2 > 0 ? _i <= _ref1 : _i >= _ref1; y = _i += _ref2) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.building.x, y);
        this.ctx.lineTo(this.building.farSide(), y);
        _results.push(this.ctx.stroke());
      }
      return _results;
    };

    return BuildingView;

  })();

}).call(this);
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
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.SystemController = (function() {
    function SystemController() {
      this._handleKeypress = __bind(this._handleKeypress, this);
      this.tick = __bind(this.tick, this);
      var canvas, ctx;
      canvas = document.getElementById('elevators');
      ctx = canvas.getContext('2d');
      document.body.onkeypress = this._handleKeypress;
      this.system = new System;
      this.view = new SystemView(this.system, ctx);
    }

    SystemController.prototype.tick = function() {
      this.system.tick();
      this.view.render();
      return requestAnimationFrame(this.tick);
    };

    SystemController.prototype.start = function() {
      return requestAnimationFrame(this.tick);
    };

    SystemController.prototype._handleKeypress = function(e) {
      var floor;
      floor = e.keyCode - 48;
      if ((0 <= floor && floor < 8)) {
        return this.system.moveTo(floor * 50);
      }
    };

    return SystemController;

  })();

}).call(this);
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
