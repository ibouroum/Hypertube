const multer = require('multer')
const tools = require('../../tools/index');
var Jimp = require('jimp');



const checkFileType = (file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') cb(null, true)
  else cb(null, false)
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/images')
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toISOString() + file.originalname)
    },
  })
  const upload = multer({
    storage,
    fileFilter: function(req, file, cb){
      checkFileType(file, cb);
    }
  });

//app.post('/upload',upload.single('files'),(req,res) => {
  
 const checkPicture = (file) =>{
   //console.log(file)
  upload.single(file)

  if(tools.isEmpty(file)){
    return ('No file uploaded');
  }
  if(file.size === 0){
    return res.send('is not a file');
  }
      Jimp.read('./public/images/'+file.filename)
      .then(img => {
        return (true);
    })
    .catch(err => {
     
      return (false);
  });   
    
 }
  
  

module.exports = checkPicture;
