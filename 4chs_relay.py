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

def get_channel_state(channel):
    global channel_state
    # Kiểm tra xem kênh đã bật hay chưa dựa vào bit của channel
    if channel_state & (1 << (channel - 1)):  # Kiểm tra bit tương ứng với channel
        return 1  # Kênh bật
    else:
        return 0  # Kênh tắt


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
    current_state = get_channel_state(channel)
    if current_state == 1:
        channel_state &= ~(1 << (channel - 1))  # Tắt kênh
    else:
        channel_state |= (1 << (channel - 1))  # Bật kênh    
    i2c.writeto_mem(i2c_addr, CMD_CHANNEL_CTRL, bytes([channel_state]))

