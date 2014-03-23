class @CarView
  constructor: (@car, @ctx) ->
    @buildingBaseX = 200
    @buildingBaseY = 450

  render: ->
    @ctx.strokeRect @x(), @y(), 30, 50

  x: ->
    @buildingBaseX + 150

  y: ->
    @buildingBaseY - 50 - @car.location

