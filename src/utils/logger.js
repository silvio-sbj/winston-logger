const { createLogger, format, transports } = require("winston");

module.exports = createLogger({
  format: format.combine(
    format.simple(),
    format.timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
    format.printf(
      (info) =>
        `[${info.timestamp}] ${info.level.toUpperCase()} ${info.message}`
    )
  ),
  transports: [
    // Save in file --
    new transports.File({
      maxsize: 5120000,
      maxFiles: 7,
      filename: `${__dirname}/../logs/api.log`,
    }),

    //Show on console --
    new transports.Console(),
  ],
});
