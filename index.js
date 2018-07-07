'use strict';

module.exports = {
  name: 'ember-cli-push',

  isDevelopingAddon: function() {
    return true;
  },

  included: function(app, parentAddon) {
    app.import(app.bowerDirectory + '/push.js/push.js');
    var target = (parentAddon || app);
    target.options = target.options || {};
    target.options.babel = target.options.babel || { includePolyfill: true };
    return this._super.included(target);
  }
};
