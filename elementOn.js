HAMMER_EVENTS = ['hold', 'tap', 'doubletap', 'drag', 'dragstart', 'dragend',
  'dragup', 'dragdown', 'dragleft', 'dragright', 'swipe', 'swipeup',
  'swipedown', 'swipeleft', 'swiperight', 'transform', 'transformstart',
  'transformend', 'rotate', 'pinch', 'pinchin', 'pinchout', 'touch',
  'release', 'gesture'];

hammerEmit = function(context, element) {
  var Hammer = require('hammer');
  var expression = this.expression;
  Hammer(element).on(this.name, function elementOnListener(event) {
    var modelData = context.controller.model.data;
    modelData.$event = event;
    modelData.$element = element;
    var out = expression.apply(context);
    delete modelData.$event;
    delete modelData.$element;
    return out;
  }, false);
};

module.exports = function(ElementOn) {

  var defaultEmit = ElementOn.prototype.emit;

  ElementOn.prototype.emit = function() {
    if (HAMMER_EVENTS.indexOf(this.name) !== -1) {
      hammerEmit.apply(this, arguments);
    } else {
      defaultEmit.apply(this, arguments);
    }
  };

};