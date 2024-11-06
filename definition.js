// Khối điều khiển Relay 1
Blockly.Blocks['relay_control_1'] = {
  init: function () {
    this.jsonInit({
      "type": "relay_control_1",
      "message0": "Relay 1 %1",
      "args0": [
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
      "tooltip": "Điều khiển Relay 1",
      "helpUrl": ""
    });
  }
};

Blockly.Python['relay_control_1'] = function (block) {
  var state = block.getFieldValue('state');
  var code = '';

  if (state === 'toggle') {
    code = 'relay_driver.toggleRelay(0)\n';  // Đảo trạng thái Relay 4 (kênh 3)
  } else {
    code = 'relay_driver.setRelay(0, ' + state + ')\n'; // Bật/Tắt Relay 4 (kênh 3)
  }

  return code;
};

// Khối điều khiển Relay 2
Blockly.Blocks['relay_control_2'] = {
  init: function () {
    this.jsonInit({
      "type": "relay_control_2",
      "message0": "Relay 2 %1",
      "args0": [
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
      "tooltip": "Điều khiển Relay 2",
      "helpUrl": ""
    });
  }
};

Blockly.Python['relay_control_2'] = function (block) {
  var state = block.getFieldValue('state');
  var code = '';

  if (state === 'toggle') {
    code = 'relay_driver.toggleRelay(1)\n';  // Đảo trạng thái Relay 4 (kênh 3)
  } else {
    code = 'relay_driver.setRelay(1, ' + state + ')\n'; // Bật/Tắt Relay 4 (kênh 3)
  }

  return code;
};

// Khối điều khiển Relay 3
Blockly.Blocks['relay_control_3'] = {
  init: function () {
    this.jsonInit({
      "type": "relay_control_3",
      "message0": "Relay 3 %1",
      "args0": [
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
      "tooltip": "Điều khiển Relay 3",
      "helpUrl": ""
    });
  }
};

Blockly.Python['relay_control_3'] = function (block) {
  var state = block.getFieldValue('state');
  var code = '';

  if (state === 'toggle') {
    code = 'relay_driver.toggleRelay(2)\n';  // Đảo trạng thái Relay 4 (kênh 3)
  } else {
    code = 'relay_driver.setRelay(2, ' + state + ')\n'; // Bật/Tắt Relay 4 (kênh 3)
  }

  return code;
};

// Khối điều khiển Relay 4
Blockly.Blocks['relay_control_4'] = {
  init: function () {
    this.jsonInit({
      "type": "relay_control_4",
      "message0": "Relay 4 %1",
      "args0": [
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
      "tooltip": "Điều khiển Relay 4",
      "helpUrl": ""
    });
  }
};

Blockly.Python['relay_control_4'] = function (block) {
  var state = block.getFieldValue('state');
  var code = '';

  if (state === 'toggle') {
    code = 'relay_driver.toggleRelay(3)\n';  // Đảo trạng thái Relay 4 (kênh 3)
  } else {
    code = 'relay_driver.setRelay(3, ' + state + ')\n'; // Bật/Tắt Relay 4 (kênh 3)
  }

  return code;
};

// Khối điều khiển 4 kênh relay
Blockly.Blocks['relay_control_4_channels'] = {
  init: function () {
    this.jsonInit({
      "type": "relay_control_4_channels",
      "message0": "Relay 1 %1 Relay 2 %2 Relay 3 %3 Relay 4 %4",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "state_1",
          "options": [
            ["Bật", "1"],
            ["Tắt", "0"],
            ["Đảo trạng thái", "toggle"]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "state_2",
          "options": [
            ["Bật", "1"],
            ["Tắt", "0"],
            ["Đảo trạng thái", "toggle"]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "state_3",
          "options": [
            ["Bật", "1"],
            ["Tắt", "0"],
            ["Đảo trạng thái", "toggle"]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "state_4",
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
      "tooltip": "Điều khiển 4 kênh relay",
      "helpUrl": ""
    });
  }
};

Blockly.Python['relay_control_4_channels'] = function (block) {
  var state_1 = block.getFieldValue('state_1');
  var state_2 = block.getFieldValue('state_2');
  var state_3 = block.getFieldValue('state_3');
  var state_4 = block.getFieldValue('state_4');
  
  var code = '';

  // Xử lý Relay 1
  if (state_1 === 'toggle') {
    code += 'relay_driver.toggleRelay(0)\n'; // Đảo trạng thái Relay 1 (kênh 0)
  } else {
    code += 'relay_driver.setRelay(0, ' + state_1 + ')\n'; // Bật/Tắt Relay 1 (kênh 0)
  }

  // Xử lý Relay 2
  if (state_2 === 'toggle') {
    code += 'relay_driver.toggleRelay(1)\n'; // Đảo trạng thái Relay 2 (kênh 1)
  } else {
    code += 'relay_driver.setRelay(1, ' + state_2 + ')\n'; // Bật/Tắt Relay 2 (kênh 1)
  }

  // Xử lý Relay 3
  if (state_3 === 'toggle') {
    code += 'relay_driver.toggleRelay(2)\n'; // Đảo trạng thái Relay 3 (kênh 2)
  } else {
    code += 'relay_driver.setRelay(2, ' + state_3 + ')\n'; // Bật/Tắt Relay 3 (kênh 2)
  }

  // Xử lý Relay 4
  if (state_4 === 'toggle') {
    code += 'relay_driver.toggleRelay(3)\n'; // Đảo trạng thái Relay 4 (kênh 3)
  } else {
    code += 'relay_driver.setRelay(3, ' + state_4 + ')\n'; // Bật/Tắt Relay 4 (kênh 3)
  }
  
  return code;
};


// Khối điều khiển Relay với các tùy chọn Bật/Tắt/Đảo trạng thái
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
            ["1", "0"],
            ["2", "1"],
            ["3", "2"],
            ["4", "3"]
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
  var relay = block.getFieldValue('relay');
  var state = block.getFieldValue('state');
  
  // Kiểm tra trạng thái là "Đảo trạng thái"
  if (state === "toggle") {
    var code = 'relay_driver.toggleRelay(' + relay + ')\n';  // Giả sử có phương thức toggleRelay
  } else {
    var code = 'relay_driver.setRelay(' + relay + ', ' + state + ')\n';  // Bật/Tắt theo trạng thái
  }
  
  return code;
};
