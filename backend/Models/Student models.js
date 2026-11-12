import mongoose  from  'mongoose'


const StudentSchema = new mongoose.Schema({

   name: String,
   roll: String,
   email: String,
   phone: String,
   address: String,
   dob: Date

});

const ClassSchema = new mongoose.Schema({

   Classses: String,
   Timeing:  String,
   Mintus: String,
   Teacher: String

});

 export const Class = mongoose.model("Class", ClassSchema)
 export const Student = mongoose.model("Student", StudentSchema);

