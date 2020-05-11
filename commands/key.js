const KeyManager = require("../lib/key-manager");
const inquirer = require("inquirer");
const colors = require("colors");
const { isRequired } = require("../utils/validation");

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter API key".green + " https://nomics.com",
        validate: isRequired,
      },
    ]);
    const key = keyManager.setKey(input.key);

    if (key) {
      console.log("API key set");
    }
  },
  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();
      console.log("current api key " + key.yellow);
      return key;
    } catch (error) {
      console.error(error.message.red);
    }
  },
  remove() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.deleteKey();
      console.log(" key removed".yellow);
      return;
    } catch (error) {
      console.error(error.message.red);
    }
  },
};

module.exports = key;
