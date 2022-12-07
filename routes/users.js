const mongoose = require('mongoose')


const postSchema = mongoose.Schema({
  post: String,
  time: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('post', postSchema)