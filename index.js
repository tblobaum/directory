
/*!
 * node-directory
 * Copyright(c) Thomas Blobaum
 * MIT Licensed
 */

module.exports = function modulate(dirname, callback) {
  callback = callback || dirname
  dirname = dirname || module.parent.paths[0].split("node_modules")[0]
  var paths = require('findit').sync(dirname)
  paths.forEach(function (path) {
    if (!path.match(module.parent.id)) callback(require(path))
  })
}

