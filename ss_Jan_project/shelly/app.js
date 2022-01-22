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

// let blog = 
// {
//   blog_id : 0,
//   blog_type : '',
//   blog_title : '',
//   blog_content : '',
//   blog_img : '',
//   blog_online_date : '',
//   blog_show : 0,
//   blog_top : 0,
  // blog_content2: '',
  // blog_content3: '',
  // blog_content4: '',
  // blog_content5: '',
  // blog_content6: '',
  // blog_content7: '',
  // blog_content8: '',
  // blog_content9: '',
  // blog_content10: '',
  // blog_content11: '',
  // blog_content12: '',
  // blog_content13: '',
  // blog_content14: '',
  // blog_content15: '',
  // blog_content16: '',
  // blog_content17: '',
  // blog_content18: '',
  // blog_content19: '',
  // blog_content20: '',
  // blog_image2: '',
  // blog_image3: '',
  // blog_image4: '',
  // blog_image5: '',
  // blog_image6: '',
  // blog_image7: '',
  // blog_image8: '',
  // blog_image9: '',
  // blog_image10: '',
  // blog_image11: '',
  // blog_image12: '',
  // blog_image13: '',
  // blog_image14: '',
  // blog_image15: '',
  // blog_image16: '',
  // blog_image17: '',
  // blog_image18: '',
  // blog_image19: '',
  // blog_image20: '',
// }


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

// app.get('/:article_id', (req, res) => {
//   blog = 
// {
//   blog_id : 0,
//   blog_type : '',
//   blog_title : '',
//   blog_content : '',
//   blog_img : '',
//   blog_online_date : '',
//   blog_show : 0,
//   blog_top : 0,
  // blog_content2: '',
  // blog_content3: '',
  // blog_content4: '',
  // blog_content5: '',
  // blog_content6: '',
  // blog_content7: '',
  // blog_content8: '',
  // blog_content9: '',
  // blog_content10: '',
  // blog_content11: '',
  // blog_content12: '',
  // blog_content13: '',
  // blog_content14: '',
  // blog_content15: '',
  // blog_content16: '',
  // blog_content17: '',
  // blog_content18: '',
  // blog_content19: '',
  // blog_content20: '',
  // blog_image2: '',
  // blog_image3: '',
  // blog_image4: '',
  // blog_image5: '',
  // blog_image6: '',
  // blog_image7: '',
  // blog_image8: '',
  // blog_image9: '',
  // blog_image10: '',
  // blog_image11: '',
  // blog_image12: '',
  // blog_image13: '',
  // blog_image14: '',
  // blog_image15: '',
  // blog_image16: '',
  // blog_image17: '',
  // blog_image18: '',
  // blog_image19: '',
  // blog_image20: '',
// }
//   let id = req.params.article_id
//   console.log(id)
//   article = blogList.find(ele => ele.blog_id = id)
//   console.log(article)
//   console.log(article.blog_title)
//   console.log(article.blog_online_date)
//   console.log(article.blog_img)
//   console.log(article.blog_content)


//   res.render('article', { blog_title: article.blog_title,
//                           blog_date: article.blog_online_date,
//                           blog_image1: article.blog_img,
//                           blog_content1 : article.blog_content
//   })
// })

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
    // if (arr.some(ele => ele.blog_show === 1)) {
      arr.forEach(item => {
        if(item.blog_show_index_tag === 1) {
          blogs.push(item)
        }
      })
  // }
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
  // console.log(Array.from(blogList))
  return blogList
}

