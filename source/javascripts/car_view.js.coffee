class @CarView
  constructor: (@car, @building, @ctx) ->
    @buildingBaseX = 200
    @buildingBaseY = 450

  render: ->
    @ctx.strokeRect @car.x, @car.y, @car.width, @car.height
