class @Car
  constructor: ->
    @location = 0
    @width = 30
    @height = 50

  moveUp: ->
    @location += 1

  moveDown: ->
    @location -= 1
