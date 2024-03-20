const { createLogger, transports, format } = require("winston");

// ---- logging function

const Loggers = createLogger({
  transports: [
    new transports.File({
      filename: "winston.log",
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
    }),

    new transports.File({
      filename: "winston-error.log",
      level: "error",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

module.exports = { Loggers };
