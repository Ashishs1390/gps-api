var router = require('express').Router();
import {checkToken} from './../auth/token_validation';

router.use('/startups/users',require('./users/userRoutes'));
router.use('/startups/login',require('./login/loginRoutes'));
router.use('/startups/dashboard',checkToken,require('./dashboard/dashboardRoutes'));


//routes for startups

router.use('/seekers/users',require('./seekers/users/usersRoute'));



module.exports = router;