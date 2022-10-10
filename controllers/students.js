const Student = require('../models/students');

async function createStudent(req, res) {
    const body = req.body;
    const student = await Student.create(body);
    res.status(201).json(student);
}

async function getStudent(req, res) {
    const id = req.params.id;
    const student = await Student.findByPk(id);
    res.status(200).json(student);
}

async function getStudents(req, res) {
    const students =  await Student.findAll();
    res.status(200).json(students);
}

async function updateStudent(req, res) {
    const id = req.params.id;
    const student = req.body;
    await Student.update(student, { where: { id } });
    const student_updated = await Student.findByPk(id);
    res.status(200).json(student_updated);
}

async function deleteStudent(req, res) {
    const id = req.params.id;
    const deleted = Student.destroy(
        { where: { id } }
    );
    res.status(200).json(deleted);
}


module.exports = {
    createStudent,
    getStudent,
    getStudents,
    updateStudent,
    deleteStudent
}
