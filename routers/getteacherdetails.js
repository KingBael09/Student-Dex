const express = require("express");
const router = new express.Router();
require("../connection/conn");
const Student = require("../modelsdb/schemastudent");
const Teacher = require("../modelsdb/teacherregister");

router.post("/getteacherdetails", async (req, res) => {
  const data = await Teacher.findOne({ Emp_ID: req.body.Emp_ID }).select({
    Password: 0,
    _id: 0,
    __v: 0,
  });
  if (data == null) {
    res.send("false");
  } else {
    res.send(data);
  }
});

module.exports = router;
