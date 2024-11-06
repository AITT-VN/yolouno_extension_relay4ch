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
