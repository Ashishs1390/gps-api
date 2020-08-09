import db from './../../../db.js'

export function get(req,res,next){
    res.send("Hi from seekers");
}

export function post(req,res,next){
    console.log(req.body);
    // res.send("Seekers")

    createUser(req);
}


function createUser(req){
    let {email, password,interest} = req.body;
    let postquery = `INSERT INTO seekersusers (name, email, password)
    VALUES ('${name}','${email}','${phno}', '${org}', '${size}', '${password}');`;
}