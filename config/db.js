const mongoose = require('mongoose')

const dbconnect = mongoose.connect('mongodb://127.0.0.1:27017/uploads').then(()=>{
    console.log("database connected successfully")
})

module.exports = dbconnect