/**
 * Patients
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
      first: 'string',
      last:'string',
      name:function() {
      	return this.first + " " + this.last;
      },
      dob: {type:'date',required:true},
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
      }
      // getUsers:function(query,cb) {
      // 	Patient_users.find()
      // 	.where({user_id:this.id})
      // 	.where(query || {}).exec(cb);
      // },
      // getDocs:function(cb) {

      // }
  }

};
