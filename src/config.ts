const express = require("express");
const cors = require("cors");

module.exports = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  return app;
};
