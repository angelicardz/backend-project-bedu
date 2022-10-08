const Subject = require("../models/subjects");

function createSubject(req, res) {
  const body = req.body;
  Subject.create(body).then((subject) => {
    res.status(201).json(subject);
  });
}

async function getSubject(req, res) {
  const id = req.params.id;
  const subject = await Subject.findByPk(id);
  res.status(200).json(subject);
}

async function getSubjects(req, res) {
  const subjects = await Subject.findAll();
  res.status(200).json(subjects);
}

async function updateSubject(req, res) {
  const id = req.params.id;
  const subject = req.body;
  await Subject.update(subject, { where: { id } });
  const updated_subject = await Subject.findByPk(id);
  res.status(200).json(updated_subject);
}

async function deleteSubject(req, res) {
  const id = req.params.id;
  const deleted = Subject.destroy({ where: { id } });
  res.status(200).json(deleted);
}

module.exports = {
  createSubject,
  getSubject,
  getSubjects,
  updateSubject,
  deleteSubject,
};
