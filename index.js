
/*!
 * node-directory
 * Copyright(c) Thomas Blobaum
 * MIT Licensed
 */

module.exports = function modulate(dirname, callback) {
  callback = callback || dirname
  dirname = dirname || __dirname
  var paths = require('findit').sync(dirname)
  paths.forEach(function (path) {
    if (!path.match(module.parent.id)) callback(require(path))
  })
}

