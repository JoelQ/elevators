class @SystemView
  constructor: (@system, @ctx) ->

  render: ->
    @ctx.strokeRect 50, 50, 100, 50
    @ctx.font = '50px Arial'
    @ctx.fillText @_currentLocation(), 65, 93


  _currentLocation: ->
    "0#{@system.currentLocation()}"
