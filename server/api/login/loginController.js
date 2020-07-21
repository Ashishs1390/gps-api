import db from './../../db.js';
import { compareSync } from 'bcrypt';
import {sign} from 'jsonwebtoken';

export function post(req,res,next){
    console.log(req.body);
    let {email,password} = req.body;
    let postQuery = `select email,password from users where email = '${email}'`;
     db.query(postQuery,(err,result)=>{
       if(err){
           console.log(err)
           throw err;
       }
       console.log(result);
       if(result){
           const passwordCheck = compareSync(password,result[0].password)
            if(passwordCheck){
                result[0].password = undefined;
                const jsontoken = sign({result:result},"dsf236",{
                    expiresIn:"24h"
                });
                res.json({
                    message:"login successfully",
                    token:jsontoken
                })
            }else{
                res.send({
                    message:"Invalid username or password"
                })
            }

       }else{
           res.send({
               message:"Invalid username or password"
           })
       }
     });
   }