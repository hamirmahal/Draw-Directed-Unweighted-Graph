import child_process from 'child_process';
import fs from 'fs';

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
let contentsOfInputDot = 'digraph {\n';

inputGraph.forEach(([destination, source]) => {
  contentsOfInputDot += `  ${source} -> ${destination}\n`;
});
contentsOfInputDot += '}\n';
fs.writeFileSync('input.dot', contentsOfInputDot);

// This is why the machine running this needs to have `dot`.
// This part outputs the input graph into `index.html`.
child_process.execSync('dot -Tsvg input.dot > index.html');
