import * as fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);

    fs.promises.writeFile(
      `Database/Users/${req.body.FName}.json`,
      JSON.stringify(req.body)
    );
    res.status(200).json(req.body);
  } else {
    res.status(200).json({ status: "Bad Request" });
  }
}
