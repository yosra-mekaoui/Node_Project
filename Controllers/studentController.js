const Student = require("../Models/student")

exports.getAllStudents =  async (req, res) => {
  try {
    const data = await Student.find({});
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const data = await Student.findById(req.params.id);
    res.send(data)  
  } catch (error) {
    console.log(error);
  }
}

exports.addNewStudent = async (req, res, next) => {
  console.log("resultat :" + JSON.stringify(req.body));
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(200).send(student);
  } catch (err) {
    console.log(err);
  }
}

exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndRemove(req.params.id);
    res.send("Student Deleted")
  } catch (error) {
    console.log(error);
  }
}

exports.updateStudent = async (req, res) => {
  try {
    await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send("Student Updated")
  } catch (error) {
    console.log(error);
  }
}