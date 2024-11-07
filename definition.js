Blockly.Blocks['relay_toggle_control'] = {
  init: function () {
    this.jsonInit({
      "type": "relay_toggle_control",
      "message0": "%1 relay %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "state",
          "options": [
            ["bật", "1"],
            ["tắt", "0"],
            ["đảo trạng thái", "toggle"]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "relay",
          "options": [
            ["tất cả", "tất cả"],
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"]
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
  Blockly.Python.definitions_['import_relay_driver'] = 'from relay_4chs import *';
  var state = block.getFieldValue('state');
  var relay = block.getFieldValue('relay');
  var code = "";

  if (state === "toggle") {
    if (relay === "tất cả") {
      code = 'relay_17.toggle_relay(0)\n';  // Toggle tất cả
    } else {
      code = 'relay_17.toggle_relay(' + relay + ')\n';  // Toggle một kênh cụ thể
    }
  } else {
    var state_value = (state === "1") ? '1' : '0';  // Chuyển đổi trạng thái bật/tắt
    if (relay === "tất cả") {
      code = 'relay_17.set_relay(0, ' + state_value + ')\n';  // Bật/tắt tất cả các kênh
    } else {
      code = 'relay_17.set_relay(' + relay + ', ' + state_value + ')\n';  // Bật/tắt một kênh cụ thể
    }
  }

  return code;
};


Blockly.Blocks['relay_get_state'] = {
  init: function() {
    this.jsonInit({
      "type": "relay_get_state",
      "message0": "đọc trạng thái relay %1",
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
  Blockly.Python.definitions_['import_relay_driver'] = 'from relay_4chs import *';
  var relay = block.getFieldValue('relay');  
  var code = 'relay_17.get_relay(' + relay + ')';  // Đọc trạng thái của một kênh relay cụ thể
  
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Blocks['change_relay_address'] = {
  init: function () {
    this.jsonInit({
      "type": "change_relay_address",
      "message0": "đổi địa chỉ relay %1 %2 thành %3",
      "args0": [
        {
          "type": "input_value",
          "name": "old_address",
          "check": "Number"
        },
        { "type": "input_dummy" },
        {
          "type": "input_value",
          "name": "new_address",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#18820c",
      "tooltip": "Đổi địa chỉ của một relay từ địa chỉ cũ sang địa chỉ mới",
      "helpUrl": ""
    });
  }
};

Blockly.Python['change_relay_address'] = function (block) {
  Blockly.Python.definitions_['import_relay_driver'] = 'from relay_4chs import *';
  var old_address = Blockly.Python.valueToCode(block, 'old_address', Blockly.Python.ORDER_ATOMIC);
  var new_address = Blockly.Python.valueToCode(block, 'new_address', Blockly.Python.ORDER_ATOMIC);
  
  var code = `if 'relay_${old_address}' not in globals():\n`;
  code += `  relay_${old_address} = RelayController(${old_address})\n`;
  code += `relay_${old_address}.change_relay_address(${new_address})\n`;
  code += `relay_${new_address} = RelayController(${new_address})\n`;
  code += `time.sleep_ms(100)\n`;
  return code;
};

Blockly.Blocks['control_relay_at_address'] = {
  init: function () {
    this.jsonInit({
      "type": "control_relay_at_address",
      "message0": "%1 relay %2 tại địa chỉ %3",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "state",
          "options": [
            ["bật", "1"],
            ["tắt", "0"],
            ["đảo trạng thái", "toggle"]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "relay",
          "options": [
            ["tất cả", "tất cả"],
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"]
          ]
        },
        {
          "type": "input_value",
          "name": "address",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#18820c",
      "tooltip": "Bật/tắt/đảo trạng thái relay tại địa chỉ được nhập",
      "helpUrl": ""
    });
  }
};

Blockly.Python['control_relay_at_address'] = function (block) {
  Blockly.Python.definitions_['import_relay_driver'] = 'from relay_4chs import *';
  var state = block.getFieldValue('state');
  var relay = block.getFieldValue('relay');
  var address = Blockly.Python.valueToCode(block, 'address', Blockly.Python.ORDER_ATOMIC);
  var code = "";

  var relay_code = (relay == "tất cả") ? '0' : relay;  // Chọn relay cụ thể hoặc tất cả

  if (state === "toggle") {
    code = `relay_${address}.toggle_relay(${relay_code})\n`;  // Toggle
  } else {
    var state_value = (state === "1") ? '1' : '0';  // Chuyển đổi trạng thái bật/tắt
    code = `relay_${address}.set_relay(${relay_code}, ${state_value})\n`;  // Bật/Tắt
  }

  return code;
};

Blockly.Blocks['read_relay_status_at_address'] = {
  init: function () {
    this.jsonInit({
      "type": "read_relay_status_at_address",
      "message0": "đọc trạng thái relay %1 tại địa chỉ %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "relay",
          "options": [
            ["tất cả", "tất cả"],
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"]
          ]
        },
        {
          "type": "input_value",
          "name": "address",
          "check": "Number"
        }
      ],
      "output": "Number",
      "colour": "#18820c",
      "tooltip": "Đọc trạng thái của relay tại địa chỉ được nhập",
      "helpUrl": ""
    });
  }
};

Blockly.Python['read_relay_status_at_address'] = function (block) {
  Blockly.Python.definitions_['import_relay_driver'] = 'from relay_4chs import *';
  var relay = block.getFieldValue('relay');
  var address = Blockly.Python.valueToCode(block, 'address', Blockly.Python.ORDER_ATOMIC);
  var code = "";
  var relay_code = (relay == "tất cả") ? '0' : relay;  
  var code = `relay_${address}.get_relay(${relay_code})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
}; 