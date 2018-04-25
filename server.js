const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const port = process.argv[2] || 8080
// const router = express.Router()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/blog', (req, res) => {
    res.render('blog', {blogpost: blogs})
}
)

app.get('/blog/:blogid', (req, res) => {
      for(i=0; i<blogs.length; i++){
        if(blogs[i].id == req.params.blogid){
        res.render('post', {blogpost: blogs[i]})

        }
}
})

app.get('/addpost', (req, res) => {
  res.render('addpost')
})

app.post('/addpost', (req, res) => {
    const newBlog = req.body
    blogs.push(newBlog)
    res.json(blogs)
})


app.delete('/blog/:blogid', (req, res) => {
    res.send('Blogs')
}
)

let blogs = [
    {
      id: 'blog-title-1',
      title: 'Blog Title 1',
      summary: 'This is a blog summary.',
      content: 'This is the blog content',
      author: 'John Smith',
      created: 'February 5, 2018'
    },
    {
      id: 'blog-title-2',
      title: 'Blog Title 2',
      summary: 'This is a blog summary.',
      content: 'This is the blog content',
      author: 'John Smith',
      created: 'February 6, 2018'
    }
  ]


  function BlogPost(id, title, summary, content, author, created) {
    this.id = title.replace(/\s+/g, '-').toLowerCase();
    this.title = title;
    this.summary = summary;
    this.content = content;
    this.author = author;
    this.created = created;
}

var newestBlog = new BlogPost( '',"Blog Title 2", "Terrible Blog", "WORD", "NICK", "September");

console.log(blogs)
blogs.push(newestBlog)
console.log(blogs)










app.listen(port, () => {
    console.log(`Listening on ${port}`)
})