// axios
//   .get(BLOG_LIST) //取得部落格列表
//   .then((response) => {
//     let arr= []
//     arr.push(...response.data.msg.original.lists.data)
//     arr.forEach(item => {
//       blog.blog_id = item.blog_id
//       blog.blog_title = item.blog_title
//       blog.blog_content = item.blog_content1
//       blog.blog_type = item.blog_type_title
//       blog.blog_online_date = item.blog_online_dsp
//       blog.blog_img = item.blog_image1_dsp
//       blog.blog_show = item.blog_show_index_tag
//       blog.blog_top = item.blog_top_index_tag
//       blog.blog_content2 = item.blog_content2,
//       blog.blog_content3 = item.blog_content3,
//       blog.blog_content4 = item.blog_content4,
//       blog.blog_content5 = item.blog_content5,
//       blog.blog_content6 = item.blog_content6,
//       blog.blog_content7 = item.blog_content7,
//       blog.blog_content8 = item.blog_content8,
//       blog.blog_content9 = item.blog_content9,
//       blog.blog_content10 = item.blog_content10,
//       blog.blog_content11 = item.blog_content11,
//       blog.blog_content12 = item.blog_content12,
//       blog.blog_content13 = item.blog_content13,
//       blog.blog_content14 = item.blog_content14,
//       blog.blog_content15 = item.blog_content15,
//       blog.blog_content16 = item.blog_content16,
//       blog.blog_content17 = item.blog_content17,
//       blog.blog_content18 = item.blog_content18,
//       blog.blog_content19 = item.blog_content19,
//       blog.blog_content20 = item.blog_content20,
//       blog.blog_image2 = item.blog_image2_dsp,
//       blog.blog_image3 = item.blog_image3_dsp,
//       blog.blog_image4 = item.blog_image4_dsp,
//       blog.blog_image5 = item.blog_image5_dsp,
//       blog.blog_image6 = item.blog_image6_dsp,
//       blog.blog_image7 = item.blog_image7_dsp,
//       blog.blog_image8 = item.blog_image8_dsp,
//       blog.blog_image9 = item.blog_image9_dsp,
//       blog.blog_image10 = item.blog_image10_dsp,
//       blog.blog_image11 = item.blog_image11_dsp,
//       blog.blog_image12 = item.blog_image12_dsp,
//       blog.blog_image13 = item.blog_image13_dsp,
//       blog.blog_image14 = item.blog_image14_dsp,
//       blog.blog_image15 = item.blog_image15_dsp,
//       blog.blog_image16 = item.blog_image16_dsp,
//       blog.blog_image17 = item.blog_image17_dsp,
//       blog.blog_image18 = item.blog_image18_dsp,
//       blog.blog_image19 = item.blog_image19_dsp,
//       blog.blog_image20 = item.blog_image20_dsp,
//       // console.log(blog)
//       blogList.push(blog)
//       blog = 
//       {
//         blog_id : 0,
//         blog_type : '',
//         blog_title : '',
//         blog_content : '',
//         blog_img : '',
//         blog_online_date : '',
//         blog_show : 0,
//         blog_top : 0,
//         blog_content2: '',
//         blog_content3: '',
//         blog_content4: '',
//         blog_content5: '',
//         blog_content6: '',
//         blog_content7: '',
//         blog_content8: '',
//         blog_content9: '',
//         blog_content10: '',
//         blog_content11: '',
//         blog_content12: '',
//         blog_content13: '',
//         blog_content14: '',
//         blog_content15: '',
//         blog_content16: '',
//         blog_content17: '',
//         blog_content18: '',
//         blog_content19: '',
//         blog_content20: '',
//         blog_image2: '',
//         blog_image3: '',
//         blog_image4: '',
//         blog_image5: '',
//         blog_image6: '',
//         blog_image7: '',
//         blog_image8: '',
//         blog_image9: '',
//         blog_image10: '',
//         blog_image11: '',
//         blog_image12: '',
//         blog_image13: '',
//         blog_image14: '',
//         blog_image15: '',
//         blog_image16: '',
//         blog_image17: '',
//         blog_image18: '',
//         blog_image19: '',
//         blog_image20: '',
      // }
    // })
    // console.log('=====================')
    // console.log(blogList)
    // console.log(sortBLogNum(sortBlogType(blogTypeList[1], blogList), 1, 1))
    // console.log(theTopBlog())
    // blogList.sort(function (a, b) {
    //   return b.blog_id - a.blog_id
    // })
    // console.log(blogList) 

  // })
  // .catch((err) => console.log(err))


// axios //取得部落格資訊
//   .get(BASE_URL + 'api/web/blog/blog/' + '2' + '?_method:GET')
//   .then((response) => {
//     // console.log(response.data.data.original.data)
//     // console.log('=====================')
//   })
//   .catch((err) => console.log(err))

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








  

  