const router = require('express').Router();
const { FS_ROUTE } = require('./file_system.route');

router.use('/fs', FS_ROUTE)

exports.appRoutes = router