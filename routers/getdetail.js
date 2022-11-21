const express = require("express");
const router = new express.Router();
require("../connection/conn");
const Student = require("../modelsdb/schemastudent");

router.post("/getdetails", async (req, res) => {
  try {
    const data = await Student.findOne({ RollNo: req.body.RollNo }).select({
      Password: 0,
      __v: 0,
      _id: 0,
    });
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
