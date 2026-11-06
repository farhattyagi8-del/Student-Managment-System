import mongoose  from "mongoose";
import process from "process"


const ConnectDB = async () => {
  try{
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("Server Connected to mogodb:")
   }
   catch(error){
    console.log("Mongodb Error Comeing",error)
    process.exit(1);

  }
};

export default ConnectDB;