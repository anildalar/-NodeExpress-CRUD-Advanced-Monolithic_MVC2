let studentController = (req,res)=>{

    res.status(200).json({
        msg:"ok student Create",
        data:req.body
    });
}


//Named export
exports.studentController = studentController;