/**
 * PhotosController
 *
*/
var path = require('path');
var fs = require('fs');
module.exports = {
    create: function(req,res){
        var tempPath = req.files.file.path;
        //gets the name of the file from its path
        var photoName = tempPath.split('/')[tempPath.split('/').length-1];
        var targetPath = path.resolve('./assets/images/patientsimages/'+photoName);
        var photoObj = {
            description: req.body.description,
            //save the photoname so that photos could easily be moved to other directories and all that would need to change is the prefix before the image name
            path: photoName
        };
        fs.rename(tempPath, targetPath, function(err) {
            if (err) throw err;
            console.log("Upload completed!");
        });
        Photos.create(photoObj).done(function(err, doc){
            console.log(doc);
            res.redirect('/patient/read');
        });
        
    },


  _config: {}
};
