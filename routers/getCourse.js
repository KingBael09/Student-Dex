const express = require("express");
const app = express();
require("../connection/conn");
const Courses = require("../modelsdb/registeredcourse");
const router = new express.Router();

app.use(express.json());

router.post("/getcourses", async (req, res) => {
  const data = await Courses.findOne({ RollNo: req.body.RollNo }).select({
    RollNo: 0,
    _id: 0,
    __v: 0,
    flag: 0,
  });
  if (data == null) {
    res.send("false");
  } else {
    res.send(data);
  }
});

module.exports = router;
