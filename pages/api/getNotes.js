// ? Assuming Data in form of branch, semester
import * as fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const folderName = "Database/Subjects";

    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }

    const availFile = `Database/Subjects/${req.body.Branch}.json`;

    if (fs.existsSync(availFile)) {
      let data = await fs.promises.readFile(availFile);

      let finalData = JSON.parse(data);

      res.status(200).json(finalData);
    } else {
      res.status(200).json({ status: "BranchMissing" });
    }
  } else {
    res.status(200).json({ status: "Bad Request" });
  }
}
