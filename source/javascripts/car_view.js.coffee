class @CarView
  constructor: (@car, @building, @ctx) ->
    @buildingBaseX = 200
    @buildingBaseY = 450

  render: ->
    @ctx.strokeRect @x(), @y(), @car.width, @car.height

  x: ->
    @building.x + 150

  y: ->
    @building.y + @building.height - @car.height - @car.location

