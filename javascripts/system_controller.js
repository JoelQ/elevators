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
