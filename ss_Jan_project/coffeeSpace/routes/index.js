
const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const blog = require('./modules/blog')
router.use('/', home)
router.use('/blog', blog)

module.exports = router

