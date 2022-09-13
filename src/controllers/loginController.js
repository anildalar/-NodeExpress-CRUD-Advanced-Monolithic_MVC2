const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let loginController = (req,res)=>{

    // Check the the email is exits
    User.findOne({
        email: req.body.email
    })
    .then(d=>{
        if(d === null){
            //Invalid User
            res.status(403).json({
                msg:"Invalid Credentials"
            });
        }else{

            console.log("d",d.password_hash)
            //Passwrod hash
            const x = bcrypt.compareSync(req.body.password_hash, d.password_hash);
            console.log("x",x)
            if(bcrypt.compareSync(req.body.password_hash, d.password_hash)){
                //True
                //Welcome
                console.log('d data',d);
                var token = jwt.sign(
                                        {
                                            role:d.role,
                                            userid:d._id,
                                            email:d.email
                                        },
                                        process.env.JWT_SECRET,
                                        { expiresIn: '30d' }
                                    );
                res.status(200).json({
                    result:"Welcome",
                    token
                });
            }else{
                //False
                //Bhid kam
                res.status(403).json({
                    msg:"Invalid Credentials"
                });
            }
           
        }
    })
    .catch(e=>{
        res.status(400).json({
            error:e
        });
    });


   
}


//Named Export
module.exports = { loginController }