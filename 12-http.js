const http = require('http');

const server = http.createServer((req,res)=>{
console.log(req);
    if (req.url === '/') {
      res.write('welcome to our home page');
      res.end();  
    }

    if (req.url === '/about') {
      res.write('welcome to our about page');
      res.end('this is node cource');  
    }

    if (req.url ==='/contect') {
      res.end('9990908889');  
    }



    res.end(`
      <h1> Oops!</h1>
       <p>We can't seem to find the page</p>
      <a href='/'>Back Home Page</a>
    `)

})

server.listen(8000);


// const http = require('http');

// // Create a local server to receive data from
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'Hello World!'

//   }));
// });

// server.listen(8000);