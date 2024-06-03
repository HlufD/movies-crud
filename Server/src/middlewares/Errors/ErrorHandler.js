import { CustomError } from "./customError.js";

const customErrorHandler = function (err, req, res, next) {
  if (err instanceof CustomError) {
    return res
      .status(err.statusCode)
      .json({ message: err.message, errorType: err.errorType });
  } else {
    return res
      .status(500)
      .json({ message: err.message, errorType: "Internal server Error" });
  }
};

export default customErrorHandler;
