const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/my_blog_dev')
        console.log('connect success');
    } catch (error) {
        console.log('connect failure');
    }
}
module.exports = { connect }