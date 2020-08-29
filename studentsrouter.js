const express = require("express");
const students = require("../models/students");
const studentsRouter = express.Router();

studentsRouter
  .get("/", (req, res) => {
    res.status(200).json({
      students
    });
  })
  .get("/:id", (req, res) => {
    try {
      const descriptions = students.find(descriptions => {
        return descriptions.id === parseInt(req.params.id);
      });
      if (descriptions) {
        res.status(200).json({
          descriptions
        });
      } else {
        res.status(400).send("<h1>Student Not Found!</h1>");
      }
    } catch (e) {
      res.status(500).send("Internal server Error");
    }
  })
  .post("/", (req, res) => {
    if (req.body.firstName && req.body.age < 18) {
      const id = students.length + 1;
      const newStudent = {
        id,
        ...req.body
      };
      students.push(newStudent);
      res.status(200).json({
        students: newStudent
      });
    } else {
      res.status(400).send("Not Found");
    }
  })
  .patch("/:id", (req, res) => {
    try {
      let sudent = students.find(sudent => {
        return sudent.id === parseInt(req.params.id);
      });
      sudent = {
        ...sudent,
        ...req.body
      };
      res.status(400).json({ sudent });
    } catch (e) {
      res.status(500).send("Internal server Error");
    }
  })
  .delete("/:id", (req, res) => {
    try {
      let studentIndex;
      for (let i = 0; i < students.length; i++) {
        if (students[i].id === parseInt(req.params.id)) {
          studentIndex = i;
        }
      }
      if (studentIndex) {
        students.splice(studentIndex, 1);
        res.status(200).json({});
      } else {
        res.status(400).send("invalid student");
      }
    } catch (e) {
      console.error(e);
      res.status(500).send("Internal error");
    }
  });
module.exports = studentsRouter;
