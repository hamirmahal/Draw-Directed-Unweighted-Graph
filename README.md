# Instructions

1. Make sure you have `npm` and the `dot` command installed on your system.
2. Run `npm install` in this repository.
3. Run `npm start`.
4. View the contents of `index.html` in your web browser.
5. Any time you change the input graph in `index.ts`, if `npm start` is still running, the graph in `index.html` should automatically update. You may need to refresh the page to see the changes, but the page should just update automatically if you're using Live Server in VS Code to view `index.html`.

# Demo

For the following input in `index.ts`,

```typescript
/**
 * The input graph should be
 * in a `[destination, source]` format.
 */
const inputGraph = [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2]
] as const;
```

you should end up with something that looks like this.

![directed unweighted graph with 4 nodes](img/directed-unweighted-graph-with-4-nodes.png)
