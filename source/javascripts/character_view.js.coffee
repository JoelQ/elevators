class @CharacterView
  constructor: (@character, @ctx) ->


  render: ->
    @ctx.beginPath()
    @ctx.moveTo @character.x, @character.y
    @ctx.lineTo @character.x + 12, @character.y - (@character.height/4)
    @ctx.lineTo @character.x + 24, @character.y
    @ctx.stroke()

    @ctx.beginPath()
    @ctx.moveTo @character.x + 12, @character.y - (@character.height/4)
    @ctx.lineTo @character.x + 12, @character.y - 3*(@character.height/4)
    @ctx.stroke()

    @ctx.arc @character.x + 12, @character.y - 7*(@character.height/8), 5, 2*Math.PI, false
    @ctx.stroke()
