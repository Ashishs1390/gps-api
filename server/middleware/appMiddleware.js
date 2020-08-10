const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require("cors");

module.exports = (app)=>{
    
    app.use(morgan('dev'))
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    
    var corsOptions = {
        origin: "http://localhost:19006,http://localhost:19002/"
    };
    app.use(cors(corsOptions));
}