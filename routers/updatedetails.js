const express = require("express");
const app = express();
const router = new express.Router();
require("../connection/conn");
const Student = require("../modelsdb/schemastudent");

router.post("/UpdateFirstName", async (req, res) => {
  try {
    const updated = await Student.updateOne(
      { RollNo: req.body.RollNo },
      { $set: { FirstName: req.body.FirstName } }
    );
    res.send(updated);
  } catch (e) {
    res.send("Error");
  }
});

router.post("/UpdateLastName", async (req, res) => {
  try {
    const roll = req.body.RollNo;
    const name = req.body.LastName;
    const data = await Student.updateOne(
      { RollNo: roll },
      { $set: { LastName: name } }
    );
    res.send(data);
  } catch (e) {
    res.send("Error");
  }
});

router.post("/UpdateGender", async (req, res) => {
  try {
    const roll = req.body.RollNo;
    const gender = req.body.Gender;
    const data = await Student.updateOne(
      { RollNo: roll },
      { $set: { Gender: gender } }
    );
    res.send("data updated sucessfully");
  } catch (e) {
    res.send("Error");
  }
});

router.post("/UpdateYearOfAddmission", async (req, res) => {
  try {
    const roll = req.body.RollNo;
    const name = req.body.YearOfAddmission;
    const data = await Student.updateOne(
      { RollNo: roll },
      { $set: { YearOfAddmission: name } }
    );
    res.send("data updated sucessfully");
  } catch (e) {
    res.send("Error");
  }
});

router.post("/UpdateMobile", async (req, res) => {
  try {
    const roll = req.body.RollNo;
    const name = req.body.Mobile;
    const data = await Student.updateOne(
      { RollNo: roll },
      { $set: { Mobile: name } }
    );
    res.send("data updated sucessfully");
  } catch (e) {
    res.send("Error");
  }
});

router.post("/UpdateBranch", async (req, res) => {
  try {
    const roll = req.body.RollNo;
    const name = req.body.Branch;
    const data = await Student.updateOne(
      { RollNo: roll },
      { $set: { Branch: name } }
    );
    res.send("data updated sucessfully");
  } catch (e) {
    res.send("Error");
  }
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
