class @SystemController
  constructor: ->
    canvas = document.getElementById('elevators')
    ctx = canvas.getContext('2d')

    document.body.onkeypress = @_handleKeypress

    @system = new System
    @view = new SystemView(@system, ctx)


  tick: =>
    @system.tick()
    @view.render()
    requestAnimationFrame @tick

  start: ->
    requestAnimationFrame @tick

  _handleKeypress: (e) =>
    floor =  e.keyCode - 48
    if 0 <= floor < 8
      @system.moveTo floor
