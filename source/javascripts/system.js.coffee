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
    if @_loadingPassengers()
      if @_characterInElevator()
        @car.passengers.push @character
        @character.x = undefined
        @character.y = undefined
      else
        @character.x += 5
    else
      if @car.location < @destination
        @car.moveUp()
      else if @car.location > @destination
        @car.moveDown()

  _loadingPassengers: ->
    @character.location() == @car.location

  _characterInElevator: ->
    @character.x > (@building.x + 150)
