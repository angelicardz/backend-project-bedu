const Group = require('../models/groups');

async function createGroup(req, res){
    const body = req.body;
    const group = group.create(body);
    res.status(201).json(group);
}

async function getGroup(req, res){
    const id = req.params.id;
    const group = Group.findByPk(id);
    res.status(200).json(group);
} 

async function getGroups(req, res){
    const group = Group.findAll();
    res.status(200).json(group);
}

async function updateGroup(req, res) {
    const id = req.params.id;
    const group = req.body;
    await Group.update(group, {where: {id}});
    const group_updated = await Group.findByPk(id);
    res.status(200).json(group_updated);
}

async function deleteGroup(req, res) {
    const id = req.params.id;
    const deleted = Group.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}

module.exports = {
    createGroup, 
    getGroup,
    getGroups,
    updateGroup,
    deleteGroup
}