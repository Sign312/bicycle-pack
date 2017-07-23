let shell = require("shelljs");
let fs = require("fs");
let path = require("path");

let distPath = path.resolve(process.cwd(), "dist");

if (fs.existsSync(distPath)) shell.rm("-r", distPath);
