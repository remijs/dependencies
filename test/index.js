'use strict'
var describe = require('mocha').describe
var it = require('mocha').it
var beforeEach = require('mocha').beforeEach
var expect = require('chai').expect
var remi = require('remi')
var remiDependencies = require('../')
var plugiator = require('plugiator')

describe('remi-dependencies', function() {
  var registrator = remi({})

  beforeEach(function() {
    registrator = remi({})
  })

  it('should not throw error if dependent plugin was registered', function() {
    registrator.hook(remiDependencies())

    var foo = plugiator.noop('foo')
    var bar = plugiator.noop({
      name: 'bar',
      dependencies: ['foo'],
    })

    return registrator.register([foo, bar])
  })

  it('should throw error if dependent plugin not present', function(done) {
    registrator.hook(remiDependencies())

    var plugin = plugiator.noop({
      name: 'plugin1',
      dependencies: ['foo'],
    })

    registrator.register(plugin).catch(function(err) {
      expect(err).to.be.an.instanceof(Error, 'Plugin called foo required by ' +
        "dependencies of plugin1 but wasn't registered")
      done()
    })
  })
})
