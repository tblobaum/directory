node-directory
=========
A module to require all files and directories inside a directory.  By 
default requires all files in the current directory except itself, and maps 
them to a callback.

Example
-------

As an example, this may be your index.js file in a directory that contains all 
of the plugins for your models. The call to directory will require all of the 
other files in the current directory and loop through them.

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

Usage
-----

require('directory')([dirname,] callback)


MIT License

