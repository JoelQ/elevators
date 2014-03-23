class @System
  constructor: ->
    @car = new Car

  currentLocation: ->
    @car.location

  moveTo: (destination) ->
    @destination = destination

  tick: ->
    if @car.location < @destination
      @car.moveUp()
    else if @car.location > @destination
      @care.moveDown()
