const express = require("express");
const app = express();
const router = new express.Router();
require("../connection/conn");
const Student = require("../modelsdb/schemastudent");

router.post("/DeleteUser", async (req, res) => {
  try {
    const data = await Student.deleteOne({ RollNo: req.body.RollNo });
    res.send(data);
  } catch (e) {
    res.send("Error");
  }
});

module.exports = router;
