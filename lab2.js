/*
*Name:Cameron Demooy
*Date:September 30th,2015
*Purpose:It's supposed to calculate  x and y values based on the method
*/
//getting the http so browser can run
var http = require('http');

//getting the  url library so it can parse a querystring value
var url = require('url');

//Creates the Server
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text-plain' });
    
	//get the total from the x and y query strings
     var qs = url.parse(req.url, true).query;
     var method;
	 method = qs.method;
	 var x = parseFloat(qs.x);
	 var y = parseFloat(qs.y);
	
	 
	 //addition
	 if (qs.method == 'add');
	 {
	 var total = x + y;
	 res.write(x + ' + ' + y +' = ' + total);
	 }
	 
	 /*
	 //subtraction
	 var total = x - y;
	 res.write(x + ' - ' + y +' = ' + total);
	 
	 //multiply
	 var total = x * y;
	 res.write(x + ' * ' + y +' = ' + total);
	 
	 //divide
	 var total = x / y;
	 res.write(x + ' / ' + y +' = ' + total);
	*/ 
	


 res.end();
}).listen(3000);



//url: http://localhost:3000/lab2.js?
console.log('Site is now running in  http://localhost:3000/lab2.js')
