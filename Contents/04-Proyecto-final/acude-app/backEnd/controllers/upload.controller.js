const multer = require('multer');
const cloudinary =  require ('cloudinary').v2;
const fs = require('fs');
const path =  require('path');

//Read cloudinary config info
const absoluteRoute = path.join(__dirname.replace('controllers', ''),'/config/lockup.json');
const cloudConfigInfo = fs.readFileSync(absoluteRoute);
const cloudConfig = JSON.parse(cloudConfigInfo); 

//Upload picture
exports.uploadImage = (req, res) => {
    {
        const storageConfig = multer.diskStorage(
            {
                destination: './uploads'
            }
        );
    
        const uploadImage = multer({"storage": storageConfig}).single('animalImage');
    
        uploadImage(req, res, (error) => {
            if(error) throw error;
    
            cloudinary.config({
                "cloud_name": cloudConfig["name"],
                "api_key": cloudConfig["key"],
                "api_secret": cloudConfig["secret"]
            });
    
            const filePath = req.file.path;
            
            const fileRandonName = Date.now();
    
            cloudinary.uploader.upload(
                filePath,
                {
                    public_id: `animals/${fileRandonName}`
                },
                (error, image) =>{
                    if (error) throw error;
                    fs.unlink(path.join(__dirname.replace('controllers', ''), filePath), error => {
                        if (error) throw error;
                        res.send(image);
                    });
                }
            );
        })
    }
};