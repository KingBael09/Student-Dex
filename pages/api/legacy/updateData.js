import * as fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // considering Folder and User already Exist
    // req containing => LoginId, Catergory, Nationality, PhysicalHandicap, City, Religion, Address

    const availFile = `Database/Users/${req.body.id}.json`;
    if (fs.existsSync(availFile)) {
      const input = req.body;
      const data = fs.readFileSync(availFile);

      const userData = JSON.parse(data);
      if (input.Category != undefined || input.Category != "") {
        userData.Category = input.Category;
      }
      if (input.Nationality != undefined || input.Nationality != "") {
        userData.Nationality = input.Nationality;
      }
      if (input.PhysicalHandicap != undefined || input.PhysicalHandicap != "") {
        userData.PhysicalHandicap = input.PhysicalHandicap;
      }
      if (input.City != undefined || input.City != "") {
        userData.City = input.City;
      }
      if (input.Religion != undefined || input.Religion != "") {
        userData.Religion = input.Religion;
      }
      if (input.Address != undefined || input.Address != "") {
        userData.Address = input.Address;
      }
      if (input.Attendance != undefined || input.Attendance != "") {
        userData.Attendance = input.Attendance;
      }
      if (input.CSEM != undefined || input.CSEM != "") {
        userData.CSEM = input.CSEM;
      }
      if (input.CGPA != undefined || input.CGPA != "") {
        userData.CGPA = input.CGPA;
      }

      fs.writeFileSync(availFile, JSON.stringify(userData));

      res.status(200).json({ status: "OK" });

    } else {
      res.status(200).json({ status: "Database Error" });
    }
  } else {
    res.status(200).json({ status: "Bad Request" });
  }
}

// TODO: In Future Convert this to Switch Statement
