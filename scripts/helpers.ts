import fs from "fs";

export const createAlgorithm = async (
  name: string,
  currentDayFolder: string
) => {
  const input = Bun.file(`./src/__templates__/${name}.ts`);
  const output = Bun.file(`./src/${currentDayFolder}/${name}.ts`);
  await Bun.write(output, input);
};

export const getCurrentDayFolder = (): string | undefined => {
  const dayFolders = fs
    .readdirSync("./src")
    .filter((i) => i.includes("day"))
    .sort((a, b) => +b.substring(3) - +a.substring(3));
  return dayFolders[0];
};
