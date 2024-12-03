//Reading the demofile.html
/* var http = require('http');
var fs = require('fs');

http.createServer(function (req, res)  {
    fs.readFile('demofile.html', function(err, data) {
       res.writeHead(200, {'Content-Type' : 'text/html'});
       res.write(data);
       res.end();
    });
}).listen(8090); */ 

/* var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {

       var q = url.parse(req.url, true);
       var filename = " . " + q.pathname;

   fs.readFile(filename , function(err, data) {
       if (err) {
              res.writeHead(404, {'Content-Type' : 'text/html'});
              return res.end('404 Not Found');
       }
   res.writeHead(200, {'ContentType' : 'text/html'});
   res.write(data)
   return res.end();
   })
}).listen(8090); */

/* var http = require('http');
var fs = require('fs');

http.createServer(function (_req, res) {

     var rs = fs.createReadStream('./myfile.txt');
     rs.on('open', function() {
         console.log('The file is open');
     });
    
res.writeHead(200, {'Content-Type' : 'text/html'});
res.end();
}).listen(8090);*/

var http = require('http');
var formidable = require('formidable');

http.createServer((_req, res) => {
  if (_req.url == '/fileupload'){
      var form = new formidable.IncomingForm();
      form.parse(_req, (_err, _fields, _files) => {
              res.write('File uploaded');
              res.end();
          });
} else {
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write('<form action="fileupload" method ="post" enctype="multipart/form-data>"');
    res.write('<input type="file" name="filetoupload><br>"');
    res.write('<input type="submit">');
    res.write('</form>');
 }
}).listen(8090);


/* var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kunjemkenzo500@gmail.com',
        pass: 'galaxy2017'
    }
});

var mailOptions = {
    from: 'kunjemkenzo500@gmail.com',
    to: 'Shanabakal@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Laide fille!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
        console.log(error);
    } else {
        console.log('Email sent:' + info.response);
    }
    }); */

    const Yann = 'Yann'
    const Shana = 'Shana'

    module.exports = {Yann, Shana}