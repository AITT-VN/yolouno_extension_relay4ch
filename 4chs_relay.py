from machine import SoftI2C, Pin
import time

global channel_state
# Định nghĩa các hằng số
CMD_CHANNEL_CTRL = 0x10

# Địa chỉ I2C của thiết bị
i2c_addr = 0x11

# Khởi tạo đối tượng I2C
i2c = SoftI2C(scl=SCL_PIN, sda=SDA_PIN, freq=100000)

channel_state = 0 

def get_channel_state():
    global channel_state
    return channel_state

def channel_control(state):
    global channel_state
    channel_state = state
    i2c.writeto_mem(i2c_addr, CMD_CHANNEL_CTRL, bytes([channel_state]))

def turn_off_channel(channel):
    global channel_state
    channel_state &= ~(1 << (channel - 1))  
    i2c.writeto_mem(i2c_addr, CMD_CHANNEL_CTRL, bytes([channel_state]))

def turn_on_channel(channel):
    global channel_state
    channel_state |= (1 << (channel - 1))  
    i2c.writeto_mem(i2c_addr, CMD_CHANNEL_CTRL, bytes([channel_state]))

def toggle_channel(channel):
    global channel_state
    channel_state ^= (1 << (channel - 1))  
    print(f"Trạng thái kênh sau khi đảo: {bin(channel_state)}")
    i2c.writeto_mem(i2c_addr, CMD_CHANNEL_CTRL, bytes([channel_state]))
