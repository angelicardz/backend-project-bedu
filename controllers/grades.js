const Grade = require('../models/grades');

async function createGrade(req, res){
    const body = req.body;
    const grade = grade.create(body);
    res.status(201).json(grade);
}

async function getGrade(req, res){
    const id = req.params.id;
    const grade = Grade.findByPk(id);
    res.status(200).json(grade);
} 

async function getGrades(req, res){
    const grade = Grade.findAll();
    res.status(200).json(grade);
}

async function updateGrade(req, res) {
    const id = req.params.id;
    const grade = req.body;
    await Grade.update(grade, {where: {id}});
    const grade_updated = await Grade.findByPk(id);
    res.status(200).json(grade_updated);
}

async function deleteGrade(req, res) {
    const id = req.params.id;
    const deleted = Grade.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}

module.exports = {
    createGrade, 
    getGrade,
    getGrades,
    updateGrade,
    deleteGrade
}