import express from 'express';
import morgan from 'morgan';
import { userRouter } from './routes/userRouter.js';

const app = express();

// Middlewares
app.use(morgan('dev')); 
app.use(express.json());


// Mount route --> works like declaration of middleware
app.use('/api/v1/users', userRouter);



// app
//     .route('/api/v1/users')
//     .get(getAllUsers)
//     .post(createUser);

// app
//     .route('/api/v1/users/:id')
//     .get(getUser)
//     .patch(updateUser)
//     .delete(deleteUser);

// app.get('/api/v1/tours', (request, response) => {
//     response
//         .status(200)
//         .json({
//             status: 'successfullYY tested'
//         })
// })





const port = 3000;
app.listen(port, () => {
    console.log('Server running on port: ', port);
});