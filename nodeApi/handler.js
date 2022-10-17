const serverless = require("serverless-http");
const express = require("express");
const api = require('./src/index');
const app = express();
app.use(api);

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
