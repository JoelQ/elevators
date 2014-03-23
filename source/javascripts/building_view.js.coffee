class @BuildingView
  constructor: (@building, @ctx) ->

  render: ->
    @ctx.strokeRect @building.x, @building.y, @building.width, @building.height
    for y in [@building.lastFloor()..@building.firstFloor()] by @building.floorHeight
      @ctx.beginPath()
      @ctx.moveTo @building.x, y
      @ctx.lineTo @building.farSide(), y
      @ctx.stroke()
