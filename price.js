const api = require("./api");

async function getTokenPrice(symbol) {
  const data = await api.fetchPrice(symbol);
  return {
    symbol: symbol,
    price: data.price || 0,
    checkedAt: new Date().toISOString()
  };
}

module.exports = {
  getTokenPrice
};
