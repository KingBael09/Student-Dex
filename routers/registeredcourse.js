const express = require("express");
const app = express();
const router = new express.Router();
require("../connection/conn");
const Courses = require("../modelsdb/registeredcourse");

app.use(express.json());

router.post("/registercourse", async (req, res) => {
  try {
    const reg = await Courses.findOne({ RollNo: req.body.RollNo });
    if (reg.flag == "false") {
      const origin = await Courses.deleteOne({ RollNo: req.body.RollNo });
      const data = new Courses({
        RollNo: req.body.RollNo,
        cs3001: req.body.cs3001,
        cs3002: req.body.cs3002,
        cs3003: req.body.cs3003,
        cs3004: req.body.cs3004,
        cs3005: req.body.cs3005,
        cs3006: req.body.cs3006,
        cs3007: req.body.cs3007,
        cs3008: req.body.cs3008,
        cs3009: req.body.cs3009,
        flag: "true",
      });

      const course = new Courses(data);
      const metadata = await course.save();
      console.log("data saved");
      res.send("true");
    } else {
      res.send("false");
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
