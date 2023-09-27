import * as fs from "fs";
import config from "../ligma.config";
import * as align from "./align-configs";
import { createAlgorithm, getCurrentDayFolder } from "./helpers";

const currentDayFolder = getCurrentDayFolder();
if (!currentDayFolder)
  throw new Error("No day to append to. Run generate first!");

const files = fs.readdirSync(`./src/${currentDayFolder}`);
const templates = fs.readdirSync(`./src/__templates__`);

// If no algorithms are specified, use anything new added to `ligma.config.ts`
let amendedAlgos = process.argv.slice(2);
if (amendedAlgos.length === 0) {
  amendedAlgos = config.dsa.filter(
    (configAlgo) => !files.includes(`${configAlgo}.ts`)
  );
}

for (const amendedAlgo of amendedAlgos) {
  if (files.includes(`${amendedAlgo}.ts`))
    throw new Error(`Algorithm "${amendedAlgo}" already exists!`);
  if (!templates.includes(`${amendedAlgo}.ts`))
    throw new Error(`Template for "${amendedAlgo}" not found!`);
}
for (const amendedAlgo of amendedAlgos) {
  console.log(`Creating new algorithm file from template: "${amendedAlgo}"`);
  await createAlgorithm(amendedAlgo, currentDayFolder);
}
const currentAlgos = fs
  .readdirSync(`./src/${currentDayFolder}`)
  .map((file) => file.slice(0, file.length - 3));
align.packageJson(currentAlgos, `./src/${currentDayFolder}`);
