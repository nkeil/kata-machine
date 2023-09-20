import fs from "fs";

const dayFolders = fs.readdirSync("./src");
for (const dayFolder of dayFolders) {
  if (!dayFolder.includes("day")) {
    console.log("ignoring", dayFolder);
    continue;
  }
  console.log("deleting", dayFolder);
  const file = `./src/${dayFolder}`;
  fs.rmSync(file, {
    recursive: true,
    force: true,
  });
}
