export default function (error, req, res, _) {
  if (process.env.MODE === 'DEVELOPMENT') {
    if (error.isOperational) {
      res.status(error.statusCode).json({
        message: error.message,
        status: error.status,
        data: error.stack,
      });
    } else {
      res.status(500).json({
        message: error.message,
        status: 'error',
        data: error.stack,
      });
    }
  } else {
    res.status(500).json({
      message: 'something weny really wrong',
      status: 'error',
      data: null,
    });
  }
}
