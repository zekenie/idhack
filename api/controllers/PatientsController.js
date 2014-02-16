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
    new: function(req, res){
        res.render('patient/new.ejs');
    },
    read:function(req,res) {
    	Patients.findOne({id:req.params.id}).done(function(err,patient) {
            console.log(patient);
            res.render("patient/read.ejs",{patient:patient});
    	});
    },
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
	photo:function(req,res) {
		console.log('fo')
		// res.render("patient/photo.ejs",{});
	},



  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to PatientsController)
   */
  _config: {}


};
