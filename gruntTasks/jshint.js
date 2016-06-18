'use strict'

/*
	Setting jshint code correction. For more detail, see http://jshint.com/docs/options/
*/
module.exports = function(grunt){
	//Load task
	grunt.loadNpmTasks('grunt-contrib-jshint');
	//options
	return {
		files: ['app.js','server.js','public/gruntTasks/**/*.js','public/js/app.js', 'app/**/*.js', 'tests/**/*.js'],
		//list of all possible options, to add specific option, add warning code with boolen value. i.e  "-W099" : true	 will supppress warning about require function
		options : {
			//Enforcing options. When set to true, these options will make JSHint produce more warnings about your code.
			bitwise : true,
			camelcase : false,
			curly : true,
			eqeqeq : true,
			es3 : true,			
			forin : true,				//prevent accidental use of inheritance properties in Object
			freeze : true,
			funcscope : true,
			futurehostile : true,			
			immed : true,							
			iterator : true,			//Per documentation, not all browsers support this so be careful
			latedef : "nofunc",			//allow function hoisting only			
			maxdepth : 2,			
			maxlen : 200,
			maxparams : 5,			
			newcap : true,
			nocomma : true,
			noempty : true,
			nonbsp : true,
			nonew : true,
			notypeof : false,		//check if typeof is compred against possible values			
			// quotmark : true,			//possible values : true/"single"/"double"
			shadow : "outer",
			singleGroups : true,
			strict : false,
			undef : true,			
			// unused : true,			//should be used but will need other code revisit			


			//Relaxing options. When set to true, these options will make JSHint produce fewer warnings about your code.			
			asi : false,
			boss : false,
			debug : false,
			elision : false,
			eqnull : true,			
			evil : false,
			expr : false,
			globalstrict : false,
			lastsemic : false,
			laxbreak : false,
			laxcomma : false,
			loopfunc : false,			
			multistr : true,
			noyield : false,
			plusplus : false,
			proto : false,
			scripturl : false,
			sub : true,
			supernew : false,
			validthis : true,
			withstmt : false,


			//Environments and Tools. These options let JSHint know about some pre-defined global variables
			//from wide variety of tools.
			browser : true,
			browserify : false,
			couch : false,
			devel : false,
			dojo : false,
			jasmine : false,
			jquery : false,
			mocha : true,
			module : false,
			mootools : false,
			node : true,
			nonstandard : false,
			phantom : false,
			prototypejs : false,
			qunit : false,
			rhino : false,
			shelljs : false,
			typed : false,
			worker : false,
			wsh : false,
			yui : false,
			globals : {	//used in conjunction with environment variables above
				"angular" : true,
				"JSON":true,
				"$":true
			},
			"-W024" : true

		}

	}
}