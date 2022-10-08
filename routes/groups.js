const router = require('express').Router();
const {
    createGroup, 
    getGroup,
    getGroups,
    updateGroup,
    deleteGroup
} = require('../controllers/groups')

router.get('/', getGroups);
router.get('/:id', getGroup);
router.post('/', createGroup);
router.patch('/:id', updateGroup);
router.delete('/:id', deleteGroup);

module.exports = router;