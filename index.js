  const express = require("express");
const studentsRouter = require("./routers/studentsrouter");
//const teachersRouter = require("./routers/teachersrouter");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h1>Student Home Page<h1/>");
});

app.use("/students", studentsRouter);

app.use(bodyParser.json());

/*app.get("/", (req, res) => {
  res.send("<h1>Teachers Home Page</h1>");
});

app.use("/teachers", teachersRouter);*/

app.listen(8080, () => {
  console.log("Server running");
});
