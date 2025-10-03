bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    receivedString = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (receivedString == "up") {
        pins.analogWritePin(AnalogPin.P12, 1023)
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P14, 1023)
    }
    if (receivedString == "down") {
        pins.analogWritePin(AnalogPin.P12, 0)
        pins.analogWritePin(AnalogPin.P13, 1023)
        pins.analogWritePin(AnalogPin.P15, 1023)
        pins.analogWritePin(AnalogPin.P14, 0)
    }
    if (receivedString == "right") {
        pins.analogWritePin(AnalogPin.P12, 0)
        pins.analogWritePin(AnalogPin.P13, 1023)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P14, 1023)
    }
    if (receivedString == "left") {
        pins.analogWritePin(AnalogPin.P12, 1023)
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P15, 1023)
        pins.analogWritePin(AnalogPin.P14, 0)
    }
    if (receivedString == "stop") {
        pins.analogWritePin(AnalogPin.P12, 0)
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
    }
    if (receivedString.charAt(0) == "x") {
        pins.servoWritePin(AnalogPin.P10, parseFloat(receivedString.substr(1, 3)))
    }
    if (receivedString.charAt(0) == "c") {
        pins.servoWritePin(AnalogPin.P10, parseFloat(receivedString.substr(1, 3)))
    }
})
let receivedString = ""
bluetooth.startUartService()
basic.showIcon(IconNames.Square)
