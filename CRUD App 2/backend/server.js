const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Student = require("./student");

const app = express();
app.use(cors());
app.use(express.json());

app.listen(8080, () => {
  mongoose.connect("mongodb://localhost/crud_db");
  console.log("listening on port 8080");
});

app.get("/columns", (req, res) => {
  const studentSchema = Student.schema.obj;
  const columns = Object.keys(studentSchema);
  return res.json(columns);
});

app.get("/students", async (req, res) => {
  const student = await Student.find({});
  return res.json(student);
});

app.post("/post", async (req, res) => {
  const student = await Student.findById(req.body.Id);
  if (student.$isEmpty) return res.json(student);
  else return res.json({"not":"found"})
});

