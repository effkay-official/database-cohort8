const express = require('express');
const router = express.Router();
const {
  createUser,
  loginUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require('../controller/userController');

router.post('/create', createUser);
router.post('/login', loginUser);
router.get('/all', getAllUsers);
router.get('/:id', getSingleUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;