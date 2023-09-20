import * as fs from "fs";
import config from "../ligma.config";
import * as align from "./align-configs";

const dayFolders = fs
  .readdirSync("./src")
  .filter((i) => i.includes("day"))
  .sort((a, b) => +b.substring(3) - +a.substring(3));
const day = dayFolders.length === 0 ? 1 : +dayFolders[0].substring(3) + 1;

const dayName = `day${day}`;
const dayPath = `./src/${dayName}`;
fs.mkdirSync(dayPath);

config.dsa.forEach((ds) => {
  const input = Bun.file(`./src/__templates__/${ds}.ts`);
  const output = Bun.file(`${dayPath}/${ds}.ts`);
  Bun.write(output, input);
});

align.jest(dayName);
align.tsconfig(dayName);
align.packageJson(config.dsa, dayPath);
align.stats(config.dsa);
