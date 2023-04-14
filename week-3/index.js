const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());

const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("<h2 style='color: #ff7621;'>Hello AppWorksSchool</h2>");
});

app.use(express.static("public"));

app.get("/getData", (req, res) => {
  const number = req.query.number;
  let answer = 0;
  console.log(number);
  if (number) {
    if (isNaN(number)) {
      res.send({ result: "Wrong Parameter" });
    } else {
      for (let i = 1; i <= number; i++) {
        answer += i;
      }
      res.send({ result: answer.toString() });
    }
  } else {
    res.send({ result: "Lack of Parameter" });
  }
});

// ---------------assignment 5-----------------------------
app.get("/myName", (req, res) => {
  res.render("myName", { name: req.cookies.name });
});

app.get("/trackName", (req, res) => {
  const name = req.query.name;
  res.cookie("name", name);
  res.redirect("/myName");
});

app.post("/back", (req, res) => {
  res.clearCookie("name");
  res.redirect("/myName");
});

app.listen(port, () => {
  console.log(`The app is running on localhost: ${port}`);
});
