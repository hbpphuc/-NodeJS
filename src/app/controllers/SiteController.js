const res = require("express/lib/response")
const { mutipleMongooseToObject } = require('../../util/mongoose')

const Course = require('../models/Cource')
const Blog = require('../models/Blog')

class SiteController {

    //[GET] /
    index(req, res, next) {
        Promise.all([Course.find(), Blog.find()])
            .then(([courses, blogs]) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                    blogs: mutipleMongooseToObject(blogs)
                })
            })
            .catch(next)
    }

    //[GET] /search
    search(req, res) {
        res.render('search')
    }
}


module.exports = new SiteController