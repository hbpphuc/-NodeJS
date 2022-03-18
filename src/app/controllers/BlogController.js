const { mongooseToObject } = require("../../util/mongoose")
const Blog = require("../models/Blog")

class BlogsController {
    //[GET] blogs/:slug
    show(req, res, next) {
        Blog.findOne({ slug: req.params.slug })
            .then((blog) =>
                res.render("blogs/show", { blog: mongooseToObject(blog) })
            )
            .catch(next)
    }

    //[GET] /course/create
    create(req, res, next) {
        res.render("blogs/create")
    }

    //[POST] /course/store
    store(req, res, next) {
        const blog = new Blog(req.body)
        Blog.create(blog)
            .then(() => res.redirect("/me/stored/blogs"))
            .catch(next)
    }

    //[GET] /course/:id/edit
    edit(req, res, next) {
        Blog.findById(req.params.id)
            .then((blog) =>
                res.render("blogs/edit", { blog: mongooseToObject(blog) })
            )
            .catch(next)
    }

    //[PUT] /course/:id
    update(req, res, next) {
        Blog.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/blogs/'))
            .catch(next)
    }

    //[DELETE] /course/:id
    delete(req, res, next) {
        Blog.delete({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[DELETE] /course/:id/force
    forceDestroy(req, res, next) {
        Blog.deleteOne({ _id: req.params.id })
            .then(() => res.redirect("back"))
            .catch(next)
    }

    //[PATCH] /courses/:id/restore
    restore(req, res, next) {
        Blog.restore({ _id: req.params.id })
            .then(() => res.redirect("back"))
            .catch(next)
    }
}

module.exports = new BlogsController()
