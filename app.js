const http=require('http');
const dotenv = require('dotenv');
const config=require('./config');

dotenv.config();

const hostname=config.app.hostname|| process.env.host;
const port=config.app.port || process.env.port;


console.log ('Hostname :' + hostname);

const server=http.createServer((req,res) => {
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end("Hello World\n");
});


server.listen(port,hostname,() =>{
    console.log('Server running at http://'+hostname+':'+port +'/');
});