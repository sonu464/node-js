const http = require("http");

const dataControl = (req, res) => {
  res.write("<h1>Server is running</h1>");
  res.end();
};

http.createServer(dataControl).listen(4500);
