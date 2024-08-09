const http = require('http')

const server =  http.createServer((req,res)=>{
const url = req.url;
// homepage
if(url === '/'){
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>Home Page </h1>')
    res.end()
}
// about us page 
else if (url == '/about'){
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>Welcome to about us page</h1>')
    res.end()
}
// page not found
else {
    res.writeHead(400,{'content-type':'text/html'})
    res.write('<h1>Page Not Found</h1>')
    res.end()
}
    
})


server.listen(5000);
