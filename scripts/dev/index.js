let baseTool = require("../tools/base");
let config = require("../config");
let colors = require("colors");
let webpack = require("webpack");

process.wpOption.env = "dev";

async function startWebpackServer(webpackConfig) {
  let express = require("express");
  let compiler = webpack(webpackConfig);
  let devMiddleware = require("webpack-dev-middleware")(compiler);
  let app = express();
  app.use(devMiddleware);
  let port = config.port;
  let portIsOccupied = require("./tools/portIsOccupied");
  let ip = require("./tools/getIp")();
  let open = require("open");

  function listen(port, url) {
    return new Promise((resolve, reject) => {
      app.listen(port, () => {
        console.warn(`listen on `.green + url.underline.green);
        open(url);
        resolve();
      });
    });
  }

  while (await portIsOccupied(port)) port++;
  let url = `http://${ip}:${port}`;

  await listen(port, url);
}

async function dev() {
  let webpackConfig = require("../webpack/webpack.config");
  await startWebpackServer(webpackConfig);
}

dev();
