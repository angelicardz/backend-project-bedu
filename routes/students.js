const router = require('express').Router();
const {
    createStudent,
    getStudent,
    getStudents,
    updateStudent,
    deleteStudent
} = require('../controllers/students')
const auth = require('../config/auth');

router.get('/',auth.isTeacher ,getStudents);
router.get('/:id',auth.required ,getStudent);
router.post('/', createStudent);
router.patch('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;