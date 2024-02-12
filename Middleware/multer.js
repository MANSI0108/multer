const express = require('express');
const multer = require('multer');
const app = express();
app.use(express())


const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'../uploads');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'_'+file.originalname)
    }
})

export const upload = multer({
    storage,
})