// https://nodejs.dev/learn/get-http-request-body-data-using-nodejs
// https://www.youtube.com/watch?v=lGiv0zfdiJA&ab_channel=AfterAcademy
// https://www.dataversity.net/how-to-overcome-data-order-issues-in-apache-kafka/
// https://expressjs.com/en/guide/writing-middleware.html
// https://selvaganesh93.medium.com/how-node-js-middleware-works-d8e02a936113
// https://shivamethical.medium.com/design-patterns-in-javascript-node-2020-96c19e157428
// https://www.youtube.com/watch?v=GlybFFMXXmQ&ab_channel=TheNetNinja
// https://blog.sqreen.com/nodejs-security-best-practices/   important
// https://geshan.com.np/blog/2021/01/nodejs-express-helmet/
// https://www.youtube.com/watch?v=EI7sN1dDwcY&ab_channel=JavaBrains
// Buffer is an array of memory which is outside V8
// The goal of package-lock.json file is to keep track of the exact version of every package that is installed so that a product is 100% reproducible in the same way
// even if packages are updated by their maintainers.

//This solves a very specific problem that package.json left unsolved. In package.json you can set which versions you want to upgrade to (patch or minor), using the 
//semver notation, for example:

//if you write ~0.13.0, you want to only update patch releases: 0.13.1 is ok, but 0.14.0 is not.
//if you write ^0.13.0, you want to get updates that do not change the leftmost non-zero number: 0.13.1, 0.13.2 and so on. 
//If you write ^1.13.0, you will get patch and minor releases: 1.13.1, 1.14.0 and so on up to 2.0.0 but not 2.0.0.
//if you write 0.13.0, that is the exact version that will be used, always

// 00 ==> major version 
// 13 ===> minor version
// 00 ===> minor version

// npm ci vs. npm install
// npm install consider package.json it will update package-lock.json
// npm ci consider package-lock.json it don't update update package-lock.json.

//devDependencies: This property contains the names and versions of the node modules which are required only for development purposes like ESLint, JEST, babel etc.

//WSO2 is based on oAuth2 ==> Bearer token ===> Internally it will provide jwt token to use in microservices.
//Basic node js example with server and api's
//jwt token generation

process.on('uncaughtException', err => {
    console.error('There was an uncaught error', err)
    process.exit(1) //mandatory (as per the Node.js docs)
  })
  

//  REQUIRE	ES6 IMPORT AND EXPORT
//Require is Non-lexical, it stays where they have put the file.	Import is lexical, it gets sorted to the top of the file.
//It can be called at any time and place in the program.	        It can’t be called conditionally, it always run in the beginning of the file.
//You can directly run the code with require statement.	          To run a program containing import statement you have to use experimental module feature flag.
//If you want to use require module then you have to save file with ‘.js’ extension.	If you want to use import module then you have to save file with ‘.mjs’ extension.
//NOTE: You must note that you can’t use require and import at the same time in your node program and it is more preferred to use require instead of import as you are required to use the experimental module flag feature to run import program.


// Entry into a house (authentication) and what you can do while inside (authorization).