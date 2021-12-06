const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/project')

const postSchema = mongoose.Schema({
  post: String,
  time: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('post', postSchema)