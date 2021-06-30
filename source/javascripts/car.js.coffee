class @Car
  constructor: (building) ->
    @width = 30
    @height = 50
    @x = building.x + 150
    @y = building.y + building.height - @height
    @passengers = []

  moveUp: ->
    @y -= 1

  moveDown: ->
    @y += 1
