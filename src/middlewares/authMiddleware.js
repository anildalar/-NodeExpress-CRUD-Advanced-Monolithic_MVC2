const jwt = require('jsonwebtoken');

let authMiddleware = (req,res,next)=>{
    if(req.headers.authorization === undefined){
        res.status(403).json({msg:'Unauthorized'})
    }
    console.log(req.headers.authorization.split(' ')[1]);
    var token = req.headers.authorization.split(' ')[1];
    //jwt.verify(token, secretOrPublicKey, [options, callback])
    try {
        var decoded = jwt.verify(token,process.env.JWT_SECRET)  ;
        req.user = decoded;// I have created new key on the req object
        next();
    } catch (error) {
        res.status(403).json({msg:'Unauthorized'})
    }
   
    
}

let adminAuth = (req,res,next)=>{
    console.log(req.user.role)
    if(req.user.role !== 'admin' ){
        res.status(403).json({msg:'Unauthorized'})
    }else{
        next();
    }
}

let adminTeacherAuth = (req,res,next)=>{
    console.log(req.user.role)
    if(req.user.role === 'student' ){
        res.status(403).json({msg:'Unauthorized'})
    }else{
        next();
    }
}


module.exports =  { authMiddleware,adminAuth,adminTeacherAuth } 