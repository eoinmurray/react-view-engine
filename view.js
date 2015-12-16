var path = require('path')
function View(name, options){
	
	options.path = path.join(options.root, name)
	this.path = options.path
        this.root = options.root
	this.defaultEngine = options.defaultEngine
	this.engines = options.engines
//	return options
}
View.prototype.render = function(options, callback){
	this.defaultEngine(this.path, options, callback)
}
module.exports = View