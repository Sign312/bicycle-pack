let net = require("net");

// 检测端口是否被占用
function portIsOccupied(port) {
  return new Promise((resolve, reject) => {
    // 创建服务并监听该端口
    let server = net.createServer().listen(port);

    server.on("listening", function() {
      // 执行这块代码说明端口未被占用
      server.close(); // 关闭服务
      resolve(false);
    });

    server.on("error", function(err) {
      if (err.code === "EADDRINUSE") {
        // 端口已经被使用
        resolve(true);
      } else {
        reject(err);
      }
    });
  });
}

module.exports = portIsOccupied;
