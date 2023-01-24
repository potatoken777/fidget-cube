let letter = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        basic.showString("A", 5)
basic.showString("B", 5)
basic.showString("C", 5)
basic.showString("D", 5)
    }
    letter = randint(1, 4)
    if (letter == 1) {
        basic.showString("A")
    } else if (letter == 2) {
        basic.showString("B")
    } else if (letter == 3) {
        basic.showString("C")
    } else {
        basic.showString("D")
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 50; index++) {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . # # .
            . . . . .
            . . # . .
            `, 10)
basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hi")
})
