const Teacher = require('../models/teachers');

function createTeacher(req, res) {
    const body = req.body;
    Teacher.create(body).then(teacher => {
        res.status(201).json(teacher);
    });
}

async function getTeacher(req, res) {
    const id = req.params.id;
    const teacher = await Teacher.findByPk(id);
    res.status(200).json(teacher);
}

async function getTeachers(req, res) {
    const teachers = await Teacher.findAll();
    res.status(200).json(teachers);
}

async function updateTeacher(req, res) {
    const id = req.params.id;
    const teacher = req.body;
    await Teacher.update(teacher, { where: { id } });
    const teacher_updated = await Teacher.findByPk(id);
    res.status(200).json(teacher_updated);
}

async function deleteTeacher(req, res) {
    const id = req.params.id;
    const deleted = Teacher.destroy(
        { where: { id } }
    );
    res.status(200).json(deleted);
}

module.exports = {
    createTeacher,
    getTeacher,
    getTeachers,
    updateTeacher,
    deleteTeacher
}