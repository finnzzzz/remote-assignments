const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());

const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("<h2 style='color: #ff7621;'>Hello AppWorksSchool</h2>");
});

app.use(express.static("public"));

app.post("/getData", (req, res) => {
  const number = req.body.number;
  if (number) {
    if (isNaN(number)) {
      res.send({ result: "Wrong Parameter" });
    } else {
      // -----------v1
      let result = [];
      for (let i = 1; i <= number; i++) {
        result.push(i);
      }
      res.send({ result: result.join("+") });

      //-----------v2
      // let result = "";
      // for (let i = 1; i <= number; i++) {
      //   result += i;
      //   if (i !== parseInt(number)) {
      //     result += "+";
      //   }
      // }
      // res.send({ result });
    }
  } else {
    res.send({ result: "Lack of Parameter" });
  }
});

app.get("/getData", (req, res) => {
  const number = req.query.number;
  if (number) {
    if (isNaN(number)) {
      res.send("Wrong Parameter");
    } else {
      //-----------v1
      // let result = [];
      // for (let i = 1; i <= number; i++) {
      //   result.push(i);
      // }
      // res.send(result.join('+'))

      //-----------v2
      let result = "";
      for (let i = 1; i <= number; i++) {
        result += i;
        if (i !== parseInt(number)) {
          result += "+";
        }
      }
      res.send(result);
    }
  } else {
    res.send("Lack of Parameter");
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
