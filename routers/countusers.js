const express = require("express");
const router = new express.Router();
require("../connection/conn");
const Student = require("../modelsdb/schemastudent");
const Course = require("../modelsdb/registeredcourse");
const Teacher = require("../modelsdb/teacherregister");

router.get("/countusers", async (req, res) => {
  var count = await Student.count({});
  var count2 = await Teacher.count({});
  var c = count + count2;

  res.json({ totalCount: c });
  console.log(c)
});

module.exports = router;
