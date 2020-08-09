const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require("cors");
var session = require('express-session');

module.exports = (app)=>{
    
    app.use(morgan('dev'))
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(session({
        secret: 'keyboard cat',
        resave: true,
        saveUninitialized: true,
        maxAge:'24h'
      }))
    var corsOptions = {
        origin: "http://localhost:19006,http://localhost:19002/"
    };
    app.use(cors(corsOptions));
}