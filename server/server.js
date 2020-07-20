import express from 'express';
const app = express();
import api from './api/api';
// import config from './config/index';
import db from './db';

// console.log(config);
// require('mongoose').connect(`mongodb://localhost/nodeblog`);
// require('mongoose').connect(`${config.dbUrl}`);


 //app.get('/createUsersTable',(req,res)=>{
//     let sql = `
//     create TABLE users (id int AUTO_INCREMENT,
//         name VARCHAR(255), 
//         email VARCHAR(255),
//         phno int,
//         org VARCHAR(255),
//         size int, 
//         password VARCHAR(255),
//         PRIMARY KEY (id)
//        );
//     `;
//     db.query(sql,(err,result)=>{
//         if(err){
//             console.log(error)
//             throw err;
//         }
//         console.log(result)
//         res.send('Users Table created..!!!');
//     });
// });


require('./middleware/appMiddleware')(app);

app.use('/api/',api);

 module.exports = app;