'use strict'
const describe = require('mocha').describe
const it = require('mocha').it
const beforeEach = require('mocha').beforeEach
const expect = require('chai').expect
const remi = require('remi')
const remiDependencies = require('..')
const plugiator = require('plugiator')

describe('remi-dependencies', function() {
  let registrator = remi({})

  beforeEach(() => {
    registrator = remi({})
  })

  it('should not throw error if dependent plugin was registered', function() {
    registrator.hook(remiDependencies())

    const foo = plugiator.noop('foo')
    const bar = plugiator.noop({
      name: 'bar',
      dependencies: ['foo'],
    })

    return registrator.register([foo, bar])
  })

  it('should throw error if dependent plugin not present', function(done) {
    registrator.hook(remiDependencies())

    const plugin = plugiator.noop({
      name: 'plugin1',
      dependencies: ['foo'],
    })

    registrator.register(plugin).catch(err => {
      expect(err).to.be.an.instanceof(Error, 'Plugin called foo required by ' +
        "dependencies of plugin1 but wasn't registered")
      done()
    })
  })
})
