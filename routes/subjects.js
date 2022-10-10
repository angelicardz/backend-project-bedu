const router = require("express").Router();
const {
  createSubject,
  getSubject,
  getSubjects,
  updateSubject,
  deleteSubject,
} = require("../controllers/subjects");

const auth = require('../config/auth');
router.get("/", auth.required ,getSubjects);
router.get("/:id",auth.required  ,getSubject);
router.post("/",auth.isAdmin  ,createSubject);
router.patch("/:id",auth.isAdmin , updateSubject);
router.delete("/:id", auth.isAdmin,deleteSubject);

module.exports = router;
