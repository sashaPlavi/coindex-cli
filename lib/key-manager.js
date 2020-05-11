const CofigStore = require("configstore");
const pkg = require("../package.json");

class KeyMnager {
  constructor() {
    this.conf = new CofigStore(pkg.name);
  }
  setKey(key) {
    this.conf.set("apiKey", key);
    return key;
  }
  getKey() {
    const key = this.conf.get("apiKey");
    if (!key) {
      throw new Error("No API key found -- get a key at https://nomics.com ");
    }

    return key;
  }
  deleteKey() {
    const key = this.conf.get("apiKey");
    if (!key) {
      throw new Error("No API key found -- get a key at https://nomics.com ");
    }

    this.conf.delete("apiKey");

    return key;
  }
}

module.exports = KeyMnager;
