const res = require('express/lib/response')
const {
    mongooseToObject,
    mutipleMongooseToObject,
} = require('../../util/mongoose')

const Course = require('../models/Cource')
const Blog = require('../models/Blog')

class MeController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) =>
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: mutipleMongooseToObject(courses),
                })
            )
            .catch(next)
    }

    //[GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) =>
                res.render('me/trash-courses', {
                    courses: mutipleMongooseToObject(courses),
                })
            )
            .catch(next)
    }

    //[GET] /me/stored/blogs
    storedBlogs(req, res, next) {
        Promise.all([Blog.find(), Blog.countDocumentsDeleted({})])
            .then(([blogs, deletedCount]) => {
                res.render('me/stored-blogs', {
                    deletedCount,
                    blogs: mutipleMongooseToObject(blogs),
                })
            })
            .catch(next)
    }

    //[GET] /me/trash/blogs
    trashBlogs(req, res, next) {
        Blog.findDeleted({})
            .then((blogs) =>
                res.render('me/trash-blogs', {
                    blogs: mutipleMongooseToObject(blogs),
                })
            )
            .catch(next)
    }
}

module.exports = new MeController()
