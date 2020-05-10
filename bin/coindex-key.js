const program = require("commander");

const key = require("../commands/key");

program
  .command("set")
  .description("Set API key -- https://nomics.com")
  .action(key.set);
program.command("show").description("Set API key ").action(key.show);
program.command("remove").description("Remove API key ").action(key.remove);

program.parse(process.argv);
