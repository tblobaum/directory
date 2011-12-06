node-directory
=========
A simple module to require all of the other paths in the current directory. A 
path is either a file or a directory.

Installation
------------

    npm install directory --save


Example
-------


```javascript

var directory = require('directory')

module.exports = function (mongoose, options) {
  options = options || { debug:false }

  directory(__dirname, function (module) {
    mongoose.plugin(module, options)
  })

}

````

MIT License

