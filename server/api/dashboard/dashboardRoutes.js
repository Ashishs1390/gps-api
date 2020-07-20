const router = require('express').Router();
import {get,post} from './dashboardController'
router.route('/additionaldetails').post(post);


module.exports = router;