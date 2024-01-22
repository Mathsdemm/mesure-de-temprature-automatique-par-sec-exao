datalogger.onLogFull(function () {
    enregistrer = false
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    enregistrer = !(enregistrer)
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
        datalogger.logData([datalogger.createCV("T1", dstemp.celsius(DigitalPin.P0)), datalogger.createCV("T2", dstemp.celsius(DigitalPin.P1))])
    }
})
loops.everyInterval(60000, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    if (enregistrer) {
        basic.showNumber(dstemp.celsius(DigitalPin.P0))
        basic.clearScreen()
        basic.showNumber(dstemp.celsius(DigitalPin.P1))
        basic.clearScreen()
    }
})
