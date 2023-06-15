const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const detail = require('./modules/detail')

router.use('/urls', detail)
router.use('/', home)

module.exports = router