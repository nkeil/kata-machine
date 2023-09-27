import * as fs from "fs";
import config from "../ligma.config";
import * as align from "./align-configs";

const dayFolders = fs
  .readdirSync("./src")
  .filter((i) => i.includes("day"))
  .sort((a, b) => +b.substring(3) - +a.substring(3));
const currentDayFolder = dayFolders[0];
if (!currentDayFolder) {
  throw new Error("No day to append to. Run generate first!");
}

const amendedAlgos = process.argv.slice(2);

if (amendedAlgos.length > 0) {
  const files = fs.readdirSync(`./src/${currentDayFolder}`);
  const templates = fs.readdirSync(`./src/__templates__`);
  for (const amendedAlgo of amendedAlgos) {
    if (files.includes(`${amendedAlgo}.ts`))
      throw new Error(`Algorithm "${amendedAlgo}" already exists!`);
    if (!templates.includes(`${amendedAlgo}.ts`))
      throw new Error(`Template for "${amendedAlgo}" not found!`);
  }
  for (const amendedAlgo of amendedAlgos) {
    const input = Bun.file(`./src/__templates__/${amendedAlgo}.ts`);
    const output = Bun.file(`./src/${currentDayFolder}/${amendedAlgo}.ts`);
    await Bun.write(output, input);
  }
  const currentAlgos = fs
    .readdirSync(`./src/${currentDayFolder}`)
    .map((file) => file.slice(0, file.length - 3));
  align.packageJson(currentAlgos, `./src/${currentDayFolder}`);
} else {
  // TODO: use ligma.config.ts
}
