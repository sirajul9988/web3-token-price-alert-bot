async function fetchPrice(symbol) {
  return {
    price: Math.floor(Math.random() * 3000) + 100
  };
}

module.exports = {
  fetchPrice
};
