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

BBlockly.Python['relay_toggle_control'] = function (block) {
  // Đảm bảo các thư viện cần thiết được import vào
  Blockly.Python.definitions_['import_relay_driver'] = 'from relay_driver import *';
  
  var relay = block.getFieldValue('relay');
  var state = block.getFieldValue('state');
  
  var code = "";
  
  // Kiểm tra trạng thái là "Đảo trạng thái"
  if (state === "toggle") {
    code = 'relay_driver.toggleRelay(' + relay + ')\n';  // Gọi hàm toggleRelay để đảo trạng thái
  } else {
    if (state === "1") {
      code = 'relay_driver.setRelay(' + relay + ', 1)\n';  // Gọi hàm setRelay để bật kênh
    } else {
      code = 'relay_driver.setRelay(' + relay + ', 0)\n';  // Gọi hàm setRelay để tắt kênh
    }
  }
  
  return code;
};