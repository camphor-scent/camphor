'use strict'

module.exports = function(grunt){
	//Load task
	grunt.loadNpmTasks('grunt-contrib-watch');
	//options
	return {
        html: {
            files: ['public/views/**'],
            options: {
                livereload: true
            }
        },
        js: {
            files: ['public/js/app.js'],
            tasks: ['clean','uglify'],
            options: {
                livereload: true
            }

        },
        less: {
            files: ['public/style/less/**'],
            tasks: ['less'],
            options: {
                livereload: true
            }
        }
    }
}