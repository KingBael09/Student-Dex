const express = require("express");
const router = new express.Router();
require("../connection/conn");
const Student = require("../modelsdb/schemastudent");
const Course = require("../modelsdb/registeredcourse");
const Teacher = require("../modelsdb/teacherregister");

router.post("/putAttendence", async (req, res) => {});

module.exports = router;
