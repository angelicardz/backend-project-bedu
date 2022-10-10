const User = require('../models/users');

async function signUp(req, res) {
    const body = req.body;
    try { 
        const user = await User.create(body);
        const {salt, hash} = User.createPassword(body['password']);
        user.password_salt = salt;
        user.password_hash = hash;
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        if (["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(err.name) ) {
            return res.status(400).json({
                error: err.errors.map(e => e.message)
            })
        }
        else {
            throw err;
        }
    }
}

async function logIn(req, res) {
    const body = req.body;
    const user = await User.findOne({where: {email: body['email']}});
    if (!user) {
        return res.status(404).json({error: "User not found"});
    }
    if (User.validatePassword(body['password'], user.password_salt, user.password_hash)) {
        return res.status(200).json({
            email: user.email,
            rol: user.rol,
            id: user.id,
            token: User.generateJWT(user)
            
        }); // JWT
    } else {
        return res.status(400).json({mensaje: "Password Incorrecto"});
    }
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
    getUser,
    getUsers,
    updateUser,
    deleteUser,
    signUp,
    logIn

}