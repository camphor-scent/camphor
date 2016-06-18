'use strict'

module.exports = function(grunt){
	//Load task
	grunt.loadNpmTasks('grunt-contrib-less');
	//options
    return {
        options: {
            compact : true
        },
        // target name
        files: {
            // no need for files, the config below should work
            expand: true,
            cwd:    "public/style/less",
            src:    "style.less",
            dest:   "public/style/css",
            ext:    ".css"
        }
    }
}       