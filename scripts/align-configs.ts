export const stats = async (algNames: ReadonlyArray<string>) => {
  const statsFile = Bun.file("./stats.json");
  let stats;
  try {
    stats = JSON.parse(await statsFile.text());
  } catch (e) {
    stats = undefined;
  }

  stats = algNames.reduce((acc, ds) => {
    if (!acc[ds]) {
      acc[ds] = 0;
    }
    acc[ds]++;
    return acc;
  }, stats || {});

  Bun.write(statsFile, JSON.stringify(stats, null, 2));
};

export const packageJson = async (
  algNames: ReadonlyArray<string>,
  dayPath: string
) => {
  const packageJsonFile = Bun.file("./package.json");
  const packageJson = JSON.parse(await packageJsonFile.text());
  packageJson.scripts.test = `jest ${algNames.join(" ")}`;
  packageJson.scripts.day = `echo ${dayPath}`;
  Bun.write(packageJsonFile, JSON.stringify(packageJson, null, 2));
};

export const tsconfig = async (dayName: string) => {
  const tsconfigFile = Bun.file("./tsconfig.json");
  const tsconfig = JSON.parse(await tsconfigFile.text());
  tsconfig.compilerOptions.paths["@code/*"] = [`${dayName}/*`];
  Bun.write(tsconfigFile, JSON.stringify(tsconfig, null, 2));
};

export const jest = async (dayName: string) => {
  const jestFile = Bun.file("./.jest.config.json");
  const jest = JSON.parse(await jestFile.text());
  jest.moduleNameMapper["@code/(.*)"] = [`<rootDir>/src/${dayName}/$1`];
  Bun.write(jestFile, JSON.stringify(jest, null, 2));
};
