import {Student, Class} from "../Models/Student models.js";



 export const addStudent = async (req, res) => {
    try{
        const student = await Student.create(req.body);
         res.status(201).json({
            message:"Student succesfully save", student
        });

    }catch(error){
        console.log("Actuall error", error)
        res.status(500).json({
            message:"student did't save" , error: error.message

        })

    }

};

export const addClass = async (req, res) => {
    try{
        const newClass =  await Class.create(req.body);
        res.status(201).json({
            message: "class information save", newClass
        })

    }catch(error){
        console.log('Actuall error', error)
        res.status(500).json({
            message:"Class did't save",error: error.message
        })
    }

}
