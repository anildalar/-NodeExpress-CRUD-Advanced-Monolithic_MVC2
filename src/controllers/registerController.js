const { User } = require("../models/User");

const bcrypt = require('bcrypt');

let registerController = (req,res)=>{

    //1. Find the user email is exits or not
    //db.collection.findOne();
    //Model.findOne()
    //db.collection = Model
    User.findOne({
        email:req.body.email
    })
    .then(d=>{
        console.log(d);
        if(d === null){
            //Go for registration process
            const salt = 10;
            const hash = bcrypt.hashSync(req.body.password_hash, salt);
            req.body.password_hash = hash; //Prev Value Overwrite
            
            const user = new User(req.body);
    
            //Generate the password hash
            
           
            user.save().then(d=>{
                res.status(200).json({
                    mag:"Saved"
                });
            }).catch(e=>{
                res.status(400).json({
                    mag:"Not Saved",
                    error:e
                });
            });
        }else{
            res.status(400).json({
                msg:"Email Already exits",
            });
        }
    })
    .catch(e=>{
        res.status(400).json({
            mag:"Error",
            error:e
        });
    });

    
}

module.exports = { registerController }