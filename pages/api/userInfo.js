import * as fs from "fs";

// Reads File Database/student.js and redirects its content

export default async function handler(req, res) {
  if (req.method === "POST") {
    const availFile = `Database/Users/${req.body.id}.json`;
    if (fs.existsSync(availFile)) {
      let data = await fs.promises.readFile(
        `Database/Users/${req.body.id}.json`
      );

      let finalData = JSON.parse(data);

      if (finalData.Pass != req.body.Pass) {
        res.status(404).json({ status: "Invalid" });
      } else {
        res.status(200).json(finalData);
      }
    } else {
      res.status(200).json({ status: "Unavailable" });
    }
  } else {
    let data = await fs.promises.readFile("Database/student.json");

    let finalData = JSON.parse(data);
    res.status(200).json(finalData);
  }
}
