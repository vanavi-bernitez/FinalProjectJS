// Callback functions -> Handlers
const getAllUsers = (request, response) => {
    response.status(500).json({
        status: 'error',
        message: 'Route is not yet defined for getAllUsers'
    });
}

const createUser = (request, response) => {
    response.status(500).json({
        status: 'error',
        message: 'Route not yet defined for createUser'
    })
}

const getUser = (request, response) => {
    response.status(500).json({
        status: 'error',
        message: 'Route not yet defined for getUser'
    })
}

const updateUser = (request, response) => {
    response.status(500).json({
        status: 'error',
        message: 'Route not yet defined for updateUser'
    })
}

const deleteUser = (request, response) => {
    response.status(500).json({
        status: 'error',
        message: 'Route not yet defined for deleteUser'
    })
}

export { getAllUsers, createUser, getUser, updateUser, deleteUser }