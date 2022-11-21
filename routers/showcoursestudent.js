const express = require("express");
const router = new express.Router();
require("../connection/conn");
const Student = require("../modelsdb/schemastudent");
const Course = require("../modelsdb/registeredcourse");
const Teacher = require("../modelsdb/teacherregister");

router.post("/getregisteredcandidate", async (req, res) => {
  const teach = await Teacher.findOne({ Subject: req.body.Subject });

  if (teach.Subject == "cs3001") {
    const studdata1 = await Course.find({ cs3001: "true" })
      .select({ RollNo: 1, _id: 0 })
      .sort({ RollNo: 1 });
    res.send(studdata1);
  } else if (teach.Subject == "cs3002") {
    const studdata2 = await Course.find({ cs3002: "true" })
      .select({ RollNo: 1, _id: 0 })
      .sort({ RollNo: 1 });
    res.send(studdata2);
  } else if (teach.Subject == "cs3003") {
    const studdata3 = await Course.find({ cs3003: "true" })
      .select({ RollNo: 1, _id: 0 })
      .sort({ RollNo: 1 });
    res.send(studdata3);
  } else if (teach.Subject == "cs3004") {
    const studdata4 = await Course.find({ cs3004: "true" })
      .select({ RollNo: 1, _id: 0 })
      .sort({ RollNo: 1 });
    res.send(studdata4);
  } else if (teach.Subject == "cs3005") {
    const studdata5 = await Course.find({ cs3005: "true" })
      .select({ RollNo: 1, _id: 0 })
      .sort({ RollNo: 1 });
    res.send(studdata5);
  } else if (teach.Subject == "cs3006") {
    const studdata6 = await Course.find({ cs3006: "true" })
      .select({ RollNo: 1, _id: 0 })
      .sort({ RollNo: 1 });
    res.send(studdata6);
  } else if (teach.Subject == "cs3007") {
    const studdata7 = await Course.find({ cs3007: "true" })
      .select({ RollNo: 1, _id: 0 })
      .sort({ RollNo: 1 });
    res.send(studdata7);
  } else if (teach.Subject == "cs3008") {
    const studdata8 = await Course.find({ cs3008: "true" })
      .select({ RollNo: 1, _id: 0 })
      .sort({ RollNo: 1 });
    res.send(studdata8);
  } else if (teach.Subject == "cs3009") {
    const studdata9 = await Course.find({ cs3009: "true" })
      .select({ RollNo: 1, _id: 0 })
      .sort({ RollNo: 1 });
    res.send(studdata9);
  } else {
    res.send("false");
  }
});

module.exports = router;
