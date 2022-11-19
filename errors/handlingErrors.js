const { StatusCodes } = require("http-status-codes");

const handleError = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "terdapat kesalahan",
  };

  if (err.name === "ValidationError") {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(", ");
    customError.statusCode = 400;
  }

  if (err.code && err.code == 11000) {
    customError.statusCode = 400;
    customError.msg = "terdapat duplikat value";
  }

  if (err.name === "CastError") {
    customError.statusCode = 400;
    customError.msg = `tidak terdapat item dengan id ${err.value}`;
  }

  return res.status(customError.statusCode).json({
    msg: customError.msg,
  });
};

module.exports = handleError;
