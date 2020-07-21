// import sql from 'mysql';
import db from './../../db.js';
import { genSaltSync, hashSync } from 'bcrypt';

export function post(req,res,next){
 console.log(req.body);
 let {name,email,phno,org,size,password,} = req.body;
 const salt = genSaltSync(10);
 password = hashSync(password,salt);
  let postquery = `INSERT INTO users (name, email, phno, org, size, password)
  VALUES ('${name}','${email}','${phno}', '${org}', '${size}', '${password}');`;
  db.query(postquery,(err,result)=>{
    console.log("---------")
    if(err){
        console.log(err)
        throw err;
    }
    console.log(result);
    res.send(result)
  });
}
