const express =  require("express")
const multer = require("multer")
const app = express()
app.use(express())

//define storage for uploaded filess


//Initialize Multer with the storage configuration

const upload = multer({storage:storage});

app.post('/upload', upload.single('file'),(req,res)=>{
    res.send("file uploaded successfully...")
})

app.listen(3000,()=>{
    console.log("Connection done...")
    
})