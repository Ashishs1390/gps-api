import db from './../../db.js';

export function post(req,res,next){
 console.log(req.body);
 let {proname,prodesc,price,comments} = req.body;
  let postquery = `INSERT INTO product (proname, prodesc, price,comments)
  VALUES ('${proname}', '${prodesc}', '${price}','${comments}');`;
  return db.query(postquery,(err,result)=>{
    console.log("---------")
    if(err){
        console.log(err)
        throw err;
    }
    console.log(result);
    res.send(result)
  });
}
