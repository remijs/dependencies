# remi-dependencies

A remi hook to add dependencies to remi plugins

[![Dependency Status](https://david-dm.org/remijs/remi-dependencies/status.svg?style=flat)](https://david-dm.org/remijs/remi-dependencies)
[![Build Status](https://travis-ci.org/remijs/remi-dependencies.svg?branch=master)](https://travis-ci.org/remijs/remi-dependencies)
[![npm version](https://badge.fury.io/js/remi-dependencies.svg)](http://badge.fury.io/js/remi-dependencies)
[![Coverage Status](https://coveralls.io/repos/remijs/remi-dependencies/badge.svg?branch=master&service=github)](https://coveralls.io/github/remijs/remi-dependencies?branch=master)


## Installation

``` sh
npm install remi-dependencies
```


## Example Usage

``` js
const remi = require('remi')
const remiDependencies = require('remi-dependencies')

let app = {}
let registrator = remi(app)
registrator.hook(remiDependencies())
```

You can specify plugin dependencies in you attributes and remi-dependencies
will throw an error if the dependencies were not registered in time.

``` js
// main.js
module.exports = function(app, opts, next) {
  // ...
  next()
}
module.exports.attributes = {
  name: 'main',
}

// dependent.js
module.exports = function(app, opts, next) {
  // ...
  next()
}
module.exports.attributes = {
  name: 'dependent',
  dependencies: ['main'],
}

// if 'main' will be registered before 'dependent' then everything will be OK
registrator.register([main, dependent]).then(() => console.log('OK'))

// however, if dependent will be registered before main, an error will be thrown
registrator.register([dependent, main]).catch(err => console.error(err))
```


## License

MIT © [Zoltan Kochan](https://github.com/zkochan)
