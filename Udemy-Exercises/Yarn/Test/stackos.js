const os = require("os");
const chalk = require("chalk");

let osType = "Unknown";

switch(os.type()) {
    case "Darwin" : osType = "MacOs"
    break;
    case "Linux" : osType = "Linux"
    break;
    case "Windows_NT" : osType = "Windows"
}