'use strict'
var path = require('path');

module.exports = function(grunt){
	//Load task
	grunt.loadNpmTasks('grunt-nodemon');
	//options
	return {
        dev: {
            options: {
                file: 'server',
                args: [],
                ignoredFiles: ['README.md', 'node_modules/**', '.DS_Store'],
                watchedExtensions: ['js'],
                watchedFolders: ['app', 'config'],
                debug: false,
                delayTime: 1,
                env: {
                    PORT: 8000
                },
                cwd: __dirname + '/../'
            }
        },
        exec: {
            options: {
                exec: 'less'
            }
        }
    }
}