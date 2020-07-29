import { readdirSync, writeFile, readFileSync, writeFileSync } from "fs";
import * as path from "path";
import inquirer from "inquirer";

const getAllDocsConfigOptions = () => {
  return readdirSync(path.join(process.cwd(), "./DOCS/examples"));
};

const questions = {
  type: "list",
  name: "config",
  message: "Choose a config file",
  choices: getAllDocsConfigOptions(),
};
inquirer.prompt(questions).then((selection) => {
  const configFile = readFileSync(
    path.join(process.cwd(), "./DOCS/examples", selection.config)
  );
  console.log(`Writing ${selection.config}...`);
  writeFileSync(
    path.join(process.cwd(), "./src", "docs.config.json"),
    configFile
  );
  console.log(`Finished writing ${selection.config}...`);
});
