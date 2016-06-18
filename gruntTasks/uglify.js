'use strict'

module.exports = function(grunt){
	//Load task
	grunt.loadNpmTasks('grunt-contrib-uglify');
	//options
 	return {
        build: {
        	options : {
        		maxLineLen : 100,
        		mangle : false,
        		except : ['jQuery']
        	},
        	files : {
        		'build/js/app.js' : ['public/js/**/*.js']
        	}
        }

    }
}       