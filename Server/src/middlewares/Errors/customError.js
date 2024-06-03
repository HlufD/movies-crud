export class CustomError extends Error {
  constructor(message, statusCode, errorType) {
    super(message);
    this.errorType = errorType;
    this.statusCode = statusCode;
  }
}
