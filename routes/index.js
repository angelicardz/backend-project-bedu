const router = require("express").Router();
const students = require("./students");
const subjects = require("./subjects");
const teachers = require("./teachers");
const groups = require("./groups")
const grades = require("./grades")
const users = require("./users")

router.get("/", (req, res) => {
  res.json({ info: "Welcome to school API!" });
});

router.use("/students", students);
router.use("/subjects", subjects);
router.use("/teachers", teachers);
router.use("/groups", groups);
router.use("/grades", grades);
router.use("/users", users);

module.exports = router;