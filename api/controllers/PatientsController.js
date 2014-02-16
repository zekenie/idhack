/**
 * PatientsController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
	create: function(req,res,next) {
		Patients.create(req.body,function(err,patient) {
			if(err) return console.log(err);
            res.redirect('/patients/read/' + patient.id);
		});
	},
    new: function(req, res){
        res.render('patient/new.ejs');
    },
    read:
        function(req,res,next) {
            if(isNaN(parseInt(req.params.id)))
                return res.send(404);
    	    Patients.findOne({id:req.params.id}).done(function(err,patient) {
    	    	Photos.findOne({patient_id:req.params.id}).done(function(err,photo) {
	                res.render("patient/read.ejs",{patient:patient,photo:photo});
    	    	});
    	    });
        }
    ,
    index:function(req,res,next) {
    	var query = {};
    	if(req.query.q) {
    		query = {first:{contains:req.query.q}};
    	}
    	Patients.find(query).done(function(err,patients) {
    		if(err) return next(err)
    		res.render("patient/index.ejs",{patients:patients});
    	});
	},



  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to PatientsController)
   */
  _config: {}


};
