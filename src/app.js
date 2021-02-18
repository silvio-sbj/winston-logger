const express = require("express");
const logger = require("./utils/logger");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello!");
  logger.info("<< YOUR MESSAGE LOG HERE >>");
});

app.listen(port, () => logger.info(`Server is running on port ${port}`));
