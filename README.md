directory
=========
A simple module to require all of the other paths in the current directory. A 
path is either a file or a directory.

Installation
------------

    npm install directory --save


Example
-------


```javascript

var plugins = {}
  , directory = require('directory')

module.exports = function (Mongoose, options) {
  options = options || { debug:false }

  directory(__dirname, function (module) {
    Mongoose.plugin(module, options)
  })

}

````

MIT License

