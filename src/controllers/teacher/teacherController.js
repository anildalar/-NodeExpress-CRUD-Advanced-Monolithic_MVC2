let teacherController = (req,res)=>{
    res.status(200).json({
        msg:"hi from teacher",
        data:req.user
    });
};


exports.teacherController = teacherController;