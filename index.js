const express = require('express')
const dbconnect = require('./config/db')
const File= require('./models/file')
const multer = require('multer')
const file = require('./models/file')

const app = express()
const port = 5000

app.set("view engine","ejs")
app.use("/uploads",express.static("uploads"))

// multer storage setup
const storage = multer.diskStorage({
    destination:(req,file,cb)=>cb(null,"uploads/"),
    filename:(req,file,cb)=>cb(null,Date.now()+"-"+ file.originalname)
})
const upload = multer({storage:storage})

app.get('/',async(req,res)=>{
    const files = await File.find()
    console.log(files)
    res.render('index',{files})
})
app.post('/upload',upload.single("file"),async (req,res)=>{
    console.log(req.body)
    const file=new File({
        
        filename:req.file.filename,
        path:req.file.path,
        mimetpe:req.file.mimetype,
        filessize:req.file.size,
        username:req.username
    })
    await file.save()
    res.redirect('/')

})


app.listen(port,()=>{
    console.log("server start at port "+port)
})