# Ember-cli-push

[![Build Status](https://travis-ci.org/lifeart/ember-cli-push.svg?branch=master)](https://travis-ci.org/lifeart/ember-cli-push) [![Ember Observer Score](https://emberobserver.com/badges/ember-cli-push-js.svg)](https://emberobserver.com/addons/ember-cli-push)

This is a simple service wrapper for [Push.js](http://nickersoft.github.io/push.js/) which allows you to easily create native cross-browser notifications.

To include in your project install the addon as usual

```bash
ember install ember-cli-push
```

Usage example:


```javaScript
import Ember from 'ember';

export default Ember.Controller.extend({
  push: Ember.inject.service(),
  actions: {
    sendPush() {
      this.get('push').create("Hello world!", {
        body: "How's it hangin'?",
        icon: '/assets/images/logo.png',
        timeout: 4000
      });
    }
  }
})
```

This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
# ember-cli-push
