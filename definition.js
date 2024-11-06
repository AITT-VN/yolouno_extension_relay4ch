Blockly.Blocks['relay_toggle_control'] = {
  init: function () {
    this.jsonInit({
      "type": "relay_toggle_control",
      "message0": "Relay %1 %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "relay",
          "options": [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "state",
          "options": [
            ["Bật", "1"],
            ["Tắt", "0"],
            ["Đảo trạng thái", "toggle"]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#18820c",
      "tooltip": "Điều khiển Relay với các tùy chọn Bật/Tắt/Đảo trạng thái",
      "helpUrl": ""
    });
  }
};

Blockly.Python['relay_toggle_control'] = function (block) {
  // Đảm bảo thư viện cần thiết được import vào
  Blockly.Python.definitions_['import_relay_driver'] = 'from 4chs_relay import *';
  
  var relay = block.getFieldValue('relay');
  var state = block.getFieldValue('state');
  
  var code = "";
  
  // Kiểm tra trạng thái là "Đảo trạng thái"
  if (state === "toggle") {
    code = 'channel_control(channel_state ^ (1 << (' + relay + ' - 1)))\n';  // Đảo trạng thái kênh
  } else {
    if (state === "1") {
      code = 'turn_on_channel(' + relay + ')\n';  // Gọi hàm turn_on_channel để bật kênh
    } else {
      code = 'turn_off_channel(' + relay + ')\n';  // Gọi hàm turn_off_channel để tắt kênh
    }
  }
  
  return code;
};
