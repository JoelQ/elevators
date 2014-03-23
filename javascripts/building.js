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
      return this.y + this.floorHeight;
    };

    Building.prototype.firstFloor = function() {
      return this.y + this.height - this.floorHeight;
    };

    return Building;

  })();

}).call(this);
