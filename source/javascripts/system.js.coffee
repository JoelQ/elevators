class @System
  constructor: ->
    @building = new Building
    @car = new Car
    @character = new Character

  currentLocation: ->
    @car.location

  moveTo: (destination) ->
    @destination = destination

  tick: ->
    if @car.location < @destination
      @car.moveUp()
    else if @car.location > @destination
      @car.moveDown()
