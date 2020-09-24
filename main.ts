let i: number;
for (i = 0; i < 10; i++) {
    basic.showNumber(9 - i)
}
basic.clearScreen()
// serial.write_line("accel")
// serial.set_tx_buffer_size(8)
for (i = 0; i < 2046; i++) {
    serial.writeLine("" + input.compassHeading())
    if (i % 10 == 0) {
        led.toggle(2, 2)
    }
    
    basic.pause(100)
}
