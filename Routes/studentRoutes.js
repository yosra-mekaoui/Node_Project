const express = require("express");
const router = express.Router();


var bodyParser = require("body-parser");
const studentController = require('../Controllers/studentController');



router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get("/getAll", studentController.getAllStudents);


router.get("/getStudent/:id", studentController.getStudentById);


router.post("/new", studentController.addNewStudent);

router.delete("/delete/:id", studentController.deleteStudent);

router.put("/update/:id", studentController.updateStudent);

module.exports = router;