class @System
  constructor: ->
    @building = new Building
    @car = new Car(@building)
    @character = new Character

  currentLocation: ->
    @car.location

  moveTo: (floor) ->
    @destination = @building.y + @building.height - (floor * @building.floorHeight) - @car.height

  tick: ->
    if @_loadingPassengers()
      if @_characterInElevator()
        @car.passengers.push @character
        @character.x = undefined
        @character.y = undefined
      else
        @character.x += 5
    else
      console.log @car.y, @destination
      if @car.y > @destination
        @car.moveUp()
      else if @car.y < @destination
        @car.moveDown()

  _loadingPassengers: ->
    @character.y == @car.y

  _characterInElevator: ->
    @character.x > (@building.x + 150)
