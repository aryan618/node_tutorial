// FILE SYSTEM

const { readFileSync, writeFileSync } = require("fs"); // destructuring fs(global module)

const first = readFileSync("./content/first.txt", "utf-8"); // format path,filetype
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first + " " + second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is my first text using
writeFileSync ${first} ${second}
`,
  { flag: "a" } // if flag is not used then the resutl will not be appended rather it willl be overridden(default)
); // format path,text content
