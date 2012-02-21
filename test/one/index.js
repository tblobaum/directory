
require('directory')(function (fn, filename) {
  module.exports[filename] = fn
})

