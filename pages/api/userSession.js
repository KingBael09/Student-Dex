import * as fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const userAvail = `Database/Users/${req.body.id}.json`;
    if (fs.existsSync(userAvail)) {
      let data = await fs.promises.readFile(
        `Database/Users/${req.body.id}.json`
      );
      // console.log(req.body.id);

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
    res.status(200).json({ status: "Bad Request" });
  }
}
