const express = require("express");
const app = express();
const router = new express.Router();
require("../connection/conn");
const Teacher = require("../modelsdb/teacherregister");

app.use(express.json());

router.post("/authenticateteach", async (req, res) => {
  const tdata = await Teacher.findOne({ Emp_ID: req.body.Emp_ID }).select({
    _id: 0,
    __v: 0,
  });
  if (tdata == null) {
    res.send("false");
  } else if (tdata.Password == req.body.Password) {
    res.send(tdata);
  } else {
    res.send("false");
  }
});

module.exports = router;
