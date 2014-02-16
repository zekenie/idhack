/**
 * Vitals
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	patient_id:'number',
  	systolic:'number',
  	diastolic:'number',
  	bp:function() {
  		return this.systolic + '/' + this.diastolic;
  	},
  	hr:'number',
  	temp:'number',
  	spo:'number'

  	/* e.g.
  	nickname: 'string'
  	*/

  },
  beforeValidation:function(values,next) {
  	for(key	 in values) {
  		values[key] = parseFloat(values[key]);
  	}
  	next();
  }

};
