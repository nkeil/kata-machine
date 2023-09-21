## Data Structures & Algorithms Practice Tool

Forked from https://github.com/ThePrimeagen/kata-machine

### How It Works

1. Install [Node.js](https://nodejs.org/en/) and [Bun](https://bun.sh/docs/installation).

2. Clone the repo and install the dependencies

```bash
bun install
```

3. Edit the `ligma.config.js` file to contain only the katas you want to practice for the current day.

```typescript
export default {
  dsa: [
    "InsertionSort",
    "MergeSort",
    "Queue",
    "Stack",
    "QuickSort",
    "DijkstraList",
    "PrimsList",
  ] as const,
};
```

3. Create a day of katas from the list in `ligma.config.js`.

```bash
bun generate
```

This will progressively create folders named

```
src/day1
src/day2
...
```

`bun generate` will also update the `tsconfig.json` and `jest.config` to point
the latest `day` folder via tspaths. This allows us to avoid updating anything
for testing each day.

#### Testing

Run all tests for the current day:

```bash
bun run test
```

Run only specific tests for the current day:

```bash
bun jest [test-name-partial]
```
