const router = require("express").Router();
const students = require("./students");
const subjects = require("./subjects");
const teachers = require("./teachers");

router.get("/", (req, res) => {
  res.json({ info: "Welcome to school API!" });
});

router.use("/students", students);
router.use("/subjects", subjects);
router.use("/teachers", teachers);

module.exports = router;
