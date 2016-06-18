'use strict'

module.exports = function(grunt){
	//Load task
	grunt.loadNpmTasks('grunt-concurrent');
	//options
	return {
	    target: {
	        tasks: ['nodemon', 'watch'],
	        options: {
	            logConcurrentOutput: true
	        }
	    }
	}
}