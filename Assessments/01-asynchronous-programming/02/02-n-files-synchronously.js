const fs = require("fs");
const n = 10; // input size 0 < n < 100
const output_dir = "./output";
const data = "Data-2";

let i = 1;
let file = `${i.toString().padStart(2, "0")}-output.txt`;

writeSync();

function writeSync() {
  let path = `${output_dir}/${file}`;
  fs.writeFile(path, data, after_write);
}

function after_write(err) {
  console.log(`Finished Writing: ${file}`);
  if (i == n) {
    console.log("Writing Complete");
  } else {
    i++;
    file = `${i.toString().padStart(2, "0")}-output.txt`;
    writeSync();
  }
}