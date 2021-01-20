const router = require('express').Router();
const { FS } = require('../controller/file_system.controller');

router.post('/html_to_pdf', FS.convert_file_html_pdf);

exports.FS_ROUTE = router