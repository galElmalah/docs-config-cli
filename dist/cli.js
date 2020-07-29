"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path = __importStar(require("path"));
var inquirer_1 = __importDefault(require("inquirer"));
var getAllDocsConfigOptions = function () {
    return fs_1.readdirSync(path.join(process.cwd(), "./DOCS/examples"));
};
var questions = {
    type: "list",
    name: "config",
    message: "Choose a config file",
    choices: getAllDocsConfigOptions(),
};
inquirer_1.default.prompt(questions).then(function (selection) {
    var configFile = fs_1.readFileSync(path.join(process.cwd(), "./DOCS/examples", selection.config));
    console.log("Writing " + selection.config + "...");
    fs_1.writeFileSync(path.join(process.cwd(), "./src", "docs.config.json"), configFile);
    console.log("Finished writing " + selection.config + "...");
});
//# sourceMappingURL=cli.js.map