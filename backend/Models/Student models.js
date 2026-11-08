import mongoose  from  'mongoose'


const StudentSchema = new mongoose.Schema({

   name: String,
   roll: String,
   email: String,
   phone: String,
   address: String,
   dob: Date

});

const Student = mongoose.model("Student", StudentSchema);
export default Student;