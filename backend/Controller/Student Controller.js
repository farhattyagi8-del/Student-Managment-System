import StudentModels from "../Models/Student models.js";


const addStudent = async (req, res) => {
    try{
        const student = await StudentModels.create(req.body);

        res.status(201).json({
            message:"Student succesfully save", student
        });

    }catch(error){
        console.log("Actuall error", error)
        res.status(500).json({
            message:"student did't save" , error: error.message

        })

    }

}
export default addStudent;