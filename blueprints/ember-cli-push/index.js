/*jshint node:true*/
module.exports = {
  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall: function(options) {
     return this.addBowerPackageToProject('push.js');
  }
};
