const express = require("express");
const app = express();
const router = new express.Router();
require("../connection/conn");
const Teacher = require("../modelsdb/teacherregister");

app.use(express.json());

router.post("/registerteacher", async (req, res) => {
  try {
    const data = await Teacher.findOne({ Emp_ID: req.body.Emp_ID });
    const sub = await Teacher.findOne({ Subject: req.body.Subject });
    if (data == null && sub == null) {
      const tdata = new Teacher(req.body);
      const metadata = await tdata.save();
      res.send("true");
    } else {
      res.send("false");
    }
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
