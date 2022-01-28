
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', { the_top_blog: theTopBlog (),
                          blog_type_1: blogTypeList[0],
                          blog_type_2: blogTypeList[1],
                          s2_leftBlog: showBlogs(blogTypeList[0], blogList)[0],
                          s2_rightBlogs: sortBLogNum(showBlogs(blogTypeList[0], blogList), 1 , 3),
                          s3_blog_1: sortBLogNum(showBlogs(blogTypeList[1], blogList), 0 , 1)[0],
                          s3_blog_2: sortBLogNum(showBlogs(blogTypeList[1], blogList), 1 , 1)[0],
                          s3_blog_3: sortBLogNum(showBlogs(blogTypeList[1], blogList), 2 , 1)[0],
                          s3_blog_4: sortBLogNum(showBlogs(blogTypeList[1], blogList), 3 , 1)[0],
                        } )
  })

module.exports = router