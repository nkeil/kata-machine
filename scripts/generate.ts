import * as fs from "fs";
import config from "../ligma.config";
import * as align from "./align-configs";
import { createAlgorithm, getCurrentDayFolder } from "./helpers";

const currentDayFolder = getCurrentDayFolder();
const newDay = currentDayFolder ? +currentDayFolder.substring(3) + 1 : 1;
const newDayFolder = `day${newDay}`;
fs.mkdirSync(`./src/${newDayFolder}`);

for (const configAlgo of config.dsa) {
  await createAlgorithm(configAlgo, newDayFolder);
  const input = Bun.file(`./src/__templates__/${configAlgo}.ts`);
  const output = Bun.file(`./src/${newDayFolder}/${configAlgo}.ts`);
  await Bun.write(output, input);
}

align.jest(newDayFolder);
align.tsconfig(newDayFolder);
align.packageJson(config.dsa, `./src/${newDayFolder}`);
align.stats(config.dsa);
