input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . # # .
            . . . . .
            . . # . .
            `)
    }
})
