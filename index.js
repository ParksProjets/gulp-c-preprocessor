/*

C Preprocessor for Gulp


© 2016 - Guillaume Gonnet
License GPLv3

*/

var through = require('through2');
var gutil = require('gulp-util');
var compiler = require('c-preprocessor');
var path = require('path');

var PluginError = gutil.PluginError;



module.exports = function(options) {

	return through.obj(function(file, enc, cb) {

		// Null file
		if (file.isNull())
			return cb(null, file);
 		
 		// Is the file is a stream: not supported
 		if (file.isStream())
 			return cb(new PluginError('gulp-c-preprocessor', 'Streams are not supported'));


 		// Options
 		options = options || {};
 		options.basePath = path.dirname(file.path) + '/';
 		options.filename = path.basename(file.path);

 		// Compile the code
		compiler.compile(file.contents.toString('utf8'), options, function(err, data) {

			if (err)
				return cb(new PluginError('gulp-c-preprocessor', err));

			file.contents = new Buffer(data);
			cb(null, file);
		});
	});
};
