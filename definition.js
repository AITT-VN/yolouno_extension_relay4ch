Blockly.Blocks['relay_toggle_control'] = {
  init: function () {
    this.jsonInit({
      "type": "relay_toggle_control",
      "message0": "relay %1 %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "relay",
          "options": [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["tất cả", "tất cả"]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "state",
          "options": [
            ["bật", "1"],
            ["tắt", "0"],
            ["đảo trạng thái", "toggle"]
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
  Blockly.Python.definitions_['import_relay_driver'] = 'from relay import *';
  var relay = block.getFieldValue('relay');
  var state = block.getFieldValue('state');
  var code = "";

  if (state === "toggle") {
    if (relay == "tất cả") {
      code = 'toggle_relay(0)\n';  // Toggle tất cả
    } else {
      code = 'toggle_relay(' + relay + ')\n';  // Toggle một kênh cụ thể
    }
  } else {
    if (state === "1") {
      if (relay == "tất cả") {
        code = 'set_relay(0, 1)\n';  // Bật tất cả các kênh
      } else {
        code = 'set_relay(' + relay + ', 1)\n';  // Bật một kênh cụ thể
      }
    } else {
      if (relay == "tất cả") {
        code = 'set_relay(0, 0)\n';  // Tắt tất cả các kênh
      } else {
        code = 'set_relay(' + relay + ', 0)\n';  // Tắt một kênh cụ thể
      }
    }
  }
  
  return code;
};

Blockly.Blocks['relay_get_state'] = {
  init: function() {
    this.jsonInit({
      "type": "relay_get_state",
      "message0": "trạng thái relay %1",
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
        }
      ],
      "output": "Number",  // Định nghĩa kiểu dữ liệu đầu ra là Number
      "colour": "#18820c",
      "tooltip": "Lấy trạng thái bật/tắt của Relay",
      "helpUrl": ""
    });
  }
};

Blockly.Python['relay_get_state'] = function(block) {
  Blockly.Python.definitions_['import_relay_driver'] = 'from relay import *';
  var relay = block.getFieldValue('relay');  
  var code;

  if (relay === "tất cả") {
    code = 'get_relay(0)';  // Lấy trạng thái của tất cả các kênh
  } else {
    code = 'get_relay(' + relay + ')';  // Lấy trạng thái của một kênh cụ thể
  }
  
  return [code, Blockly.Python.ORDER_ATOMIC];
};
