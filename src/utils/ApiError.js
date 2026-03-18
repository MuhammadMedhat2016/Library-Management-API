export default class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.isOperational = true;
    this.statusCode = statusCode || 500;
    this.status = String(this.statusCode).startsWith(4) ? 'fail' : 'error';
    Error.captureStackTrace(this, ApiError);
  }
}
