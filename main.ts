input.onButtonPressed(Button.A, function () {
    AreaCircle = Pi * Radius ** 2
    basic.showNumber(AreaCircle)
})
input.onButtonPressed(Button.AB, function () {
    VolumeSphere = 4 / 3 * Pi * Radius ** 3
    basic.showNumber(VolumeSphere)
})
input.onButtonPressed(Button.B, function () {
    Circunference = 2 * (Pi / Radius)
    basic.showNumber(Circunference)
})
let Circunference = 0
let VolumeSphere = 0
let AreaCircle = 0
let Pi = 0
let Radius = 0
Radius = 4
Pi = 3.14159265
basic.forever(function () {
	
})
