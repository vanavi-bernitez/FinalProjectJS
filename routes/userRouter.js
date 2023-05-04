import express from 'express';
import * as userController from '../controllers/userController.js'


// Routes --> like mini apps
const userRouter = express.Router();

userRouter
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser);

userRouter
    .route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

export { userRouter }




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