const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
    {
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 2,
    },
    {
        title: 'React patterns',
        author: 'Michael Chan',
        url: 'https://reactpatterns.com/',
        likes: 10,
    }
]

const nonExistingLike = async () => {
    const blog = new Blog({ title: 'TDD harms architecture',
        author: 'Robert C. Martin',
        url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    })
    await blog.save()
    await blog.deleteOne()

    return blog.id.toString()
}

const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON() )
}

const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
}



module.exports = {
    initialBlogs, nonExistingLike, blogsInDb, usersInDb
}