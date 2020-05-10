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
}
