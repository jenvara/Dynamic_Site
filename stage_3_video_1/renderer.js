var fs = require("fs");
function view(templateName, values, response) {
	//Read from the template files
	fs.readFile('./views/' + templateName + '.html', function (error, fileContents) {
		if (error) throw error;
	//Insert values in to the conten


	//Write out to the response
		response.write(fileContents);
		});

}