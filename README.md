Camphor
========

Code base uses : 
   - Angular2 Typescript, 
   - Gulp for build, compile and install
   - Express & Node on server

Install Nodejs

Fork the repository to your local system

Navigate to project folder using Command Line

Run the command, to add all dependencies in package.json in node_modules
  npm install

# Install typings
  npm install --global typings

#Install Gulp
  npm install -g gulp

[PostInstall step in package.json script already has the command to do the same.]

~~Navigate to /server and run the command~~
 ~~typings install~~

~~Navigate to /client and run the command~~
  ~~typings install~~

#Run the project
Run the command from root directory
  gulp build
Run the command 
  npm start

http://localhost:3000


#Files
tscofig.json - Tells out typescript compiler how to complie our .ts extension files
typings.json - to manage and install TypeScript definitions
gulpfile.ts - task management
tslint.json - checks for best practices in code
=======
##GIT USAGE:
Please refer to below document for GIT fork steps:
https://docs.google.com/document/d/1szKGDUHVQlEksSBwkRiuy_alpNH1vtvY92hUclK9DlI/edit
