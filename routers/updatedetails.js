const express = require("express");
const app = express();
const router = new express.Router();
require("../connection/conn");
const Student = require("../modelsdb/schemastudent");

router.patch("/updatedata", async (req, res) => {
  const d1 = await Student.findOne({ RollNo: req.body.RollNo });
  const d2 = await Student.deleteOne({ RollNo: req.body.RollNo });
  const data = new Student(req.body);
  const s1 = await data.save();
  res.send("true");
});

router.post("/studentdata", async (req, res) => {
  try {
    const data = await Student.findOne({ RollNo: req.body.RollNo });
    res.send(data);
    console.log("data fetched successfully");
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
