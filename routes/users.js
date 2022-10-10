const router = require('express').Router();
const {
    getUser,
    getUsers,
    updateUser,
    deleteUser,
    signUp,
    logIn
} = require('../controllers/users')

const auth = require('../config/auth');

router.get('/',auth.isAdmin ,getUsers);
router.get('/:id', auth.isAdmin,getUser);
router.patch('/:id', auth.isAdmin,updateUser);
router.delete('/:id', auth.isAdmin,deleteUser);

router.post('/signUp', signUp);
router.post('/logIn', logIn);

module.exports = router;