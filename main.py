for i in range(10):
    basic.show_number(9-i)
basic.clear_screen()

#serial.write_line("accel")
#serial.set_tx_buffer_size(8)

for i in range(2046):
    serial.write_line(str(input.magnetic_force(Dimension.STRENGTH)))
    if i % 10 == 0:
        led.toggle(2,2)
    basic.pause(100)
    
