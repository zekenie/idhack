/**
 * Labs
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
      patient_id: 'integer',
      na:'number',
      k:'number',
      cl:'number',
      hco3:'number',
      bun:'number',
      creatinine:'number',
      glucose:'number'
  },

  beforeValidation:function(values,next) {
  	// values.pin = parseInt(values.pin);
  	// values.height = parseFloat(values.height);
  	// values.weight = parseFloat(values.weight);
  	for(key in values) {
  		values[key] = parseFloat(values[key]);
  	}
  	next();
  }
};
