/* var http = require('http');
var dt = require(' ./Myfirstmodule');

http.createServer(function (req, res)  {
       res.writeHead(200, {'Content-Type' : 'text/html'});
       res.write(`The date and time are currently: ${dt.myDateTime()}`);
       res.end();
}).listen(8080); */

const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./myfile.txt', 'utf8')
const second = readFileSync('./myfile2.txt', 'utf8')

console.log(first)
console.log(second)