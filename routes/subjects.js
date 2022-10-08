const router = require("express").Router();
const {
  createSubject,
  getSubject,
  getSubjects,
  updateSubject,
  deleteSubject,
} = require("../controllers/subjects");

router.get("/", getSubjects);
router.get("/:id", getSubject);
router.post("/", createSubject);
router.patch("/:id", updateSubject);
router.delete("/:id", deleteSubject);

module.exports = router;
