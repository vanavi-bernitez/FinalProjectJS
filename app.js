import express from 'express';
import morgan from 'morgan';
import { userRouter } from './routes/userRouter.js';


const app = express();

// Middlewares
app.use(morgan('dev')); 
app.use(express.json());


// Mount route --> works like declaration of middleware
app.use('/api/v1/users', userRouter);



export { app }