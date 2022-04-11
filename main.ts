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
    basic.showString("clear")
    datalogger.deleteLog()
})
let enregistrer = false
enregistrer = false
datalogger.setColumns(["temperature"])
loops.everyInterval(60000, function () {
    if (enregistrer) {
        datalogger.logData([datalogger.createCV("temperature", dstemp.celsius(DigitalPin.P1))])
    }
})
