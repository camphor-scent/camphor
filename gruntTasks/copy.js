'use strict'

module.exports = function(grunt){
	//Load task
	grunt.loadNpmTasks('grunt-contrib-copy');
	//options
    return {
        production : {
            files : [
                {   
                    expand: true, cwd : 'public/', 
                    src : ['bower_components/**/*', 'style/**/*','views/**/*', '!style/less/**/*'], 
                    dest : 'build/'
                },
            ]
        }
    }
}       