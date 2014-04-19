class @Car
  constructor: ->
    @location = 0
    @width = 30
    @height = 50
    @passengers = []

  moveUp: ->
    @location += 1

  moveDown: ->
    @location -= 1
