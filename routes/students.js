const router = require('express').Router();
const {
    createStudent,
    getStudent,
    getStudents,
    updateStudent,
    deleteStudent
} = require('../controllers/students')
const auth = require('../config/auth');


router.get('/',auth.required  ,getStudents);
router.get('/:id',auth.required ,getStudent);
router.post('/', auth.isAdmin,createStudent);
router.patch('/:id',auth.isAdmin ,updateStudent);
router.delete('/:id',auth.isAdmin ,deleteStudent);

module.exports = router;