import db from './../../db.js';

export function post(req,res,next){
 console.log(req.body);
 let {proname,prodesc,price,comments,address} = req.body;
  let postquery = `delimiter //
  CREATE PROCEDURE additional_details(IN proname varchar(100),IN prodesc varchar(100),IN price int(20),IN comments varchar(100),IN address varchar(100))
      BEGIN
      INSERT INTO product (proname, prodesc, price,comments)
      VALUES (proname, prodesc, price,comments);
      INSERT INTO users (address)
      VALUES (address);
      END//`
  db.query( `CALL additional_details('${proname}', '${prodesc}', '${price}','${comments}','${address}');`,(err,result)=>{
    console.log("---------")
    if(err){
        console.log(err)
        throw err;
    }
    console.log(result);
    res.send(result)
  });
}

