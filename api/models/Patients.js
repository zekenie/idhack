/**
 * Patients
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	  master_id:'number',
      first: 'string',
      last:'string',
      name:function() {
      	return this.first + " " + this.last;
      },
      sex:'string',
      dob: {type:'date',required:true},
      address: 'string',
      phone:'string',
      height:'number',
      weight:'number',
      history: {type:'string', defaultsTo: ' '},
      bmi:function() {
      	return this.weight/(this.height*this.height);
      },
      bed: 'string',
      allergies: 'array',
      pin: 'number',
      user_id:'number',
      doc:function(cb) {
      	Users.find({id:this.user_id});
      },
      labs:function(cb) {
      	Labs.find({patient_id:this.id},cb);
      },
      vitals:function(cb) {
      	Vitals.find({patient_id:this.id},cb);
      },
      notes:function(cb) {
        Notes.find({patient_id:this.id}, cb);
      },
      perscriptions:function(cb) {
        Perscriptions.find({patient_id:this.id}, cb);
      }
  },
  beforeValidation:function(values,next) {
  	values.pin = parseInt(values.pin);
  	values.height = parseFloat(values.height);
  	values.weight = parseFloat(values.weight);
  	next();
  }

};
