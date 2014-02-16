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
      pin: 'number'
  }

};
