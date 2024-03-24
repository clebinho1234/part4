const _ = require('lodash')

const dummy = (blogs) => {
    if(blogs) {
        return 1
    } else {
        return 0
    }
}

const totalLikes = (blogs) => {
    const reducer = (total, blog) => {
        return total + blog
    }

    if(blogs.lenght === 0) {
        return 0
    } else {
        const likesArray = blogs.map(blog => blog.likes)
        return likesArray.reduce(reducer, 0)
    }
}

const favoriteBlog = (blogs) => {
    let favoriteBlog

    blogs.forEach(blog => {
        if (!favoriteBlog || blog.likes > favoriteBlog.likes) {
            favoriteBlog = {
                title: blog.title,
                author: blog.author,
                likes: blog.likes
            }
        }
    })

    return favoriteBlog
        ? favoriteBlog
        : {}
}

const mostBlogs = (blogs) => {
    let mostBlogs
    const blogsPerAuthorObj = _.groupBy(blogs, 'author')
    const blogsPerAuthorArr = _.values(blogsPerAuthorObj)

    blogsPerAuthorArr.forEach(arr => {
        if(!mostBlogs || mostBlogs.blogs < arr.length) {
            mostBlogs = {
                author: arr[0].author,
                blogs: arr.length
            }
        }
    })

    return mostBlogs
        ? mostBlogs
        : {}
}

const mostLikes = (blogs) => {
    let mostBlogs
    const blogsPerAuthorObj = _.groupBy(blogs, 'author')
    const blogsPerAuthorArr = _.values(blogsPerAuthorObj)

    blogsPerAuthorArr.forEach(arr => {
        const authorLikes = totalLikes(arr)
        if(!mostBlogs || mostBlogs.likes < authorLikes) {
            mostBlogs = {
                author: arr[0].author,
                likes: authorLikes
            }
        }
    })

    return mostBlogs
        ? mostBlogs
        : {}
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}