input.onGesture(Gesture.TiltLeft, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 200; index++) {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . # # .
            . . . . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
