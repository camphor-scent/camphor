'use strict'

module.exports = function(grunt){
	//Load task
	grunt.loadNpmTasks('grunt-contrib-clean');
	//options
	return {
        build: {
            src: ["build/*"]
        }
    }
}       