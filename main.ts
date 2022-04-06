datalogger.onLogFull(function () {
    enregistrer = false
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    enregistrer = !(enregistrer)
    if (enregistrer) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("effacement données")
    datalogger.deleteLog()
})
let enregistrer = false
enregistrer = false
datalogger.setColumns(["temperature"])
loops.everyInterval(1000, function () {
    if (enregistrer) {
        datalogger.logData([datalogger.createCV("temperature", input.temperature())])
    }
})
