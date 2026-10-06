
const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    username:String,
    filename:String,
    filessize:Number,
    path:String,
    mimetpe:String,
    uploadDate:{type:Date , default:Date.now}
})

module.exports = mongoose.model("File",fileSchema)