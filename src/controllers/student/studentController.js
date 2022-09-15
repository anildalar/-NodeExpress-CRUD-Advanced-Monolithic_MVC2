const { Student } = require("../../models/User");

let studentController = (req,res)=>{

    const student = new Student(req.body);
    student.save()
    .then(d=>{
        res.status(200).json({
            msg:"ok student Create",
            data:d
        });
    })
    .catch(e=>{
        res.status(400).json({
            msg:"Error",
            error:e
        });
    });

    
}


//Named export
exports.studentController = studentController;