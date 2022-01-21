const express = require('express')
const mongoose = require('mongoose')
const axios = require('axios')

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



const BASE_URL = 'https://kenblog.grazia.tw/'
const BLOG_LIST = BASE_URL + 'api/web/blog/blog?_method=GET'
const BLOG_TYPE_LIST = BASE_URL + 'api/web/blog/blog_type/select?_method=GET'
const BANNER_LIST_IMG = BASE_URL + 'api/web/website/image?_method=GET&id='
const BANNER_LIST_TEXT = BASE_URL + 'api/web/website/text?_method=GET&id='
const CONTACT_CREATE = BASE_URL + 'api/web/contact/contact?_method=POST'
const CHALLENGE_GET = BASE_URL + 'api/web/challenge/challenge'

let imgData = ''
let textData = ''
let typeList = ''
let banner = {}
let blogTypeList = []
let blog = 
{
  blog_id : 0,
  blog_type : '',
  blog_title : '',
  blog_content : '',
  blog_img : '',
  blog_online_date : ''
}
const blogList = []



// routes setting
app.get('/', (req, res) => {

  axios //取得廣告圖片列表
    .get(BANNER_LIST_IMG + '2')
    .then((response) => {
      imgData  = JSON.parse(response.data.msg.original.lists)
      getLatestBanner(imgData)
      console.log(banner)
    })
    .catch((err) => console.log(err))



  res.render('index', { banner_img: banner.banner_content_image_dsp, 
                        banner_title: banner.banner_title, 
                        banner_date: banner.banner_start_dsp,
                        blog_type_1: blogTypeList[0],
                        blog_type_2: blogTypeList[1],
                        s2_leftBlog: sortBlogType(blogTypeList[0], sortBLogNum(blogList, 0, blogList.length))[0],
                        s2_rightBlogs: sortBLogNum(sortBlogType(blogTypeList[0], blogList), 1 , 3),
                        s3_blog_1: sortBLogNum(sortBlogType(blogTypeList[1], blogList), 0 , 1)[0],
                        s3_blog_2: sortBLogNum(sortBlogType(blogTypeList[1], blogList), 1 , 1)[0],
                        s3_blog_3: sortBLogNum(sortBlogType(blogTypeList[1], blogList), 2 , 1)[0],
                        s3_blog_4: sortBLogNum(sortBlogType(blogTypeList[1], blogList), 3 , 1)[0],
                      } )
})

app.get('/contact', (req, res) => {
  res.render('contact')
})
app.get('/blog_list', (req, res) => {
  res.render('articleList')
})
app.get('/about', (req, res) => {
  res.render('about')
})
app.get('/article', (req, res) => {
  res.render('article')
})

// start and listen on the Express server
app.listen(PORT, () => {
  console.log(`APP is listening on localhost:${PORT}`)
})



function getLatestBanner(arr) {
  // console.log(arr.length)
  arr.forEach(item => {
    if (item.banner_content_id == arr.length+1) {
      banner = item
    }
  });
}

function sortBLogNum(arr, num1, num2) {
  let newArr = [];
  for(i = blogList.length + 1 ; i>0 ;i--) {
    arr.forEach(item => {
      if(item.blog_id === i) {
        newArr.push(item)
      }
    })
  }

  if (num1>=0 && num2>0) {
    return  newArr.splice(num1, num2)
  } else {
    return newArr
  }
}

function sortBlogType(blogType, arr) {
  let newArr = []
  arr.forEach(item => {
    if(item.blog_type === blogType) {
      newArr.push(item)
    }
  })
  return newArr
}

/*axios*/

axios
  .get(BLOG_LIST) //取得部落格列表
  .then((response) => {
    let arr= []
    arr.push(...response.data.msg.original.lists.data)
    arr.forEach(item => {
      blog.blog_id = item.blog_id
      blog.blog_title = item.blog_title
      blog.blog_content = item.blog_content1
      blog.blog_type = item.blog_type_title
      blog.blog_online_date = item.blog_online_dsp
      blog.blog_img = item.blog_image1_dsp
      // console.log(blog)
      blogList.push(blog)
      blog = 
      {
        blog_id : 0,
        blog_type : '',
        blog_title : '',
        blog_content : '',
        blog_img : '',
        blog_online_date : ''
      }
    })
    // console.log('=====================')
    // console.log(blogList)
    // console.log(sortBLogNum(sortBlogType(blogTypeList[1], blogList), 1, 1))

  })
  .catch((err) => console.log(err))


axios //取得部落格資訊
  .get(BASE_URL + 'api/web/blog/blog/' + '2' + '?_method:GET')
  .then((response) => {
    // console.log(response.data.data.original.data)
    // console.log('=====================')
  })
  .catch((err) => console.log(err))

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

axios //取得廣告圖片列表
  .get(BANNER_LIST_IMG + '2')
  .then((response) => {
    // imgData  = JSON.parse(response.data.msg.original.lists)
    // getLatestBanner(imgData)
    // console.log(banner)
    // console.log(response)
    // console.log('==============================================')
  })
  .catch((err) => console.log(err))

axios //取得廣告文字列表
  .get(BANNER_LIST_TEXT + '2')
  .then((response) => {
     textData = JSON.parse(response.data.msg.original.lists)
    //  console.log(textData)
    //  console.log('==============================================')
  })
  
// axios
//   .get('https://kenblog.grazia.tw/api/web/blog/blog/2')
//   .then((response) => {
//     console.log(response.data.data.original.data)
//   })
//   .catch((err) => console.log(err))






  

  