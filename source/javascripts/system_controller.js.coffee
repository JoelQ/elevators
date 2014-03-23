class @SystemController
  constructor: ->
    canvas = document.getElementById('elevators')
    ctx = canvas.getContext('2d')
    @system = new System
    @view = new SystemView(@system, ctx)

  start: ->
    @view.render()
