class @CharacterView
  constructor: (@character, @ctx) ->


  render: ->
    @ctx.beginPath()
    @ctx.moveTo @character.x, @character.y
    @ctx.lineTo @character.x + 10, @character.y - (@character.height/4)
    @ctx.lineTo @character.x + 20, @character.y

    @ctx.moveTo @character.x + 10, @character.y - (@character.height/4)
    @ctx.lineTo @character.x + 10, @character.y - 3*(@character.height/4)

    @ctx.moveTo @character.x + 15, @character.y - 7*(@character.height/8)
    @ctx.arc @character.x + 10, @character.y - 7*(@character.height/8), 5, 2*Math.PI, false
    @ctx.stroke()
