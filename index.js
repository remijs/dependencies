'use strict'
module.exports = () => {
  return (next, target, plugin, cb) => {
    plugin.dependencies = [].concat(plugin.dependencies || [])

    for (let dependency of plugin.dependencies) {
      if (!target.registrations[dependency]) {
        throw new Error('Plugin called ' + dependency +
          ' required by dependencies of ' + plugin.name +
          " but wasn't registered")
      }
    }

    next.applySame()
  }
}
