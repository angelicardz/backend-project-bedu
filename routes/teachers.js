const router = require('express').Router();
const {
    getTeacher,
    getTeachers,
    createTeacher,
    updateTeacher,
    deleteTeacher
} = require('../controllers/teachers')

const auth = require('../config/auth');

router.get('/',auth.required  ,getTeachers);
router.get('/:id',auth.required ,getTeacher);
router.post('/', auth.isAdmin ,createTeacher);
router.patch('/:id', auth.isAdmin,updateTeacher);
router.delete('/:id', auth.isAdmin,deleteTeacher);

module.exports = router;