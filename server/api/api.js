var router = require('express').Router();
import {checkToken} from './../auth/token_validation';

router.use('/users',require('./users/userRoutes'));
router.use('/login',require('./login/loginRoutes'));
router.use('/dashboard',require('./dashboard/dashboardRoutes'));



module.exports = router;