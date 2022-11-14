import * as fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const folderName = "Database/Users";
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
    const availFile = `Database/Users/${req.body.RollNo}.json`;
    if (fs.existsSync(availFile)) {
      res.status(200).json({ status: "Exists" });
    } else {
      fs.promises.writeFile(
        `Database/Users/${req.body.RollNo}.json`,
        JSON.stringify(req.body)
      );
      res.status(200).json(req.body);
    }
  } else {
    res.status(200).json({ status: "Bad Request" });
  }
}
