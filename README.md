# This addon suspended, try [ember-cli-pushjs](https://github.com/devotox/ember-cli-pushjs)

# Ember-cli-push

[![Build Status](https://travis-ci.org/lifeart/ember-cli-push.svg?branch=master)](https://travis-ci.org/lifeart/ember-cli-push) [![Ember Observer Score](https://emberobserver.com/badges/ember-cli-push.svg)](https://emberobserver.com/addons/ember-cli-push)
[![Code Climate](https://codeclimate.com/github/lifeart/ember-cli-push/badges/gpa.svg)](https://codeclimate.com/github/lifeart/ember-cli-push)
[![npm version](https://badge.fury.io/js/ember-cli-push.svg)](https://badge.fury.io/js/ember-cli-push)

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

[Short description of the addon.]

Installation
------------------------------------------------------------------------------

```
ember install my-addon
```


Usage
------------------------------------------------------------------------------

[Longer description of how to use the addon in apps.]


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd my-addon`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
