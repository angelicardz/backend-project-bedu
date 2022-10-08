const router = require('express').Router();
const {
    createGrade, 
    getGrade,
    getGrades,
    updateGrade,
    deleteGrade
} = require('../controllers/grades')

router.get('/', getGrades);
router.get('/:id', getGrade);
router.post('/', createGrade);
router.patch('/:id', updateGrade);
router.delete('/:id', deleteGrade);

module.exports = router;