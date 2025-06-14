// Updates the latest version of Pulsar in `./docs/global.json` to the one provided
// when running this file.
const fs = require("fs");
const path = require("path");

const newVer = process.argv.slice(2)[0]; // takes first argument
const verFile = JSON.parse(fs.readFileSync(path.join(__dirname, "./docs/global.json"), { encoding: "utf8" }));

verFile.latest_version = newVer;

fs.writeFileSync(path.join(__dirname, "./docs/global.json"), JSON.stringify(verFile, null, 2), { encoding: "utf8" });
