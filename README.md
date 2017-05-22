# remi-dependencies

[![Greenkeeper badge](https://badges.greenkeeper.io/remijs/remi-dependencies.svg)](https://greenkeeper.io/)

> A remi hook to add dependencies to remi plugins

<!--@shields('npm', 'travis', 'coveralls')-->
[![npm version](https://img.shields.io/npm/v/remi-dependencies.svg)](https://www.npmjs.com/package/remi-dependencies) [![Build Status](https://img.shields.io/travis/remijs/remi-dependencies/master.svg)](https://travis-ci.org/remijs/remi-dependencies) [![Coverage Status](https://img.shields.io/coveralls/remijs/remi-dependencies/master.svg)](https://coveralls.io/r/remijs/remi-dependencies?branch=master)
<!--/@-->

## Installation

```sh
npm install --save remi remi-dependencies
```

## Example Usage

```js
const remi = require('remi')
const remiDependencies = require('remi-dependencies')

const app = {}
const registrator = remi(app)
registrator.hook(remiDependencies())
```

You can specify plugin dependencies in you attributes and remi-dependencies
will throw an error if the dependencies were not registered in time.

```js
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

[MIT](./LICENSE) © [Zoltan Kochan](http://kochan.io)

* * *

<!--@dependencies({ shield: true })-->
## <a name="dependencies">Dependencies</a> [![dependency status](https://img.shields.io/david/remijs/remi-dependencies/master.svg)](https://david-dm.org/remijs/remi-dependencies/master)

None
<!--/@-->

<!--@devDependencies({ shield: true })-->
## <a name="dev-dependencies">Dev Dependencies</a> [![devDependency status](https://img.shields.io/david/dev/remijs/remi-dependencies/master.svg)](https://david-dm.org/remijs/remi-dependencies/master#info=devDependencies)

- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [istanbul](https://github.com/gotwarlost/istanbul): Yet another JS code coverage tool that computes statement, line, function and branch coverage with module loader hooks to transparently add coverage when running tests. Supports all JS coverage use cases including unit tests, server side functional tests
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [mos](https://github.com/mosjs/mos): A pluggable module that injects content into your markdown files via hidden JavaScript snippets
- [mos-plugin-readme](https://github.com/mosjs/mos-plugin-readme): A mos plugin for generating README
- [plugiator](https://github.com/zkochan/plugiator): hapi plugins creator
- [remi](https://github.com/remijs/remi): A plugin registrator.

<!--/@-->
