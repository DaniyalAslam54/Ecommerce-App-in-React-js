const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    Name:String,
    RollNo:String
});

module.exports = mongoose.model("Student",studentSchema);


// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "dddd",
//   database: "crud_db",
// });

// app.get("/columns", (req, res) => {
//   const sql = "SHOW COLUMNS FROM student";
//   db.query(sql, (error, result) => {
//     if (error) {
//       return res.json({ Message: "Error while fetching columns" });
//     }

//     const columns = result
//       .filter((columnInfo) => columnInfo.Field !== "Id")
//       .map((columnInfo) => columnInfo.Field);

//     return res.json(columns);
//   });
// });

// app.get("/students", (req, res) => {
//     const sql = "SELECT * FROM student";
//     db.query(sql, (error, result) => {
//       if (error) return res.json({ Message: "Error while fetching" });
//       return res.json(result);
//     });
// });  

// app.post("/post", (req, res) => {
//   const obj = {
//     Id:req.body.Id,
//     Name:req.body.Name,
//     RollNo:req.body.RollNo,

//   }

//   if (obj.Id === 0) {
//     const insertSql = `INSERT INTO student (Name, RollNo) VALUES ('${obj.Name}', '${obj.RollNo}')`;

//         db.query(insertSql, (insertError, insertResult) => {
//           if (insertError) {
//             return res.json({ Message: "Error while inserting" });
//           }
//           obj.Id = insertResult.insertId;
//           return res.json(obj);
//         });
//   }
//   else{
//     const updateSql = "UPDATE student SET Name = ?, RollNo = ? WHERE Id = ?";
//     const updateValues = [Name, RollNo, Id];

//     db.query(updateSql, updateValues, (updateError, updateResult) => {
//       if (updateError) {
//         return res.json({ Message: "Error while updating" });
//       }

//       return res.json(updateResult);
//     });
//   }
  
// });