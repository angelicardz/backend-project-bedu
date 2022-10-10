const router = require('express').Router();
const {
    createGrade, 
    getGrade,
    getGrades,
    updateGrade,
    deleteGrade
} = require('../controllers/grades')

const auth = require('../config/auth');


router.get('/',auth.required ,getGrades);
router.get('/:id',auth.required ,getGrade);
router.post('/', auth.isTeacher,createGrade);
router.patch('/:id', auth.isTeacher,updateGrade);
router.delete('/:id', auth.isTeacher,deleteGrade);

module.exports = router;