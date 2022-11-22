import * as fs from "fs";

export default async function handler(req, res) {
  const dir = "Database/Users/";

  let data = fs.readdirSync(dir, (error, files) => {
    return files;
  });

  const finalData = data.length;
  res.status(200).json({ total: finalData });
}
