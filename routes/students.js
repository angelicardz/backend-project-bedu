const router = require('express').Router();
const {
    createStudent,
    getStudent,
    getStudents,
    updateStudent,
    deleteStudent
} = require('../controllers/students')

router.get('/', getStudents);
router.get('/:id', getStudent);
router.post('/', createStudent);
router.patch('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;