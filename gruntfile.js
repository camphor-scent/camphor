// require('grunt-config-dir')(grunt);

module.exports = function(grunt){
	grunt.initConfig({});	

	require('grunt-config-dir')(grunt, {
	    configDir: require('path').resolve('gruntTasks'),	//load tasks from gruntfile folder
	    fileExtensions: ['js']
	}, function(err){ grunt.log.error(err) });

	grunt.registerTask('default',['jshint','clean', 'less','concurrent:target']);
	grunt.registerTask('build',['clean', 'less','copy','uglify']);
}


