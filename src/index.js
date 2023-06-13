const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  // create the express object
  const app = express();

  //   common setup for many web applications that need to handle data from forms or APIs.
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
};

setupAndStartServer();
