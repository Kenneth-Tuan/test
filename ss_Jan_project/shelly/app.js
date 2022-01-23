const express = require('express')
const mongoose = require('mongoose')
const axios = require('axios')
const bodyParser = require('body-parser')
// const routes = require('./routes')

require('./config/mongoose')

const PORT = process.env.PORT || 3000
const app = express()

const exphbs = require('express-handlebars')
const { response } = require('express')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(routes)


const BASE_URL = 'https://kenblog.grazia.tw/'
const BLOG_LIST = BASE_URL + 'api/web/blog/blog?_method=GET'
const BLOG_TYPE_LIST = BASE_URL + 'api/web/blog/blog_type/select?_method=GET'
const CONTACT_CREATE = BASE_URL + 'api/web/contact/contact?_method=POST'
const CHALLENGE_GET = BASE_URL + 'api/web/challenge/challenge'

let typeList = ''
let blogTypeList = []
const blogList = []

init()

// routes setting
app.get('/', (req, res) => {

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
app.get('/contact', (req, res) => {
  res.render('contact')
})
app.get('/blog_list', (req, res) => {
  res.render('articleList' , { blogs: sortBLogNum(blogList) })
})
app.get('/about', (req, res) => {
  res.render('about')
})
app.get('/:id', (req, res) => {
  let blog = {}
  axios
    .get(BASE_URL + 'api/web/blog/blog/' + req.params.id + '?_method:GET')
    .then((response) => {
      blog = response.data.data.original.data
      res.render('article', { blog_title: blog.blog_title,
        blog_date: blog.blog_online_dsp,
        blog_image1: blog.blog_image1_dsp,
        blog_content1: blog.blog_content1
    })


  })
})
app.post('/contact', (req, res) => {
  const contact_user = req.body.name
  const contact_email = req.body.email;
  const contact_phone = req.body.phone;
  const contact_question = req.body.question;

  let data = {
    'contact_user':contact_user,
    'contact_email':contact_email,
    'contact_phone':contact_phone,
    'contact_question':contact_question
  }

  let headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      // "Authorization": ``,
  };

  axios({
      method: 'post',
      url: `https://kenblog.grazia.tw/api/web/contact/contact`,
      data: data,
      headers: headers
  })
      .then( (response) => console.log(response))
      .catch( (error) => console.log(error))
})

// start and listen on the Express server
app.listen(PORT, () => {
  console.log(`APP is listening on localhost:${PORT}`)
})


/* function */

function sortBLogNum(arr, num1, num2) {
  let newArr = [];
  for(i = blogList.length + 1 ; i>0 ;i--) {
    arr.forEach(item => {
      if(item.blog_id === i) {
        newArr.push(item)
      }
    })
  }
  // arr.sort(function(a, b) {
  //   return b.blog_id - a.blog_id
  // })???

  if (num1>=0 && num2>0) {
    return  newArr.splice(num1, num2)
  } else {
    return newArr
  }
}

function sortBlogType(blogType, arr) {
  let newArr = []
  arr.forEach(item => {
    if(item.blog_type_title === blogType) {
      newArr.push(item)
    }
  })
  return newArr
}

function theTopBlog () {
  if(blogList.some(ele => ele.blog_top_index_tag)){
    return blogList.find(ele => ele.blog_top_index_tag === 1)
  } else {
    return blogList.find(ele => ele.blog_show_index_tag === 1)
  }
}

function showBlogs (blogType, arr) {
  arr = sortBLogNum(sortBlogType(blogType, arr))
  let blogs = []
      arr.forEach(item => {
        if(item.blog_show_index_tag === 1 && item.blog_top_index_tag === 0) {
          blogs.push(item)
        }
      })
  return blogs
}

function getBlogInfo (id) {
  axios 
  .get(BASE_URL + 'api/web/blog/blog/' + id + '?_method:GET')
  .then((response) => {
    blog = response.data.data.original.data
  })  
  .catch((err) => console.log(err))
  
  return blog
}

/*axios*/

async function init() {
  let res = await axios.get(BLOG_LIST)//取得部落格列表
  blogList.push(...res.data.msg.original.lists.data)
  blogList.sort(function (a, b) {
    return b.blog_id - a.blog_id
  })
  return blogList
}

axios //取得部落格類型列表
  .get(BLOG_TYPE_LIST)
  .then((response) => {
    response.data.msg.original.lists.forEach(item => {
      blogTypeList.push(item.blog_type_title)
    })
    // console.log(blogTypeList)
    // console.log('=====================')
  })  
  .catch((err) => console.log(err))

axios
  .get(BLOG_LIST)
  .then((res) => {
    console.log(res)
  })








  

  