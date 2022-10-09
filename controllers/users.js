const User = require('../models/users');

async function createUser(req, res) {
    const body = req.body;
    const user = User.create(body);
    res.status(201).json(user);
}

async function getUser(req, res) {
    const id = req.params.id;
    const user = User.findByPk(id);
    res.status(200).json(user);
}

async function getUsers(req, res) {
    const users = User.findAll();
    res.status(200).json(users);
}

async function updateUser(req, res) {
    const id = req.params.id;
    const user = req.body;
    await User.update(user, { where: { id } });
    const user_updated = await User.findByPk(id);
    res.status(200).json(user_updated);
}

async function deleteUser(req, res) {
    const id = req.params.id;
    const deleted = User.destroy(
        { where: { id } }
    );
    res.status(200).json(deleted);
}


module.exports = {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
}