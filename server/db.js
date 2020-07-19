import mysql from 'mysql';
const db = mysql.createConnection({
    host:'localhost',
    user:'aa',
    password:'letmein',
    database: 'gps'
});

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("MySql connected..!!!")
});
// app.get('/createdb',(req,res)=>{
//     let sql = 'create DATABASE gps';
//     db.query(sql,(err,result)=>{
//         if(err){
//             console.log(error)
//             throw err;
//         }
//         res.send('Database created..!!!');
//     });
// });

module.exports = db;