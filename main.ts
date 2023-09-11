datalogger.onLogFull(function () {
    Logging = false
    basic.showIcon(IconNames.Sword)
})
input.onButtonPressed(Button.A, function () {
    Logging = true
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
    basic.showIcon(IconNames.Skull)
    datalogger.setColumnTitles(
    "Temperature",
    "Light"
    )
})
input.onButtonPressed(Button.B, function () {
    Logging = false
    basic.showIcon(IconNames.No)
})
let Logging = false
Logging = false
basic.showIcon(IconNames.No)
datalogger.setColumnTitles(
"Temperature",
"Light"
)
loops.everyInterval(60000, function () {
    if (Logging) {
        basic.showIcon(IconNames.Yes)
        datalogger.log(
        datalogger.createCV("Temperature", input.temperature()),
        datalogger.createCV("Light", input.lightLevel())
        )
        basic.clearScreen()
    }
})
