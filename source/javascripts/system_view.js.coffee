class @SystemView
  constructor: (@system, @ctx) ->
    @carView = new CarView(@system.car, @ctx)

  render: ->
    @ctx.clearRect 0, 0, 500, 500
    @ctx.strokeRect 50, 50, 100, 50
    @ctx.font = '50px Arial'
    @ctx.fillText @_currentLocation(), 65, 93

    @ctx.strokeRect 200, 50, 230, 400
    for y in [100..400] by 50
      @ctx.beginPath()
      @ctx.moveTo 200, y
      @ctx.lineTo 430, y
      @ctx.stroke()

    @carView.render()


  _currentLocation: ->
    "0#{Math.floor(@system.currentLocation()/50)}"
