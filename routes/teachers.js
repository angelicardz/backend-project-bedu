const router = require('express').Router();
const {
    getTeacher,
    getTeachers,
    createTeacher,
    updateTeacher,
    deleteTeacher
} = require('../controllers/teachers')

router.get('/', getTeachers);
router.get('/:id', getTeacher);
router.post('/', createTeacher);
router.patch('/:id', updateTeacher);
router.delete('/:id', deleteTeacher);

module.exports = router;