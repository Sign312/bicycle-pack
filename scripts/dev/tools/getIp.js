let os = require("os");

module.exports = function() {
  let network = os.networkInterfaces();

  let ip = "not find";

  for (let key in network) {
    network[key].forEach(detail => {
      if (detail.family == "IPv4") {
        ip = detail.address;
      }
    });
  }
  return ip;
};
