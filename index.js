// Get derby-templates from derby (inside the same or upper node_modules)
var templates = require('derby/node_modules/derby-templates').templates;

var overrideElementOn = require('./elementOn');

module.exports = function(app, options) {

  overrideElementOn(templates.ElementOn);

};
