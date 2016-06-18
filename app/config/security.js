var helmet = require('helmet');
var cors = require('cors');
var csurf = require('csurf');
/*
		SECURITY				Description                                       Default
	- contentSecurityPolicy     for setting Content Security Policy                 N
	- hidePoweredBy             to remove the X-Powered-By header                   Y
	- hpkp                      for HTTP Public Key Pinning                         N
	- hsts                      for HTTP Strict Transport Security                  Y
	- ieNoOpen                  sets X-Download-Options for IE8+                    Y
	- noCache                   to disable client-side caching                      Y
	- noSniff                   to keep clients from sniffing the MIME type         Y
	- frameguard                to prevent clickjacking                             Y
	- xssFilter                 adds some small XSS protections                     Y
	TODO :
	CORS
	csurf
*/


module.exports = function security(app){
	setHelmetProtection(app);	//has to come before cors
	setCorsProtection(app);
};


function setHelmetProtection(app){
	//for carpet style protection, use the line below
	// app.use(helmet());

	app.use(helmet.xssFilter());		//prevent cross site scripting
	//app.use(helmet.frameguard('deny'));	//no one can put this site in iframe
	
	var oneDayInMilliseconds = 1000 * 60 * 60 * 24;
	app.use(helmet.hsts({ maxAge: oneDayInMilliseconds }));	//force the website to be viewd in https only

	app.use(helmet.hidePoweredBy({ setTo : 'Adurs team'}));	//hide powered by express

	app.use(helmet.ieNoOpen());	//force ie to not open html in the context of our site

	app.use(helmet.noSniff());	//no browser sniffing on mimetypes

	app.use(helmet.noCache({ noEtag : true}));	//no server side caching

	//TODO : do more research on how to setup cps and public key pins
	// app.use(helmet.csp({	// Specify directives as normal 
	// 	defaultSrc: ["'self'", 'default.com'],
	// 	scriptSrc: ["'self'", "'unsafe-inline'"],
	// 	styleSrc: ['style.com'],
	// 	imgSrc: ['img.com', 'data:'],
	// 	sandbox: ['allow-forms', 'allow-scripts'],
	// 	reportUri: '/report-violation',

	// 	// Set to an empty array to allow nothing through 
	// 	objectSrc: [],

	// 	// Set to true if you only want browsers to report errors, not block them 
	// 	reportOnly: false,

	// 	// Set to true if you want to blindly set all headers: Content-Security-Policy, 
	// 	// X-WebKit-CSP, and X-Content-Security-Policy. 
	// 	setAllHeaders: false,

	// 	// Set to true if you want to disable CSP on Android. 
	// 	disableAndroid: false,

	// 	// Set to true if you want to force buggy CSP in Safari 5.1 and below. 
	// 	safari5: false
	// }));
	// app.use(helmet.publicKeyPins({
	// 	maxAge : oneDayInMilliseconds,
	// 	sha256s: ['AbCdEf123=', 'ZyXwVu456='],
	// }))
}

function setCorsProtection(app){
	//By default browsers it will not allow other website to access.
	//If you want to allow some websites, use config below
	// app.use(cors({
	// 	origin : "https://dev.com",
	// 	methods : ['GET','PUT','POST'],
	// 	credentials : true,
	// 	allowHeaders : ['Content-Type', 'Authorization']
	// }));	
}