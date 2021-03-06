var router = require("./router.js")
//Problem: We need a simple way to look at a user's badge count and JavaScript point from a web browser
//Solution: Use Node.js to perform the profile look ups and server our template via HTTP

//1. Create a web server
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  router.home(request, response);
  router.user(request, response);
   
 });

console.log('Server running at http://<workspace-url>/');



//4. Function that handles the reading of files and merge in value
  // read from file and get a string
    // merge values in to string