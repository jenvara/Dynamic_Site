var Profile = require("./profile.js");




//Handle HTTP route GET / and POST / i.e. Home
function home(request, response) {

  //if url == "/" && GET
    //show search
     response.statusCode = 200;
     response.setHeader('Content-Type', 'text/plain');

     response.write("Header\n");


     response.write("Search\n");
     response.end("Footer\n");
  //if url == "/" && POST
    //redirect to /:username
}

//Handle HTTP route GET /:username i.e. /chalkers
function user(request, response) {
  //if url == "/...."
    var username = request.url.replace("/", "");
    if(username.length > 0) {
     response.statusCode = 200;
     response.setHeader('Content-Type', 'text/plain');
     response.write("Header\n");

     //get json from Treehouse     
     var studentProfile = new Profile(username);
     //on "end"
     studentProfile.on("end", function(profileJSON){
        //show profile

        //Store the values which we need
        var values = {
          avatarURl: profileJSON.gravatar_url,
          username: profileJSON.profile_name,
          badges: profileJSON.badges.length,
          javaScriptPoints: profileJSON.points.JavaScript
        }    
        //Simple response
        response.write(values.username + " has " + values.badges + "\n");
        response.end("Footer\n");
     });
     
    //on "error"

     studentProfile.on("error", function(error){
        //show error 
        response.end("Footer\n");
      });  

      }
}

module.exports.home = home;
module.exports.user = user;




