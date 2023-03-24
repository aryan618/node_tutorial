// asynchronously reading and writing of the file contents

const { readFile, writeFile } = require("fs");
// when we are done with the functionality then we invoke the callback

readFile("./content/first.txt", "utf-8", (err, result) => {
  // function to log result and erros in the called file
  if (err) {
    console.log(err);
    return;
  }
  //console.log(result);
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here are the results baby ${first + second}`, //here this complete string gets stored in result
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
