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
