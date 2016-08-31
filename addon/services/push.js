import Ember from 'ember';

export default Ember.Service.extend({
  create() {
    return this.get('instance').create(...arguments);
  },
  clear() {
    return this.get('instance').clear(...arguments);
  },
  close() {
    return this.get('instance').close(...arguments);
  },
  count() {
    return this.get('instance').count(...arguments);
  },
  isSupported: Ember.computed(function () {
    return this.get('instance').isSupported;
  }),
  instance: Ember.computed(function () {
    return Push;
  })
});
