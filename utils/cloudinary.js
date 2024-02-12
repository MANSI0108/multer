const express =  require("express")
const multer = require("multer")
const app = express()
const fs = require("fs")
app.use(express())

import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name:  process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


 const uploadOnCloudinary = async(localFilePath)=>{
    try{

        if(!localFilePath) return null

        //upload the file on cloudinary
       const response  =  await cloudinary.uploader.upload(localFilePath,{
            resource_type : "auto"
        })
        //file has been uploaded successfully
        console.log("file is uploaded on cloudinary",response.url)
        return response;
    }catch(err){
      fs.unlinkSync(localFilePath)
      //remove the locallly saved temporary file as the upload operation got faild

      return null;
    }
 } 


export{uploadOnCloudinary}

app.listen(3000,()=>{
    console.log("Connection done...")
    
})