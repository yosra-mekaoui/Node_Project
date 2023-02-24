var mongoose = require('mongoose');  
var StudentSchema = new mongoose.Schema({  
  name: String,
  matricule: String,
  status: Boolean ,
  phoneNumber: Number
});
mongoose.model('Student', StudentSchema);

module.exports = mongoose.model('Student');