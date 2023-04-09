const http = require('http')
const server = http.createServer(function (req,res) {
	res.write('hello from my server');
	res.end();
}).listen(3000)

console.log('Server is listening on port 3000');
