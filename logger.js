const fs = require("fs");

function saveLog(data) {
  const logText = JSON.stringify(data, null, 2);
  fs.writeFileSync("logs/price-log.json", logText);
}

module.exports = {
  saveLog
};
