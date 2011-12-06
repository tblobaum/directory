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

directory(function (module) {
  mongoose.plugin(module, {})
})

````

MIT License

