node-directory
=========
A simple module to require all of the other paths in the current directory. A 
path is either a file or a directory.

Example
-------

As an example, this may be your index.js file in a directory that contains all 
of the plugins for your models. The call to directroy will require all of the 
other files in the current directory and apply them to your models.

```javascript

var directory = require('directory')

module.exports = function (models, options) {
  options = options || { debug:false }

  directory(function (module) {
    models.plugin(module, options)
  })

}

````

Installation
------------

    npm install directory --save


MIT License

