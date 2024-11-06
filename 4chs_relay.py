from machine import SoftI2C, Pin
import time

global channel_state;
# Định nghĩa các hằng số
CMD_CHANNEL_CTRL = 0x10

# Địa chỉ I2C của thiết bị
i2c_addr = 0x11

# Khởi tạo đối tượng I2C
i2c = SoftI2C(scl=SCL_PIN, sda=SDA_PIN, freq=100000)


def channel_control(state):
    channel_state = state

    i2c.writeto_mem(i2c_addr, CMD_CHANNEL_CTRL, bytes([channel_state]))

def turn_off_channel(channel):
    channel_state = 0
    channel_state &= ~(1 << (channel - 1))
    print(channel_state)

    i2c.writeto_mem(i2c_addr, CMD_CHANNEL_CTRL, bytes([channel_state]))
    
def turn_on_channel(channel):
    channel_state = 1
    channel_state = (1 << (channel - 1))
    print(channel_state)

    i2c.writeto_mem(i2c_addr, CMD_CHANNEL_CTRL, bytes([channel_state]))

while True: 
  #channel_control(0x01 | 0x02 | 0x04 | 0x08)
  for i in range(1, 5):
    turn_on_channel(i)
    time.sleep(1)
    turn_off_channel(i)
    time.sleep(1)
    i += 1
    if i > 4:
      i = 1