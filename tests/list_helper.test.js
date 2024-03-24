const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('./list_helper')

test('dummy returns one', () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    assert.strictEqual(result, 1)
})

describe('total likes', () => {
    const listWithOneBlog = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            likes: 5,
            __v: 0
        }
    ]

    const listWithBlogs = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            likes: 2,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234f219a',
            title: 'React patterns',
            author: 'Michael Chan',
            url: 'https://reactpatterns.com/',
            likes: 3,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234a31d7',
            title: 'First class tests',
            author: 'Robert C. Martin',
            url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
            likes: 10,
            __v: 0
        },
    ]

    test('of empty list is zero', () => {
        const result = listHelper.totalLikes([])
        assert.strictEqual(result, 0)
    })

    test('when list has only one blog, equals the likes of that', () => {
        const result = listHelper.totalLikes(listWithOneBlog)
        assert.strictEqual(result, 5)
    })

    test('of a bigger list is calculated right', () => {
        const result = listHelper.totalLikes(listWithBlogs)
        assert.strictEqual(result, 15)
    })
})

describe('favorite blog', () => {
    const listWithOneFavoriteBlog = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            likes: 2,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234f219a',
            title: 'React patterns',
            author: 'Michael Chan',
            url: 'https://reactpatterns.com/',
            likes: 3,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234a31d7',
            title: 'First class tests',
            author: 'Robert C. Martin',
            url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
            likes: 10,
            __v: 0
        }
    ]

    const listWithFavoriteBlogs = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            likes: 2,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234f219a',
            title: 'React patterns',
            author: 'Michael Chan',
            url: 'https://reactpatterns.com/',
            likes: 10,
            __v: 0
        },
        {
            _id: '5a422ba71b54a676234d17fb',
            title: 'TDD harms architecture',
            author: 'Robert C. Martin',
            url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
            likes: 0,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234a31d7',
            title: 'First class tests',
            author: 'Robert C. Martin',
            url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
            likes: 10,
            __v: 0
        }
    ]

    test('of empty list is an empty blog', () => {
        const result = listHelper.favoriteBlog([])
        assert.deepStrictEqual(result, {})
    })

    test('when list has only one favorite blog, equals to that favorite blog', () => {
        const result = listHelper.favoriteBlog(listWithOneFavoriteBlog)
        const expectedResult = {
            title: 'First class tests',
            author: 'Robert C. Martin',
            likes: 10
        }
        assert.deepStrictEqual(result, expectedResult)
    })

    test('when list has mote than one favorite blog, equals to the first favorite blog that appear', () => {
        const result = listHelper.favoriteBlog(listWithFavoriteBlogs)
        const expectedResult = {
            title: 'React patterns',
            author: 'Michael Chan',
            likes: 10
        }
        assert.deepStrictEqual(result, expectedResult)
    })
})

describe('blogs per author', () => {
    const blogs = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            likes: 2,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234f219a',
            title: 'React patterns',
            author: 'Michael Chan',
            url: 'https://reactpatterns.com/',
            likes: 10,
            __v: 0
        },
        {
            _id: '5a422ba71b54a676234d17fb',
            title: 'TDD harms architecture',
            author: 'Robert C. Martin',
            url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
            likes: 0,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234a31d7',
            title: 'First class tests',
            author: 'Robert C. Martin',
            url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
            likes: 10,
            __v: 0
        }
    ]

    test('when list has one or more authors with blogs posted, equals to the first author with more blogs posted', () => {
        const result = listHelper.mostBlogs(blogs)
        const expectedResult = {
            author: 'Robert C. Martin',
            blogs: 2
        }
        assert.deepStrictEqual(result, expectedResult)
    })

    test('when list has one or more authors with blogs posted, equals to the first author with more total likes', () => {
        const result = listHelper.mostLikes(blogs)
        const expectedResult = {
            author: 'Michael Chan',
            likes: 10
        }
        assert.deepStrictEqual(result, expectedResult)
    })
})