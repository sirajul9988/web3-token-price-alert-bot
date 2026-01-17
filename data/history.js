const fs = require("fs");

function saveHistory(data) {
  fs.writeFileSync("data/history.json", JSON.stringify(data, null, 2));
}

module.exports = {
  saveHistory
};
