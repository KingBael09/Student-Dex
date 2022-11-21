const express = require("express");
const app = express();
const router = new express.Router();
require("../connection/conn");
const Student = require("../modelsdb/schemastudent");

app.use(express.json());

router.post("/getAuthenticateStudent", async (req, res) => {
  try {
    const data = await Student.findOne({ RollNo: req.body.RollNo });
    console.log({data});
    if (!data) {
      res.write("false");
      res.status(500).json({
        message:"No user"
      });
    } else if (data.Password == req.body.Password) {
      res.json(data);
    } else {
      res.status(500).json({
        message:"Invalid Password"
      });
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
