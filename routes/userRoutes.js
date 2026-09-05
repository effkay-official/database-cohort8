const express = require('express');
const userRoute = express.Router();
const {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

userRoute.post('/create', createUser);
userRoute.get('/getAll', getAllUsers);
userRoute.get('/getSingle/:id', getSingleUser);
userRoute.put('/update/:id', updateUser);
userRoute.delete('/delete/:id', deleteUser);

module.exports = userRoute;