import expressRateLimiter from 'express-rate-limit';
export default expressRateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 3,
  message: 'Too many requests,try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});
