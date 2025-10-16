/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mercy
 * Created on: Oct 2025
 * This program changes RGB LED colour.
*/

// clean
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// turn on RGB LED
input.onButtonPressed(Button.A, function() {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)

    // turn on red
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(1000)

    // turn green on
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)

    // turn blue on
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)

    // turn purple on
   pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(1000)

    // turn cyan on
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)

    // turn yellow on
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(1000)

    // turn white on
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)

    // turn off
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
})
