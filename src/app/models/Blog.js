const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema
        
const Blog = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    image: {type: String},
    timereading: {type: String},
    slug: { type: String, slug: "title", unique: true },
    deletedAt: {},
}, {timestamps: true})

//Add plugin
mongoose.plugin(slug)
Blog.plugin(mongooseDelete, { overrideMethods: 'all' })

module.exports = mongoose.model('Blog', Blog)