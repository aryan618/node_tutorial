const http = require("http");

const server = http.createServer((req, res) => {
  // here req and res are objects
  if (req.url === "/") {
    res.end("Welcome to my server!");
  } else if (req.url === "/about") {
    res.end("Here is our short description");
  } else {
    res.end(`
  <h1> OOPS! </h1>
  <a href='/'>Back to homepage</a>
  `);
  }
  // res is response object and req is request object
});

server.listen(5000);
