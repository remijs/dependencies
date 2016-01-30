'use strict'
module.exports = function(next, target, plugin, cb) {
  plugin.dependencies = [].concat(plugin.dependencies || [])

  for (let dependency of plugin.dependencies) {
    if (!target.registrations[dependency]) {
      throw new Error('Plugin called ' + dependency +
        ' required by dependencies but wasn\'t registered')
    }
  }

  next(target, plugin, cb)
}
