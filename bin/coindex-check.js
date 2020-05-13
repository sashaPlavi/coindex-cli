const program = require("commander");
const { check } = require("../commands/check");

program
  .command("price")
  .description("check price of coins")
  .option("--coin <type>", "Add specific type in CSV format", "BTC, ETH, XRP")
  .option("--cur <currency>", "Change the curretcy", "EUR")
  .action((cmd) => {
    check.price(cmd);
  });

program.parse(process.argv);
