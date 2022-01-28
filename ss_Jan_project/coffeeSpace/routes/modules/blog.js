const express = require('express')
const router = express.Router()

router.get('/contact', (req, res) => {
    res.render('contact')
  })
  router.get('/blog_list', (req, res) => {
    res.render('articleList' , { blogs: sortBLogNum(blogList) })
  })
  router.get('/about', (req, res) => {
    res.render('about')
  })


module.exports = router