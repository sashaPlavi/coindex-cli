const axios = require("axios");
const colors = require("colors");

class CriptoApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = " https://api.nomics.com/v1/currencies/ticker";
  }
  async getPriceData(coinOpt, curOpt) {
    try {
      // console.log(coinOpt);
      // console.log(curOpt);

      const res = await axios.get(
        `${this.baseURL}?key=${this.apiKey}&ids=${coinOpt}&convert=${curOpt}`
      );

      let output = "";

      res.data.forEach((coin) => {
        //console.log(coin);

        output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${coin.price.green} | Rank: ${coin.rank.blue} \n`;
      });
      return output;
    } catch (error) {
      handleErr(error);
    }
    function handleErr(err) {
      // console.log(err);

      if (err.response.status === 401) {
        throw new Error("your API key is not valid");
      } else if (err.response.status === 404) {
        throw new Error("API is not responding");
      } else {
        throw new Error("ups, something went wrong");
      }
    }
  }
}

module.exports = CriptoApi;
