class @SystemView
  constructor: (@system, @ctx) ->
    @buildingView = new BuildingView(@system.building, @ctx)
    @carView = new CarView(@system.car, @system.building, @ctx)

  render: ->
    @ctx.clearRect 0, 0, 500, 500
    @ctx.strokeRect 50, 50, 100, 50
    @ctx.font = '50px Arial'
    @ctx.fillText @_currentLocation(), 65, 93

    @buildingView.render()
    @carView.render()


  _currentLocation: ->
    "0#{Math.floor(@system.currentLocation()/50)}"
