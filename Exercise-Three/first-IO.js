const fs = require('fs');

function readFileAndCountNewLines(/* filePath */) {
  const filePath = process.argv.slice(2);
  const buffer = fs.readFileSync(filePath);
  const str = buffer.toString();
  const splitArray = str.split('\n');
  global.console.log(splitArray.length - 1);
}
// firstIO();
module.exports = readFileAndCountNewLines;
