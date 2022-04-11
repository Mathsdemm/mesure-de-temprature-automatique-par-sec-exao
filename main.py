def on_log_full():
    global enregistrer
    enregistrer = False
    basic.show_icon(IconNames.NO)
datalogger.on_log_full(on_log_full)

def on_button_pressed_a():
    global enregistrer
    enregistrer = not (enregistrer)
    if enregistrer:
        basic.show_icon(IconNames.HEART)
    else:
        basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_string("effacement données")
    datalogger.delete_log()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

enregistrer = False
enregistrer = False
datalogger.set_columns(["temprerature"])

def on_every_interval():
    if enregistrer:
        datalogger.log_data([datalogger.create_cv("temperature", dstemp.celsius(DigitalPin.P1))])
loops.every_interval(1000, on_every_interval)
