import express from 'express';
import * as userController from '../controllers/userController.js'
import * as authController from '../controllers/authController.js';

// Routes --> like mini apps
const userRouter = express.Router();

// Param middleware only runs for centain parameter in the URL. As the id
// goes latter a callback function that cames from userController, that checks the id. Lesson 64
// userRouter.param('id', (request, response, next, idValue) => {
//     console.log(idValue);
//     next();
// })

userRouter.post('/signup', authController.signUp)

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