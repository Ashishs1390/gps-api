// import sql from 'mysql';
import db from './../../db.js';
import { genSaltSync, hashSync } from 'bcrypt';

export function post(req,res,next){
 let {name,email,phno,org,size,password,} = req.body;
 const salt = genSaltSync(10);
 password = hashSync(password,salt);

  let postquery = `INSERT INTO users (name, email, phno, org, size, password)
  VALUES ('${name}','${email}','${phno}', '${org}', '${size}', '${password}');`;
    let data =  new Promise((resolve,reject)=>{
      db.query(postquery,(err,result)=>{
        if(err){
            reject(err);
        }
        resolve(result);
      });
    })
    data.then((result)=>{
      res.send(result)
    }).catch((err)=>{
      res.send(err);
    })
  

}
