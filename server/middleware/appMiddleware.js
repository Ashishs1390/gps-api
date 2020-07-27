const morgan = require('morgan');
const bodyParser = require('body-parser');
// const cors = require("cors");
var session = require('express-session');





module.exports = (app)=>{
    app.use(morgan('dev'))
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 3600000 }
      }))
    // var corsOptions = {
    //     origin: "http://localhost:8081"
    // };
    // app.use(cors(corsOptions));
      
      
}