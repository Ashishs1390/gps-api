var router = require('express').Router();
router.use('/users',require('./users/userRoutes'));
router.use('/dashboard',require('./dashboard/dashboardRoutes'));
module.exports = router;