const router = require('express').Router();
const {
    getUser,
    getUsers,
    updateUser,
    deleteUser,
    signUp,
    logIn
} = require('../controllers/users')

router.get('/', getUsers);
router.get('/:id', getUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

router.post('/signUp', signUp);
router.post('/logIn', logIn);

module.exports = router;