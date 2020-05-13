const KeyManager = require("../lib/Key-manager");
const CryptoApi = require("../lib/CryptoApi");

const check = {
  async price(cmd) {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();
      const api = new CryptoApi(key);

      const priceData = await api.getPriceData(cmd.coin, cmd.cur);
      console.log(priceData);
    } catch (error) {
      console.error(error);
    }

    //console.log(cmd.coin, cmd.cur);
  },
};

module.exports = { check };
