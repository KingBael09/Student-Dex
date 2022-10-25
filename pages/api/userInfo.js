import * as fs from "fs";

export default async function handler(req, res) {
  let data = await fs.promises.readFile("Database/student.json");

//   let finalData = [];
//   finalData.push(JSON.parse(data));
    let finalData = JSON.parse(data)
  
  res.status(200).json(finalData);

}