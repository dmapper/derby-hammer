// Get templates from sibling derby folder (inside node_modules)
var templates = require('../derby/node_modules/derby-templates').templates;

var overrideElementOn = require('./elementOn');

module.exports = function(app, options) {

  overrideElementOn(templates.ElementOn);

};
