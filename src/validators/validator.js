const { body } = require("express-validator");

const { User } = require("../models/User")


let myValidator = (req,res,next)=>{ 
   /*  body('email').custom(value => {
        console.log(value);
        return User.findUserByEmail(value).then(user => {
          if (user) {
            return Promise.reject('E-mail already in use');
          }else{
            next();
          }
        });
    }) */
     if(req.body.email === undefined){
        res.status(400).json({msg:"email is required!!!"});
    }else{

        next()
    } 
};


module.exports = { myValidator }