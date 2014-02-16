/**
 * Patient
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	firstName:'string',
  	lastName:'string',
  	fullName:function() {
  		return this.firstName + " " + this.lastName;
  	},
  	history:'text',
  	bed:'string',
  	//returns boolean if they have a bed
  	inPatient:function() {
  		return !!this.bed;
  	}
  	pin:{
  		type:'integer',
  		required:true,
  		numeric:true
  	},
  	allergies:'array',
  	dob:'datetime'



  }

};
