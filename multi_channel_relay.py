import machine
import time

class MultiChannelRelay:
    CMD_CHANNEL_CTRL = 0x10
    CMD_SAVE_I2C_ADDR = 0x11
    CMD_READ_I2C_ADDR = 0x12
    CMD_READ_FIRMWARE_VER = 0x13

    def __init__(self, address=0x11):
        self._i2c_addr = address
        self.channel_state = 0
        self.i2c = machine.I2C(1, scl=machine.Pin(22), sda=machine.Pin(21))  # Thay đổi các chân nếu cần

    def begin(self):
        pass  # Không cần khởi động gì thêm cho I2C

    def change_i2c_address(self, new_addr, old_addr):
        self.i2c.writeto(old_addr, bytearray([self.CMD_SAVE_I2C_ADDR, new_addr]))
        self._i2c_addr = new_addr

    def get_firmware_version(self):
        self.i2c.writeto(self._i2c_addr, bytearray([self.CMD_READ_FIRMWARE_VER]))
        time.sleep(0.1)  # Đợi một chút trước khi đọc
        return self.i2c.readfrom(self._i2c_addr, 1)[0]

    def get_channel_state(self):
        return self.channel_state

    def channel_ctrl(self, state):
        self.channel_state = state
        self.i2c.writeto(self._i2c_addr, bytearray([self.CMD_CHANNEL_CTRL, self.channel_state]))

    def turn_on_channel(self, channel):
        self.channel_state |= (1 << (channel - 1))
        self.channel_ctrl(self.channel_state)

    def turn_off_channel(self, channel):
        self.channel_state &= ~(1 << (channel - 1))
        self.channel_ctrl(self.channel_state)

    def scan_i2c_device(self):
        found_devices = []
        for address in range(1, 128):
            try:
                self.i2c.writeto(address, b'')
                found_devices.append(address)
                print(f"I2C device found at address 0x{address:02X}")
            except OSError:
                pass  # Không có thiết bị tại địa chỉ này

        if len(found_devices) == 0:
            print("No I2C devices found")
            return 0x00
        elif len(found_devices) == 1:
            return found_devices[0]
        else:
            print(f"Found {len(found_devices)} devices")
            return 0x00
