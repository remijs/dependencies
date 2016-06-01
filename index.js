'use strict'
module.exports = function() {
  return function(next, target, plugin, cb) {
    plugin.dependencies = [].concat(plugin.dependencies || [])

    for (var i = 0; i < plugin.dependencies.length; i++) {
      if (!target.registrations[plugin.dependencies[i]]) {
        throw new Error('Plugin called ' + plugin.dependencies[i] +
          ' required by dependencies of ' + plugin.name +
          " but wasn't registered")
      }
    }

    next.applySame()
  }
}
