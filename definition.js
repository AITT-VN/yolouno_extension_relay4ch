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
            ["Tắt", "0"]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#cb2026",
      "tooltip": "Điều khiển Relay 1",
      "helpUrl": ""
    });
  }
};

Blockly.Python['relay_control_1'] = function (block) {
  var state = block.getFieldValue('state');
  var code = 'relay_driver.setRelay(0, ' + state + ')\n'; // Điều khiển Relay 1 (kênh 0)
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
            ["Tắt", "0"]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#cb2026",
      "tooltip": "Điều khiển Relay 2",
      "helpUrl": ""
    });
  }
};

Blockly.Python['relay_control_2'] = function (block) {
  var state = block.getFieldValue('state');
  var code = 'relay_driver.setRelay(1, ' + state + ')\n'; // Điều khiển Relay 2 (kênh 1)
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
            ["Tắt", "0"]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#cb2026",
      "tooltip": "Điều khiển Relay 3",
      "helpUrl": ""
    });
  }
};

Blockly.Python['relay_control_3'] = function (block) {
  var state = block.getFieldValue('state');
  var code = 'relay_driver.setRelay(2, ' + state + ')\n'; // Điều khiển Relay 3 (kênh 2)
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
            ["Tắt", "0"]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#cb2026",
      "tooltip": "Điều khiển Relay 4",
      "helpUrl": ""
    });
  }
};

Blockly.Python['relay_control_4'] = function (block) {
  var state = block.getFieldValue('state');
  var code = 'relay_driver.setRelay(3, ' + state + ')\n'; // Điều khiển Relay 4 (kênh 3)
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
            ["Tắt", "0"]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "state_2",
          "options": [
            ["Bật", "1"],
            ["Tắt", "0"]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "state_3",
          "options": [
            ["Bật", "1"],
            ["Tắt", "0"]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "state_4",
          "options": [
            ["Bật", "1"],
            ["Tắt", "0"]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#cb2026",
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
  code += 'relay_driver.setRelay(0, ' + state_1 + ')\n'; // Điều khiển Relay 1 (kênh 0)
  code += 'relay_driver.setRelay(1, ' + state_2 + ')\n'; // Điều khiển Relay 2 (kênh 1)
  code += 'relay_driver.setRelay(2, ' + state_3 + ')\n'; // Điều khiển Relay 3 (kênh 2)
  code += 'relay_driver.setRelay(3, ' + state_4 + ')\n'; // Điều khiển Relay 4 (kênh 3)
  
  return code;
};