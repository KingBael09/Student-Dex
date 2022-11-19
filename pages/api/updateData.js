import * as fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // considering Folder and User already Exist
    // req containing
    // LoginId, Catergory, Nationality, PhysicalHandicap, City, Religion, Address
    const availFile = `Database/Users/${req.body.id}.json`;
    if (fs.existsSync(availFile)) {
      const input = req.body;
      const data = fs.readFileSync(availFile);

      const userData = JSON.parse(data);
      userData.Category = input.Category;
      userData.Nationality = input.Nationality;
      userData.PhysicalHandicap = input.PhysicalHandicap;
      userData.City = input.City;
      userData.Religion = input.Religion;
      userData.Address = input.Address;
      console.log(typeof input.Attendance);
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

      // fs.appendFileSync()
    } else {
      res.status(200).json({ status: "Database Error" });
    }
  } else {
    res.status(200).json({ status: "Bad Request" });
  }
}
