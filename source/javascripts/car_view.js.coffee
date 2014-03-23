class @CarView
  constructor: (@car, @building, @ctx) ->
    @buildingBaseX = 200
    @buildingBaseY = 450

  render: ->
    @ctx.strokeRect @x(), @y(), 30, 50

  x: ->
    @building.x + 150

  y: ->
    @building.y + @building.height - 50 - @car.location

