import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));
app.use(express.json());


// Callback functions. Handlers
const getAllUsers = (request, response) => {
    response.status(500).json({
        status: 'error',
        message: 'Route not yet defined'
    })
}

const createUser = (request, response) => {
    response.status(500).json({
        status: 'error',
        message: 'Route not yet defined'
    })
}

const getUser = (request, response) => {
    response.status(500).json({
        status: 'error',
        message: 'Route not yet defined'
    })
}

const updateUser = (request, response) => {
    response.status(500).json({
        status: 'error',
        message: 'Route not yet defined'
    })
}

const deleteUser = (request, response) => {
    response.status(500).json({
        status: 'error',
        message: 'Route not yet defined'
    })
}


app
    .route('api/v1/users')
    .get(getAllUsers)
    .post(createUser);


app
    .route('api/v1/users/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser)



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