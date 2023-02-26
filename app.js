import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "homework",
// });

const db = mysql.createConnection({
  host: "localhost",
  user: "mvorbnfa_homework",
  password: "akakakak",
  database: "mvorbnfa_homework",
});

app.use(express.json());
app.use(cors());

app.get("/list", (req, res) => {
  db.query("SELECT * FROM HWCertificates", (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/send", (req, res) => {
  const values = ["143", "GGG", "2023-02-26"];
  db.query(
    "INSERT INTO HWCertificates(`StuSNo`, `ModuleName`, `Date`) VALUES(?)",
    [values],
    (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    }
  );
});

app.listen(8800, () => {
  console.log("Connected to database");
});
