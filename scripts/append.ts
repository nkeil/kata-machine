import * as fs from "fs";
import config from "../ligma.config";
import * as align from "./align-configs";

const appendedAlgo = process.argv[2];
if (!appendedAlgo) throw new Error("You must include an argument!");

const dayFolders = fs
  .readdirSync("./src")
  .filter((i) => i.includes("day"))
  .sort((a, b) => +b.substring(3) - +a.substring(3));
const currentDayFolder = dayFolders[0];
if (!currentDayFolder) {
  throw new Error("No day to append to. Run generate first!");
}

const input = Bun.file(`./src/__templates__/${appendedAlgo}.ts`);
if (!(await input.exists())) throw new Error("Template not found!");
const output = Bun.file(`./src/${currentDayFolder}/${appendedAlgo}.ts`);
if (await output.exists()) throw new Error("Algo already exists!");
await Bun.write(output, await input.text());

align.packageJson([...config.dsa, appendedAlgo], `./src/${currentDayFolder}`);
