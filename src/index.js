import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import booksRouter from './routes/books.router.js';
import borrowerRouter from './routes/borrowers.router.js';
import borrowingRouter from './routes/borrowings.router.js';
import adminsRouter from './routes/admins.router.js';
import authenticationRouter from './routes/authentication.router.js';
import centralErrorHandler from './middlewares/centralErrorHandler.middleware.js';
import authenticationMiddleware from './middlewares/authentication.middleware.js';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/authentication', authenticationRouter);
app.use(authenticationMiddleware);
app.use('/admins', adminsRouter);
app.use('/books', booksRouter);
app.use('/borrowers', borrowerRouter);
app.use('/borrowings', borrowingRouter);
app.use(centralErrorHandler);

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
