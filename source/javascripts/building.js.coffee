class @Building

  constructor: ->
    @x = 200
    @y = 50
    @height = 400
    @width = 230
    @floorHeight = 50

  farSide: ->
    @x + @width

  lastFloor: ->
    @y + @floorHeight

  firstFloor: ->
    @y + @height - @floorHeight
