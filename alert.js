let lastPrice = 0;

function checkPrice(priceData) {
  let status = "no change";

  if (priceData.price > lastPrice) {
    status = "price up";
  } else if (priceData.price < lastPrice) {
    status = "price down";
  }

  lastPrice = priceData.price;

  return {
    token: priceData.symbol,
    price: priceData.price,
    status: status,
    checkedAt: priceData.checkedAt
  };
}

module.exports = {
  checkPrice
};
