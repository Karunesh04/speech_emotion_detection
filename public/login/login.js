const mysql = require("mysql");
const express= require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();

const app = express();
 let path = require("path");

app.use(express.static(path.join(__dirname, 'login')));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "emotalk",
});

// connect to database
connection.connect((error) => {
  if (error) throw error;
  else console.log("connected to the database successfully!");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.post("/", encoder, (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  connection.query("select * from user_login where user_name = ? and user_passwd= ?", [username,password], (error, fields)=>{
    if (res.length > 0) {
      res.redirect("/home.html")
    } else {
      res.redirect("/");
    }
    res.end();
  });
});

// set app port
app.listen(3000);













