const newsRouter = require('./news')
const siteRouter = require('./site')
const coursesRouter = require('./courses')
const blogsRouter = require('./blogs')
const meRouter = require('./me')



function route(app) {    
    app.use('/news', newsRouter)
    app.use('/courses', coursesRouter)
    app.use('/blogs', blogsRouter)
    app.use('/me', meRouter)
    
    app.use('/', siteRouter)
}

module.exports = route