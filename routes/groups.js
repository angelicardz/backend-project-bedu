const router = require('express').Router();
const {
    createGroup, 
    getGroup,
    getGroups,
    updateGroup,
    deleteGroup
} = require('../controllers/groups')

const auth = require('../config/auth');

router.get('/', auth.required ,getGroups);
router.get('/:id', auth.required,getGroup);
router.post('/', auth.isAdmin,createGroup);
router.patch('/:id',auth.isAdmin, updateGroup);
router.delete('/:id', auth.isAdmin,deleteGroup);

module.exports = router;