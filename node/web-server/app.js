const http = require("node:http");
const fs = require("node:fs");

const generatePage = (url, res) => {
  fs.readFile(url, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Error file not found");
    } else {
      res.write(data);
    }
    res.end();
  });
};

http
  .createServer((req, res) => {
    const url = req.url;

    res.writeHead(200, {
      "content-type": "text/html",
    });

    switch (url) {
      case "/about":
        generatePage("./about", res);
        break;
      case "/contact":
        generatePage("./contacts.html", res);
        break;
      default:
        generatePage("./index.html", res);
        break;
    }
  })
  .listen(3000, () => {
    console.log("Server is listening on port 3000");
  });
