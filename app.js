const config = require("./config");
const price = require("./price");
const alert = require("./alert");
const logger = require("./logger");

async function startApp() {
  console.log("Web3 Token Price Alert Bot Started");

  const token = config.tokenSymbol;
  const priceData = await price.getTokenPrice(token);

  const result = alert.checkPrice(priceData);

  logger.saveLog(result);

  console.log("Result:", result);
}

startApp();
