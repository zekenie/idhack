/**
 * PhotosController
 *
*/
var path = require('path');
var fs = require('fs');

var getPhotoBuffer = function(dataUrl) {
    var regex = /^data:.+\/(.+);base64,(.*)$/;
    var matches = dataUrl.match(regex);
    var ext = matches[1];
    var data = matches[2];
    return new Buffer(data, 'base64');
}

module.exports = {
    create: function(req,res,next){
        var buffer = getPhotoBuffer(req.body.file);
        var photoPath = "/images/patientsimages/" + req.body.patient_id + "_" + Date.now() + ".png";
        fs.writeFile("./assets" + photoPath,buffer,function(err,status) {
            if(err) return next(err)
            var photoObj = {
                patient_id:req.body.patient_id,
                description: req.body.description || "",
                //save the photoname so that photos could easily be moved to other directories and all that would need to change is the prefix before the image name
                path: photoPath
            };
            Photos.create(photoObj).done(function(err, doc){
                if(err) return next(err)
                res.json(doc);
            });
        });
    },

  _config: {}
};