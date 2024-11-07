from machine import SoftI2C, Pin
import time

class RelayController:
    # Định nghĩa các hằng số
    CMD_CHANNEL_CTRL = 0x10
    I2C_ADDR = 0x11

    def __init__(self, scl_pin, sda_pin, freq=100000):
        self.i2c = SoftI2C(scl=Pin(scl_pin), sda=Pin(sda_pin), freq=freq)
        self.channel_state = 0x00

    def get_relay(self, index):
        if index == 0:
            return self.channel_state  # Lấy trạng thái của tất cả các kênh
        else:
            return (self.channel_state >> (index - 1)) & 0x01  # Lấy trạng thái kênh cụ thể

    def set_relay(self, index, value):
        if index == 0:
            self.channel_state = 0x0F if value == 1 else 0x00  # Đặt tất cả các kênh
        else:
            if value == 1:
                self.channel_state |= (1 << (index - 1))  # Bật kênh cụ thể
            else:
                self.channel_state &= ~(1 << (index - 1))  # Tắt kênh cụ thể
        self.i2c.writeto_mem(self.I2C_ADDR, self.CMD_CHANNEL_CTRL, bytes([self.channel_state]))

    def toggle_relay(self, index):
        if index == 0:
            self.channel_state ^= 0x0F  # Đảo trạng thái của tất cả các kênh
        else:
            self.channel_state ^= (1 << (index - 1))  # Đảo trạng thái kênh cụ thể
        self.i2c.writeto_mem(self.I2C_ADDR, self.CMD_CHANNEL_CTRL, bytes([self.channel_state]))

relay_controller = RelayController(scl_pin=12, sda_pin=11)